import { Injectable } from '@angular/core';
import {AdItem} from '../ad-item';
import { LvpAdComponent } from './lvp-ad/lvp-ad.component';

@Injectable()
export class AdService {

  constructor() { }

  getAds() {
    return [
      new AdItem(LvpAdComponent, {imagePath: '../../assets/photos/lvp1.jpg', name: 'LVP'}),
      new AdItem(LvpAdComponent, {imagePath: '../../assets/photos/lvp2.jpg', name: 'LVP2'})
    ];
  }
}
