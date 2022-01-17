import { Component, OnInit } from '@angular/core';
import { PomsService } from '../../poms.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accounting-code-master',
  templateUrl: './accounting-code-master.component.html',
  styleUrls: ['./accounting-code-master.component.css']
})
export class AccountingCodeMasterComponent implements OnInit {

  AccountingCode: any;
  Description: any;
  saveupdatebtn: number;
  AccountingCodeID: any;
  categorylist: any;
  potypeid: any;

  constructor(private PomsService: PomsService, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {

      this.AccountingCodeID = params['id'];
      if (this.AccountingCodeID == undefined) {
        this.saveupdatebtn = 0;
      }
      else {
        this.saveupdatebtn = 1;
        this.PomsService.GetAccountingCodeMaster().subscribe(data => {

          this.categorylist = data;
          this.categorylist = this.categorylist.filter(x => x.id == this.AccountingCodeID);
          this.AccountingCode = this.categorylist[0].accountingCode;
          this.Description = this.categorylist[0].accountingDescription;
          this.potypeid = this.categorylist[0].poTypeID;

        })
      }
    }
    )
    this.potypeid = "";

  }




  public GetPoTypeID(even) {
    this.potypeid = even.target.value;
  }

  public InsertAccountingCodeMaster() {
    if (this.potypeid == 0) {
      Swal.fire('Please Select PO Type')
    }
    else {
      var Entity = {
        "AccountingCode": this.AccountingCode,
        "AccountingDescription": this.Description,
        "PoTypeID": this.potypeid

      }
      this.PomsService.InsertAccountingCodeMaster(Entity).subscribe((data: any) => {
        if (data != undefined) {

          Swal.fire('success', 'Accounting Code Master Saved Successfully', 'success');
          location.href = "#/AccountingCodeMasterDashboard"

        }
      });
    }
  }


  public UpdateAccountingCodeMaster() {

    var Entity = {
      "ID": this.AccountingCodeID,
      "AccountingCode": this.AccountingCode,
      "AccountingDescription": this.Description,
      "PoTypeID": this.potypeid
    }
    this.PomsService.UpdateAccountingCodeMaster(Entity).subscribe((data: any) => {
      if (data != undefined) {

        Swal.fire('success', 'Accounting Code Master updated Successfully', 'success');
        location.href = "#/AccountingCodeMasterDashboard"

      }
    });
  }
}
