import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { NgForm } from '@angular/forms';


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
    private viewCtrl : ViewController,
    private emailComposer : EmailComposer) {
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
  onSendMail(form : NgForm){
    console.log(form.value);
    let email = {
      to: 'srigopikannan@gmail.com',
      cc: 'gopikannan.p@object-frontier.com',
      subject: 'Project details request',
      body: 'Kindly Provide the details of This project ID '+form.value.projectId,
      isHtml: true
    };
    this.emailComposer.open(email);
  }


}
