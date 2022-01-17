import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingCodeMasterComponent } from './accounting-code-master.component';

describe('AccountingCodeMasterComponent', () => {
  let component: AccountingCodeMasterComponent;
  let fixture: ComponentFixture<AccountingCodeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingCodeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingCodeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
