import { SignUpPage } from './../pages/sign-up/sign-up';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import firebase from 'firebase';
// import {FormBuilder, FormGroup}
//import { HomePage } from '../pages/home/home';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'AboutPage';
  home = 'HomePage';
  about = 'AboutPage';
  signIn = 'SignInPage';
  signup = 'SignUpPage';
  vendorForm = 'VendorFormPage';
  @ViewChild('sideMenu') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, private menuCtrl:MenuController) {
    var config = {
    apiKey: "AIzaSyBSWCW5UoOjyJ8gtJs3i92H6MrFwr3zN7Y",
    authDomain: "vendorpedia-6f595.firebaseapp.com",
    databaseURL: "https://vendorpedia-6f595.firebaseio.com",
    projectId: "vendorpedia-6f595",
    storageBucket: "vendorpedia-6f595.appspot.com",
    messagingSenderId: "37472993473"
    };
    firebase.initializeApp(config);
    // const unsubscribe = firebase.auth().onAuthStateChanged(
    //   user=>{
    //     if(!user && firebase.auth().currentUser.emailVerified){
    //       this.rootPage = this.home;
    //     }else{
    //       this.rootPage = this.signIn;
          
    //     }
    //   }
    // )
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
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
//>>>>>>> 901224e50b41317264ac7347472d2e055fd7ab10
}

