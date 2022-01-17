import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPoComponent } from './my-po.component';

describe('MyPoComponent', () => {
  let component: MyPoComponent;
  let fixture: ComponentFixture<MyPoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
