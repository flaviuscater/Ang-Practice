import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadPlayerComponent } from './squad-player.component';

describe('SquadPlayerComponent', () => {
  let component: SquadPlayerComponent;
  let fixture: ComponentFixture<SquadPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
