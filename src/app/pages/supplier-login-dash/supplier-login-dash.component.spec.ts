import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierLoginDashComponent } from './supplier-login-dash.component';

describe('SupplierLoginDashComponent', () => {
  let component: SupplierLoginDashComponent;
  let fixture: ComponentFixture<SupplierLoginDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierLoginDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierLoginDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
