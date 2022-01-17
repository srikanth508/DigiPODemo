import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoGenaratorLoginDashComponent } from './po-genarator-login-dash.component';

describe('PoGenaratorLoginDashComponent', () => {
  let component: PoGenaratorLoginDashComponent;
  let fixture: ComponentFixture<PoGenaratorLoginDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoGenaratorLoginDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoGenaratorLoginDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
