import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PomsService } from '../../poms.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-purchase-order-details',
  templateUrl: './purchase-order-details.component.html',
  styleUrls: ['./purchase-order-details.component.css']
})
export class PurchaseOrderDetailsComponent implements OnInit {

  constructor(public pomservice: PomsService, private spinner: NgxSpinnerService) { }

  public pono: any;
  public ItemList: any;
  public itemid: any;
  public itemname: any;
  public itemdesc: any;
  public unit: any;
  public cost: any;
  public quantity: any;
  public totalprice: any;
  public duedate: any;
  public qwerty = [];
  public tablecount: any;
  public itemno: any;
  public orderid: any;
  public idcount: any;
  public categoryList: any;
  public categoryid: any;
  public subcategorylist: any;
  public subcategoyry: any;
  public subcategoryid: any;
  public itemdd = {};
  public dumsubcategorylist: any;
  public dumitemlist: any;
  public supplierid: any;
  public itemlist: any;
  public grandtotal: any;
  public taxpercentage: any;
  public granstotall: any;
  public unitofmeasurelist: any;
  public vendorid: any;
  public term: any;

  ngOnInit() {
    this.pono = localStorage.getItem('PONO');
    this.orderid = localStorage.getItem('OrderID');
    this.vendorid = localStorage.getItem('SupplierID');
    this.idcount = 1;

    // this.GetItemMaster();
    // this.tablecount = 0;
    // this.idcount = 1;
    // this.itemid = 0;
    // this.GetSupplyItems();
    // this.pomservice.GetCategoryMaster().subscribe(data => {

    //   this.categoryList = data;
    // })
    // this.GetSubCategoryMaster();


    // this.pomservice.GetSupplerMasterItems().subscribe(data => {
    //   this.ItemList = data;

    //   this.itemlist = this.ItemList.filter(x => x.supplierID == this.supplierid)

    //   this.itemdd = {
    //     singleSelection: true,
    //     idField: 'itemID',
    //     textField: 'itemName',
    //     selectAllText: 'Select All',
    //     unSelectAllText: 'UnSelect All',
    //     //  itemsShowLimit: 3,
    //     allowSearchFilter: true
    //   };
    // })

    // this.getshiplist();
    // this.GetUnitofMeasuer();
    // this.shiptoid=0;
  }


  // public GetUnitofMeasuer()
  // {
  //   debugger
  //   this.pomservice.GetUnitofMeasureMaster().subscribe(data=>{
  //     debugger
  //     this.unitofmeasurelist=data;
  //   })
  // }


  // public GetUnitmeasuer(even)
  // {
  //   debugger
  //   this.unit=even.target.value;
  // }


  // public shiplist: any;

  // public getshiplist() {
  //   this.pomservice.GetShipToMaster().subscribe(
  //     data => {
  //       this.shiplist = data;

  //     },
  //     error => { }
  //   );
  // }





  // public GetSubCategoryMaster() {
  //   this.pomservice.GetSubCategoryMaster().subscribe(data => {

  //     this.subcategorylist = data;
  //     this.dumsubcategorylist = this.subcategorylist;
  //   })
  // }
  // public GetItemMaster() {

  // }

  // public GetCategoryID(even) {

  //   this.categoryid = even.target.value;
  //   this.subcategorylist = this.dumsubcategorylist.filter(x => x.categoryID == this.categoryid)

  // }


  // public GetSubcategoryID(even) {

  //   this.subcategoryid = even.target.value;
  //   this.ItemList = this.dumitemlist.filter(x => x.subCategoryID == this.subcategoryid)

  // }

  // onItemDeSelect(item: any) {

  //   this.itemid = '';
  //   this.itemname = '';
  //   this.itemdesc = '';
  //   this.unit = '';
  //   this.cost = '';
  //   this.itemno = '';

  // }

  // public GetItemID(item: any) {

  //   this.itemid = item.itemID;
  //   var list = this.itemlist.filter(x => x.itemID == this.itemid)

  //   this.itemname = list[0].itemName,
  //     this.itemdesc = list[0].description,
  //     this.unit = list[0].unit,
  //     this.cost = list[0].cost,
  //     this.itemno = list[0].itemCode,
  //     // this.grandtotal=list[0].grandTotal,
  //     this.taxpercentage = list[0].taxPercentage;

