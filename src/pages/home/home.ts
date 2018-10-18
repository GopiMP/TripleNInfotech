import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { OnboardingPage } from '../onboarding/onboarding';
import { ProjectsPage } from '../projects/projects';
import { TrainingPage } from '../training/training';
import { ContactsPage } from '../contacts/contacts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  projectPage = ProjectsPage;
  trainingPage = TrainingPage;
  contactPage = ContactsPage;

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

}
