import { Component, OnInit } from '@angular/core';
import { PomsService } from '../../poms.service';
import Swal from 'sweetalert2'
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-item-sub-category',
  templateUrl: './item-sub-category.component.html',
  styleUrls: ['./item-sub-category.component.css']
})
export class ItemSubCategoryComponent implements OnInit {
  categoryList: any;
  CategoryID: any;
  code: any;
  Name: any;
  Description: any;
  subcategoryID: any;
  saveupdatebtn: number;
  categorylist: any;

  constructor(private PomsService: PomsService, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.CategoryID=0;
    this.PomsService.GetCategoryMaster().subscribe(data => {
      
      this.categoryList = data;
    })

    this.activatedroute.params.subscribe(params => {
      
      this.subcategoryID = params['id'];
      if (this.subcategoryID == undefined) {
        this.saveupdatebtn = 0;
      }
      else {
        this.saveupdatebtn = 1;
        this.PomsService.GetSubCategoryMaster().subscribe(data => {
          
          this.categorylist = data;
          this.categorylist = this.categorylist.filter(x => x.id == this.subcategoryID);
          this.CategoryID = this.categorylist[0].categoryID;
          this.code = this.categorylist[0].subCategoryCode;
          this.Name = this.categorylist[0].subCategoryName;
          this.Description = this.categorylist[0].description;
        })
      }
    }
    )
  }

  public InsertSubCategoryDetails() {
    
    var Entity = {
      "CategoryID": this.CategoryID,
      "SubCategoryCode": this.code,
      "SubCategoryName": this.Name,
      "Description": this.Description,

    }
    this.PomsService.InsertSubCategoryMaster(Entity).subscribe((data: any) => {
      if (data != undefined) {
        
        Swal.fire('success', 'Sub Category Item Details Saved Successfully', 'success');
        location.href = "#/ItemSubCategoryDashboard"

      }
    });
  }
  public UpdateSubCategoryMaster() {
    
    var Entity = {
      "ID": this.subcategoryID,
      "CategoryID": this.CategoryID,
      "SubCategoryCode": this.code,
      "SubCategoryName": this.Name,
      "Description": this.Description,
    }
    this.PomsService.UpdateSubCategoryMaster(Entity).subscribe((data: any) => {
      if (data != undefined) {
        
        Swal.fire('success', 'Sub Category Item Details Updated Successfully', 'success');
        location.href = "#/ItemSubCategoryDashboard"

      }
    });
  }
}
