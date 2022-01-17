import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingCompanyMasterDashboardComponent } from './buying-company-master-dashboard.component';

describe('BuyingCompanyMasterDashboardComponent', () => {
  let component: BuyingCompanyMasterDashboardComponent;
  let fixture: ComponentFixture<BuyingCompanyMasterDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyingCompanyMasterDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyingCompanyMasterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
