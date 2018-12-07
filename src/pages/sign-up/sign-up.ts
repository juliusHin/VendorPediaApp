import { User } from './../../data/user.interface';

import { AuthService } from './../../service/firbaseAuthService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
    this.authServiceCtrl.registerUser(f.value.email, f.value.password).then((res)=>{
      console.log("Register Success");
      this.navCtrl.setRoot("HomePage");
    },
    (err)=>{
      toast.present();
    });
  }

}
