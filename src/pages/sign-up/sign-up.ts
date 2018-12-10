import { User } from './../../data/user.interface';
import { AuthService } from './../../service/firbaseAuthService';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import firebase from 'firebase';
import { Component } from '@angular/core';

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
export class SignUpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private authServiceCtrl:AuthService, private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  registerNewUser(f:any){
    let toast = this.toastCtrl.create({
      message:"Register Failed",
      duration:2000,
      position:"bottom"
    });
    let verify = firebase.auth().currentUser;
    verify.sendEmailVerification().then((res)=>{
        this.authServiceCtrl.registerUser(f.value.email, f.value.password);
    },(err)=>{
      toast.present();
    });
  }

}
