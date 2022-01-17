import { Component, OnInit } from '@angular/core';
import { PomsService } from '../../poms.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import * as FileSaver from 'file-saver';
import { NgxSpinnerService } from "ngx-spinner";
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import { timer } from 'rxjs';
@Component({
  selector: 'app-approve-po-reports',
  templateUrl: './approve-po-reports.component.html',
  styleUrls: ['./approve-po-reports.component.css']
})
export class ApprovePoReportsComponent implements OnInit {

  constructor(public pomservice: PomsService, private spinner: NgxSpinnerService) { }
  public authorizationid: any;
  public approvereports: any;
  public status: any;
  public itemid: any;
  public itemslist: any;
  public startdate: any;
  public enddate: any;
  public count: any;
  public grandtotal: any;
  public approveorderid: any;
  public authostage: any;
  public remarks: any;
  public rejectid: any;
  public rejectstage: any;
  term: any;
  p: number = 1;
  ngOnInit() {

    this.startdate = localStorage.getItem("startdate");
    this.enddate = localStorage.getItem("enddate");
    this.authorizationid = localStorage.getItem('authorizatioid');
    this.status = localStorage.getItem('Status');

    if (this.status == 0) {
      this.GetAwaitingorders()
    }
    else {
      this.GetAuthorizationMaster();
    }

  }


  public GetAuthorizationMaster() {

    this.pomservice.GetApprovedPOReportsBYAuthoID(this.authorizationid, this.status, this.startdate, this.enddate).subscribe(data => {
      this.approvereports = data;
      this.count = this.approvereports.length;
      this.grandtotal = 0;
      for (let i = 0; i < this.approvereports.length; i++) {
        this.grandtotal = Number(this.grandtotal) + Number(this.approvereports[i].totalAmountwithtax)
      }

    }, error => {

    })
  }




  public GetAwaitingorders() {

    this.pomservice.GetApprovedPOReportsBYAuthoIDAwaitingReports(this.authorizationid, this.status, this.startdate, this.enddate).subscribe(data => {
      this.approvereports = data;
      this.count = this.approvereports.length;
      this.grandtotal = 0;
      for (let i = 0; i < this.approvereports.length; i++) {
        this.grandtotal = Number(this.grandtotal) + Number(this.approvereports[i].totalAmountwithtax)
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

        // document.getElementById('table_rowhtml').innerHTML = rowData['PODESCRIPTION'] ? rowData['PODESCRIPTION'] : "";
        // rowData['PODESCRIPTION'] = document.getElementById('table_rowhtml').innerText;
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








  public ApprovePurchseOrder(id, autho) {

    this.approveorderid = id;
    this.authostage = autho;
  }


  public UpdateApproveRemarks() {
    var entity = {
      'ID': this.approveorderid,
      'StageOfAccept': this.authostage,
      'Remarks': this.remarks
    }
    this.pomservice.UpdatePurchaseOrderAcceptStatus(entity).subscribe(res => {
      let data = res;
      Swal.fire('Success', 'Order Approved Successfully');
      this.remarks = "";
      this.GetAuthorizationMaster()
    })
  }


  public GetRejectID(id, autho) {

    this.rejectid = id;
    this.rejectstage = autho;
  }


  public UpdateRejectRemarks() {
    var entity = {
      'ID': this.rejectid,
      'StageOfAccept': this.rejectstage,
      'Remarks': this.remarks
    }
    this.pomservice.UpdatePurchaseOrderCancelStatus(entity).subscribe(res => {
      let data = res;
      Swal.fire('Success', 'Order Cancelled Successfully');
      this.remarks = "";
      this.GetAuthorizationMaster()
    })
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
  shiptocity: any;
  shiptostate: any;
  shiptozipcode: any;
  note: any;
  Amendementpo: any;
  instruction: any;


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
      this.shiptozipcode = details.shiptozipcode,
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
    var data = document.getElementById('content');
    html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      var doc = new jsPDF('p', 'mm');
      var position = 0;
      while (heightLeft >= 0) {
        const contentDataURL = canvas.toDataURL('image/png')
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.deletePage(1)
      this.spinner.hide();
      doc.save('PO.pdf');
    });
  }





  htmltoPDF()
  {
    this.spinner.show();
      // parentdiv is the html element which has to be converted to PDF
      html2canvas(document.querySelector("#content")).then(canvas => {
  
        var pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);
  
        var imgData  = canvas.toDataURL("image/jpeg", 1.0);
        pdf.addImage(imgData,0,0,canvas.width, canvas.height);

        var pdf1 = pdf.output('blob');
        var file = new File([pdf1], "PO" + ".pdf");
  
        let body = new FormData();
        debugger
        body.append('Dan', file);
        // this.pomservice.UploadPO(file).subscribe(res => {
        //   ;
        //   this.emailattchementurl.push(res);
        //    this.sendmail1()
        //   debugger
        // });

        pdf.save('PO.pdf');
        this.spinner.hide();
  
    });
  
  }





  public pageChanged(even) {

    let fgdgfgd = even;
    this.p = even;
  }

}
