import { Component, OnInit } from '@angular/core';
import { PomsService } from '../../poms.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-buying-company-master',
  templateUrl: './buying-company-master.component.html',
  styleUrls: ['./buying-company-master.component.css']
})
export class BuyingCompanyMasterComponent implements OnInit {

  constructor(public pomservice: PomsService, private activatedroute: ActivatedRoute) { }
  public id: any;
  public showbit: any;
  public companycode: any;
  public companyname: any;
  public street: any;
  public address: any;
  public city: any;
  public state: any;
  public country: any;
  public zipcode: any;
  public primaryphoneno: any;
  public secondaryphoneno: any;
  public email: any;
  public faxtelephone: any;
  public companylist:any;
  public countrylist:any;
  public countryid:any;
  public statelist:any;
  public stateid:any;
  public citylist:any;
  public cityid:any;
  
  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      
      this.id = params['id'];

      if (this.id != undefined || this.id != null) {
        this.showbit = 0;
        this.Getbuyingcompany();
      }
      else {
        this.showbit = 1;
      }
    })
    this.getcountrymaster();
    this.GetDepartment();
    this.cityid="";
    this.stateid="";
    this.countryid="";
    this.departmentid="";
  }

  public departmentlist:any;
  public departmentid:any;


  public GetDepartment() {

    this.pomservice.GetDepartmentMaster().subscribe(data => {

      this.departmentlist = data;
    });
  }


  public GetDepartmentID(even) {
    this.departmentid = even.target.value;
  }

  public getcountrymaster()
  {
    
    this.pomservice.GetCountryMaster().subscribe(data => {
      this.countrylist = data;

    }, error => {

    })
  }


public GetCountryID(even)
{
  this.countryid=even.target.value;
  this.GetStateMasterbycountryid()
}
public GetStateMasterbycountryid()
{
  this.pomservice.GetStateMasterByCountryID(this.countryid).subscribe(data => {
    this.statelist = data;

  }, error => {

  })
}
public GetStateID(even)
{
  this.stateid=even.target.value;
  this.GetCityMasterbyStateid()
}
public GetCityMasterbyStateid()
{
  this.pomservice.GetCityMasterByStateID(this.stateid).subscribe(data => {
    this.citylist = data;
  }, error => {

  })
}
public GetCityID(even)
{
  this.cityid=even.target.value;
}

  public insertdetails() {
    
    if(this.departmentid==0||this.departmentid==undefined)
    {
      Swal.fire('Please Select Department')
    }
    else
    {
    var entity = {
      'CompanyCode': this.companycode,
      'CompanyName': this.companyname,
      'Street': this.street,
      'Address': this.address,
      'CityID': this.cityid,
      'StateID': this.stateid,
      'ZipCode': this.zipcode,
      'CountryID': this.countryid,
      'PrimaryPhoneNo': this.primaryphoneno,
      'SecondaryPhoneNo': this.secondaryphoneno,
      'Email': this.email,
      'FaxTelephone': this.faxtelephone,
      'bcdept':this.departmentid
    }
    this.pomservice.InsertBuyingCompanyMaster(entity).subscribe(data => {
      if (data != 0) {
        Swal.fire('Completed', 'Data Added Successfully');
        this.clear();
        location.href = "#/BuyingCompanyMasterDashboard"
      }
    })
  }
  }
  public clear() {
    this.companycode = "",
      this.companyname = "",
      this.street = "",
      this.address = '',
      this.city = "",
      this.state = "",
      this.zipcode = "",
      this.country = "",
      this.primaryphoneno = "",
      this.secondaryphoneno = "",
      this.email = "",
      this.faxtelephone = ""

  }


  public Getbuyingcompany() {
    this.pomservice.GetBuyingCompanyMaster().subscribe(data => {
      this.companylist = data;
      var buy=this.companylist.filter(x=>x.id==this.id)
      this.companycode=buy[0].companyCode,
      this.companyname=buy[0].companyName,
      this.street=buy[0].street,
      this.address=buy[0].address,
      this.cityid=buy[0].cityID,
      this.stateid=buy[0].stateID,
      this.zipcode=buy[0].zipCode,
      this.countryid=buy[0].countryID,
      this.primaryphoneno=buy[0].primaryPhoneNo,
      this.secondaryphoneno=buy[0].secondaryPhoneNo,
      this.email=buy[0].email,
      this.faxtelephone=buy[0].faxTelephone,
      this.departmentid=buy[0].bcdept
      this.GetCityMasterbyStateid()
      this.GetStateMasterbycountryid()
      this.GetDepartment();
    }, error => {
    })
  }



  public UpdateDetails() {
    
    var entity = {
      'ID': this.id,
      'CompanyCode': this.companycode,
      'CompanyName': this.companyname,
      'Street': this.street,
      'Address': this.address,
      'CityID': this.cityid,
      'StateID': this.stateid,
      'ZipCode': this.zipcode,
      'CountryID': this.countryid,
      'PrimaryPhoneNo': this.primaryphoneno,
      'SecondaryPhoneNo': this.secondaryphoneno,
      'Email': this.email,
      'FaxTelephone': this.faxtelephone,
      'bcdept':this.departmentid
    }
    this.pomservice.UpdateBuyingCompanyMaster(entity).subscribe(res => {
      let data = res;
      Swal.fire('Success', 'Data Updated Successfully');
      location.href = "#/BuyingCompanyMasterDashboard"

    })
  }
}

