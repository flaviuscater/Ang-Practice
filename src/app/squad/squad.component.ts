import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {Player, PLAYERS} from '../player/player';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.css']
})
export class SquadComponent implements OnInit {

  players = PLAYERS;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
