import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingCompanyMasterComponent } from './buying-company-master.component';

describe('BuyingCompanyMasterComponent', () => {
  let component: BuyingCompanyMasterComponent;
  let fixture: ComponentFixture<BuyingCompanyMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyingCompanyMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyingCompanyMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
