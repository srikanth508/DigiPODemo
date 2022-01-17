import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledPosComponent } from './cancelled-pos.component';

describe('CancelledPosComponent', () => {
  let component: CancelledPosComponent;
  let fixture: ComponentFixture<CancelledPosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelledPosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelledPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
