import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-module',
  templateUrl: 'module.html',
})
export class ModulePage {

  title:string = 'Beginner';
  public x: any =[
    1,2,3,4,5,6,7,8,9,10,11,12,77,99
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = (navParams.get('kelas')) ? navParams.get('kelas') : this.title;
    console.log(this.title);
  }

  ionViewDidLoad() {
  }

  detail(){
    this.navCtrl.push('MateriPage');
  }

}
