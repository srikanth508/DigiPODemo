import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTotalReportsComponent } from './admin-total-reports.component';

describe('AdminTotalReportsComponent', () => {
  let component: AdminTotalReportsComponent;
  let fixture: ComponentFixture<AdminTotalReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTotalReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTotalReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