  //   this.itemdesc = this.itemdesc.replace(/<\/?[^>]+>/ig, "");


  // }

  // public clearitem = []

  // public valuechange(even) {

  //   this.quantity = even;

  //   this.totalprice = parseInt(this.quantity) * parseInt(this.cost);

  //   this.grandtotal = parseInt(this.totalprice) * (this.taxpercentage / 100);

  //   this.granstotall = this.grandtotal + this.totalprice

  // }


  // public shiptoid: any;

  // public GetShipToID(even) {
  //   this.shiptoid = even.target.value;
  // }


  // public addetsils() {
  //   if (this.quantity == null) {
  //     Swal.fire("Please Select Quantity");
  //   }
  //   else if (this.itemid == null || this.itemid == "" || this.itemid == undefined) {
  //     Swal.fire("Please Select Item");
  //   }
  //   else {

  //     this.tablecount = 1;
  //     var entity = {
  //       'Sno': this.idcount,
  //       'PurchaseOrderID': this.pono,
  //       'ItemNo': this.itemno,
  //       'ItemNumber': this.itemid,
  //       'ItemName': this.itemname,
  //       'Description': this.itemdesc,
  //       'Unit': this.unit,
  //       'Quantity': this.quantity,
  //       'DueDate': this.duedate,
  //       'Price': this.totalprice,
  //       'TotalPrice': this.granstotall,
  //       'TaxPercentage': this.taxpercentage,
  //       'TaxAmount': this.grandtotal,
  //       'ShipToID': this.shiptoid
  //     }

  //     this.qwerty.push(entity);
  //     this.duedate = "";
  //     this.itemname = "";
  //     this.itemdesc = "";
  //     this.quantity = "";
  //     this.cost = "";
  //     this.totalprice = "";
  //     this.itemname = "";
  //     this.unit = "";
  //     this.taxpercentage = ""
  //     this.granstotall = ""
  //     //this.unit.length = 0;
  //     //this.ItemList.length = 0;

  //     // this.GetItemMaster()
  //     //this.itemid.length = 0;
  //     this.itemid = '';
  //     this.itemid = undefined

  //     // this.ItemList=[]
  //     //this.GetItemMaster()
  //     this.idcount = this.idcount + 1;
  //     this.clearitem = [];
  //   }
  // }

  // public insertdetails() {
  //   for (let i = 0; i < this.qwerty.length; i++) {
  //     var entity = {
  //       'PurchaseOrderID': this.orderid,
  //       'ItemID': this.qwerty[i].ItemNumber,
  //       'ItemName': this.qwerty[i].ItemName,
  //       'Description': this.qwerty[i].Description,
  //       'Unit': this.qwerty[i].Unit,
  //       'Quantity': this.qwerty[i].Quantity,
  //       'DueDate': this.qwerty[i].DueDate,
  //       'Price': this.qwerty[i].Price,
  //       'TotalPrice': this.qwerty[i].TotalPrice,
  //       'TaxPercentage': this.qwerty[i].TaxPercentage,
  //       'TaxAmount': this.qwerty[i].TaxAmount,
  //       'itemlnno': this.qwerty[i].ItemNo,
  //       'uom': this.qwerty[i].Unit,
  //       'shipto': this.qwerty[i].ShipToID,
  //     }
  //     this.pomservice.InsertPurchaseOrderDetails(entity).subscribe(data => {
  //       if (data != 0) {
  //         Swal.fire('Completed', 'Data Added Successfully');
  //         this.tablecount = 0;
  //         location.href = "#/PurchaseOrderDashboard";

  //       }
  //     })
  //   }
  // }


  // public delete(sno) {

  //   for (let i = 0; i < this.qwerty.length; i++) {

  //     if (sno == this.qwerty[i].Sno) {

  //       this.qwerty.splice(i, 1);
  //     }
  //   }
  // }




  public dummitemlist: any;
  public pricingunit: any;
  public pricingfactor: any;
  public itemsuppliercode: any;
  public checkitemsupliercode: any;
  public supplierlist: any;

