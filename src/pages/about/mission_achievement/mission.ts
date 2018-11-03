import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, ModalController, ViewController  } from 'ionic-angular';


@Component({
  selector: 'page-mission',
  templateUrl: 'mission.html',
})
export class MissionPage {

    constructor(private modalCtrl : ModalController, private viewCtrl : ViewController){}
    onClose(){
        this.viewCtrl.dismiss();
      }

}