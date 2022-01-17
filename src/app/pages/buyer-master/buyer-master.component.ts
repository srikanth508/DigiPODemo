import { Component, OnInit } from '@angular/core';
import { PomsService } from '../../poms.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buyer-master',
  templateUrl: './buyer-master.component.html',
  styleUrls: ['./buyer-master.component.css']
})
export class BuyerMasterComponent implements OnInit {

  constructor(public pomservice: PomsService, private activatedroute: ActivatedRoute) { }

  public buyercode: any;
  public buyername: any;
  public primaryphoneno: any;
  public secondaryhoneno: any;
  public faxtelephone: any;
  public id: any;
  public showbit: any;
  public buyerlist: any;
  public buyingcompanyid: any;
  public companylist: any;

  public countrylist: any;
  public countryid: any;
  public statelist: any;
  public stateid: any;
  public citylist: any;
  public cityid: any;

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      
      this.id = params['id'];

      if (this.id != undefined || this.id != null) {
        this.showbit = 0;
        this.Getbuyermaster();
      }
      else {
        this.showbit = 1;
      }
    })
    this.stateid = 0;
    this.countryid = 0;

    this.cityid = 0

    this.Getbuyingcompany();
    this.buyingcompanyid = "";
    this.getcountrymaster()
  }

  public getcountrymaster() {

    this.pomservice.GetCountryMaster().subscribe(data => {
      this.countrylist = data;

    }, error => {

    })
  }


  public GetCountryID(even) {
    this.countryid = even.target.value;
    this.GetStateMasterbycountryid()
  }
  public GetStateMasterbycountryid() {
    this.pomservice.GetStateMasterByCountryID(this.countryid).subscribe(data => {
      this.statelist = data;

    }, error => {

    })
  }
  public GetStateID(even) {
    this.stateid = even.target.value;
    this.GetCityMasterbyStateid()
  }
  public GetCityMasterbyStateid() {
    this.pomservice.GetCityMasterByStateID(this.stateid).subscribe(data => {
      this.citylist = data;
    }, error => {

    })
  }
  public GetCityID(even) {
    this.cityid = even.target.value;
  }

  public Getbuyingcompany() {
    this.pomservice.GetBuyingCompanyMaster().subscribe(data => {
      this.companylist = data;
    }, error => {

    })
  }


  public GetBuyingCompanyID(even) {
    
    this.buyingcompanyid = even.target.value;
  }

  public insertdetails() {

    if(this.buyingcompanyid==""||this.buyingcompanyid==undefined)
    {
      Swal.fire("Please Select Buying Company")
    }
    else
    {
      var entity = {
        'BuyerCode': this.buyercode,
        'BuyingCompanyID': this.buyingcompanyid,
        'BuyerName': this.buyername,
        'PrimaryPhoneNo': this.primaryphoneno,
        'SecondaryPhoneNo': this.secondaryhoneno,
        'FaxTelephone': this.faxtelephone,
        'CountryID': this.countryid,
        'StateID': this.stateid,
        'CityID': this.cityid,
      }
      debugger
      this.pomservice.InsertBuyerMaster(entity).subscribe(data => {
        if (data != 0) {
          Swal.fire('Completed', 'Data Added Successfully');
          this.clear();
          location.href = "#/BuyerMasterDashboard"
        }
      })
    }
    debugger

  }
  public clear() {
    this.buyercode = "",
      this.buyername = "",
      this.primaryphoneno = "",
      this.secondaryhoneno = "",
      this.faxtelephone = ""
  }


  public Getbuyermaster() {
    this.pomservice.GetBuyerMaster().subscribe(data => {
      this.buyerlist = data;
      let buy = this.buyerlist.filter(x => x.id == this.id)
      this.buyercode = buy[0].buyerCode,
        this.buyername = buy[0].buyerName,
        this.primaryphoneno = buy[0].primaryPhoneNo,
        this.secondaryhoneno = buy[0].secondaryPhoneNo,
        this.faxtelephone = buy[0].faxTelephone,
        this.buyingcompanyid = buy[0].buyingCompanyID,
        this.countryid=buy[0].countryID,
        this.cityid=buy[0].cityID,
        this.stateid=buy[0].stateID,
      this.Getbuyingcompany();
      this.getcountrymaster();
      this.GetStateMasterbycountryid();
      this.GetCityMasterbyStateid()

    }, error => {

    })
  }



  public updatedetails() {
    
    var entity = {
      'ID': this.id,
      'BuyingCompanyID': this.buyingcompanyid,
      'BuyerCode': this.buyercode,
      'BuyerName': this.buyername,
      'PrimaryPhoneNo': this.primaryphoneno,
      'SecondaryPhoneNo': this.secondaryhoneno,
      'FaxTelephone': this.faxtelephone,
      'CountryID': this.countryid,
      'StateID': this.stateid,
      'CityID': this.cityid,
    }
    this.pomservice.UpdateBuyerMaster(entity).subscribe(res => {
      let data = res;
      Swal.fire('Success', 'Data Updated Successfully');
      location.href = "#/BuyerMasterDashboard"
    })
  }
}
