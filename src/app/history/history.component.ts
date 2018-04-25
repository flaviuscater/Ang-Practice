import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {AdItem} from '../../ad-item';
import {AdService} from '../ad.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  ads: AdItem[];

  constructor(
    private location: Location,
    private adService: AdService
  ) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

  goBack() {
    this.location.back();
  }

}
