import { Component, Renderer } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';
import { LandingPage } from '../landing/landing';
import { StatisticsPage } from '../statistics/statistics';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = LandingPage;
  tab2Root = StatisticsPage;
  tab3Root = SettingsPage;

  constructor(public navCtrl: NavController, public renderer: Renderer) {}
}
