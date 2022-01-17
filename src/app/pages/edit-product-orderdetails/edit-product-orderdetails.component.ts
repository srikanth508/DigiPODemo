import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PomsService } from '../../poms.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-edit-product-orderdetails',
  templateUrl: './edit-product-orderdetails.component.html',
  styleUrls: ['./edit-product-orderdetails.component.css']
})
export class EditProductOrderdetailsComponent implements OnInit {

  constructor(public pomservice: PomsService, private activatedroute: ActivatedRoute) { }
  public id: any;
  public purchaselist: any;
  public itemid: any;
  public pono: any;
  public itemname: any;
  public itemdesc: any;
  public unit: any;
  public quantity: any;
  public duedate: any;
  public cost: any;
  public totalprice: any;
  public ItemList: any;
  public itemno: any;
  public purchaseid: any;


  ngOnInit() {
    this.activatedroute.params.subscribe(params => {

      this.id = params['id'];
      this.GetPurchaseOrderDetails();
      this.GetItemMaster();
      this.getshiplist();
    })
  }


  public shiplist: any;

  public getshiplist() {
    this.pomservice.GetShipToMaster().subscribe(
      data => {
        this.shiplist = data;

      },
      error => { }
    );
  }



  public shiptoid: any;

  public GetShipToID(even) {
    this.shiptoid = even.target.value;
  }


  public GetItemMaster() {
    this.pomservice.GetItemMaster().subscribe(data => {
      this.ItemList = data;
    })
  }


  public GetPurchaseOrderDetails() {
    this.pomservice.GetPurchaseOrderDetails().subscribe(data => {
      this.purchaselist = data;
      var list = this.purchaselist.filter(x => x.id == this.id)
      this.pono = list[0].poNo,
        this.itemid = list[0].itemID,
        this.itemdesc = list[0].extraDescription,
        this.unit = list[0].unit,
        this.quantity = list[0].quantity,
        this.duedate = list[0].duedate,
        this.cost = list[0].price,
        // this.totalprice = list[0].totalPrice,
        this.itemname = list[0].itemName,
        this.purchaseid = list[0].purchaseOrderID,
        this.taxpercentage = list[0].taxPercentage,
        this.granstotall = list[0].totalPrice,
        this.grandtotal = list[0].taxAmount,
        this.itemno = list[0].itemlnno,
        this.shiptoid = list[0].shipto,
        this.GetItemMaster();
      this.getshiplist();
    })
  }

  // public valuechange(even) {
  //   
  //   this.quantity = even;
  //   
  //   this.totalprice = parseInt(this.quantity) * parseInt(this.cost)
  //   
  // }

  public grandtotal: any;
  public granstotall: any;
  public taxpercentage: any;

  public valuechange(even) {

    this.quantity = even;

    this.totalprice = Number(this.quantity) * Number(this.cost);

    this.grandtotal = parseInt(this.totalprice) * (this.taxpercentage / 100);

    this.granstotall = this.grandtotal + this.totalprice

  }


  public GetDate(even) {

    this.duedate = even.target.value;;
  }






  valuechange1(even) {

    debugger
    this.cost = even
    this.totalprice = Number(this.quantity) * Number(this.cost);

    this.grandtotal = parseInt(this.totalprice) * (this.taxpercentage / 100);

    this.granstotall = this.grandtotal + this.totalprice
  }

  // public GetItemID(item: any) {
  //   
  //   this.itemid = item.itemID;
  //   var list = this.itemlist.filter(x => x.itemID == this.itemid)
  //   
  //   this.itemname = list[0].itemName,
  //     this.itemdesc = list[0].description,
  //     this.unit = list[0].unit,
  //     this.cost = list[0].cost,
  //     this.itemno = list[0].itemCode,
  //     // this.grandtotal=list[0].grandTotal,
  //     this.taxpercentage = list[0].taxPercentage;
  //   
  //   this.itemdesc = this.itemdesc.replace(/<\/?[^>]+>/ig, "");

  // }


  // public GetItemID(even) {
  //   
  //   this.itemid = even.target.value;
  //   var list = this.ItemList.filter(x => x.id == this.itemid)
  //   
  //   this.itemname = list[0].itemName,
  //     this.itemdesc = list[0].description,
  //     this.unit = list[0].unit,
  //     this.cost = list[0].cost,
  //     this.itemno = list[0].itemCode
  // }

  public updatedetilas() {

    if (this.quantity == 0) {
      Swal.fire("Please Enter Quantity");
    }
    else {
      var entity = {
        'ID': this.id,
        'PurchaseOrderID': this.purchaseid,
        'ItemID': this.itemid,
        'ItemName': this.itemname,
        'Description': this.itemdesc,
        'Unit': this.unit,
        'Quantity': this.quantity,
        'DueDate': this.duedate,
        'Price': this.cost,
        'TotalPrice': this.granstotall,
        'TaxAmount': this.grandtotal,
        'itemlnno': this.itemno,
        'uom': this.unit,
        'shipto': this.shiptoid
      }
      this.pomservice.UpdatePurchaseOrderDetails(entity).subscribe(res => {
        let data = res;
        Swal.fire('Completed', 'Data Updated Successfully');
        location.href = "#/PurchaseOrderDashboard";
        // location.href = "#/PoOrderItems/" + this.id
      })
    }
  }
}
