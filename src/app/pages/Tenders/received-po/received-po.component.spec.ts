import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedPoComponent } from './received-po.component';

describe('ReceivedPoComponent', () => {
  let component: ReceivedPoComponent;
  let fixture: ComponentFixture<ReceivedPoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedPoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedPoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
