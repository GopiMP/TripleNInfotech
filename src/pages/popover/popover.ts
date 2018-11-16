import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform } from 'ionic-angular';
import { GalleryPage } from '../gallery/gallery';
import { AchievementPage } from '../about/achievement/achievement';

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover',
  template: `
  <ion-list>
  <ion-list-header class="popHeader"><u>Triple N Infotech</u></ion-list-header>
  <button ion-item (click)="goToAchievement()" class="missionCardDesc">Achievement</button>
  <button ion-item (click)="goToGallery()" class="missionCardDesc">Gallery</button>
  <button ion-item (click)="goToOut()" class="missionCardDesc">Exit <ion-icon  class="powerBtn" ios="ios-power" md="md-power"></ion-icon></button>
  
</ion-list>
  `
})
export class PopoverPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private modelCtrl : ModalController,
              private platform : Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }
  goToAchievement(){
    const modal = this.modelCtrl.create(AchievementPage);
    modal.present();
  }
  goToGallery(){
    const modal = this.modelCtrl.create(GalleryPage);
    modal.present();
  }
  goToOut(){
    console.log("going to out from app");
    this.platform.exitApp();
  }
}
