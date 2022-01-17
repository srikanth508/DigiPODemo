import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMasterDashboardComponent } from './item-master-dashboard.component';

describe('ItemMasterDashboardComponent', () => {
  let component: ItemMasterDashboardComponent;
  let fixture: ComponentFixture<ItemMasterDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemMasterDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMasterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
