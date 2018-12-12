import { FirebaseService } from './../../service/firebaseService';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, normalizeURL } from 'ionic-angular';
import { NgForm, FormControl, Validators, FormGroup } from '@angular/forms';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase, { storage } from 'firebase';
import {ImagePicker} from '@ionic-native/image-picker';
import {Crop} from '@ionic-native/crop';
// import firebase = require('firebase');

/**
 * Generated class for the VendorFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vendor-form',
  templateUrl: 'vendor-form.html',
})
export class VendorFormPage implements OnInit{

  // masks: any;

  // vendorName: new FormControl('', Validators.required);

  // phoneNumber:any = "";

  items:['Foods', 'Drinks', 'Equipments', 'Services', 'Events', 'Others']

  registerVendorForm: FormGroup;
  imageURI:any;
  imageFileName:any;
  firebaseService: FirebaseService;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private transfer: FileTransfer,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public imagePicker: ImagePicker,
    public cropService: Crop) {

  }
  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.initializeForm();
  }

  private initializeForm(){
    this.registerVendorForm = new FormGroup({
      uVendorname: new FormControl(null, Validators.required),
      uVendorDesc: new FormControl(null, Validators.compose([
        Validators.required, Validators.minLength(10), Validators.maxLength(1000)
      ])),
      uVendorContact: new FormControl(null,Validators.compose([
        Validators.required, Validators.pattern('^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$')
      ])),
      uVendorCategory: new FormControl(null, Validators.required),
      uVendorAddress: new FormControl(null, Validators.required),
      uVendorPhoto: new FormControl(null)
    });
  }

  onSubmit(){

  }

  async takePhoto(){
    try{
      const options: CameraOptions = {
        quality: 50,
        targetHeight: 600,
        targetWidth: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }

      const result = await this.camera.getPicture(options);

      const image = 'data:image/jpeg; base64, ${result}';

      const pictures = storage().ref('pictures');
      pictures.putString(image,'data_url');
    }catch(e){
      console.error(e);
    }
  }
  addImage(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }
  // registerVendor(form: NgForm){
  //   console.log(form.value);
  // }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VendorFormPage');
  }

  // sumber
  // https://ionicthemes.com/tutorials/about/ionic-firebase-image-upload
  // ada pada firebaseService.ts

  uploadImageToFirebase(image){
    image = normalizeURL(image);

    //uploads img to firebase storage
    this.firebaseService.uploadImage(image)
    .then(photoURL => {

      let toast = this.toastCtrl.create({
        message: 'Image was updated successfully',
        duration: 3000
      });
      toast.present();
      })
    }

  // openImagePicker(){
  //   this.imagePicker.hasReadPermission().then(
  //     (result) => {
  //       if(result == false){
  //         // no callbacks required as this opens a popup which returns async
  //         this.imagePicker.requestReadPermission();
  //       }
  //       else if(result == true){
  //         this.imagePicker.getPictures({
  //           maximumImagesCount: 1
  //         }).then(
  //           (results) => {
  //             for (var i = 0; i < results.length; i++) {
  //               this.uploadImageToFirebase(results[i]);
  //             }
  //           }, (err) => console.log(err)
  //         );
  //       }
  //     }, (err) => {
  //       console.log(err);
  //     });
  //   }

  openImagePickerCrop(){
    this.imagePicker.hasReadPermission().then(
      (result) => {
        if(result == false){
          // no callbacks required as this opens a popup which returns async
          this.imagePicker.requestReadPermission();
        }
        else if(result == true){
          this.imagePicker.getPictures({
            maximumImagesCount: 1
          }).then(
            (results) => {
              for (var i = 0; i < results.length; i++) {
                this.cropService.crop(results[i], {quality: 75}).then(
                  newImage => {
                    this.uploadImageToFirebase(newImage);
                  },
                  error => console.error("Error cropping image", error)
                );
              }
            }, (err) => console.log(err)
          );
        }
      }, (err) => {
        console.log(err);
      });
    }

  // pakai code INI UNTUK UPLOAD KE SERVER
  // COPAS DARI WEB INI
  // https://www.djamware.com/post/599da16580aca768e4d2b130/how-to-upload-file-on-ionic-3-using-native-file-transfer-plugin
  // LAKUKAN MODIFIKASI
  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }

    fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
      .then((data) => {
      console.log(data+" Uploaded Successfully");
      this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
      loader.dismiss();
      this.presentToast("Image uploaded successfully");
    }, (err) => {
      console.log(err);
      loader.dismiss();
      this.presentToast(err);
    });
  }
}
