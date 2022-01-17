import { Component, OnInit } from '@angular/core';
import { PomsService } from '../../poms.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-supplier-master',
  templateUrl: './supplier-master.component.html',
  styleUrls: ['./supplier-master.component.css']
})
export class SupplierMasterComponent implements OnInit {

  constructor(public pomservice: PomsService, private activatedroute: ActivatedRoute) { }
  public Editor = ClassicEditor;

  public supplerno: any;
  public supplername: any;
  public supplies: any;
  public street: any;
  public address: any;
  public city: any;
  public state: any;
  public zipcode: any;
  public country: any;
  public contactname: any;
  public phoneno: any;
  public secondarycontact: any;
  public secondaryphoneno: any;
  public faxtelephone: any;
  public email: any;
  public terms: any;
  public id: any;
  public supplierlist: any;
  public showbit: any;
  public countrylist:any;
  public countryid:any;
  public statelist:any;
  public stateid:any;
  public citylist:any;
  public cityid:any;

  public departmentlist:any;
  public accountid:any;

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      
      this.id = params['id'];

      if (this.id != undefined || this.id != null) {
        this.showbit = 0;
        this.GetSuppliermaster();
      
      }
      else {
        this.showbit = 1;
      }
    }
    )
    this.stateid="";
    this.countryid="";
    this.cityid="";
    this.terms="";
    this.departmentid="";
    this.getcountrymaster();
    this.GetDepartment();
    this.GetAccountingCodeMaster();
  }

  public GetDepartment() {

    this.pomservice.GetDepartmentMaster().subscribe(data => {

      this.departmentlist = data;
    });
  }

  public AccountingList:any;

  public GetAccountingCodeMaster() {
    this.pomservice.GetAccountingCodeMaster().subscribe(data => {
      
      this.AccountingList = data;
    
    });
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



public departmentid:any;
  
public GetDepartmentID(even) {
  this.departmentid = even.target.value;
}


public GetAccountingID(even)
{
  debugger
  this.accountid=even.target.value;
}




  public insertdetails() {

    debugger
    var entity = {
      'SupplierCode': this.supplerno,
      'SupplierName': this.supplername,
      'Supplies': this.supplies,
      'Street': this.street,
      'Address': this.address,
      'CityID': this.cityid,
      'StateID': this.stateid,
      'ZipCode': this.zipcode,
      'CountryID': this.countryid,
      'ContactName': this.contactname,
      'PhoneNo': this.phoneno,
      'SecondaryContact': this.secondarycontact,
      'SecondaryPhoneNo': this.secondaryphoneno,
      'FaxTelephone': this.faxtelephone,
      'EmailAddress': this.email,
      'Terms': this.terms,
      'vdepart':this.departmentid,
      'AccountID':this.accountid
    }
    debugger
    this.pomservice.InsertSupplierMaster(entity).subscribe(data => {
      if (data != 0) {
        Swal.fire('Completed', 'Data Added Successfully');
        this.clear();
        location.href = "#/SupplierMasterDashboard"
      }
      else{
        Swal.fire('error', 'Vendor Code Already Exists');
      }
    })
  }
  public clear() {
    this.supplerno = "",
      this.supplername = "",
      this.supplies = "",
      this.street = "",
      this.address = "",
      this.city = "",
      this.state = "",
      this.zipcode = "",
      this.country = "",
      this.contactname = "",
      this.phoneno = "",
      this.secondarycontact = "",
      this.secondaryphoneno = "",
      this.faxtelephone = "",
      this.supplername = "",
      this.terms = ""
    this.email
  }



  public GetSuppliermaster() {
    this.pomservice.GetSupplierMaster().subscribe(data => {
      this.supplierlist = data;

      var sup = this.supplierlist.filter(x => x.id == this.id)
      this.supplerno = sup[0].supplierCode,
        this.supplername = sup[0].supplierName,
        this.supplies = sup[0].supplies,
        this.street = sup[0].street,
        this.address = sup[0].address,
        this.cityid = sup[0].cityID,
        this.stateid = sup[0].stateID,
        this.zipcode = sup[0].zipCode,
        this.countryid = sup[0].countryID,
        this.contactname = sup[0].contactName,
        this.phoneno = sup[0].phoneNo,
        this.secondarycontact = sup[0].secondaryContact,
        this.secondaryphoneno = sup[0].secondaryPhoneNo,
        this.faxtelephone = sup[0].faxTelephone,
        this.terms = sup[0].terms,
        this.email = sup[0].emailAddress,
        this.departmentid=sup[0].vdepart,
        this.accountid=sup[0].accountID,
        this.GetCityMasterbyStateid();
        this.GetStateMasterbycountryid();
        this.GetDepartment();
        this.GetAccountingCodeMaster();
    }, error => {

    })
  }





  public UpdateDetails() {
    
    var entity = {
      'ID': this.id,
      'SupplierCode': this.supplerno,
      'SupplierName': this.supplername,
      'Supplies': this.supplies,
      'Street': this.street,
      'Address': this.address,
      'CityID': this.cityid,
      'StateID': this.stateid,
      'ZipCode': this.zipcode,
      'CountryID': this.countryid,
      'ContactName': this.contactname,
      'PhoneNo': this.phoneno,
      'SecondaryContact': this.secondarycontact,
      'SecondaryPhoneNo': this.secondaryphoneno,
      'FaxTelephone': this.faxtelephone,
      'EmailAddress': this.email,
      'Terms': this.terms,
      'vdepart':this.departmentid,
      'AccountID':this.accountid
    }
    this.pomservice.UpdateSupplierMaster(entity).subscribe(res => {
      let test = res;
      debugger
      Swal.fire('Success', 'Data Updated Successfully');
      debugger
      this.GetSuppliermaster();
      location.href = "#/SupplierMasterDashboard"
    }
    )
  }
}
