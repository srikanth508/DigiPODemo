import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POOrderReportsComponent } from './poorder-reports.component';

describe('POOrderReportsComponent', () => {
  let component: POOrderReportsComponent;
  let fixture: ComponentFixture<POOrderReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POOrderReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POOrderReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
