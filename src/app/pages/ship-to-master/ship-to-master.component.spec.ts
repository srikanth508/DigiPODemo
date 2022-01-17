import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipToMasterComponent } from './ship-to-master.component';

describe('ShipToMasterComponent', () => {
  let component: ShipToMasterComponent;
  let fixture: ComponentFixture<ShipToMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipToMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipToMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
