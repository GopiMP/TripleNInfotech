import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Network } from '@ionic-native/network';
import { Toast } from '@ionic-native/toast';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-mail',
  templateUrl: 'mail.html',
})
export class MailPage implements OnInit {
 
  projectType :  {title : string, id : string}
  name : string;
  contactNo : string;
  email : string;
  city : string;
  isDisabled: boolean = true;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private viewCtrl : ViewController,
    private emailComposer : EmailComposer,
    private network : Network,
    private toast: Toast,
    private storage : Storage,
    private loadingCtrl : LoadingController) {
  }

  

  ionViewWillEnter() {
    console.log('ionview will enter');
    
  }
  ngOnInit() {
    this.projectType = this.navParams.data.item;
    this.storage.get('training-name').then(val =>{
      if(!val){
        console.log('NO value  : ', val)
      }else{
        console.log('Name : ', val)
        this.name = val;
      }
    })
    this.storage.get('training-contactNo').then(val =>{
      if(!val){
        console.log('NO value  : ', val)
      }else{
        console.log('contactNo : ', val)
        this.contactNo = val;
      }
    })
    this.storage.get('training-email').then(val =>{
      if(!val){
        console.log('NO value  : ', val)
      }else{
        console.log('email : ', val)
        this.email = val;
      }
    })
    this.storage.get('training-city').then(val =>{
      if(!val){
        console.log('NO value  : ', val)
      }else{
        console.log('city : ', val)
        this.city = val;
      }
    })
  }
  onClose(){
    this.viewCtrl.dismiss();
  }
  onSendMail(form : NgForm){
    const loading = this.loadingCtrl.create({
      spinner: 'hide',
      content : `<img class="loadingImage" src="./assets/imgs/loading8.gif" />`,
      cssClass: 'transparent'
    });
    loading.present();
    console.log("Network type : "+this.network.type);
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
      console.log(form.value);
      this.storage.set('training-name', form.value.name);
      this.storage.set('training-contactNo', form.value.contactNo);
      this.storage.set('training-email', form.value.email);
      this.storage.set('training-city', form.value.city);
      let email = {
      to: 'srigopikannan@gmail.com',
      // cc: 'gopikannan.p@object-frontier.com',
      subject: 'Project details request',
      body: '<p> Project ID : ' + form.value.projectId + "</p>" +
      '<p>Project Title : ' + form.value.projectTitle + '</p>' +
      '<p>Name :  ' + form.value.name + '</p>' +
      '<p>Phone Number : ' + form.value.contactNo + '</p>' +
      '<p>Place : ' + form.value.city + '</p>',
      // body: 'Kindly Provide the details of This project ID '+form.value.projectId,
      isHtml: true
    };
    setTimeout(() => {
      this.emailComposer.open(email);
      this.viewCtrl.dismiss();
      loading.dismiss();
    }, 500);
    }
  }


}
