import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, PopoverController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { PopoverPage } from '../popover/popover';
import { Network } from '@ionic-native/network';
import { Toast } from '@ionic-native/toast';

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
              private emailComposer : EmailComposer,
              private loadingCtrl : LoadingController,
              private popoverCtrl : PopoverController,
              private toast: Toast,
              private network : Network) {
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
    const loading = this.loadingCtrl.create({
      spinner: 'hide',
      content : `<img class="loadingImage" src="./assets/imgs/loading8.gif" />`,
      cssClass: 'transparent'
    });
    loading.present();
    if(this.network.type == "none"){
      console.log("No network connectin")
      this.toast.show(`Switch on network connection & Try again`, 'short', 'bottom').subscribe(
        toast => {
          console.log(toast);
        }
      );
      setTimeout(() => {
        loading.dismiss();
      }, 500);
    }else{
      setTimeout(() => {
        let email = {
          to: 'matlab.triplen@gmail.com',
          //cc: 'gopikannan.p@object-frontier.com',
          subject: 'Training schedule request : '+course.name,
          body : '<p>Requested Course Name: ' + course.name + "</p>",
          isHtml: true
        };
        this.emailComposer.open(email);
        loading.dismiss();
      }, 1000);
    }

  
    // setTimeout(() => {
    //   loading.dismiss();
    // }, 800);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainingPage');
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage, {}, {cssClass: 'contact-popover'});
    popover.present({
      ev: myEvent
    });
  }

}
