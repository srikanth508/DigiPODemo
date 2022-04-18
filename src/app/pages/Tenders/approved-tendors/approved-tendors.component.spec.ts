import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedTendorsComponent } from './approved-tendors.component';

describe('ApprovedTendorsComponent', () => {
  let component: ApprovedTendorsComponent;
  let fixture: ComponentFixture<ApprovedTendorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedTendorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedTendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
