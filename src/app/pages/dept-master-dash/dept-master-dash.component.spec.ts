import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptMasterDashComponent } from './dept-master-dash.component';

describe('DeptMasterDashComponent', () => {
  let component: DeptMasterDashComponent;
  let fixture: ComponentFixture<DeptMasterDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptMasterDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptMasterDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
