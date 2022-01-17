import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMasterComponent } from './text-master.component';

describe('TextMasterComponent', () => {
  let component: TextMasterComponent;
  let fixture: ComponentFixture<TextMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
