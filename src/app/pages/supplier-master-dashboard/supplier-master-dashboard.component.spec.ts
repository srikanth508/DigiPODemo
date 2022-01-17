import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierMasterDashboardComponent } from './supplier-master-dashboard.component';

describe('SupplierMasterDashboardComponent', () => {
  let component: SupplierMasterDashboardComponent;
  let fixture: ComponentFixture<SupplierMasterDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierMasterDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierMasterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
