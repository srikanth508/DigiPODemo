import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovePODashComponent } from './approve-podash.component';

describe('ApprovePODashComponent', () => {
  let component: ApprovePODashComponent;
  let fixture: ComponentFixture<ApprovePODashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovePODashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovePODashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
