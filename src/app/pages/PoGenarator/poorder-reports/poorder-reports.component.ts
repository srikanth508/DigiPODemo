import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PomsService } from '../../../poms.service';
import { NgDateRangePickerOptions } from 'ng-daterangepicker';
import { formatDate } from "@angular/common";
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import * as FileSaver from 'file-saver';
import { NgxSpinnerService } from "ngx-spinner";
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import { timer } from 'rxjs';

@Component({
  selector: 'app-poorder-reports',
  templateUrl: './poorder-reports.component.html',
  styleUrls: ['./poorder-reports.component.css']
})
export class POOrderReportsComponent implements OnInit {
  options: NgDateRangePickerOptions;
  constructor(public pomservice: PomsService, private spinner: NgxSpinnerService) { }
  public purchaseorderlist: any;
  public pono: any;
  public orderid: any;
  public itemslist: any;
  public itemid: any;
  public genaratorid: any;
  SDate = new Date();
  EDate = new Date();
  value: any;
  public startdate: any;
  public enddate: any;
  public todaydate: any;
  public departmentlist: any;
  public departmentname: any;
  public dummlist: any;
  public status: any;
  public supplierid: any;
  public count: any;
  public suppliername: any;
  public supplierlist: any;
  public requisioner: any;
  public companylist: any;
  public grandtotal: any;
  public term: any;
  p: number = 1;


