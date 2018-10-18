import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-mail',
  templateUrl: 'mail.html',
})
export class MailPage implements OnInit {
 
 
  projectType :  {title : string, id : string}
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MailPage');
  }
  ngOnInit() {
    this.projectType = this.navParams.data.item;
  }
  onClose(){
    this.viewCtrl.dismiss();
  }

}
