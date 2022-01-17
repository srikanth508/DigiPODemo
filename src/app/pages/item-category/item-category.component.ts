import { Component, OnInit } from '@angular/core';
import { PomsService } from '../../poms.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.css']
})
export class ItemCategoryComponent implements OnInit {

  public categoryID: any;
  public categorylist: any;
  public Code: any;
  public Name: any;
  public Description: any;
  public saveupdatebtn: any;
  TaxList: any;
  TaxCode: any;
  TaxID: any;

  constructor(private PomsService: PomsService, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.TaxCode="";
    this.PomsService.GetTaxMaster().subscribe(data => {
      
      this.TaxList = data;
    })
    this.activatedroute.params.subscribe(params => {
      
      this.categoryID = params['id'];
      if (this.categoryID == undefined) {
        this.saveupdatebtn = 0;
      }
      else {
        this.saveupdatebtn = 1;
        this.PomsService.GetCategoryMaster().subscribe(data => {
          
          this.categorylist = data;
          this.categorylist = this.categorylist.filter(x => x.id == this.categoryID);
          this.Code = this.categorylist[0].categoryCode;
          this.Name = this.categorylist[0].categoryName;
          this.Description = this.categorylist[0].categoryDescription;
          this.TaxCode=this.categorylist[0].taxID;
        })
      }
    }
    )
  }

  public InsertCategoryDetails() {
    
    var Entity = {
      "CategoryCode": this.Code,
      "CategoryName": this.Name,
      "CategoryDescription": this.Description,
      "TaxID":0,
    }
    this.PomsService.InsertCategoryMaster(Entity).subscribe((data: any) => {
      
      if (data != undefined) {
        
        Swal.fire('success', 'Category Item Details Saved Successfully', 'success');
        location.href = "#/ItemCategoryDashboard"

      }
    });
  }

  public UpdateCategoryMaster() {
    
    var Entity = {
      "ID": this.categoryID,
      "CategoryCode": this.Code,
      "CategoryName": this.Name,
      "CategoryDescription": this.Description,
      "TaxID":0
    }
    this.PomsService.UpdateCategoryMaster(Entity).subscribe((data: any) => {
      if (data != undefined) {
        
        Swal.fire('success', 'Category Item Details Updated Successfully', 'success');
        location.href = "#/ItemCategoryDashboard"

      }
    });
  }

}
