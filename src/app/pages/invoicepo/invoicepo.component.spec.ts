import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicepoComponent } from './invoicepo.component';

describe('InvoicepoComponent', () => {
  let component: InvoicepoComponent;
  let fixture: ComponentFixture<InvoicepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
