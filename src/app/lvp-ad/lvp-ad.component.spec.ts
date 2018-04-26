import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LvpAdComponent } from './lvp-ad.component';

describe('LvpAdComponent', () => {
  let component: LvpAdComponent;
  let fixture: ComponentFixture<LvpAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LvpAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LvpAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
