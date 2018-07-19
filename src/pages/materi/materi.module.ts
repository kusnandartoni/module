import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MateriPage } from './materi';
import { ParallaxHeaderDirective } from '../../directives/parallax-header/parallax-header';

@NgModule({
  declarations: [
    MateriPage,
    ParallaxHeaderDirective
  ],
  imports: [
    IonicPageModule.forChild(MateriPage),
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MateriPageModule {}
