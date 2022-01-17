import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PomsService } from '../../../poms.service';
import { NgDateRangePickerOptions } from 'ng-daterangepicker';
import { formatDate } from "@angular/common";
import { ActivatedRoute } from '@angular/router';

import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import * as FileSaver from 'file-saver';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-po-order-items',
  templateUrl: './po-order-items.component.html',
  styleUrls: ['./po-order-items.component.css']
})
export class PoOrderItemsComponent implements OnInit {
  options: NgDateRangePickerOptions;
  dummylist: any;
  constructor(public pomservice: PomsService, private activatedroute: ActivatedRoute, private spinner: NgxSpinnerService) { }

  public itemid: any;
  itemslist: any;
  public id: any;
  public term: any;
  public count: any;
  public grandtotal: any;
  public CategoryList: any;
  public subCategoryList: any;
  public categoryname: any;
  public subcategoryname: any;
  public genaratorid: any;
  public showactions: any;
  ngOnInit() {
    this.spinner.show();
    this.genaratorid = localStorage.getItem('genaratorid');
    if (this.genaratorid == undefined) {
      this.showactions = 0;
    }
    else {
      this.showactions = 1;
    }
    this.activatedroute.params.subscribe(params => {

      this.itemid = params['id'];
      this.getpurchaseorderitems()
    }
    )
    this.getcategorymaster()
    this.getpoo()

    this.pomservice.GetSubCategoryMaster().subscribe(data => {

      this.subCategoryList = data;
    });
  }
  purchaseorderlist: any;
  pono: any;
  vendorname: any;

  public getpoo() {
    this.pomservice.GetPurchaseOrder().subscribe(data => {
      debugger
      this.purchaseorderlist = data;
      var purchase = this.purchaseorderlist.filter(x => x.id == this.itemid)
      debugger
      debugger

      this.pono = purchase[0].poNo,
        this.vendorname = purchase[0].supplierName

    })
  }





  public GetCategoryName(even) {

    this.categoryname = even.target.value;
    if (this.categoryname == 0) {
      this.itemslist = this.dummylist;
      this.count = this.itemslist.length;
    }
    else {
      this.pomservice.GetPurchaseOrderDetailsByPurchaseOrderID(this.itemid).subscribe(data => {
        this.itemslist = data;
        this.itemslist = this.itemslist.filter(x => x.categoryName == this.categoryname);
        this.count = this.itemslist.length;
        this.grandtotal = 0
        for (let i = 0; i < this.itemslist.length; i++) {
          this.grandtotal = Number(this.grandtotal) + Number(this.itemslist[i].totalPrice)
        }
      }, error => {

      })
    }
  }
  public GetSubCategoryName(even) {
    this.subcategoryname = even.target.value;
    if (this.subcategoryname == 0) {
      this.itemslist = this.dummylist;
      this.count = this.itemslist.length;
    }
    else {
      this.pomservice.GetPurchaseOrderDetailsByPurchaseOrderID(this.itemid).subscribe(data => {
        this.itemslist = data;
        this.itemslist = this.itemslist.filter(x => x.subCategoryName == this.subcategoryname);
        this.count = this.itemslist.length;
        this.grandtotal = 0
        for (let i = 0; i < this.itemslist.length; i++) {
          this.grandtotal = Number(this.grandtotal) + Number(this.itemslist[i].totalPrice)
        }
      }, error => {

      })
    }
  }

  public getcategorymaster() {
    this.pomservice.GetCategoryMaster().subscribe(data => {

      this.CategoryList = data

    })

  }

  public getpurchaseorderitems() {
    this.pomservice.GetPurchaseOrderDetailsByPurchaseOrderID(this.itemid).subscribe(data => {
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

  public getglmasterexcel() {
    let hhh = this.tableToJson(document.getElementById('POREPORTS'));
    this.exportAsExcelFile(hhh, "PO Items");
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

}
