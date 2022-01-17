import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxAdditionsComponent } from './tax-additions.component';

describe('TaxAdditionsComponent', () => {
  let component: TaxAdditionsComponent;
  let fixture: ComponentFixture<TaxAdditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxAdditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxAdditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
