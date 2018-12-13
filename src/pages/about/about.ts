import { Component } from '@angular/core'
import {PopoverController, IonicPage} from 'ionic-angular'
import { componentFactoryName } from '@angular/compiler';

@IonicPage()
@Component({
  selector:'page-about',
  templateUrl:'about.html'
})

export class AboutPage {
  conferenceDate = '2047-05-17';

  constructor(public popoverCtrl: PopoverController) {}
}


// import { Component } from '@angular/core';
// import { MenuController, NavController, IonicPage } from 'ionic-angular';
// // import { Storage } from '@ionic/storage';

// export interface Slide {
//   title: string;
//   description: string;
//   image: string;
// }
// @IonicPage(
//   {
//     name: 'AboutPage'
//   }
//   )
// @Component({
//   selector: 'page-tutorial',
//   templateUrl: 'about.html'
// })
// export class AboutPage {
//   slides: Slide[];
//   showSkip = true;

//   constructor(public navCtrl: NavController, public menu: MenuController) 
//   {
//     this.slides = [
//       {
//         title: 'Julius Tanuwijaya',
//         description: '14110110027',
//         image: 'assets/img/julius.jpg',
//       },
//       {
//         title: 'Dainuri',
//         description: '14110110029',
//         image: 'assets/img/dainuri.jpg',
//       },
//       {
//         title: 'Christoper Lauren',
//         description: '14110110142',
//         image: 'assets/img/toper.jpg',
//       },
//       {
//         title: 'Vincentius Kenny',
//         description: '14110110142',
//         image: 'assets/img/kenny.jpg',
//       },
//       {
//         title: 'Dian Kartika Puspitarani',
//         description: '00000009308',
//         image: 'assets/img/tika.jpg',
//       }
//     ];
//   }

//   onSlideChangeStart(slider) {
//     this.showSkip = !slider.isEnd;
//   }

//   ionViewDidEnter() {
//     // the root left menu should be disabled on the tutorial page
//     this.menu.enable(false);
//   }

//   ionViewWillLeave() {
//     // enable the root left menu when leaving the tutorial page
//     this.menu.enable(true);
//   }
// }
