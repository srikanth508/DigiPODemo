import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PomsService } from '../../../poms.service';
import { ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import * as FileSaver from 'file-saver';
import { NgDateRangePickerOptions } from 'ng-daterangepicker';
import { formatDate } from "@angular/common";
@Component({
  selector: 'app-vendor-tenders',
  templateUrl: './vendor-tenders.component.html',
  styleUrls: ['./vendor-tenders.component.css']
})
export class VendorTendersComponent implements OnInit {
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
  public dummlist: any;
  price: any;
  notes: any;
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





  public GetSupplierOrders() {

    this.pomservice.GetTendersByVendorID(this.supplierid, this.startdate, this.enddate).subscribe(data => {
      this.dummlist = data;
      this.orderslist = this.dummlist.filter(x => x.acceptCancel != 3 && x.acceptCancel != 2)
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


  public GetRequisoner(even) {
    this.requisioner = even.target.value;
    if (even.target.value != 0) {
      this.requisioner = even.target.value;
      this.orderslist = this.dummlist.filter(x => x.companyName == this.requisioner && x.supplierAccept == 0)
      this.grandtotal = 0;
      for (let i = 0; i < this.orderslist.length; i++) {
        this.grandtotal = Number(this.grandtotal) + Number(this.orderslist[i].totalAmountwithtax)
      }
      this.count = this.orderslist.length;
    }
    else {
      this.orderslist = this.dummlist.filter(x => x.supplierAccept == 0)
      this.count = this.orderslist.length;
    }

  }


  selectedDate(data) {

    var sdate = data.split('-')
    this.startdate = sdate[0]
    this.enddate = sdate[1]
    this.GetSupplierOrders()
  }



  public GetAcceptOrderID(id) {

    this.acceptorderid = id;


    this.pomservice.GetTender_Vendors(this.acceptorderid, 1).subscribe(res => {
      let data = res;
      this.GetSupplierOrders()
      Swal.fire('Success', 'Tender Accepted Successfully');

    
    })
  }
  public UpdateAcceptRemarks() {
    var entity = {
      'ID': this.acceptorderid,
      'SupplierRemarks': this.remarks,
    }
    this.pomservice.UpdatePurchaseOrderSupplierAccept(entity).subscribe(res => {
      let data = res;
      Swal.fire('Success', 'Tender Accepted Successfully');

      this.GetSupplierOrders()
    })
  }

  public rejectid: any;


  public GetRejectID(id) {
    this.rejectid = id;

    this.pomservice.GetTender_Vendors(this.rejectid, 2).subscribe(res => {
      let data = res;
      this.GetSupplierOrders()
      Swal.fire('Success', 'Tender Cancelled Successfully');
      
    })
  }



  public UpdateRejectOrder() {
    var entity = {
      'ID': this.rejectid,
      'SupplierRemarks': this.remarks,
    }
    this.pomservice.UpdatePurchaseOrderSupplierReject(entity).subscribe(res => {
      let data = res;
      Swal.fire('Success', 'Order Cancelled Successfully');

      this.GetSupplierOrders()
    })
  }








  public UpdateDeliverPurchaseOrder(id) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'Have You Delevered This Product!',
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



  public GetChatMessagesID(id, userName, supplierName, pOGenaratorID) {

    this.pid = id;
    this.receivername = userName;
    this.sendername = supplierName;
    this.receiverid = pOGenaratorID;

    this.pomservice.GetNotificationMaster(this.receiverid, this.supplierid, this.pid).subscribe(data => {

      if (data.length == 0) {

        var ett = {
          'POGenaratorID': this.receiverid,
          'SupplierID': this.supplierid,
          'POID': this.pid
        }
        this.pomservice.InsertNotificationMaster(ett).subscribe(data => {
          this.chatid = data;
        })
      }
      else {
        this.chatid = data[0].id;
      }
    })

  }



  public insertmessage() {

    var entity = {
      'ChatID': this.chatid,
      'SenderName': this.sendername,
      'Messages': this.message
    }
    this.pomservice.InsertNotificatin_Messages(entity).subscribe(data => {
      Swal.fire('Completed', 'Message Sent Successfully');
      this.message = "";
    })

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
        document.getElementById('table_rowhtml').innerHTML = rowData['PODESCRIPTION'] ? rowData['PODESCRIPTION'] : "";
        rowData['PODESCRIPTION'] = document.getElementById('table_rowhtml').innerText;
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







  signatureattachmentssss = []
  showsignaturephoto = []
  attchmenturl = []

  public onSignaturUpload(abcd) {


    this.signatureattachmentssss.push(abcd.addedFiles[0]);
    this.DoctorSignatureUpload();
    // }
    Swal.fire('Added Successfully');


  }

  public DoctorSignatureUpload() {
    this.pomservice.UploadTenderAttachments(this.signatureattachmentssss).subscribe(res => {

      this.attchmenturl.push(res);


    })

  }
  id: any;

  GetVendorid(id, details) {
    this.id = id;
    this.price = details.total
  }


  updatedetails() {
    var entity = {
      'ID': this.id,
      'AttachmentsUrl': this.attchmenturl[0],
      'Notes': this.notes,
      'Price': this.price
    }
    this.pomservice.UpdateTender_Vendors(entity).subscribe(data => {
      Swal.fire("Tender Submitted Successfilly");
      this.GetSupplierOrders();
      this.notes="";
    })
  }
}
