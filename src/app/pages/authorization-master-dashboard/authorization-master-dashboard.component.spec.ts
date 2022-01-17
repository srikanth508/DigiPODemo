import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationMasterDashboardComponent } from './authorization-master-dashboard.component';

describe('AuthorizationMasterDashboardComponent', () => {
  let component: AuthorizationMasterDashboardComponent;
  let fixture: ComponentFixture<AuthorizationMasterDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizationMasterDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationMasterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
