import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorTendersComponent } from './vendor-tenders.component';

describe('VendorTendersComponent', () => {
  let component: VendorTendersComponent;
  let fixture: ComponentFixture<VendorTendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorTendersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorTendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
