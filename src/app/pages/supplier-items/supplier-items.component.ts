import { Component, OnInit } from '@angular/core';
import { PomsService } from '../../poms.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-supplier-items',
  templateUrl: './supplier-items.component.html',
  styleUrls: ['./supplier-items.component.css']
})
export class SupplierItemsComponent implements OnInit {

  constructor(public pomservice: PomsService) { }
  public Categoryid: any;
  public SubcategoryList: any;
  public CategoryList: any;
  public subcategoryid: any;
  public ItemList: any;
  public itemfiltelist: any;
  public itemid: any;
  public supplierlist: any;
  public supplierid: any;
  public cost: any;
  public taxcode: any;
  public taxPercentage: any;
  public grandtotal: any;
  public taxid: any;
  public tablecount: any;
  public qwerty = [];
  public suppliername: any;
  public categoryname: any;
  public itemName: any;
  public subcategoryname: any;
  public idcount: any;
  public suppliercode:any;

  ngOnInit() {
    this.getcategorymaster();
    this.Categoryid = 0;
    this.subcategoryid = 0;
    this.GetItemMaster();
    this.GetSuppliermaster();
    this.tablecount = 0;
    this.idcount = 1;
    this.itemid = 0;
  }

  public GetSuppliermaster() {
    this.pomservice.GetSupplierMaster().subscribe(data => {
      this.supplierlist = data;
    }, error => {

    })
  }

  public getcategorymaster() {
    this.pomservice.GetCategoryMaster().subscribe(data => {
      
      this.CategoryList = data

    })

  }

  public GetItemMaster() {
    this.pomservice.GetItemMaster().subscribe(data => {
      this.ItemList = data;

    })
  }

  
  public getCategoryID(even) {
    
    this.Categoryid = even.target.value;

      var list = this.CategoryList.filter(x => x.id == this.Categoryid)
       this.categoryname = list[0].categoryName

    this.itemfiltelist = this.ItemList.filter(x => x.categoryID == this.Categoryid)


  

    // this.pomservice.GetSubCategoryMaster().subscribe(data => {
      
    //   this.SubcategoryList = data
    //   var List = this.SubcategoryList.filter(x => x.categoryID == this.Categoryid)
    //   this.SubcategoryList = List;
    // })
  }


  public GetsubcategoryID(even) {
    
    this.subcategoryid = even.target.value;

    var list = this.SubcategoryList.filter(x => x.id == this.subcategoryid)
    this.subcategoryname = list[0].subCategoryName

    this.itemfiltelist = this.ItemList.filter(x => x.subCategoryID == this.subcategoryid)

  }

  public GetSupplierID(even) {
    
    this.supplierid = even.target.value;
    var list = this.supplierlist.filter(x => x.id == this.supplierid)
    this.suppliername = list[0].supplierName,
    this.suppliercode = list[0].supplierCode
  }

  public GetItemID(even) {
    debugger
    this.itemid = even.target.value;

    var list = this.ItemList.filter(x => x.id == this.itemid)
    
    this.cost = list[0].cost,
      this.taxPercentage = list[0].taxPercentage,
      this.taxid = list[0].taxid,
      this.itemName = list[0].itemName,

      this.grandtotal = this.cost * this.taxPercentage / 100 + this.cost

  }



  
  public adddetails() {
    if (this.Categoryid == undefined || this.Categoryid == null || this.Categoryid == 0) {
      Swal.fire("Please fill all the detailes")
    }
    else {
      this.tablecount = 1;
      var entity = {
        'Sno': this.idcount,
        'SupplierID': this.supplierid,
        'ItemName': this.itemName,
        'SupplerName': this.suppliername,
        'CategoryName': this.categoryname,
        'CategoryID': this.Categoryid,
        'SubCategoryID': this.subcategoryid,
        'ItemID': this.itemid,
        'NetTotal': this.cost,
        'GrandTotal': this.grandtotal,
        'TaxPercentage': this.taxPercentage,
        'TaxID': this.taxid,
        'SubCategoryName': this.subcategoryname
      }
      this.qwerty.push(entity);
      
      this.idcount = this.idcount + 1;
      this.cost = "";
      this.taxPercentage = ""
      this.subcategoryname = ""
      this.grandtotal = ""
      this.itemName = ""
      this.Categoryid = 0;
      this.taxid = []
      this.subcategoryid = 0;
      this.itemid = []
      this.itemid = 0;
      this.itemName="";
    
    }

  }

  public insertdetails() {
    for (let i = 0; i < this.qwerty.length; i++) {
      var entity = {
        'SupplierID': this.qwerty[i].SupplierID,
        'CategoryID': this.qwerty[i].CategoryID,
        'SubCategoryID': this.qwerty[i].SubCategoryID,
        'ItemID': this.qwerty[i].ItemID,
        'NetTotal': this.qwerty[i].NetTotal,
        'GrandTotal': this.qwerty[i].GrandTotal,
        'TaxID': this.qwerty[i].TaxID,
      }
      this.pomservice.InsertSupplerMasterItems(entity).subscribe(data => {
        if (data != 0) {
          Swal.fire('Completed', 'Data Added Successfully');
          this.tablecount = 0;
          location.href = "#/SupplierItemsDash";
        }
        else {
          Swal.fire('Completed', 'Items Already Exist For This Supplier');
          this.tablecount = 0;
          location.href = "#/SupplierItemsDash";
        }
      })
    }
  }

  public delete(sno) {
    
    for (let i = 0; i < this.qwerty.length; i++) {
      
      if (sno == this.qwerty[i].Sno) {
        
        this.qwerty.splice(i, 1);
      }
    }

  }

}
