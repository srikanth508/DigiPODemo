import { Component, OnInit } from '@angular/core';
import { PomsService } from '../../poms.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import * as FileSaver from 'file-saver';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-authologindash',
  templateUrl: './authologindash.component.html',
  styleUrls: ['./authologindash.component.css']
})
export class AuthologindashComponent implements OnInit {

  constructor(private PomsService: PomsService, private spinner: NgxSpinnerService) { }

  public authologin: any;
  public departmentlist: any;
  public departmentname: any;
  public term: any;
  public count: any;
  public dummauthologin: any;


  ngOnInit() {
    this.spinner.show();
    this.GetAuthologin()
    this.GetDepartment();
  }

  public GetAuthologin() {
    this.PomsService.GetAuthorizationLogins().subscribe(data => {
      this.spinner.hide();
      this.authologin = data;
      this.dummauthologin = data;
      this.count = this.authologin.length;
    })
  }

  public GetDepartment() {
    this.PomsService.GetDepartmentMaster().subscribe(data => {
      this.departmentlist = data;
    });
  }

  public GetDepartmentName(even) {
    this.departmentname = even.target.value;



    if (even.target.value != 0) {
      this.authologin = this.dummauthologin.filter(x => x.departmentName == this.departmentname)
      this.count = this.authologin.length;
    }
    else {
      this.GetAuthologin()
    }


  }


  public DisabeleAuthorizationLogins(id) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want To Disable This Person!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Disable it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.PomsService.DisabeleAuthorizationLogins(id).subscribe(res => {
          let test = res;
          this.GetAuthologin();
        })
        Swal.fire(
          'Disabled!',
          'Person has Disabled.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Person  is safe :)',
          'error'
        )
        this.GetAuthologin();
      }
    })
  }



  public EnableAuthorizationLogins(id) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want To Enable This Person!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Enable it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.PomsService.EnableAuthorizationLogins(id).subscribe(res => {
          let test = res;
          this.GetAuthologin();
        })
        Swal.fire(
          'Enabled!',
          'Person has Enabled.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Person  is safe :)',
          'error'
        )
        this.GetAuthologin();
      }
    })
  }


  public getglmasterexcel() {
    let hhh = this.tableToJson(document.getElementById('POREPORTS'));
    this.exportAsExcelFile(hhh, "Authorization Logins");
  }

  public tableToJson(table) {

    var data = []; // first row needs to be headers
    var headers = [];
    for (var i = 0; i < table.rows[0].cells.length; i++) {
      headers[i] = table.rows[0].cells[i].innerHTML.toUpperCase().replace(/ /gi, '');
    }
    // go through cells 
    for (var i = 1; i < table.rows.length; i++) {
      var tableRow = table.rows[i];
      var rowData = {};
      for (var j = 0; j < tableRow.cells.length - 1; j++) {
        rowData[headers[j]] = tableRow.cells[j].innerHTML;
      } data.push(rowData);
    }
    return data;
  }

  public exportAsExcelFile(json: any[], excelFileName: string): void {

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }




  id: any;
  Password: any;

  public GetChangePassword(id, password) {
    this.id = id;
    this.Password = password
  }

  public pp: any;

  public updatepassword() {
    var valpassword = this.PomsService.strongpassword(this.Password);
    if (valpassword == false) {

      this.pp = 1;
    }
    else {
      var entity = {
        'ID': this.id,
        'Password': this.Password
      }
      this.PomsService.UpdateAuthorizationLoginsPassword(entity).subscribe(data => {
        let res = data;
        Swal.fire('Password Changed Successfully');
        document.getElementById('close').click();
        this.pp = 0;
        this.GetAuthologin()
      })
    }
  }
}
