import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSubCategoryDashboardComponent } from './item-sub-category-dashboard.component';

describe('ItemSubCategoryDashboardComponent', () => {
  let component: ItemSubCategoryDashboardComponent;
  let fixture: ComponentFixture<ItemSubCategoryDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSubCategoryDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSubCategoryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
