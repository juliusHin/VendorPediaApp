import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VendorFormPage } from './vendor-form';

@NgModule({
  declarations: [
    VendorFormPage,
  ],
  imports: [
    IonicPageModule.forChild(VendorFormPage),
  ],
})
export class VendorFormPageModule {}
