import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTypeMasterDashComponent } from './order-type-master-dash.component';

describe('OrderTypeMasterDashComponent', () => {
  let component: OrderTypeMasterDashComponent;
  let fixture: ComponentFixture<OrderTypeMasterDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderTypeMasterDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTypeMasterDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
