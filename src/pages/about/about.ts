import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, ModalController, ViewController, LoadingController, PopoverController  } from 'ionic-angular';
import { GalleryPage } from '../gallery/gallery';
import { ViewContainerData } from '@angular/core/src/view';
import { MissionPage } from './mission_achievement/mission';
import { AchievementPage } from './achievement/achievement';
import { PopoverPage } from '../popover/popover';




@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  
  tab:Tabs;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private modelCtrl : ModalController,
              private viewCtrl : ViewController,
              private loadingCtrl : LoadingController,
              private popoverCtrl: PopoverController) {
    this.tab = this.navCtrl.parent;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  goToNext(module){
    console.log("TEST : "+module);
    if(module === 'gallery'){
      const loading = this.loadingCtrl.create({
        spinner: 'hide',
        content : `<img class="loadingImage" src="./assets/imgs/loading8.gif" />`,
        cssClass: 'transparent'
      });
      loading.present();
      setTimeout(() => {
        const modal = this.modelCtrl.create(GalleryPage);
        modal.present();
      }, 500);
      setTimeout(() => {
        loading.dismiss();
      }, 800);
      
    
    }else if(module === 'project'){
      this.tab.select(1);
    }else if(module === 'training'){
      this.tab.select(2);
    }else{
      this.tab.select(3);
    }
  }
  onVission(){
    const modal = this.modelCtrl.create(MissionPage);
    modal.present();
  }
  onAchievement(){
    const modal = this.modelCtrl.create(AchievementPage);
    modal.present();
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage, {}, {cssClass: 'contact-popover'});
    popover.present({
      ev: myEvent
    });
  }
  // onShowOptions(event: MouseEvent){
  //   const popOver = this.popoverCtrl.create(SLOptionsPage);
  //   popOver.present({ev: event});
  //   popOver.onDidDismiss(
  //     data => {
  //       if(data.action == 'load'){
  //         console.log("exit calling")
  //       }
  //     }
  //   );
  // }

}
