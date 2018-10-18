import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import domainContent from '../../data/domainContent';
import { ProjectListPage } from '../project-list/project-list';


@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage implements OnInit {
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  domainList :{image:string, title:string, description: string}[]
  ngOnInit() {
    this.domainList = domainContent;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
  }
  goToProjectList(selectedProject){
    console.log('Project selected'+selectedProject);
    this.navCtrl.push(ProjectListPage, {project : selectedProject});
  }

}
