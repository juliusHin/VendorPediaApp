import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FirebaseService {

  constructor(
    public afs: AngularFirestore,
  ){}

  addVendor(value){
    return new Promise<any>((resolve, reject) =>{
      this.afs.collection('/vendors').add({
        vendorName: value.uVendorname,
        vendorDescription: value.uVendorDesc,
        vendorContact: value.uVendorContact,
        vendorCategory: value.uVendorCategories,
        vendorAddress: value.uVendorAddress
      }).then(
        (res) =>{
          resolve(res)
        },
        err=> reject(err)
      )
    })
  }

  encodeImageUri(imageUri, callback) {
    var c = document.createElement('canvas');
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function () {
      var aux:any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      var dataURL = c.toDataURL("image/jpeg");
      callback(dataURL);
    };
    img.src = imageUri;
  };

  uploadImage(imageURI){
    return new Promise<any>((resolve, reject) => {
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child('image').child('imageName');
      this.encodeImageUri(imageURI, function(image64){
        imageRef.putString(image64, 'data_url')
        .then(snapshot => {
          resolve(snapshot.downloadURL)
        }, err => {
          reject(err);
        })
      })
    })
  }

  // http://www.offlineprogrammer.com/upload-images-firebase-storage-using-ionic-framework/
  public generateUUID(): any {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }


}


// sumber
// https://github.com/ionicthemes/ionic-firebase-image-upload/blob/master/src/pages/service/firebase.service.ts
