import { Component, OnInit } from '@angular/core';
import { PomsService } from '../../poms.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-supplier-reports',
  templateUrl: './supplier-reports.component.html',
  styleUrls: ['./supplier-reports.component.css']
})
export class SupplierReportsComponent implements OnInit {

  constructor(public pomservice: PomsService) { }

  public supplierid: any;
  public status: any;
  public reports: any;
  public itemid: any;
  public startdate: any;
  public enddate: any;
  public itemslist: any;
  public grandtotal: any;
  public count: any;
  public acceptorderid: any;
  public remarks: any;

  ngOnInit() {
    this.supplierid = localStorage.getItem('Supplierid');
    this.status = localStorage.getItem('Status');
    this.startdate = localStorage.getItem("startdate");
    this.enddate = localStorage.getItem("enddate");
    this.GetSupplierReports()
  }

  public GetSupplierReports() {
    
    this.pomservice.GetReportsBySupplierID(this.supplierid, this.status, this.startdate, this.enddate).subscribe(data => {
      this.reports = data;
      this.count = this.reports.length;

      this.grandtotal = 0;
      for (let i = 0; i < this.reports.length; i++) {
        this.grandtotal = Number(this.grandtotal) + Number(this.reports[i].totalAmountwithtax)
      }
      
    }, error => {

    })
  }
  public GetOrderID(id) {
    this.itemid = id;
    this.getpurchaseorderitems()
  }

  public getpurchaseorderitems() {
    this.pomservice.GetPurchaseOrderDetailsByPurchaseOrderID(this.itemid).subscribe(data => {
      this.itemslist = data;
    }, error => {

    })
  }



  public getglmasterexcel() {
    let hhh = this.tableToJson(document.getElementById('POREPORTS'));
    this.exportAsExcelFile(hhh, "PO Reports");
  }


  public tableToJson(table) {
    
    var data = []; // first row needs to be headers
    var headers = [];
    for (var i = 1; i < table.rows[0].cells.length; i++) {
      
      headers[i] = table.rows[0].cells[i].innerHTML.toUpperCase().replace(/ /gi, '');
    }
    // go through cells 
    for (var i = 1; i < table.rows.length; i++) {
      var tableRow = table.rows[i];
      var rowData = {};
      for (var j = 1; j < tableRow.cells.length; j++) {
        rowData[headers[j]] = tableRow.cells[j].innerHTML;
        document.getElementById('table_rowhtml').innerHTML=rowData['PODESCRIPTION'] ? rowData['PODESCRIPTION'] :"";
        rowData['PODESCRIPTION']=document.getElementById('table_rowhtml').innerText;
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


  public GetAcceptOrderID(id) {
    
    this.acceptorderid = id;
  }
  public UpdateAcceptRemarks() {
    var entity = {
      'ID': this.acceptorderid,
      'SupplierRemarks': this.remarks,
    }
    this.pomservice.UpdatePurchaseOrderSupplierAccept(entity).subscribe(res => {
      let data = res;
      Swal.fire('Success', 'Order Accepted Successfully');

      this.GetSupplierReports()
    })
  }

  public rejectid: any;


  public GetRejectID(id) {
    this.rejectid = id;
  }



  public UpdateRejectOrder() {
    var entity = {
      'ID': this.rejectid,
      'SupplierRemarks': this.remarks,
    }
    this.pomservice.UpdatePurchaseOrderSupplierReject(entity).subscribe(res => {
      let data = res;
      Swal.fire('Success', 'Order Cancelled Successfully');

      this.GetSupplierReports()
    })
  }

}
