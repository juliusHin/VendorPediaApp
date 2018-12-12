import { User } from './../../data/user.interface';

import { AuthService } from './../../service/firbaseAuthService';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import firebase from 'firebase';
import { FormGroup, FormControl, Validators } from '@angular/forms';
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage implements OnInit {
  regisForm:FormGroup;
  user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams, private authServiceCtrl:AuthService, private toastCtrl:ToastController,
  ) {
  }

  ngOnInit() {
   this.intializeForm(); 
  }
  private intializeForm(){
    this.regisForm = new FormGroup({
      fname : new FormControl(null,Validators.required),
      lname : new FormControl(null,Validators.required),
      contact : new FormControl(null),
      email : new FormControl(null,Validators.required),
      password : new FormControl(null,Validators.required),
      cpassword : new FormControl(null,Validators.required),
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  storeUserToDB(token:string){
    let db = firebase.database();
    const uid = firebase.auth().currentUser.uid;
    db.ref('userData/'+uid).set({
      Name:this.regisForm.get('fname').value +" "+ this.regisForm.get('lname').value,
      Contact:this.regisForm.get('contact').value,
      Email:this.regisForm.get('email').value,
      Photo: ""
    })
  }

  registerNewUser(){
    let toast = this.toastCtrl.create({
      message:"Your email are already registered",
      duration:2000,
      position:"bottom"
    });
    let mail = this.regisForm.get('email').value;
    let pw = this.regisForm.get('cpassword').value;
    if(this.regisForm.get('password').value != this.regisForm.get('cpassword').value){
      toast.setMessage("Password doesn't match")
      toast.present();
    }else{
      this.authServiceCtrl.registerUser(mail,pw).then((res)=>{
        let verify = firebase.auth().currentUser;
        verify.getIdToken().then(
          (token:string)=>{
            this.storeUserToDB(token)
        })
        verify.sendEmailVerification();
        toast.setMessage("Registration Complete, Please verify your email")
        toast.present();
      },(err)=>{
        toast.present();
      })  
    }
    // let verify = firebase.auth().currentUser;
    // verify.sendEmailVerification().then((res)=>{
        
    // },(err)=>{
    //   toast.present();
    // });
  }

}
