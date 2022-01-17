import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingCodeMasterDashboardComponent } from './accounting-code-master-dashboard.component';

describe('AccountingCodeMasterDashboardComponent', () => {
  let component: AccountingCodeMasterDashboardComponent;
  let fixture: ComponentFixture<AccountingCodeMasterDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingCodeMasterDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingCodeMasterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
