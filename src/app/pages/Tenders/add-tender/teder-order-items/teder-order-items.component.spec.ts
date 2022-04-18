import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TederOrderItemsComponent } from './teder-order-items.component';

describe('TederOrderItemsComponent', () => {
  let component: TederOrderItemsComponent;
  let fixture: ComponentFixture<TederOrderItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TederOrderItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TederOrderItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
