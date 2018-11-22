import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VendorSettingPage } from './vendor-setting';

@NgModule({
  declarations: [
    VendorSettingPage,
  ],
  imports: [
    IonicPageModule.forChild(VendorSettingPage),
  ],
})
export class VendorSettingPageModule {}
