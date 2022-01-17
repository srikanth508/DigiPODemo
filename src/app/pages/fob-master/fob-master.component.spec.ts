import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FobMasterComponent } from './fob-master.component';

describe('FobMasterComponent', () => {
  let component: FobMasterComponent;
  let fixture: ComponentFixture<FobMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FobMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FobMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
