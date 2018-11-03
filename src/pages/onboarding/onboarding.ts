import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import onBoardingContent from '../../data/onBoardingContent';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html',
})
export class OnboardingPage implements OnInit {

  constructor(private navCtrl : NavController){}

  @ViewChild(Slides) slides: Slides;
  onBoardingContent : {title : string, description: string, image : string, button : string}[]

  ngOnInit() {
    this.onBoardingContent = onBoardingContent;
  }
  slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
  }
  goToNext() {
    let curIndex = this.slides.getActiveIndex();
    this.slides.slideTo(curIndex+1);
    if(this.slides.length() === curIndex+1){
       this.navCtrl.setRoot(HomePage);
       this.navCtrl.push(HomePage);
    }
  }

}
