import { Component, OnInit } from "@angular/core";
import { PomsService } from "../../poms.service";
import Swal from "sweetalert2";
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import * as FileSaver from 'file-saver';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: "app-supplier-master-dashboard",
  templateUrl: "./supplier-master-dashboard.component.html",
  styleUrls: ["./supplier-master-dashboard.component.css"]
})
export class SupplierMasterDashboardComponent implements OnInit {
  constructor(public pomservice: PomsService,private spinner: NgxSpinnerService) { }
  public supplierlist: any;
  public term: any;
  public suppliername: any;
  public countrylist: any;
  public countryname: any;
  public countryid: any;
  public statelist: any;
  public stateid: any;
  public citylist: any;
  public cityid: any;
  public statename: any;
  public cityname: any;
  public count: any;
  public dummsuplierlist:any;

  
  p: number = 1;
  ngOnInit() {
    this.spinner.show();
    this.GetSuppliermaster();
    this.getcountrymaster();
  }

  public GetSuppliermaster() {
    debugger
    this.pomservice.GetSupplierMaster().subscribe(
      data => {
        this.supplierlist = data;
        this.spinner.hide();
        this.dummsuplierlist=data;
        this.count = this.supplierlist.length;
      },
      error => { }
    );
  }

  public DeleteSupplierMaster(id) {
    
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this Data!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it"
    }).then(result => {
      if (result.value) {
        this.pomservice.DeleteSupplierMaster(id).subscribe(res => {
          let test = res;
          this.GetSuppliermaster();
        });
        Swal.fire("Deleted!", "Your Data has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your Data  is safe :)", "error");
        this.GetSuppliermaster();
      }
    });
  }

  public GetSupplierName(even) {
    
    this.suppliername = even.target.value;

    if(even.target.value!=0)
    {
      this.supplierlist=this.dummsuplierlist.filter(x=>x.supplierName==this.suppliername)
      this.count = this.supplierlist.length;
    }
    else 
    {
      this.GetSuppliermaster()
    }
  }

  public getcountrymaster() {
    this.pomservice.GetCountryMaster().subscribe(
      data => {
        this.countrylist = data;
      },
      error => { }
    );
  }

  public GetCountryName(even) {
    
    let list = even.target.value.split(",");
    this.countryname = list[0];
    this.countryid = list[1];
    this.GetStateMasterbycountryid();
  }
  public GetStateMasterbycountryid() {
    this.pomservice.GetStateMasterByCountryID(this.countryid).subscribe(
      data => {
        this.statelist = data;
      },
      error => { }
    );
  }
  public GetStateName(even) {
    let list1 = even.target.value.split(",");
    this.statename = list1[0];
    this.stateid = list1[1];
    this.GetCityMasterbyStateid();
  }
  public GetCityMasterbyStateid() {
    this.pomservice.GetCityMasterByStateID(this.stateid).subscribe(
      data => {
        this.citylist = data;
      },
      error => { }
    );
  }
  public GetCityName(even) {
    let list2 = even.target.value.split(",");
    this.cityname = list2[0];
    this.cityid = list2[1];
  }

  public DeactiveSupplier(id) {
    
    Swal.fire({
      title: "Are you sure?",
      text: "You Want to Deactivate This Supplier!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Deactivate it!",
      cancelButtonText: "No, keep it"
    }).then(result => {
      if (result.value) {
        this.pomservice.GetSupplierInActiveStatus(id).subscribe(res => {
          let test = res;
          this.GetSuppliermaster();
        });
        Swal.fire("Success!", "The Supplier Has Deactivated.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your Supplier  is safe :)", "error");
        this.GetSuppliermaster();
      }
    });
  }

  public ActiveSupplier(id) {
    
    Swal.fire({
      title: "Are you sure?",
      text: "You Want to Activate This Supplier!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Activate it!",
      cancelButtonText: "No, keep it"
    }).then(result => {
      if (result.value) {
        this.pomservice.GetSupplierActiveStatus(id).subscribe(res => {
          let test = res;
          this.GetSuppliermaster();
        });
        Swal.fire("Success!", "Supplier has Activated.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your Supplier is safe :)", "error");
        this.GetSuppliermaster();
      }
    });
  }


  public getglmasterexcel() {
    let hhh = this.tableToJson(document.getElementById('POREPORTS'));
    this.exportAsExcelFile(hhh, "Suppliers");
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
      for (var j = 0; j < tableRow.cells.length - 2; j++) {
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



  public pageChanged(even) {
    
    let fgdgfgd = even;
    this.p = even;
  }

}
