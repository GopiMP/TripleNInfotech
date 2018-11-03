import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@IonicPage()
@Component({
  selector: 'page-training',
  templateUrl: 'training.html',
})
export class TrainingPage {
  trainingOpen:any;
  information: any[];
  selectedIndex : any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private http: Http,
              private emailComposer : EmailComposer) {
    let localData = http.get('assets/information.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    })
  }

  toggleSection(i) {
    this.trainingOpen = 0;
    this.selectedIndex = i;
    if(this.information[i].open){
      this.trainingOpen = 1;
      this.information[i].open = !this.information[i].open;
      
    }else{
      setTimeout(() => {
        this.trainingOpen = 1;
        this.information[i].open = !this.information[i].open;
      }, 1000);
    }
   
   
  }

  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }

  toScheduleTraining(course){
    console.log(course);
    let email = {
      to: 'srigopikannan@gmail.com',
      cc: 'gopikannan.p@object-frontier.com',
      subject: 'Training schedule request : '+course.name,
      body: 'Kindly provide the training schedule detail for '+course.name,
      isHtml: true
    };
    this.emailComposer.open(email);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainingPage');
  }

}
