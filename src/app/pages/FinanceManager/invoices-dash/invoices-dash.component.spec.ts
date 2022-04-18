import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesDashComponent } from './invoices-dash.component';

describe('InvoicesDashComponent', () => {
  let component: InvoicesDashComponent;
  let fixture: ComponentFixture<InvoicesDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