  count: any;

  public GetItemNo() {
    if (this.itemno == undefined) {
      Swal.fire("Please Enter Item No");
      this.tablecount = 0;
    }
    else {
      this.spinner.show();
      debugger
      this.pomservice.GetItemMasterByItemCodes(this.itemno).subscribe(data => {
        debugger
        if (data.length == 0) {
          Swal.fire("There is no Item on this item no");
          this.tablecount = 0;
          this.spinner.hide();
        }
        else {
          debugger
          this.ItemList = data;
          this.count = this.ItemList.length;
          this.dummitemlist = data;
          this.spinner.hide();
          this.tablecount = 1;
          this.quantity = 1;
          debugger
          // var list = this.dummitemlist.filter(x => x.itemCode == this.itemno);
          // this.itemid = this.dummitemlist[0].id,
          //   this.itemname = this.dummitemlist[0].itemName,
          //   this.cost = this.dummitemlist[0].cost,
          //   this.pricingunit = this.dummitemlist[0].pricingUnit,
          //   this.pricingfactor = this.dummitemlist[0].pricingFactor,
          //   this.unit = this.dummitemlist[0].unit,
          //   this.itemsuppliercode = this.dummitemlist[0].itemSupplierCode,
          //   this.checkitemsupliercode = this.dummitemlist[0].itemSupplierCode,
          //   this.totalprice = this.dummitemlist[0].cost,
          //   this.description = this.dummitemlist[0].description
          debugger
          // this.GetSupplierCode();

          // this.spinner.hide();
        }
      });
    }
  }






  // public GetItemNo() {
  //   if (this.itemno == undefined) {
  //     Swal.fire("Please Enter Item No");
  //     this.tablecount = 0;
  //   }
  //   else {
  //     this.spinner.show();
  //     this.pomservice.GetItemMasterByItemCode(this.itemno).subscribe(data => {
  //       debugger
  //       if (data.length == 0) {
  //         Swal.fire("There is no Item on this item no");
  //         this.tablecount = 0;
  //         this.spinner.hide();
  //       }
  //       else {
  //         this.ItemList = data;
  //         this.dummitemlist = data;
  //         debugger
  //         // var list = this.dummitemlist.filter(x => x.itemCode == this.itemno);
  //         this.itemid = this.dummitemlist[0].id,
  //           this.itemname = this.dummitemlist[0].itemName,
  //           this.cost = this.dummitemlist[0].cost,
  //           this.pricingunit = this.dummitemlist[0].pricingUnit,
  //           this.pricingfactor = this.dummitemlist[0].pricingFactor,
  //           this.unit = this.dummitemlist[0].unit,
  //           this.itemsuppliercode = this.dummitemlist[0].itemSupplierCode,
  //           this.checkitemsupliercode = this.dummitemlist[0].itemSupplierCode,
  //           this.totalprice = this.dummitemlist[0].cost,
  //           this.description = this.dummitemlist[0].description
  //         debugger
  //         this.GetSupplierCode();
  //         this.quantity = 1;
  //         // this.spinner.hide();
  //       }
  //     });
  //   }
  // }


  public GetSupplierCode() {
    debugger
    this.pomservice.GetSupplierMasterBySupplierCode(this.itemsuppliercode).subscribe(
      data => {
        if (data.length == 0) {
          this.spinner.hide();
        }
        else {
          this.tablecount = 1;
          this.spinner.hide();
          debugger
          this.supplierlist = data;

        }
        // this.filtersupplieritems=this.supplierlist.filter(x=>x.supplierCode==this.suppliercode)
        // debugger
      },
      error => { }
    );
  }


  public valuechange1(cost, sup) {
    debugger
    if (sup.cost == "") {
      debugger
      this.ItemList.filter(x => x.id == sup.id)[0].cost = 0;
      this.totalprice = 0;
      this.valuechange(sup.quantity, sup)
    }
    else {
      debugger
      // this.quantity = quantity;
      debugger
      this.ItemList.filter(x => x.id == sup.id)[0].cost = cost
      this.valuechange(sup.quantity, sup)
      debugger
    }
  }



