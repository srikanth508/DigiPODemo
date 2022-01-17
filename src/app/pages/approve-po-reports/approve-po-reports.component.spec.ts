import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovePoReportsComponent } from './approve-po-reports.component';

describe('ApprovePoReportsComponent', () => {
  let component: ApprovePoReportsComponent;
  let fixture: ComponentFixture<ApprovePoReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovePoReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovePoReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
