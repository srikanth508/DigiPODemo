import { Component, OnInit } from "@angular/core";
import { PomsService } from "../../poms.service";
import Swal from "sweetalert2";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-supplier-item-master",
  templateUrl: "./edit-supplier-item-master.component.html",
  styleUrls: ["./edit-supplier-item-master.component.css"]
})
export class EditSupplierItemMasterComponent implements OnInit {
  constructor(
    public pomservice: PomsService,
    private activatedroute: ActivatedRoute
  ) {}
  public CategoryList: any;
  public subcategoryid: any;
  public ItemList: any;
  public ID: any;
  public details: any;
  public Categoryid: any;
  public grandtotal: any;
  public itemid: any;
  public supplierid: any;
  public nettotal: any;
  public tax: any;
  public SubcategoryList: any;
  public supplierlist: any;
  public suppliername: any;
  public categoryname: any;
  public itemName: any;
  public subcategoryname: any;
  public taxcode: any;
  public taxPercentage: any;
  public cost: any;
  public taxid: any;

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      
      this.ID = params["id"];
      this.getcategorymaster();
      this.GetItemMaster();
      this.GetSupplyItems();
      this.GetSuppliermaster();
    });
  }

  public GetSuppliermaster() {
    this.pomservice.GetSupplierMaster().subscribe(
      data => {
        this.supplierlist = data;
      },
      error => {}
    );
  }

  public getcategorymaster() {
    this.pomservice.GetCategoryMaster().subscribe(data => {
      
      this.CategoryList = data;
    });
  }

  public getCategoryID(even) {
    
    this.Categoryid = even.target.value;
    this.pomservice.GetSubCategoryMaster().subscribe(data => {
      
      this.SubcategoryList = data;
      var List = this.SubcategoryList.filter(
        x => x.categoryID == this.Categoryid
      );
      this.SubcategoryList = List;
    });
  }

  public GetItemMaster() {
    this.pomservice.GetItemMaster().subscribe(data => {
      this.ItemList = data;
    });
  }

  public GetSupplyItems() {
    
    this.pomservice.GetSupplerMasterItems().subscribe(
      data => {
        
        this.details = data;
        var list = this.details.filter(x => x.id == this.ID);
        this.supplierid = list[0].supplierID;
        this.Categoryid = list[0].categoryID;
        this.subcategoryid = list[0].subCategoryID;
        this.itemid = list[0].itemID;
        this.nettotal = list[0].netTotal;
        this.taxPercentage = list[0].taxPercentage;
        this.grandtotal = list[0].grandTotal;
        this.taxid = list[0].taxID;
        

        this.pomservice.GetSubCategoryMaster().subscribe(data => {
          
          this.SubcategoryList = data;
          var List = this.SubcategoryList.filter(
            x => x.categoryID == this.Categoryid
          );
          this.SubcategoryList = List;
        });
      },
      error => {}
    );
  }

  public GetsubcategoryID(even){
    this.subcategoryid=even.target.value;
  }

  public GetSupplierID(even) {
    
    this.supplierid = even.target.value;
    var list = this.supplierlist.filter(x => x.id == this.supplierid);
    this.suppliername = list[0].supplierName;
  }

  public GetItemID(even) {
    
    this.itemid = even.target.value;
    var list = this.ItemList.filter(x => x.id == this.itemid);
    
    (this.cost = list[0].cost),
      (this.taxPercentage = list[0].taxPercentage),
      (this.taxid = list[0].taxid),
      (this.itemName = list[0].itemName),
      (this.grandtotal = (this.cost * this.taxPercentage) / 100 + this.cost);
  }

  public UpdateDetails() {
    debugger
    var entity = {
      ID: this.ID,
      SupplierID: this.supplierid,
      CategoryID: this.Categoryid,
      SubCategoryID: this.subcategoryid,
      ItemID: this.itemid,
      NetTotal: this.nettotal,
      GrandTotal: this.grandtotal,
      TaxID: this.taxid 
    };
    this.pomservice.UpdateSupplerMasterItems(entity).subscribe(data => {
      debugger
      if (data != undefined || data != null) {
        Swal.fire("Updated Successfully");
        location.href="#/SupplierItemsDash"
      }
    });
  }
}
