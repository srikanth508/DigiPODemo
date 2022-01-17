import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMasterDashboardComponent } from './text-master-dashboard.component';

describe('TextMasterDashboardComponent', () => {
  let component: TextMasterDashboardComponent;
  let fixture: ComponentFixture<TextMasterDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextMasterDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextMasterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
