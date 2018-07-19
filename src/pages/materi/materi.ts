import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MateriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materi',
  templateUrl: 'materi.html',
})
export class MateriPage {

  @ViewChild('videoPlayer') videoplayer: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  toggleVideo(event: any) {
    let video = this.videoplayer.nativeElement;
    video.src = 'http://techslides.com/demos/sample-videos/small.mp4';
    video.play();
  }

  ionViewDidLoad() {
    let video = this.videoplayer.nativeElement;
    video.src = 'http://techslides.com/demos/sample-videos/small.mp4';
    video.play();
  }

}
