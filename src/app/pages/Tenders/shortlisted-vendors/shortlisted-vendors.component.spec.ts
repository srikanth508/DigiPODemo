import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlistedVendorsComponent } from './shortlisted-vendors.component';

describe('ShortlistedVendorsComponent', () => {
  let component: ShortlistedVendorsComponent;
  let fixture: ComponentFixture<ShortlistedVendorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortlistedVendorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortlistedVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
