import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderDashComponent } from './tender-dash.component';

describe('TenderDashComponent', () => {
  let component: TenderDashComponent;
  let fixture: ComponentFixture<TenderDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenderDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
