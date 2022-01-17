import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPORevenueComponent } from './total-porevenue.component';

describe('TotalPORevenueComponent', () => {
  let component: TotalPORevenueComponent;
  let fixture: ComponentFixture<TotalPORevenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalPORevenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPORevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
