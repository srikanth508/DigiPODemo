import { Component, OnInit } from '@angular/core';
import { PomsService } from "../../poms.service";
import Swal from "sweetalert2";
import { from } from "rxjs";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import * as FileSaver from 'file-saver';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  ItemList: any;
  public CategoryList: any;
  public subCategoryList: any;
  public term: any;
  public categoryname: any;
  public subcategoryname: any;
  public count: any;
  public dummitemlist: any;
  public dummsubcategorylist: any;
  public dummsubcategory: any;

  p: number = 1;
  genaratorid: any;
  showactions: any;
  constructor(private PomsService: PomsService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.GetItemMaster();

    this.genaratorid = localStorage.getItem('genaratorid');
    if (this.genaratorid == undefined) {
      this.showactions = 0;
    }
    else {
      this.showactions = 1;
    }

    this.PomsService.GetCategoryMaster().subscribe(data => {

      this.CategoryList = data;
    });
    this.PomsService.GetSubCategoryMaster().subscribe(data => {

      this.dummsubcategory = data;

    });
  }

  public GetItemMaster() {
    this.PomsService.GetItemMaster().subscribe(data => {
      this.spinner.hide();
      this.ItemList = data;
      this.dummitemlist = data;
      this.dummsubcategorylist = data;
      this.count = this.ItemList.length;
    });
  }





  public GetCategoryName(even) {

    this.categoryname = even.target.value;

    if (even.target.value != 0) {
      this.ItemList = this.dummitemlist.filter(x => x.categoryName == this.categoryname)

      this.subCategoryList = this.dummsubcategory.filter(x => x.categoryName == this.categoryname)
      this.count = this.ItemList.length;
    }
    else {
      this.GetItemMaster()
    }
  }

  public GetSubCategoryName(even) {
    this.subcategoryname = even.target.value;

    if (even.target.value != 0) {
      this.ItemList = this.dummsubcategorylist.filter(x => x.subCategoryName == this.subcategoryname)
      this.count = this.ItemList.length;
    }
    else {
      this.GetItemMaster()
    }
  }



  public getglmasterexcel() {
    let hhh = this.tableToJson(document.getElementById('POREPORTS'));
    this.exportAsExcelFile(hhh, "Items");
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

        document.getElementById('table_rowhtml').innerHTML = rowData['DESCRIPTION'] ? rowData['DESCRIPTION'] : "";
        rowData['DESCRIPTION'] = document.getElementById('table_rowhtml').innerText;

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





  public Disablecategoryy(id) {

    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this Data!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Disable it!",
      cancelButtonText: "No, keep it"
    }).then(result => {
      if (result.value) {
        this.PomsService.DisableItemMaster(id).subscribe(res => {
          let test = res;
          this.GetItemMaster();
        });
        Swal.fire("Deleted!", "Your Data has been Disabled.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your Data  is safe :)", "error");
        this.GetItemMaster();
      }
    });
  }



  // public Delete(ID) {

  //   this.PomsService.DeleteItemMaster(ID).subscribe(res => {


  //     this.GetItemMaster();
  //     Swal.fire("success", " Item Deleted Successfully", "success");
  //   });
  // }




  public Delete(id) {

    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this Data!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete it!",
      cancelButtonText: "No, keep it"
    }).then(result => {
      if (result.value) {
        this.PomsService.DeleteItemMaster(id).subscribe(res => {
          let test = res;
          this.GetItemMaster();
        });
        Swal.fire("Deleted!", "Your Data has been Deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your Data  is safe :)", "error");
        this.GetItemMaster();
      }
    });
  }






  public EnableCategory(id) {

    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this Data!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Enable it!",
      cancelButtonText: "No, keep it"
    }).then(result => {
      if (result.value) {
        this.PomsService.EnableItemMaster(id).subscribe(res => {
          let test = res;
          this.GetItemMaster();
        });
        Swal.fire("Deleted!", "Your Data has been Enabled.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your Data  is safe :)", "error");
        this.GetItemMaster();
      }
    });
  }


  public pageChanged(even) {

    let fgdgfgd = even;
    this.p = even;
  }
}
