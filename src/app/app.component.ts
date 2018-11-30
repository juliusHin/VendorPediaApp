import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
//import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'HomePage';
  home = 'HomePage';
  about = 'AboutPage';
  signIn = 'SignInPage';
  @ViewChild('sideMenu') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private menuCtrl:MenuController) {
    var config = {
    apiKey: "AIzaSyBuircFO_sf_vcemKrwqWIqwXUGibtlUQc",
    authDomain: "vendorpedia-54d53.firebaseapp.com",
    databaseURL: "https://vendorpedia-54d53.firebaseio.com",
    projectId: "vendorpedia-54d53",
    storageBucket: "vendorpedia-54d53.appspot.com",
    messagingSenderId: "947381527762"
    };
    firebase.initializeApp(config);

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  Load(page: string) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
    }
}

