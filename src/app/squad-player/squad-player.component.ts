import {Component, Input, OnInit, SimpleChange, OnChanges, Output, EventEmitter} from '@angular/core';
import {Player} from '../player/player';

@Component({
  selector: 'app-squad-player',
  templateUrl: './squad-player.component.html',
  styleUrls: ['./squad-player.component.css']
})
export class SquadPlayerComponent implements OnInit, OnChanges {

  @Input()
  player: Player;

  private _trait = '';

  @Input()
  fitness: number;
  @Input()
  contract: number;

  @Input()
  name: string;

  @Output()
  onVoted = new EventEmitter<boolean>();
  voted = false;

  changeLog: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }


  @Input()
  set trait(trait: string) {
    this._trait = (trait && trait.trim()) || '<no trait set>';
  }

  get trait(): string {
    return this._trait;
  }

  vote(agreed: boolean) {
    this.onVoted.emit(agreed);
    this.voted = true;
  }

  addFitnessBronze() {
    this.player.fitness += 20;
  }

  addContractsBronze() {
    this.player.contracts += 7;
  }

}
