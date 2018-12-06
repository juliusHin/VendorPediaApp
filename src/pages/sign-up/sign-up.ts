import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

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
}
