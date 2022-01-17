import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerMasterComponent } from './buyer-master.component';

describe('BuyerMasterComponent', () => {
  let component: BuyerMasterComponent;
  let fixture: ComponentFixture<BuyerMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
