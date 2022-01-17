import { Component, OnInit } from "@angular/core";
import { PomsService } from "../../poms.service";
import Swal from "sweetalert2";
import { ActivatedRoute } from "@angular/router";
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import * as FileSaver from 'file-saver';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-ship-via-master-dashboard",
  templateUrl: "./ship-via-master-dashboard.component.html",
  styleUrls: ["./ship-via-master-dashboard.component.css"]
})
export class ShipViaMasterDashboardComponent implements OnInit {
  ShipViaList: any;
  public term: any;
  public count: any;

  constructor(
    private PomsService: PomsService,
    private activatedroute: ActivatedRoute, private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    
 this.spinner.show();
    this.GetShipViaMaster();
  }

  public GetShipViaMaster() {
    this.spinner.hide();
    this.PomsService.GetShipViaMaster().subscribe(data => {
      
      this.ShipViaList = data;
      this.count = this.ShipViaList.length;
    });
  }

  // public Delete(ID) {
    
  //   this.PomsService.DeleteShipViaMaster(ID).subscribe(res => {
      
  //     this.GetShipViaMaster();
  //     Swal.fire("success", "Ship Via Code  Deleted Successfully", "success");
  //   });
  // }



  public Delete(id) {
    
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this Data!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Enable it!",
      cancelButtonText: "No, keep it"
    }).then(result => {
      if (result.value) {
        this.PomsService.DeleteShipViaMaster(id).subscribe(res => {
          let test = res;
          this.GetShipViaMaster();
        });
        Swal.fire("Deleted!", "Your Data has been Deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your Data  is safe :)", "error");
        this.GetShipViaMaster();
      }
    });
  }



  public getglmasterexcel() {
    let hhh = this.tableToJson(document.getElementById('POREPORTS'));
    this.exportAsExcelFile(hhh, "Ship Via");
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
