import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldPOComponent } from './hold-po.component';

describe('HoldPOComponent', () => {
  let component: HoldPOComponent;
  let fixture: ComponentFixture<HoldPOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoldPOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldPOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
