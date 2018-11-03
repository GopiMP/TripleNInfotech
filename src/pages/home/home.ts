import { Component, ViewChild } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { OnboardingPage } from '../onboarding/onboarding';
import { ProjectsPage } from '../projects/projects';
import { TrainingPage } from '../training/training';
import { ContactsPage } from '../contacts/contacts';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('myTabs') tabRef: Tabs;

  projectPage = ProjectsPage;
  trainingPage = TrainingPage;
  contactPage = ContactsPage;
  aboutPage = AboutPage;
  selectedTab : any;

  constructor(public navCtrl: NavController, private storage : Storage) {
  }


  ionViewWillEnter(){
    this.storage.get('intro-done').then(done =>{
      if(!done){
        this.storage.set('intro-done', true);
        this.navCtrl.setRoot(OnboardingPage);
      }
    })
  }
  onTabsChange(){
    this.selectedTab = this.tabRef.getSelected();
    this.selectedTab = this.selectedTab.tabTitle;
    if(this.selectedTab == 'Home'){
      console.log("Home selected");
    }
  }

}
