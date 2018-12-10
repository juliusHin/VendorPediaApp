import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { AuthService } from '../../service/firbaseAuthService';
import firebase from 'firebase';
/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  registerPage="SignUpPage";

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService:AuthService,
    private loading:LoadingController, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  emailSignIn(f:any){
    let load = this.loading.create({
      content:"Please Wait..."
    });
    let toast = this.toastCtrl.create({
      message:"Email or Password incorrect",
      duration:2000,
      position:"bottom"
    });
    let toast2 = this.toastCtrl.create({
      message:"Please verify your email..",
      duration:2000,
      position:"bottom"
    });

    load.present();
    let cu = firebase.auth().currentUser;
    if(cu.emailVerified){
      this.authService.signInUser(f.value.email, f.value.password).then((res)=>{
        console.log(cu);
        load.dismiss();
        this.navCtrl.setRoot('HomePage');
       }, (err)=>{
         load.dismiss();
         toast.present();
       });
    }
    else{
      console.log("belom di verified");
      load.dismiss();
      toast2.present();
    }
  }


  reg(){
    this.navCtrl.push("SignUpPage"); 
    console.log("Register User");
  }

  reg(){
    this.navCtrl.push(this.registerPage);
  }
}
