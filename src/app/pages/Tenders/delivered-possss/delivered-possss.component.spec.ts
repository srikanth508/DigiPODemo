import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredPossssComponent } from './delivered-possss.component';

describe('DeliveredPossssComponent', () => {
  let component: DeliveredPossssComponent;
  let fixture: ComponentFixture<DeliveredPossssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveredPossssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveredPossssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
