import { Component, OnInit } from '@angular/core';
import { PomsService } from "../../poms.service";
import Swal from "sweetalert2";
import { from } from "rxjs";
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import * as FileSaver from 'file-saver';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-order-type-master',
  templateUrl: './order-type-master.component.html',
  styleUrls: ['./order-type-master.component.css']
})
export class OrderTypeMasterComponent implements OnInit {

  constructor(private PomsService: PomsService, private spinner: NgxSpinnerService, private activatedroute: ActivatedRoute) { }


  public id: any;
  public saveupdatebtn: any;
  public orderlist: any;
  public ordertype: any;

  ngOnInit() {

    this.activatedroute.params.subscribe(params => {

      this.id = params['id'];
      if (this.id == undefined) {
        this.saveupdatebtn = 0;
      }
      else {
        this.saveupdatebtn = 1;
        this.PomsService.GetOrderTypeMaster().subscribe(data => {
          debugger
          this.orderlist = data;
          var list = this.orderlist.filter(x => x.id == this.id);
          this.ordertype = list[0].orderType;
          debugger
        })
      }
    }
    )
  }




  
  public InsertOrderTypeMaster() {

    var Entity = {
      "OrderType": this.ordertype
    }
    this.PomsService.InsertOrderTypeMaster(Entity).subscribe((data: any) => {

      if (data != undefined) {

        Swal.fire('success', 'Details Saved Successfully', 'success');
        location.href = "#/OrderTypeMasterDash"

      }
    });
  }




  public UpdateOrderType() {
    var Entity = {
      "ID": this.id,
      "OrderType": this.ordertype
    }
    this.PomsService.UpdateOrderTypeMaster(Entity).subscribe((data: any) => {

      if (data != undefined) {

        Swal.fire('success', 'Order Type Updated Successfully', 'success');
        location.href = "#/OrderTypeMasterDash"

      }
    });
  }
}
