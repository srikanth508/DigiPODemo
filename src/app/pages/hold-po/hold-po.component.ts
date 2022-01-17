import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { PomsService } from "../../poms.service";
import Swal from "sweetalert2";
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-hold-po',
  templateUrl: './hold-po.component.html',
  styleUrls: ['./hold-po.component.css']
})
export class HoldPOComponent implements OnInit {

  constructor(public pomservice: PomsService, private spinner: NgxSpinnerService) { }

  public holdlist:any;
  public count:any;
  public term:any;
  p: number = 1;
  genaratorid:any;
  ngOnInit() {
    this.spinner.show();
    this.genaratorid = localStorage.getItem('genaratorid');
    this.Gethold();
  }

  public Gethold() {
    this.pomservice.Gethold(this.genaratorid).subscribe(
      data => {
        this.spinner.hide();
        this.holdlist = data;
        this.count= this.holdlist.length;
       
      },
      error => { }
    );
  }

  public poitemlist:any;

  public GetPoNO(pono)
  {
    this.pomservice.GetHOLN(pono).subscribe(data=>{
debugger
      this.poitemlist=data;

    })
  }

  public pageChanged(even) {
    
    let fgdgfgd = even;
    this.p = even;
  }
}
