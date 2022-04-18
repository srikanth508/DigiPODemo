import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedTendersComponent } from './accepted-tenders.component';

describe('AcceptedTendersComponent', () => {
  let component: AcceptedTendersComponent;
  let fixture: ComponentFixture<AcceptedTendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedTendersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedTendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
