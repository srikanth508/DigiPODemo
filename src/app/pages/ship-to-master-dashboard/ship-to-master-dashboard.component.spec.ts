import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipToMasterDashboardComponent } from './ship-to-master-dashboard.component';

describe('ShipToMasterDashboardComponent', () => {
  let component: ShipToMasterDashboardComponent;
  let fixture: ComponentFixture<ShipToMasterDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipToMasterDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipToMasterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
