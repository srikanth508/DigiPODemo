import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedpossComponent } from './approvedposs.component';

describe('ApprovedpossComponent', () => {
  let component: ApprovedpossComponent;
  let fixture: ComponentFixture<ApprovedpossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedpossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedpossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
