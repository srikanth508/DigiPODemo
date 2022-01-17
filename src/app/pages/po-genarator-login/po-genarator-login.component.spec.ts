import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoGenaratorLoginComponent } from './po-genarator-login.component';

describe('PoGenaratorLoginComponent', () => {
  let component: PoGenaratorLoginComponent;
  let fixture: ComponentFixture<PoGenaratorLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoGenaratorLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoGenaratorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
