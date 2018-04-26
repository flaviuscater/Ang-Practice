import {Component, Input, OnInit} from '@angular/core';
import {AdComponent} from '../ad-component';

@Component({
  selector: 'app-lvp-ad',
  templateUrl: './lvp-ad.component.html',
  styleUrls: ['./lvp-ad.component.css']
})
export class LvpAdComponent implements OnInit, AdComponent {

  @Input() data: any;
  imagePath = '../../assets/photos/lvp1.jpg';

  constructor() { }

  ngOnInit() {
  }

}
