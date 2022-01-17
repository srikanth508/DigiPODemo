import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierItemsDashComponent } from './supplier-items-dash.component';

describe('SupplierItemsDashComponent', () => {
  let component: SupplierItemsDashComponent;
  let fixture: ComponentFixture<SupplierItemsDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierItemsDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierItemsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
