import { Component, Renderer, NgZone, NgModule } from '@angular/core';
import {
  NavController,
  ModalController,
  LoadingController
} from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import { LiveUpdateProvider } from '../../providers/live-update/live-update';

@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html'
})
@NgModule({
  providers: [LiveUpdateProvider]
})
export class StatisticsPage {
  confirmed = '1234';
  recovered = '1234';
  fatal = '1234';
  active = 0;

  constructor(
    public navCtrl: NavController,
    public dataStore: DataStore,
    public liveUpdateService: LiveUpdateProvider,
    public ngZone: NgZone
  ) {
    var resourceRequest = new WLResourceRequest(
      'http://nodebackend-default.rahultestocp-c33bf0f22ab59313b3628c493e016b88-0000.us-south.containers.appdomain.cloud/',
      WLResourceRequest.GET,
      { useAPIProxy: false }
    );

    var self = this;

    resourceRequest.send().then(
      function(response) {
        let confirmed =
          response.responseJSON['India'][
            response.responseJSON['India'].length - 1
          ].confirmed;
        let recovered =
          response.responseJSON['India'][
            response.responseJSON['India'].length - 1
          ].recovered;
        let fatal =
          response.responseJSON['India'][
            response.responseJSON['India'].length - 1
          ].deaths;
        let active = confirmed - recovered - fatal;

        self.ngZone.run(() => {
          self.confirmed = confirmed;
          self.recovered = recovered;
          self.fatal = fatal;
          self.active = active;
        });

        // alert(
        //   'Success: ' + active + '-' + confirmed + '-' + recovered + '-' + fatal
        // );

        //alert(JSON.stringify(response['India']));
      },
      function(response) {
        alert('Failure: ' + JSON.stringify(response));
      }
    );
  }

    ionViewDidLoad() {
        WL.Analytics.log({ fromPage: this.navCtrl.getPrevious(this.navCtrl.getActive()).name, toPage: this.navCtrl.getActive().name }, 'PageTransition ');
        WL.Analytics.send();
    }
}
