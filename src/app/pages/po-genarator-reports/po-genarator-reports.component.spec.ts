import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoGenaratorReportsComponent } from './po-genarator-reports.component';

describe('PoGenaratorReportsComponent', () => {
  let component: PoGenaratorReportsComponent;
  let fixture: ComponentFixture<PoGenaratorReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoGenaratorReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoGenaratorReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
