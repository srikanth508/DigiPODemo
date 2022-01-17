import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PomsService } from '../../poms.service';
import { ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import * as FileSaver from 'file-saver';
import { NgDateRangePickerOptions } from 'ng-daterangepicker';
import { formatDate } from "@angular/common";
@Component({
  selector: 'app-supplier-accepted-orders',
  templateUrl: './supplier-accepted-orders.component.html',
  styleUrls: ['./supplier-accepted-orders.component.css']
})
export class SupplierAcceptedOrdersComponent implements OnInit {
  options: NgDateRangePickerOptions;
  constructor(public pomservice: PomsService) { }



  public supplierid: any;
  public orderslist: any;
  public itemslist: any;
  public acceptorderid: any;
  public remarks: any;
  public pid: any;
  public receivername: any;
  public sendername: any;
  public receiverid: any;
  public message: any;
  public chatid: any;
  public count: any;
  public grandtotal: any;
  public term: any;

  SDate = new Date();
  EDate = new Date();
  value: any;
  public startdate: any;
  public enddate: any;
  public todaydate: any;
  public companylist: any;
  public requisioner: any;
  ngOnInit() {
    this.supplierid = localStorage.getItem('Supplierid');

    this.options = {
      theme: 'default',
      range: 'tm',
      dayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      presetNames: ['This Month', 'Last Month', 'This Week', 'Last Week', 'This Year', 'Last Year', 'Start', 'End'],
      dateFormat: 'yyyy/MM/dd',
      outputFormat: 'YYYY/MM/DD',
      startOfWeek: 1
    };

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let newformat = hours >= 12 ? 'PM' : 'AM';
    // Find current hour in AM-PM Format 
    hours = hours % 12;
    // To display "0" as "12" 
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? 0 + minutes : minutes;

    var kkk = this.SDate.setDate(this.SDate.getDate() - 300);
    var lll = this.EDate.setDate(this.EDate.getDate() + 300);

    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    this.todaydate = formatDate(myDate, format, locale);

    this.startdate = formatDate(kkk, format, locale);
    this.enddate = formatDate(lll, format, locale);

    this.GetSupplierOrders();
    this.Getbuyingcompany()
  }

  public Getbuyingcompany() {
    this.pomservice.GetBuyingCompanyMaster().subscribe(
      data => {
        this.companylist = data;

      },
      error => { }
    );
  }
  dummlist: any;
  public GetSupplierOrders() {
    
    this.pomservice.GetApprovedPurchaseOrdersBySupplierID(this.supplierid, this.startdate, this.enddate).subscribe(data => {
      this.dummlist = data;
      this.orderslist = this.dummlist.filter(x => x.supplierAccept == 1 && x.delivered == 0)
      this.count = this.orderslist.length;

      this.grandtotal = 0
      for (let i = 0; i < this.orderslist.length; i++) {
        this.grandtotal = Number(this.grandtotal) + Number(this.orderslist[i].totalAmountwithtax)
      }
      
    }, error => {

    })
  }
  public GetPurchaseOrderID(id) {
    
    this.pomservice.GetPurchaseOrderDetailsByPurchaseOrderID(id).subscribe(data => {
      this.itemslist = data;
      
    }, error => {

    })
  }

  selectedDate(data) {
    
    var sdate = data.split('-')
    this.startdate = sdate[0]
    this.enddate = sdate[1]
    this.GetSupplierOrders()
  }
  public getglmasterexcel() {
    let hhh = this.tableToJson(document.getElementById('POREPORTS'));
    this.exportAsExcelFile(hhh, "Supplier Orders");
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
      for (var j = 1; j < tableRow.cells.length - 1; j++) {
        rowData[headers[j]] = tableRow.cells[j].innerHTML;
      } data.push(rowData);
      document.getElementById('table_rowhtml').innerHTML=rowData['PODESCRIPTION'] ? rowData['PODESCRIPTION'] :"";
      rowData['PODESCRIPTION']=document.getElementById('table_rowhtml').innerText;
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


  public GetRequisoner(even) {
    this.requisioner = even.target.value;

    if (even.target.value != 0) {
      this.requisioner = even.target.value;
      this.orderslist = this.dummlist.filter(x => x.companyName == this.requisioner && x.supplierAccept == 1 && x.delivered == 0)
      this.grandtotal = 0;
      for (let i = 0; i < this.orderslist.length; i++) {
        this.grandtotal = Number(this.grandtotal) + Number(this.orderslist[i].total)
      }
      this.count = this.orderslist.length;
    }
    else {
      this.GetSupplierOrders()
    }
  }




  public UpdateDeliverPurchaseOrder(id) {
    
    Swal.fire({
      title: 'Are you sure?',
      text: 'Have You Delivered This Product!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delivered it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.pomservice.UpdateDeliverPurchaseOrder(id).subscribe(res => {
          let test = res;
          this.GetSupplierOrders();
        })
        Swal.fire(
          'Delivered!',
          'This PO has been Delivered.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'PO Is Not Delivered :)',
          'error'
        )
        this.GetSupplierOrders();
      }
    })
  }
}
