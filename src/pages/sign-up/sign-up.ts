
import { AuthService } from './../../service/firbaseAuthService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  Use
  constructor(public navCtrl: NavController, public navParams: NavParams, private authServiceCtrl:AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  registerNewUser(f:any){
    
    this.authServiceCtrl.registerUser(f.value.email, f.value.password);
  }

}
