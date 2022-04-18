import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehousPosComponent } from './warehous-pos.component';

describe('WarehousPosComponent', () => {
  let component: WarehousPosComponent;
  let fixture: ComponentFixture<WarehousPosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehousPosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehousPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
