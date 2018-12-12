import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignInPage } from '../pages/sign-in/sign-in';
import { AboutPage } from '../pages/about/about';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { UserSettingPage } from '../pages/user-setting/user-setting';
import { VendorDetailPage } from '../pages/vendor-detail/vendor-detail';
import { VendorFormPage } from '../pages/vendor-form/vendor-form';
import { VendorSettingPage } from '../pages/vendor-setting/vendor-setting';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    SignInPage,
    SignUpPage,
    //SplashScreen,
    UserSettingPage,
    VendorDetailPage,
    VendorFormPage,
    VendorSettingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    SignInPage,
    SignUpPage,
    //SplashScreen,
    UserSettingPage,
    VendorDetailPage,
    VendorFormPage,
    VendorSettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
