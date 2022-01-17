import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSupplierItemMasterComponent } from './edit-supplier-item-master.component';

describe('EditSupplierItemMasterComponent', () => {
  let component: EditSupplierItemMasterComponent;
  let fixture: ComponentFixture<EditSupplierItemMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSupplierItemMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSupplierItemMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
