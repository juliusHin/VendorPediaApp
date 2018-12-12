import { Component } from '@angular/core'
import {PopoverController, IonicPage} from 'ionic-angular'


@IonicPage()

@Component({
  selector:'page-about',
  templateUrl:'about.html'
})

export class AboutPage {
  conferenceDate = '2047-05-17';

  constructor(public popoverCtrl: PopoverController) {}
}
