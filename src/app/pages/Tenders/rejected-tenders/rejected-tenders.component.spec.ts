import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedTendersComponent } from './rejected-tenders.component';

describe('RejectedTendersComponent', () => {
  let component: RejectedTendersComponent;
  let fixture: ComponentFixture<RejectedTendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedTendersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedTendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
