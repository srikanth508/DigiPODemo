import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldPOComponent } from './old-po.component';

describe('OldPOComponent', () => {
  let component: OldPOComponent;
  let fixture: ComponentFixture<OldPOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldPOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldPOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
