import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeginnerPage } from './beginner';

@NgModule({
  declarations: [
    BeginnerPage,
  ],
  imports: [
    IonicPageModule.forChild(BeginnerPage),
  ],
  exports:[
    BeginnerPage
  ]
})
export class BeginnerPageModule {}
