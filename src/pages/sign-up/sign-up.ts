import { User } from './../../data/user.interface';

import { AuthService } from './../../service/firbaseAuthService';
import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
=======
// import {ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

>>>>>>> 81db7ac7dccd2ed70171648ad2d8f992964bc74e
=======
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import firebase from 'firebase';
>>>>>>> branchLauren
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
<<<<<<< HEAD
<<<<<<< HEAD
  constructor(public navCtrl: NavController, public navParams: NavParams, private authServiceCtrl:AuthService) {
=======

  // registerForm = new FormGroup({
  //   username: new FormControl()
  // });
  registerForm : FormGroup;
  registerUser: any;
  username: string= '';
  fname: string='';
  lname: string='';
  email:string ='';
  titleAlert: string = 'This field is required';

  userType: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.registerForm = fb.group({
      'username': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(25)])],
      'fname': [null, Validators.compose([Validators.required])],
      'lname': [null,],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'validate': ''
    });
>>>>>>> 81db7ac7dccd2ed70171648ad2d8f992964bc74e
=======
  constructor(public navCtrl: NavController, public navParams: NavParams, private authServiceCtrl:AuthService, private toastCtrl:ToastController) {
>>>>>>> branchLauren
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

<<<<<<< HEAD
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

=======
  onSubmit(registerUser){

  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.registerForm.get('validate').valueChanges.subscribe(
      (validate) =>{
        if (validate == '1'){
          this.registerForm.get('username').setValidators([Validators.required, Validators.minLength(6)]);
        }else{
          this.registerForm.get('username').setValidators([Validators.required]);
        }
        this.registerForm.get('username').updateValueAndValidity();
      }
    )
  }
>>>>>>> 81db7ac7dccd2ed70171648ad2d8f992964bc74e
}
