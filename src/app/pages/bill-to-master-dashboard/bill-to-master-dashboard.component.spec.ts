import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillToMasterDashboardComponent } from './bill-to-master-dashboard.component';

describe('BillToMasterDashboardComponent', () => {
  let component: BillToMasterDashboardComponent;
  let fixture: ComponentFixture<BillToMasterDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillToMasterDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillToMasterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
