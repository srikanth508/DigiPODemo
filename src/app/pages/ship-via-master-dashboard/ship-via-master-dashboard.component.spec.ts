import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipViaMasterDashboardComponent } from './ship-via-master-dashboard.component';

describe('ShipViaMasterDashboardComponent', () => {
  let component: ShipViaMasterDashboardComponent;
  let fixture: ComponentFixture<ShipViaMasterDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipViaMasterDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipViaMasterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
