import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { PomsService } from "../../poms.service";
import Swal from "sweetalert2";
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import * as FileSaver from 'file-saver';
import { NgDateRangePickerOptions } from 'ng-daterangepicker';
import { formatDate } from "@angular/common";
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import { timer } from 'rxjs';
@Component({
  selector: 'app-old-po',
  templateUrl: './old-po.component.html',
  styleUrls: ['./old-po.component.css']
})
export class OldPOComponent implements OnInit {
  options: NgDateRangePickerOptions;

  constructor(public pomservice: PomsService, private spinner: NgxSpinnerService) { }

  public genaratorid: any;
  public startdate: any;
  public todaydate: any;
  SDate = new Date();
  EDate = new Date();
  public enddate: any;
  oldlist: any;
  count: any;
  p: number = 1;
  value: any;
  term: any;

  ngOnInit() {
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

    var kkk = this.SDate.setDate(this.SDate.getDate() - 10000);
    var lll = this.EDate.setDate(this.EDate.getDate() + 10);
    debugger
    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    this.todaydate = formatDate(myDate, format, locale);
    debugger
    this.startdate = formatDate(kkk, format, locale);
    this.enddate = formatDate(lll, format, locale);
    this.spinner.show();
    this.GetOldPO();
  }


  public GetOldPO() {
    debugger
    this.pomservice.GetPurchaseOrderOldPO(this.startdate, this.enddate, this.genaratorid).subscribe(
      data => {
        this.spinner.hide();
        this.oldlist = data;
        this.count = this.oldlist.length;

      },
      error => { }
    );
  }



  public poitemlist: any;

  public GetPoNO(pono) {
    this.pomservice.GetPurchaseOrderDetailsOldPO(pono).subscribe(data => {
      debugger
      this.poitemlist = data;

    })
  }

  public pageChanged(even) {

    let fgdgfgd = even;
    this.p = even;
  }

  selectedDate(data) {
    this.spinner.show();
    var sdate = data.split('-')
    this.startdate = sdate[0];
    this.enddate = sdate[1];
    this.GetOldPO();
  }















  // pdf


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
  taxpercentage: any;
  note:any;
  public getpodetails(details) {
    debugger
    this.purchaseorderid = details.id,

      this.PoNumber = details.poNo,
      this.ordertype = details.orderType,
      this.duedate = details.duedate,
      this.terms = details.terms,
      this.fobcode = details.fobCode,
      this.shipvia = details.shipViaID,
      this.date = details.orderdate,
      this.accountno = details.accountNo,
      this.billtoname = details.billtoname,
      this.billtoaddress = details.billtoaddress,
      this.billtoemail = details.billtoemail,
      this.suppliernme = details.supplierName,
      this.suppliercode = details.supplierID,
      this.supplierstreet = details.supplierstreet,
      this.supplieraddress = details.supplieraddress,
      this.shiptoname = details.shiptoname,
      this.shiptostrret = details.shiptostreet,
      this.shiptoaddress = details.shiptoaddress,
      this.dept = details.dept,
      this.potype = details.poType,
      this.buyername = details.buyersID,
      this.totalamount = details.total,
      this.note = details.note,
      // this.totaltaxamount = details.totaltaxamount,
      // this.totalAmountwithtax = details.totalAmountwithtax,
      //latest code
      this.billtocity = details.billtocity,
      this.billtostate = details.billtostate,
      this.billtozipcode = details.billtozipcode,
      this.supplierstate = details.supplierstate,
      this.suppliercity = details.suppliercity,
      this.supplierzipcode = details.supplierzipcode,

      this.shiptocity = details.shiptocity,
      this.shiptostate = details.shiptostate,
      this.shiptozipcode = details.shiptozipcode,
      this.taxpercentage = details.taxPercentage,

      this.totaltaxamount = Number(this.totalamount) * Number(this.taxpercentage) / 100;
      this.totalAmountwithtax = Number(this.totalamount) + Number(this.totaltaxamount)


    this.GetItems()
  }


  public dummylist: any;
  itemslist: any;
  grandtotal: any;
  public GetItems() {
    this.pomservice.GetPurchaseOrderDetailsOldPO(this.purchaseorderid).subscribe(data => {
      debugger
      this.dummylist = data;
      this.itemslist = this.dummylist;
      this.count = this.itemslist.length;
      debugger
      // this.totalamount = 0
      // for (let i = 0; i < this.itemslist.length; i++) {
      //   debugger
      //   this.totalamount = Number(this.totalamount) + Number(this.itemslist[i].totalprice)
      // }
    

      debugger
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


}
