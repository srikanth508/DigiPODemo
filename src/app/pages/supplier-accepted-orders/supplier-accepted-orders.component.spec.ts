import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierAcceptedOrdersComponent } from './supplier-accepted-orders.component';

describe('SupplierAcceptedOrdersComponent', () => {
  let component: SupplierAcceptedOrdersComponent;
  let fixture: ComponentFixture<SupplierAcceptedOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierAcceptedOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierAcceptedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
