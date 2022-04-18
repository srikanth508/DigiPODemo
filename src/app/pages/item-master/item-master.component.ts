import { Component, OnInit } from '@angular/core';
import { PomsService } from '../../poms.service';
import Swal from 'sweetalert2'
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AstMemoryEfficientTransformer } from '@angular/compiler';


@Component({
  selector: 'app-item-master',
  templateUrl: './item-master.component.html',
  styleUrls: ['./item-master.component.css']
})
export class ItemMasterComponent implements OnInit {
  ItemNo: any;
  Unit: any;
  Cost: any;
  PricingUnit: any;
  PriceFactor: any;
  ProcurementTime: any;
  Commodity: any;
  Category: any;
  SubCategory: any;
  Tax: any;
  Description: any;
  CategoryList: any;
  SubcategoryList: any;
  ItemID: any;
  categorylist: any;
  saveupdatebtn: number;
  SubcategoryList1: any;
  itemname: any;
  public TaxList: any;
  public taxid: any;
  currencylist:any;
  purchasedate:any;
  quantity:any;
  expiredtate:any;
  public Editor = ClassicEditor;
  constructor(private PomsService: PomsService, private activatedroute: ActivatedRoute) { }

  public currency: any;
  public unitlist: any;

  ngOnInit() {
    this.currency = "";
    this.PricingUnit = "";
    this.Category = "";
    this.SubCategory = "";
    this.Description = "";
    this.descr2 = "";
    this.supplierid = "";
    this.departmentid = ""
    this.taxid = 0
    this.Unit = 0

    this.PomsService.GetCategoryMaster().subscribe(data => {

      this.CategoryList = data
    })

    this.PomsService.GetTaxMaster().subscribe(data => {

      this.TaxList = data;
    })


    this.PomsService.GetUnitofMeasureMaster().subscribe(data => {

      this.unitlist = data;
    })


    this.PomsService.GetCurrencyMaster().subscribe(data => {

      this.currencylist = data;
    })



    this.activatedroute.params.subscribe(params => {

      this.ItemID = params['id'];
      if (this.ItemID == undefined) {
        this.saveupdatebtn = 0;
      }
      else {
        this.saveupdatebtn = 1;
        this.PomsService.GetItemMaster().subscribe(data => {

          this.categorylist = data;
          this.categorylist = this.categorylist.filter(x => x.id == this.ItemID);
          this.ItemNo = this.categorylist[0].itemCode;
          this.Unit = this.categorylist[0].unit;
          this.Cost = this.categorylist[0].cost;
          this.currency = this.categorylist[0].currencyID;
          this.PricingUnit = this.categorylist[0].pricingUnit;
          this.PriceFactor = this.categorylist[0].pricingFactor;
          this.ProcurementTime = this.categorylist[0].procurentTime;
          this.Commodity = this.categorylist[0].commodity;
          this.Category = this.categorylist[0].categoryID;
          this.itemname = this.categorylist[0].itemName;
          this.descr2 = this.categorylist[0].descr2;


          this.quantity = this.categorylist[0].quantity;
          this.expiredtate = this.categorylist[0].expireDate;
          this.purchasedate = this.categorylist[0].purchaseDate;

          this.PomsService.GetSubCategoryMaster().subscribe(data => {

            this.PomsService.GetTaxMaster().subscribe(data => {

              this.TaxList = data;
            })
            this.SubcategoryList1 = data
            this.SubcategoryList = this.SubcategoryList1.filter(x => x.categoryID == this.Category)
          })
          this.SubCategory = this.categorylist[0].subCategoryID;
          this.taxid = this.categorylist[0].taxID;
          this.Description = this.categorylist[0].description;

        })
      }
    }
    )
    this.PomsService.GetCurrencyMaster().subscribe(data => {

      this.currencylist = data;
    })
    this.GetSuppliermaster();
    this.Getdepartmentmaster();
  
  }


  public supplierlist: any;

  public GetSuppliermaster() {
    debugger
    this.PomsService.GetSupplierMaster().subscribe(
      data => {
        this.supplierlist = data;

      },
      error => { }
    );
  }


  public departmentlist: any;

  public Getdepartmentmaster() {
    debugger
    this.PomsService.GetDepartmentMaster().subscribe(
      data => {
        this.departmentlist = data;

      },
      error => { }
    );
  }



  public descr2: any;

  public GetTaxID(even) {

    this.taxid = even.target.value;
  }

  public InsertItem() {
    debugger
    if (this.supplierid == 0 || this.supplierid == "") {
      Swal.fire('Please Select department And Vendor');
      debugger
    }
    else {
    var Entity = {
      "ItemCode": this.ItemNo,
      "ItemName": this.itemname,
      "Unit": this.Unit,
      "Cost": this.Cost,
      "Currency": this.currency,
      "PricingUnit": this.PricingUnit,
      "PricingFactor": this.PriceFactor,
      "ProcurentTime": this.ProcurementTime,
      "Commodity": this.Commodity,
      "CategoryID": this.Category,
      "SubCategoryID": this.SubCategory,
      "TaxID": this.taxid,
      "Description": this.Description,
      "descr2": this.descr2,
      "SupplierID": this.supplierid,
      "Quantity":this.quantity,
      "ExpireDate":this.expiredtate,
      "PurchaseDate":this.purchasedate
    }
    this.PomsService.InsertItemMaster(Entity).subscribe((data: any) => {
      if (data != undefined) {

        Swal.fire('success', 'Item Details Saved  Successfully', 'success');
        // location.href = "#/ItemMasterDashboard"

      }
    });
     }
  }

  public getcurreny(even) {

    this.currency = even.target.value;
  }

  public getCategoryID(even) {

    this.Category = even.target.value;
    // var list = this.CategoryList.filter(x => x.id == this.Category)
    // this.Tax = list[0].taxCode

    this.PomsService.GetSubCategoryMaster().subscribe(data => {

      this.SubcategoryList1 = data
      var List = this.SubcategoryList1.filter(x => x.categoryID == this.Category)
      this.SubcategoryList = List;
    })
  }
  public UpdateItemMaster() {

    var Entity = {
      "ID": this.ItemID,
      "ItemCode": this.ItemNo,
      "ItemName": this.itemname,
      "Unit": this.Unit,
      "Cost": this.Cost,
      "Currency": this.currency,
      "PricingUnit": this.PricingUnit,
      "PricingFactor": this.PriceFactor,
      "ProcurentTime": this.ProcurementTime,
      "Commodity": this.Commodity,
      "CategoryID": this.Category,
      "SubCategoryID": this.SubCategory,
      "TaxID": this.taxid,
      "Description": this.Description,
      "descr2": this.descr2,
      "Quantity":this.quantity,
      "ExpireDate":this.expiredtate,
      "PurchaseDate":this.purchasedate
    }
    this.PomsService.UpdateItemMaster(Entity).subscribe((data: any) => {
      if (data != undefined) {

        Swal.fire('success', 'Item Details updated  Successfully', 'success');
        location.href = "#/ItemMasterDashboard"
      }
    });
  }


  public supplierid: any;
  public departmentid: any;
  public suppliercode: any;

  public GetSupplierID(even) {
    debugger
    let list1 = even.target.value.split(",");
    this.suppliercode = list1[0];
    this.supplierid = list1[1];

    this.departmentid = "";
    // this.supplierid = even.target.value;
    debugger
  }

  public GetDepartmentID(even) {
    this.departmentid = even.target.value;
    debugger
    this.ItemNo = (this.suppliercode) + "" + (this.departmentid)
  }


  public GetUnitOfMeasuere(even) {
    this.Unit = even.target.value;
  }
}