  public valuechange(quantity, sup) {
    debugger
    if (sup.quantity == "") {
      debugger
      this.ItemList.filter(x => x.id == sup.id)[0].totalPrice = Number(sup.quantity) * Number(sup.cost);
      this.totalprice = 0;
    }
    else {
      debugger
      this.quantity = quantity;
      debugger
      this.ItemList.filter(x => x.id == sup.id)[0].totalPrice = Number(sup.quantity) * Number(sup.cost);


      debugger
    }
  }





  // public valuechange(even) {
  //   if (even == "") {
  //     debugger
  //     this.totalprice = 0;
  //   }
  //   else {
  //     debugger
  //     this.quantity = even;
  //     debugger
  //     this.totalprice = Number(this.quantity) * Number(this.cost);
  //     debugger
  //   }
  // }


  public Itemqwerty = [];
  public description: any;



  public tablecountforadd: any;

  // public getTotalList(sup) {
  //   debugger
  //   if (this.quantity == "" || this.quantity == 0) {
  //     debugger
  //     Swal.fire('Please Enter Quantity');
  //   }
  //   else if (this.Itemqwerty.length == 0) {
  //     if (this.vendorid == sup.supplercodes) {
  //       debugger
  //       this.tablecountforadd = 2;
  //       this.tablecount = 0;
  //       this.supplierid = sup.id;
  //       var entity = {
  //         'Sno': this.idcount,
  //         'ItemNo': this.itemno,
  //         'ItemID': this.itemid,
  //         'ItemName': this.itemname,
  //         'Description': this.description,
  //         'Unit': this.unit,
  //         'Quantity': this.quantity,
  //         'DueDate': '',
  //         'Price': this.cost,
  //         'TotalPrice': this.totalprice,
  //         'uom': this.unit,
  //         'SupplierID': sup.supplercodes,
  //         'SupplierName': sup.supplierName
  //       }
  //       this.Itemqwerty.push(entity);
  //       this.idcount = this.idcount + 1;
  //       this.itemname = "";
  //       this.cost = "";
  //       this.pricingunit = "";
  //       this.unit = "";
  //       this.itemsuppliercode = "";
  //       this.totalprice = "";
  //       this.quantity = 1;
  //       this.itemno = "";
  //     }
  //     else {
  //       Swal.fire('Items Should Belong to the Same Vendor. Please Select Items Accordingly');
  //       this.tablecountforadd = 2;
  //       this.tablecount = 0;
  //       this.itemno = "";
  //     }
  //     // this.vendorid == sup.supplercodes
  //     // this.Itemqwerty[0].SupplierID == this.vendorid
  //   }
  //   else if (this.vendorid == sup.supplercodes && this.Itemqwerty[0].ItemID != this.itemid) {
  //     this.tablecountforadd = 2;
  //     this.tablecount = 0;
  //     var entity = {
  //       'Sno': this.idcount,
  //       'ItemNo': this.itemno,
  //       'ItemID': this.itemid,
  //       'ItemName': this.itemname,
  //       'Description': this.description,
  //       'Unit': this.unit,
  //       'Quantity': this.quantity,
  //       'DueDate': '',
  //       'Price': this.cost,
  //       'TotalPrice': this.totalprice,
  //       'uom': this.unit,
  //       'SupplierID': sup.itemsuppliercode,
  //       'SupplierName': sup.supplierName
  //     }
  //     this.Itemqwerty.push(entity);
  //     this.idcount = this.idcount + 1;
  //     this.itemname = "";
  //     this.cost = "";
  //     this.pricingunit = "";
  //     this.unit = "";
  //     this.itemsuppliercode = "";
  //     this.totalprice = "";
  //     this.quantity = "";
  //     this.itemno = "";
  //   }
  //   else {
  //     Swal.fire('Items Should Belong to the Same Vendor. Please Select Items Accordingly');
  //     this.tablecount = 0;
  //     this.itemno = "";
  //   }
  // }




