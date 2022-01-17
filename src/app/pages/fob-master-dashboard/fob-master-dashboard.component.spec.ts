import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FobMasterDashboardComponent } from './fob-master-dashboard.component';

describe('FobMasterDashboardComponent', () => {
  let component: FobMasterDashboardComponent;
  let fixture: ComponentFixture<FobMasterDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FobMasterDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FobMasterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
