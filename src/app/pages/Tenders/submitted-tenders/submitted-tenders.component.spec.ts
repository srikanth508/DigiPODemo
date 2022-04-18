import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedTendersComponent } from './submitted-tenders.component';

describe('SubmittedTendersComponent', () => {
  let component: SubmittedTendersComponent;
  let fixture: ComponentFixture<SubmittedTendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedTendersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedTendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
