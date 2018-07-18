import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BeginnerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beginner',
  templateUrl: 'beginner.html',
})
export class BeginnerPage {
  public x: any =[
    1,2,3,4,5,6,7,8,9
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad BeginnerPage');
  }

  detail(){
    window.alert('aaa');
    console.log('aaaaa')
  }

}
