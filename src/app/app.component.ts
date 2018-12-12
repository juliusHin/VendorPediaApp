import { SignUpPage } from './../pages/sign-up/sign-up';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
// import {FormBuilder, FormGroup}
//import { HomePage } from '../pages/home/home';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'HomePage';
  home = 'HomePage';
  about = 'AboutPage';
  signIn = 'SignInPage';
  signup = 'SignUpPage'
  @ViewChild('sideMenu') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private menuCtrl:MenuController) {
    var config = {
      apiKey: "AIzaSyBSWCW5UoOjyJ8gtJs3i92H6MrFwr3zN7Y",
      authDomain: "vendorpedia-6f595.firebaseapp.com",
      databaseURL: "https://vendorpedia-6f595.firebaseio.com",
      projectId: "vendorpedia-6f595",
      storageBucket: "vendorpedia-6f595.appspot.com",
      messagingSenderId: "37472993473"}
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

  // untuk form
  // author JuliusTanuwijaya
  // registerForm: FormGroup;
  // post: any;
  // description: string = '';
  // name: string = '';
}

