import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, PopoverController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { EmailComposer } from '@ionic-native/email-composer';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { PopoverPage } from '../popover/popover';
import { Network } from '@ionic-native/network';
import { Toast } from '@ionic-native/toast';

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
 
constructor(private call : CallNumber,
            private alertCtrl : AlertController,
            private emailComposer : EmailComposer,
            private launchNavigator: LaunchNavigator,
            private loadingCtrl : LoadingController,
            private network : Network,
            private toast : Toast,
            private popoverCtrl : PopoverController){}
callToNumber(callNumber){
  let alert = this.alertCtrl.create({
    title: "Connect Triple N",
    message: "Are you sure, You want to connect this call ?",
    buttons :[
      {
        text: 'No',
        role: 'No',
        cssClass: 'alertDanger',
        handler : () => {
          console.log("Clicked No")
        }
      },
      {
        text: 'Yes',
        cssClass: 'alertDanger',
        handler : () => {
          console.log("Clicked Yes");
          this.call.callNumber(callNumber, true)
        }
      }
    ]
  });
  alert.present();
}
goToEvent(){
  console.log("map calling");
}
openFacebookd(){
   console.log('facebook calling')
}
presentPopover(myEvent) {
  let popover = this.popoverCtrl.create(PopoverPage, {}, {cssClass: 'contact-popover'});
  popover.present({
    ev: myEvent
  });
}
openMail(){
  let email = {
    to: 'srigopikannan@gmail.com',
    cc: 'gopikannan.p@object-frontier.com',
    subject: 'Project details request',
    body: '',
    isHtml: true
  };
  this.emailComposer.open(email);
}
openMap(selectedLocation){
  // this.networkCheck();
  if(this.network.type == "none"){
    console.log("No network connectin")
    this.toast.show(`Switch on network connection & Try again`, 'short', 'bottom').subscribe(
      toast => {
        console.log(toast);
      }
    );
    return false;
  }
  const loading = this.loadingCtrl.create({
    spinner: 'hide',
    content : `<img class="loadingImage" src="./assets/imgs/loading8.gif" />`,
    cssClass: 'transparent'
  });
  loading.present();
  let options: LaunchNavigatorOptions = {
    // start: 'London, ON',
    // app: LaunchNavigator.APPS.UBER
   };
  if(selectedLocation == 'chennai'){
    console.log("Locatoin : ",selectedLocation)
    setTimeout(() => {
      this.launchNavigator.navigate('Triple N Infotech Chennai, Tamil Nadu, ON', options)
    .then(
      success => console.log('Launched navigator'),
      error => console.log('Error launching navigator', error)
    );
    }, 500);
    loading.dismiss();
  }if(selectedLocation == 'trichy'){
    console.log("Locatoin : ",selectedLocation)
    setTimeout(() => {
      this.launchNavigator.navigate('IEEE Projects Triple N Infotech Trichy, ON', options)
    .then(
      success => console.log('Launched navigator'),
      error => console.log('Error launching navigator', error)
    );
    }, 500);
    loading.dismiss();
  }
}
//  networkCheck() {
//   if(this.network.type == "none"){
//     console.log("No network connectin")
//     this.toast.show(`Switch on network connection & Try again`, 'short', 'bottom').subscribe(
//       toast => {
//         console.log(toast);
//       }
//     );
//   }
//  }
}
