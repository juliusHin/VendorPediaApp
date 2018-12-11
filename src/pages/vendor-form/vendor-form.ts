import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm, FormControl, Validators } from '@angular/forms';

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
export class VendorFormPage {

  masks: any;

  // vendorName: new FormControl('', Validators.required);

  phoneNumber:any = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  registerVendor(form: NgForm){
    console.log(form.value);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VendorFormPage');
  }

}
