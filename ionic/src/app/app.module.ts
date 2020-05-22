import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DataStore } from './dataStore';
import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/settings/settings';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LandingPage } from "../pages/landing/landing";
import { StatisticsPage } from "../pages/statistics/statistics";
import { LiveUpdateProvider } from '../providers/live-update/live-update';
import { ChatbotPage } from "../pages/chatbot/chatbot";

@NgModule({
  declarations: [MyApp, AboutPage, SettingsPage, HomePage, LoginPage, TabsPage,LandingPage,StatisticsPage,ChatbotPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    SettingsPage,
    HomePage,
    LoginPage,
    TabsPage,
    LandingPage,StatisticsPage,ChatbotPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataStore,
    LiveUpdateProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
