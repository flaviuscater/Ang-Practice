
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { SquadComponent } from './squad/squad.component';
import { SquadPlayerComponent } from './squad-player/squad-player.component';
import { MapComponent } from './map/map.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { AdComponent } from './ad-component';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    HomeComponent,
    SquadComponent,
    SquadPlayerComponent,
    MapComponent,
    AdDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQCFQLG-EtcuX-8MX23WGSUvhy-yM4Vto'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent ]
})


export class AppModule {

}



