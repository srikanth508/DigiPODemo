import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { PomsService } from "../../poms.service";
import { ActivatedRoute } from "@angular/router";
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import * as FileSaver from 'file-saver';

@Component({
  selector: "app-supplier-items-dash",
  templateUrl: "./supplier-items-dash.component.html",
  styleUrls: ["./supplier-items-dash.component.css"]
})
export class SupplierItemsDashComponent implements OnInit {
  constructor(
    public pomservice: PomsService,
    private activatedroute: ActivatedRoute
  ) { }

  public itemlist: any;
  public term: any;
  public count: any;
  public CategoryList: any;
  public subCategoryList: any;
  public categoryname: any;
  public subcategoryname: any;
  public dummitelist: any;
  public dummsubcategory: any;

  ngOnInit() {
    this.GetSupplyItems();

    this.pomservice.GetCategoryMaster().subscribe(data => {
      
      this.CategoryList = data;
    });
    this.pomservice.GetSubCategoryMaster().subscribe(data => {
      
      this.dummsubcategory = data;
    });
  }

  public GetSupplyItems() {
    
    this.pomservice.GetSupplerMasterItems().subscribe(
      data => {
        this.itemlist = data;
        this.dummitelist = data;
        this.count = this.itemlist.length;
        
      },
      error => { }
    );
  }


  public GetCategoryName(even) {
    
    this.categoryname = even.target.value;


    if (even.target.value != 0) {
      this.itemlist = this.dummitelist.filter(x => x.categoryName == this.categoryname)
      this.subCategoryList = this.dummsubcategory.filter(x => x.categoryName == this.categoryname)
      this.count = this.itemlist.length;
    }
    else {
      this.GetSupplyItems()
    }


  }
  public GetSubCategoryName(even) {
    this.subcategoryname = even.target.value;

    if (even.target.value != 0) {
      this.itemlist = this.dummitelist.filter(x => x.subCategoryName == this.subcategoryname)
      this.count = this.itemlist.length;
    }
    else {
      this.GetSupplyItems()
    }
  }
  public DeleteItems(id) {
    
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this  Item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it"
    }).then(result => {
      if (result.value) {
        this.pomservice.DeleteSupplerMasterItems(id).subscribe(data => {
          
          if (data != null || data != undefined) {
            Swal.fire("Deleted!", "Deleted Successfully", "success");
            this.GetSupplyItems();
          }
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your Item is safe :)", "error");
      }
    });
  }




  public getglmasterexcel() {
    let hhh = this.tableToJson(document.getElementById('POREPORTS'));
    this.exportAsExcelFile(hhh, "Supplier Items");
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
