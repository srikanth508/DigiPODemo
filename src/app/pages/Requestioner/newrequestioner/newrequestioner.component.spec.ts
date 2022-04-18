import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrequestionerComponent } from './newrequestioner.component';

describe('NewrequestionerComponent', () => {
  let component: NewrequestionerComponent;
  let fixture: ComponentFixture<NewrequestionerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewrequestionerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewrequestionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
