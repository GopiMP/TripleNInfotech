import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, ModalController, ViewController  } from 'ionic-angular';


@Component({
  selector: 'page-achievement',
  templateUrl: 'achievement.html',
})
export class AchievementPage {

    constructor(private modalCtrl : ModalController, private viewCtrl : ViewController){}
    onClose(){
        this.viewCtrl.dismiss();
      }

}