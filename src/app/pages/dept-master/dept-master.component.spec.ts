import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptMasterComponent } from './dept-master.component';

describe('DeptMasterComponent', () => {
  let component: DeptMasterComponent;
  let fixture: ComponentFixture<DeptMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
