import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthService } from '../../service/firbaseAuthService';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService:AuthService,
    private loading:LoadingController) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  emailSignIn(f:any){
    let load = this.loading.create({
      content:"Please Wait..."
    });
    load.present();
   this.authService.signInUser(f.value.email, f.value.password).then((res)=>{
     console.log("Berhasil Masuk");
     load.dismiss();
     this.navCtrl.setRoot('HomePage');
   }, (err)=>{
     console.log("Gagal Move On");
     load.dismiss();
   });
  }
}
