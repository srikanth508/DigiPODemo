import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestionerDashComponent } from './requestioner-dash.component';

describe('RequestionerDashComponent', () => {
  let component: RequestionerDashComponent;
  let fixture: ComponentFixture<RequestionerDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestionerDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestionerDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
