import { Component, OnInit } from '@angular/core';
import { PomsService } from "../../poms.service";
import Swal from "sweetalert2";
import { from } from "rxjs";
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import * as FileSaver from 'file-saver';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dept-master',
  templateUrl: './dept-master.component.html',
  styleUrls: ['./dept-master.component.css']
})
export class DeptMasterComponent implements OnInit {

  constructor(private PomsService: PomsService, private spinner: NgxSpinnerService, private activatedroute: ActivatedRoute) { }

  public deptid: any;
  public saveupdatebtn: any;
  public departmentlist: any;
  public departmentname: any;


  ngOnInit() {

    this.activatedroute.params.subscribe(params => {

      this.deptid = params['id'];
      if (this.deptid == undefined) {
        this.saveupdatebtn = 0;
      }
      else {
        this.saveupdatebtn = 1;
        this.PomsService.GetDepartmentMaster().subscribe(data => {
          debugger
          this.departmentlist = data;
          var list = this.departmentlist.filter(x => x.id == this.deptid);
          this.departmentname = list[0].short;
          debugger
        })
      }
    }
    )
  }




  public InsertDepartment() {

    var Entity = {
      "Short": this.departmentname
    }
    this.PomsService.InsertDepartmentMaster(Entity).subscribe((data: any) => {

      if (data != undefined) {

        Swal.fire('success', 'Details Saved Successfully', 'success');
        location.href = "#/DeptMasterDash"

      }
    });
  }




  public Updatedept() {
    var Entity = {
      "ID": this.deptid,
      "Short": this.departmentname
    }
    this.PomsService.UpdateDepartmentMaster(Entity).subscribe((data: any) => {

      if (data != undefined) {

        Swal.fire('success', 'Department Updated Successfully', 'success');
        location.href = "#/DeptMasterDash"

      }
    });
  }
}
