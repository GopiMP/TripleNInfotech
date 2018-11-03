import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import embeddedContent from '../../data/embeddedContent';
import { LowerCasePipe } from '@angular/common';
import { MailPage } from '../mail/mail';
import { Http } from '@angular/http';



@IonicPage()
@Component({
  selector: 'page-project-list',
  templateUrl: 'project-list.html',
})
export class ProjectListPage implements OnInit {

  project : string;
  projectlist: any[];
  constructor(
    public navCtrl: NavController, 
    private navParams: NavParams, 
    private http: Http,
    private modalCtrl : ModalController,
    private loadingCtrl : LoadingController) {
  }

  projectList : {title : string, id : string}[];

  ngOnInit() {
    
    let localData = this.http.get('assets/projectdetails.json').map(res => res.json());

      localData.subscribe(data => {
        this.project = this.navParams.get('project');
        this.projectlist = data[this.navParams.get('project')];
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectListPage');
  }
  gotoMail(item){
    const loading = this.loadingCtrl.create({
      spinner: 'hide',
      content : `<img class="loadingImage" src="./assets/imgs/loading8.gif" />`,
      cssClass: 'transparent'
    });
    loading.present();
    setTimeout(() => {
      const modal = this.modalCtrl.create(MailPage, {item : item})
      modal.present();
    }, 300);
    setTimeout(() => {
      loading.dismiss();
    }, 500);
  }

}
