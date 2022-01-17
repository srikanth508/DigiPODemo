import { Component, OnInit } from "@angular/core";
import { PomsService } from "../../poms.service";
import Swal from "sweetalert2";
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import * as FileSaver from 'file-saver';

import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: "app-ship-to-master-dashboard",
  templateUrl: "./ship-to-master-dashboard.component.html",
  styleUrls: ["./ship-to-master-dashboard.component.css"]
})
export class ShipToMasterDashboardComponent implements OnInit {
  public shiplist: any;
  public term: any;
  public count: any;
  public countrylist: any;
  public countryname: any;
  public countryid: any;
  public statelist: any;
  public statename: any;
  public stateid: any;
  public citylist: any;
  public cityname: any;
  public cityid: any;
  public dummshiplist:any;
  
  constructor(public pomservice: PomsService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    
 this.spinner.show();
    this.getshiplist();
    this.getcountrymaster()
  }
  public getshiplist() {
    this.pomservice.GetShipToMaster().subscribe(
      data => {
        this.spinner.hide();
        this.shiplist = data;
        this.dummshiplist=data;
        this.count = this.shiplist.length;
      },
      error => { }
    );
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

  
    if (even.target.value != 0) {
      this.shiplist = this.dummshiplist.filter(x => x.countryID == this.countryid)
      this.count = this.shiplist.length;
    }
    else {
      this.getshiplist()
    }


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

    if (even.target.value != 0) {
      this.shiplist = this.dummshiplist.filter(x => x.stateID == this.stateid)
      this.count = this.shiplist.length;
    }
    else {
      this.getshiplist();
      this.cityid = 0;
      this.stateid = 0;
      this.statelist.length = 0;
      this.citylist.length = 0;
      this.countryid = 0;
      this.countrylist.length = 0;
      this.getcountrymaster();
    }

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

    if (even.target.value != 0) {
      this.shiplist = this.dummshiplist.filter(x => x.cityID == this.cityid)
      this.count = this.shiplist.length;
    }
    else {
      this.getshiplist();
      this.cityid = 0;
      this.stateid = 0;
      this.statelist.length = 0;
      this.citylist.length = 0;
      this.countryid = 0;
      this.countrylist.length = 0;
      this.getcountrymaster();
    }
  }

  public DeleteShipToMaster(id) {
    
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this Data!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it"
    }).then(result => {
      if (result.value) {
        this.pomservice.DeleteShipToMaster(id).subscribe(res => {
          let test = res;
          this.getshiplist();
        });
        Swal.fire("Deleted!", "Your Data has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your Data  is safe :)", "error");
        this.getshiplist();
      }
    });
  }


  public getglmasterexcel() {
    let hhh = this.tableToJson(document.getElementById('POREPORTS'));
    this.exportAsExcelFile(hhh, "Ship Master");
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

  public pageChanged(even) {
    
    let fgdgfgd = even;
    this.p = even;
  }


 p: number = 1;
}
