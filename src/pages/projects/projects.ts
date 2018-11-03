import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import domainContent from '../../data/domainContent';
import { ProjectListPage } from '../project-list/project-list';


@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage implements OnInit {
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl : LoadingController) {
  }

  domainList :{image:string, title:string, description: string}[]
  ngOnInit() {
    this.domainList = domainContent;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
  }
  goToProjectList(selectedProject){
    const loading = this.loadingCtrl.create({
      spinner: 'hide',
      content : `<img class="loadingImage" src="./assets/imgs/loading8.gif" />`,
      cssClass: 'transparent'
    });
    loading.present();
    setTimeout(() => {
      this.navCtrl.push(ProjectListPage, {project : selectedProject});
    }, 500);
    setTimeout(() => {
      loading.dismiss();
    }, 800);
  }

}
