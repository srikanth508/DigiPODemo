import { Component, OnInit } from "@angular/core";
import { PomsService } from "../../poms.service";
import Swal from "sweetalert2";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: "app-my-profile",
  templateUrl: "./my-profile.component.html",
  styleUrls: ["./my-profile.component.css"]
})
export class MyProfileComponent implements OnInit {
  constructor(public pomservice: PomsService) {}
  public Editor = ClassicEditor;
  public countrylist: any;
  public countryid: any;
  public statelist: any;
  public stateid: any;
  public citylist: any;
  public cityid: any;
  public Supplierid: any;
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

  ngOnInit() {
    
    this.Supplierid = localStorage.getItem("Supplierid");
    this.getcountrymaster();
    this.GetSuppliermaster();
  }

  public getcountrymaster() {
    this.pomservice.GetCountryMaster().subscribe(
      data => {
        this.countrylist = data;
      },
      error => {}
    );
  }

  public GetCountryID(even) {
    this.countryid = even.target.value;
    this.GetStateMasterbycountryid();
  }
  public GetStateMasterbycountryid() {
    this.pomservice.GetStateMasterByCountryID(this.countryid).subscribe(
      data => {
        this.statelist = data;
      },
      error => {}
    );
  }
  public GetStateID(even) {
    this.stateid = even.target.value;
    this.GetCityMasterbyStateid();
  }
  public GetCityMasterbyStateid() {
    this.pomservice.GetCityMasterByStateID(this.stateid).subscribe(
      data => {
        this.citylist = data;
      },
      error => {}
    );
  }
  public GetCityID(even) {
    this.cityid = even.target.value;
  }

  public GetSuppliermaster() {
    this.pomservice.GetSupplierMaster().subscribe(
      data => {
        this.supplierlist = data;

        var sup = this.supplierlist.filter(x => x.id == this.Supplierid);
        (this.supplerno = sup[0].supplierCode),
          (this.supplername = sup[0].supplierName),
          (this.supplies = sup[0].supplies),
          (this.street = sup[0].street),
          (this.address = sup[0].address),
          (this.cityid = sup[0].cityID),
          (this.stateid = sup[0].stateID),
          (this.zipcode = sup[0].zipCode),
          (this.countryid = sup[0].countryID),
          (this.contactname = sup[0].contactName),
          (this.phoneno = sup[0].phoneNo),
          (this.secondarycontact = sup[0].secondaryContact),
          (this.secondaryphoneno = sup[0].secondaryPhoneNo),
          (this.faxtelephone = sup[0].faxTelephone),
          (this.terms = sup[0].terms),
          (this.email = sup[0].emailAddress);
        this.GetCityMasterbyStateid();
        this.GetStateMasterbycountryid();
      },
      error => {}
    );
  }

  public UpdateDetails() {
    
    var entity = {
      'ID': this.Supplierid,
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
      'Terms': this.terms
    }
    this.pomservice.UpdateSupplierMaster(entity).subscribe(res => {
      let test = res;
      Swal.fire('Success', 'Data Updated Successfully');
      this.GetSuppliermaster();
    
    }
    )
  }
}
