import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedPoComponent } from './closed-po.component';

describe('ClosedPoComponent', () => {
  let component: ClosedPoComponent;
  let fixture: ComponentFixture<ClosedPoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedPoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedPoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
