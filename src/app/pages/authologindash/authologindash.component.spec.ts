import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthologindashComponent } from './authologindash.component';

describe('AuthologindashComponent', () => {
  let component: AuthologindashComponent;
  let fixture: ComponentFixture<AuthologindashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthologindashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthologindashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
