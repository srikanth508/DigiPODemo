import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderDashComponent } from './purchase-order-dash.component';

describe('PurchaseOrderDashComponent', () => {
  let component: PurchaseOrderDashComponent;
  let fixture: ComponentFixture<PurchaseOrderDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseOrderDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrderDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
