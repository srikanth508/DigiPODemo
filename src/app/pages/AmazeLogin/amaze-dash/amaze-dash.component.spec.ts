import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazeDashComponent } from './amaze-dash.component';

describe('AmazeDashComponent', () => {
  let component: AmazeDashComponent;
  let fixture: ComponentFixture<AmazeDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmazeDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazeDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
