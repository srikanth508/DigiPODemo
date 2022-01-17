import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxAdditionsDashboardComponent } from './tax-additions-dashboard.component';

describe('TaxAdditionsDashboardComponent', () => {
  let component: TaxAdditionsDashboardComponent;
  let fixture: ComponentFixture<TaxAdditionsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxAdditionsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxAdditionsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
