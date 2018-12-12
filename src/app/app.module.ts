//import { TextMaskModule } from 'angular2-text-mask';
import { AuthService } from './../service/firbaseAuthService';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,

    // SplashScreen,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // sumber
    // https://www.djamware.com/post/599da16580aca768e4d2b130/how-to-upload-file-on-ionic-3-using-native-file-transfer-plugin

    // https://stackoverflow.com/questions/46068697/ionic-fileuploadoptions-throw-error-when-add-to-app-module-ts?rq=1

    // FileUploadOptions,
  ]
})
export class AppModule {}
