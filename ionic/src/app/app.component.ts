import { Component, ViewChild, Renderer, ChangeDetectorRef,NgModule } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { LandingPage } from "../pages/landing/landing";
import { StatisticsPage } from "../pages/statistics/statistics";
import{LiveUpdateProvider} from "../providers/live-update/live-update";
import { ChatbotPage } from "../pages/chatbot/chatbot";

@Component({
    templateUrl: 'app.html'
})
@NgModule({
    providers: [
        LiveUpdateProvider
    ]
  })
export class MyApp {
    rootPage: any;

    constructor(
        public platform: Platform,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen,
        private renderer: Renderer,
        private cdr: ChangeDetectorRef
    ) {

        renderer.listenGlobal('document', 'mfpjsloaded', () => {
            this.initializeApp(renderer, cdr);
            WL.Analytics.enable();
        });
        
    }
    initializeApp(renderer, cdr) {
        this.platform.ready().then(() => {
            this.rootPage = LoginPage;
            cdr.detectChanges();
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    
}
