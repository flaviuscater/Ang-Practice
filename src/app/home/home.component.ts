import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/of';
import { MapComponent} from '../map/map.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
