import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtherServicesPage } from './other-services';

@NgModule({
  declarations: [
    OtherServicesPage
  ],
  imports: [
    IonicPageModule.forChild(OtherServicesPage)
  ],
  exports: [
    OtherServicesPage
  ]
})
export class OtherServicesPageModule {}
