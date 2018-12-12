// import { storage } from 'firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { storage } from 'firebase';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the VendorDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vendor-detail',
  templateUrl: 'vendor-detail.html',
})
export class VendorDetailPage {

  appInfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VendorDetailPage');
  }

}
