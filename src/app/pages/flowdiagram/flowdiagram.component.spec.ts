import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowdiagramComponent } from './flowdiagram.component';

describe('FlowdiagramComponent', () => {
  let component: FlowdiagramComponent;
  let fixture: ComponentFixture<FlowdiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowdiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowdiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
