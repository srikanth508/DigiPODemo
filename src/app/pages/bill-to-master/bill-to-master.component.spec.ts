import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillToMasterComponent } from './bill-to-master.component';

describe('BillToMasterComponent', () => {
  let component: BillToMasterComponent;
  let fixture: ComponentFixture<BillToMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillToMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillToMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
