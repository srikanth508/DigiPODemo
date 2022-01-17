import { Component, OnInit } from '@angular/core';
import { PomsService } from '../../poms.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tax-additions',
  templateUrl: './tax-additions.component.html',
  styleUrls: ['./tax-additions.component.css']
})
export class TaxAdditionsComponent implements OnInit {
  TaxID: any;
  saveupdatebtn: any;
  categorylist: any;
  TaxCode: any;

  TaxPercentage: any;
  description: any;
  public countrylist: any;
  public countryid: any;
  public statelist: any;
  public stateid: any;
  public citylist: any;
  public cityid: any;
  constructor(private PomsService: PomsService, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      
      this.TaxID = params['id'];
      if (this.TaxID == undefined) {
        this.saveupdatebtn = 0;
      }
      else {
        this.saveupdatebtn = 1;
        this.PomsService.GetTaxMaster().subscribe(data => {
          
          this.categorylist = data;
          this.categorylist = this.categorylist.filter(x => x.id == this.TaxID);
          this.TaxCode = this.categorylist[0].taxCode;
          this.TaxPercentage = this.categorylist[0].taxPercentage;
          this.description = this.categorylist[0].description;
          this.countryid = this.categorylist[0].countryID;
          this.stateid = this.categorylist[0].stateID;
          this.cityid = this.categorylist[0].cityID;
          this.getcountrymaster();
          this.GetStateMasterbycountryid();
          this.GetCityMasterbyStateid()
        })
      }
    }
    )
    this.stateid = 0;
    this.countryid = 0;
    this.cityid = 0
    this.getcountrymaster()
  }

  public getcountrymaster() {

    this.PomsService.GetCountryMaster().subscribe(data => {
      this.countrylist = data;

    }, error => {

    })
  }


  public GetCountryID(even) {
    this.countryid = even.target.value;
    this.GetStateMasterbycountryid()
  }
  public GetStateMasterbycountryid() {
    this.PomsService.GetStateMasterByCountryID(this.countryid).subscribe(data => {
      this.statelist = data;

    }, error => {

    })
  }
  public GetStateID(even) {
    this.stateid = even.target.value;
    this.GetCityMasterbyStateid()
  }
  public GetCityMasterbyStateid() {
    this.PomsService.GetCityMasterByStateID(this.stateid).subscribe(data => {
      this.citylist = data;
    }, error => {

    })
  }
  public GetCityID(even) {
    this.cityid = even.target.value;
  }








  public InsertTaxMaster() {
    
    var Entity = {
      "TaxCode": this.TaxCode,
      "TaxPercentage": this.TaxPercentage,
      'Description': this.description,
      'CountryID': this.countryid,
      'StateID': this.stateid,
      'CityID': this.cityid
    }
    this.PomsService.InsertTaxMaster(Entity).subscribe((data: any) => {
      
      if (data != undefined) {
        
        Swal.fire('success', 'Tax Saved Successfully', 'success');
        location.href = "#/TaxAdditionsDashboard"

      }
    });
  }

  public UpdateTaxMaster() {
    
    var Entity = {
      "ID": this.TaxID,
      "TaxCode": this.TaxCode,
      "TaxPercentage": this.TaxPercentage,
      "Description": this.description,
      'CountryID': this.countryid,
      'StateID': this.stateid,
      'CityID': this.cityid
    }
    this.PomsService.UpdateTaxMaster(Entity).subscribe((data: any) => {
      if (data != undefined) {
        
        Swal.fire('success', 'Tax Updated Successfully', 'success');
        location.href = "#/TaxAdditionsDashboard"

      }
    });
  }
}
