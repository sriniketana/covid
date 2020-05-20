import { Component, Renderer } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';
import { LandingPage } from '../landing/landing';
import { StatisticsPage } from '../statistics/statistics';
import {ChatbotPage} from '../chatbot/chatbot';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = LandingPage;
  tab2Root = StatisticsPage;
  tab3Root = ChatbotPage;

  constructor(public navCtrl: NavController, public renderer: Renderer) {}

  ionViewDidLoad() {
      WL.Analytics.log({ fromPage: this.navCtrl.getPrevious(this.navCtrl.getActive()).name, toPage: this.navCtrl.getActive().name }, 'PageTransition ');
      WL.Analytics.send();}
}
