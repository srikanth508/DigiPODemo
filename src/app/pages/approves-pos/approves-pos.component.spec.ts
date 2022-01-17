import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovesPosComponent } from './approves-pos.component';

describe('ApprovesPosComponent', () => {
  let component: ApprovesPosComponent;
  let fixture: ComponentFixture<ApprovesPosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovesPosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovesPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
