import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import embeddedContent from '../../data/embeddedContent';
import { LowerCasePipe } from '@angular/common';
import { MailPage } from '../mail/mail';


@IonicPage()
@Component({
  selector: 'page-project-list',
  templateUrl: 'project-list.html',
})
export class ProjectListPage implements OnInit {

  project : string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private navParm : NavParams,
    private modalCtrl : ModalController) {
  }

  projectList : {title : string, id : string}[];

  ngOnInit() {
    this.project = this.navParams.get('project')
    console.log("param value :"+this.project) 
    let projectList = this.project
    this.projectList = embeddedContent
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectListPage');
  }
  gotoMail(item){
    const modal = this.modalCtrl.create(MailPage, {item : item})
    modal.present();
    console.log(item)
  }

}
