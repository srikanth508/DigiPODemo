import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierCancelledOrdersComponent } from './supplier-cancelled-orders.component';

describe('SupplierCancelledOrdersComponent', () => {
  let component: SupplierCancelledOrdersComponent;
  let fixture: ComponentFixture<SupplierCancelledOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierCancelledOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierCancelledOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
