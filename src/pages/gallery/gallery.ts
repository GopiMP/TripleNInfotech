import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import gallery from '../../data/gallery';


@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage implements OnInit {
  galleryImage :{title : string, subtitle : string, image : string}[]

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private viewCtrl :  ViewController) {
  }
  ngOnInit() {
    this.galleryImage = gallery
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }
  onClose(){
    this.viewCtrl.dismiss();
  }

}