  public getTotalList(sup) {
    debugger
    if (sup.quantity == "" || sup.quantity == 0) {
      debugger
      Swal.fire('Please Enter Quantity');
    }
    else if (this.Itemqwerty.length == 0 ) {
      debugger
      if(sup.supplierCode == sup.supplierCode)
      {
        debugger
      this.tablecountforadd = 2;
      // this.tablecount = 0;
      this.supplierid = sup.supplierID;
      var entity = {
        'Sno': this.idcount,
        'ItemNo': sup.itemCode,
        'ItemID': sup.id,
        'ItemName': sup.itemName,
        'Description': sup.description,
        'Unit': sup.unit,
        'Quantity': sup.quantity,
        'DueDate': '',
        'Price': sup.cost,
        'TotalPrice': sup.totalPrice,
        'uom': this.unit,
        'SupplierID': sup.supplierCode,
        'SupplierName': sup.supplierName
      }
      this.Itemqwerty.push(entity);

      debugger
      this.ItemList = this.ItemList.filter(x => x.id != sup.id);
      // this.ItemList = this.ItemList.slice(itemlist, this.ItemList.length);
      debugger
      this.idcount = this.idcount + 1;
      this.itemname = "";
      this.cost = "";
      this.pricingunit = "";
      this.unit = "";
      this.itemsuppliercode = "";
      this.totalprice = "";
      this.quantity = 1;
      this.itemno = "";
    }
    else
    {
      Swal.fire('Items Should Belong to the Same Vendor. Please Select Items Accordingly');
    }
  }
    else if (sup.supplierCode == sup.supplierCode) {
      this.tablecountforadd = 2;
      // this.tablecount = 0;
      var entity = {
        'Sno': this.idcount,
        'ItemNo': sup.itemCode,
        'ItemID': sup.id,
        'ItemName': sup.itemName,
        'Description': sup.description,
        'Unit': sup.unit,
        'Quantity': sup.quantity,
        'DueDate': '',
        'Price': sup.cost,
        'TotalPrice': sup.totalPrice,
        'uom': this.unit,
        'SupplierID': sup.supplierCode,
        'SupplierName': sup.supplierName
      }
      this.Itemqwerty.push(entity);
      this.idcount = this.idcount + 1;
      debugger
      this.ItemList = this.ItemList.filter(x => x.id != sup.id);
      // this.ItemList = this.ItemList.slice(itemlist, this.ItemList.length);
      debugger
      this.itemname = "";
      this.cost = "";
      this.pricingunit = "";
      this.unit = "";
      this.itemsuppliercode = "";
      this.totalprice = "";
      this.quantity = "";
      this.itemno = "";
    }
    else {
      Swal.fire('Items Should Belong to the Same Vendor. Please Select Items Accordingly');
      this.tablecountforadd = 2;
      // this.tablecount = 0;
      this.itemno = "";
    }
  }


  public delete(sno) {

    for (let i = 0; i < this.Itemqwerty.length; i++) {

      if (sno == this.Itemqwerty[i].Sno) {

        this.Itemqwerty.splice(i, 1);
        if (this.Itemqwerty.length == 0) {
          this.tablecountforadd = 0;
        }
      }
    }
  }


  public InsertItemDetails() {
    debugger
    for (let i = 0; i < this.Itemqwerty.length; i++) {
      var entity = {
        'PurchaseOrderID': this.orderid,
        'ItemID': this.Itemqwerty[i].ItemID,
        'ItemName': this.Itemqwerty[i].ItemName,
        'Description': this.Itemqwerty[i].Description,
        'Unit': this.Itemqwerty[i].Unit,
        'Quantity': this.Itemqwerty[i].Quantity,
        'DueDate': new Date(),
        'Price': this.Itemqwerty[i].Price,
        'TotalPrice': this.Itemqwerty[i].TotalPrice,
        'TaxPercentage': 0,
        'TaxAmount': 0,
        'itemlnno': 0,
        'uom': this.Itemqwerty[i].Unit,
        'shipto': 0,
      }
      this.pomservice.InsertPurchaseOrderDetails_NewItems(entity).subscribe(data => {
        if (data != 0) {
          Swal.fire('Completed', 'Data Added Successfully');
          this.tablecount = 0;
          location.href = "#/PurchaseOrderDashboard";
        }
        else {
          Swal.fire('Item Already Exists this PO');
        }
      })
    }
  }


  public Showofdash() {
    this.tablecount = 0;
  }

}
