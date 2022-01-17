import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerMasterDashboardComponent } from './buyer-master-dashboard.component';

describe('BuyerMasterDashboardComponent', () => {
  let component: BuyerMasterDashboardComponent;
  let fixture: ComponentFixture<BuyerMasterDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerMasterDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerMasterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
