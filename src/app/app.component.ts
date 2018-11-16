import { Component } from '@angular/core';
import { Platform, AlertController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { OnboardingPage } from '../pages/onboarding/onboarding';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  //public alertShown:boolean = false;
  public counter=0;

  constructor(public platform: Platform, 
              private statusBar: StatusBar, 
              splashScreen: SplashScreen,
              private toastCtrl : ToastController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.overlaysWebView(true);
        this.statusBar.backgroundColorByHexString('#556B2F');
      // this.statusBar.styleLightContent();
      splashScreen.hide();
      platform.registerBackButtonAction(() => {
        if (this.counter == 0) {
          this.counter++;
          this.presentToast();
          setTimeout(() => { this.counter = 0 }, 3000)
        } else {
          // console.log("exitapp");
          platform.exitApp();
        }
      }, 0)
    });
  }
  
  presentToast() {
    let toast = this.toastCtrl.create({
      message: "Press again to exit",
      duration: 3000,
      position: "bottom",
      cssClass: 'normalToast'
    });
    toast.present();
  }
}