  ngOnInit() {
    this.spinner.show();
    this.genaratorid = localStorage.getItem('genaratorid');
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

    this.GetPurchaseOrder();
    this.GetDepartmentMater();

    this.GetSuppliermaster()
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

  public GetSuppliermaster() {
    this.pomservice.GetSupplierMaster().subscribe(
      data => {
        this.supplierlist = data;

      },
      error => { }
    );
  }


  public GetPurchaseOrder() {
    this.pomservice.GetPurchaseOrderByGenaratorID(this.genaratorid, this.startdate, this.enddate).subscribe(data => {
      this.spinner.hide();
      this.dummlist = data;
      this.purchaseorderlist = this.dummlist.filter(x => x.status == 'Raised'&& x.amendmentcount == 1)
      this.count = this.purchaseorderlist.length;

      this.grandtotal = 0;
      for (let i = 0; i < this.purchaseorderlist.length; i++) {
        this.grandtotal = Number(this.grandtotal) + Number(this.purchaseorderlist[i].totalAmountwithtax)
      }
    }, error => {

    })
  }


  public GetStatusID(even) {
    if (even.target.value == '1') {

      this.pomservice.GetPurchaseOrderByGenaratorID(this.genaratorid, this.startdate, this.enddate).subscribe(data => {
        this.purchaseorderlist = data;
        this.dummlist = this.purchaseorderlist;
        this.purchaseorderlist = this.dummlist.filter(x => x.status == this.status)
        this.count = this.purchaseorderlist.length;
        this.grandtotal = 0;
        for (let i = 0; i < this.purchaseorderlist.length; i++) {
          this.grandtotal = Number(this.grandtotal) + Number(this.purchaseorderlist[i].totalAmountwithtax)
        }
      }, error => {

      })
      this.purchaseorderlist = this.dummlist.filter(x => x.status == 'Raised')
    }
    else if (even.target.value == '2') {
      this.pomservice.GetPurchaseOrderByGenaratorID(this.genaratorid, this.startdate, this.enddate).subscribe(data => {
        this.purchaseorderlist = data;
        this.dummlist = this.purchaseorderlist;
        this.purchaseorderlist = this.dummlist.filter(x => x.status == 'Authorized')
        this.count = this.purchaseorderlist.length;
        this.grandtotal = 0;
        for (let i = 0; i < this.purchaseorderlist.length; i++) {
          this.grandtotal = Number(this.grandtotal) + Number(this.purchaseorderlist[i].totalAmountwithtax)
        }
      }, error => {

      })
    }
    else if (even.target.value == '3') {
      this.pomservice.GetPurchaseOrderByGenaratorID(this.genaratorid, this.startdate, this.enddate).subscribe(data => {
        this.purchaseorderlist = data;
        this.dummlist = this.purchaseorderlist;
        this.purchaseorderlist = this.dummlist.filter(x => x.status == 'Cancelled')
        this.count = this.purchaseorderlist.length;
        this.grandtotal = 0;
        for (let i = 0; i < this.purchaseorderlist.length; i++) {
          this.grandtotal = Number(this.grandtotal) + Number(this.purchaseorderlist[i].totalAmountwithtax)
        }
      }, error => {

      })
    }
    else if (even.target.value == '4') {
      this.pomservice.GetPurchaseOrderByGenaratorID(this.genaratorid, this.startdate, this.enddate).subscribe(data => {
        this.purchaseorderlist = data;
        this.dummlist = this.purchaseorderlist;
        this.purchaseorderlist = this.dummlist.filter(x => x.status == 'Accepted')
        this.count = this.purchaseorderlist.length;
        this.grandtotal = 0;
        for (let i = 0; i < this.purchaseorderlist.length; i++) {
          this.grandtotal = Number(this.grandtotal) + Number(this.purchaseorderlist[i].totalAmountwithtax)
        }
      }, error => {

      })
    }
    else if (even.target.value == '5') {
      this.pomservice.GetPurchaseOrderByGenaratorID(this.genaratorid, this.startdate, this.enddate).subscribe(data => {
        this.purchaseorderlist = data;
        this.dummlist = this.purchaseorderlist;
        this.purchaseorderlist = this.dummlist.filter(x => x.status == 'Delivered')
        this.count = this.purchaseorderlist.length;
        this.grandtotal = 0;
        for (let i = 0; i < this.purchaseorderlist.length; i++) {
          this.grandtotal = Number(this.grandtotal) + Number(this.purchaseorderlist[i].totalAmountwithtax)
        }
      }, error => {

      })
    }
    else if (even.target.value == '6') {
      this.pomservice.GetPurchaseOrderByGenaratorID(this.genaratorid, this.startdate, this.enddate).subscribe(data => {
        this.purchaseorderlist = data;
        this.dummlist = this.purchaseorderlist;
        this.purchaseorderlist = this.dummlist.filter(x => x.status == 'Supplier Rejected')
        this.count = this.purchaseorderlist.length;
        this.grandtotal = 0;
        for (let i = 0; i < this.purchaseorderlist.length; i++) {
          this.grandtotal = Number(this.grandtotal) + Number(this.purchaseorderlist[i].totalAmountwithtax)
        }
      }, error => {

      })
    }
    else if (even.target.value == '0') {
      this.GetPurchaseOrder();
    }
  }

  public GetDepartmentMater() {
    this.pomservice.GetDepartmentMaster().subscribe(data => {
      this.departmentlist = data;
    }, error => {
    })
  }

  public GetDepartmentName(even) {
    if (even.target.value != 0) {

      this.departmentname = even.target.value;
      this.purchaseorderlist = this.dummlist.filter(x => x.short == this.departmentname)
      this.grandtotal = 0;
      for (let i = 0; i < this.purchaseorderlist.length; i++) {
        this.grandtotal = Number(this.grandtotal) + Number(this.purchaseorderlist[i].totalAmountwithtax)
      }
      this.count = this.purchaseorderlist.length;
    }
    else if (even.target.value == 0) {
      this.GetPurchaseOrder()
    }

  }


  public GetSupplierName(even) {

    this.suppliername = even.target.value;

    if (even.target.value != 0) {
      this.departmentname = even.target.value;
      this.purchaseorderlist = this.dummlist.filter(x => x.supplierName == this.suppliername)
      this.grandtotal = 0;
      for (let i = 0; i < this.purchaseorderlist.length; i++) {
        this.grandtotal = Number(this.grandtotal) + Number(this.purchaseorderlist[i].totalAmountwithtax)
      }
      this.count = this.purchaseorderlist.length;
    }
    else {
      this.GetPurchaseOrder()
    }

  }


  selectedDate(data) {

    var sdate = data.split('-')
    this.startdate = sdate[0]
    this.enddate = sdate[1]
    this.GetPurchaseOrder()
  }


  public GetItemPono(poNo, id, supplierid) {

    this.pono = poNo;
    this.orderid = id;
    this.supplierid = supplierid;
    localStorage.setItem('PONO', this.pono);
    localStorage.setItem('OrderID', this.orderid);
    localStorage.setItem('SupplierID', this.supplierid)
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





  public DeletePurchaseOrderDetails(id) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.pomservice.DeletePurchaseOrderDetails(id).subscribe(res => {
          let test = res;
          this.getpurchaseorderitems();
        })
        Swal.fire(
          'Deleted!',
          'Your Data has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Data  is safe :)',
          'error'
        )
        this.getpurchaseorderitems();
      }
    })
  }







  public deletepurchaseoredre(id) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.pomservice.DeletePurchaseOrder(id).subscribe(res => {
          let test = res;
          this.GetPurchaseOrder();
        })
        Swal.fire(
          'Deleted!',
          'Your Data has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Data  is safe :)',
          'error'
        )
        this.GetPurchaseOrder();
      }
    })
  }


  public pageChanged(even) {

    let fgdgfgd = even;
    this.p = even;
  }



  public getglmasterexcel() {
    let hhh = this.tableToJson(document.getElementById('POREPORTS'));
    this.exportAsExcelFile(hhh, "Purchase Orders");
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
      this.departmentname = even.target.value;
      this.purchaseorderlist = this.dummlist.filter(x => x.companyName == this.requisioner)
      this.grandtotal = 0;
      for (let i = 0; i < this.purchaseorderlist.length; i++) {
        this.grandtotal = Number(this.grandtotal) + Number(this.purchaseorderlist[i].totalAmountwithtax)
      }
      this.count = this.purchaseorderlist.length;
    }
    else {
      this.GetPurchaseOrder()
    }

  }



  public PoNumber: any;
  public ordertype: any;
  public duedate: any;
  public terms: any;
  public fobcode: any;
  public shipvia: any;
  public date: any;
  public accountno: any;
  public billtoname: any;
  public billtoaddress: any;
  public billtoemail: any;
  public suppliercode: any;
  public supplierstreet: any;
  public suppliernme: any;
  public supplieraddress: any;

  public shiptoname: any;
  public shiptostrret: any;
  public shiptoaddress: any;
  public dept: any
  public potype: any;
  public buyername: any;
  public purchaseorderid: any;
  public totalamount: any;
  public totaltaxamount: any;
  public totalAmountwithtax: any;



  billtocity: any;
  billtostate: any;
  billtozipcode: any;
  supplierstate: any;
  suppliercity: any;
  supplierzipcode: any;
  shiptocity:any;
  shiptostate:any;
  shiptozipcode:any;
  note:any;
  Amendementpo:any;
  instruction:any;
  public getpodetails(details) {
    this.purchaseorderid = details.id,
      this.PoNumber = details.poNo,
      this.ordertype = details.orderType,
      this.duedate = details.duedate,
      this.terms = details.terms,
      this.fobcode = details.fobDescription,
      this.shipvia = details.shipViaDescription,
      this.date = details.date,
      this.accountno = details.accountNo,
      this.billtoname = details.clientName,
      this.billtoaddress = details.billtoaddress,
      this.billtoemail = details.billtoemail,
      this.suppliernme = details.supplierName,
      this.suppliercode = details.supplierCode,
      this.supplierstreet = details.supplierstreet,
      this.supplieraddress = details.supplieraddress,

      this.shiptoname = details.shiptoname,
      this.shiptostrret = details.shiptostreet,
      this.shiptoaddress = details.shiptoaddress,
      this.dept = details.departmentname,
      this.potype = details.poType,
      this.buyername = details.buyerName,
      this.totalamount = details.total,
      this.totaltaxamount = details.totaltaxamount,
      this.totalAmountwithtax = details.totalAmountwithtax,
      this.note = details.note,
      this.billtocity = details.billtocity,
      this.billtostate = details.billtostate,
      this.billtozipcode = details.billtozipcode,

      this.supplierstate = details.supplierstate,
      this.suppliercity = details.suppliercity,
      this.supplierzipcode = details.supplierzipcode,

      this.shiptocity = details.shiptocity,
      this.shiptostate = details.shiptostate,
      this.shiptozipcode=details.shiptozipcode,
      this.Amendementpo = details.amendentpopdf,
      this.instruction = details.instruction

      this.GetItems()

  }



  public dummylist: any;

  public GetItems() {
    this.pomservice.GetPurchaseOrderDetailsByPurchaseOrderID(this.purchaseorderid).subscribe(data => {
      this.spinner.hide();
      this.dummylist = data;
      this.itemslist = this.dummylist;
      this.count = this.itemslist.length;
      this.grandtotal = 0
      for (let i = 0; i < this.itemslist.length; i++) {
        this.grandtotal = Number(this.grandtotal) + Number(this.itemslist[i].totalPrice)
      }
    }, error => {

    })
  }


  public SavePDF() {
    
    this.spinner.show();
    // parentdiv is the html element which has to be converted to PDF
    html2canvas(document.querySelector("#content")).then(canvas => {

      var pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);

      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      pdf.addImage(imgData, 0, 0, canvas.width, canvas.height);

      this.spinner.hide();
      pdf.save('PO.pdf');
     
      document.getElementById('Close').click();
  

    });
  }



  // public SavePDF() {
  //   debugger
  //       let pdfContent = window.document.getElementById("content");
  //       var doc = new jsPDF('p', 'mm', "a4");

  //       debugger
  //       const pdfUrl = 'assets/images/PO.pdf';
  //       const pdfName = 'PO Terms And Conditions';

  //       html2canvas(pdfContent).then(function (canvas) {


  //         var imgData = canvas.toDataURL('image/jpeg', 1.0);

  //         doc.setFontSize(3);

  //         doc.addImage(imgData, 'JPEG', 10, 10, 180, 150);
  //         doc.save('Purchase Order.pdf');
  //         FileSaver.saveAs(pdfUrl, pdfName);
  //       });
  //     }



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
          this.GetPurchaseOrder();
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
        this.GetPurchaseOrder();
      }
    })
  }
}
