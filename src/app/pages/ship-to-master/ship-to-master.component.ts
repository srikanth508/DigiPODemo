import { Component, OnInit } from '@angular/core';
import { PomsService } from '../../poms.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ship-to-master',
  templateUrl: './ship-to-master.component.html',
  styleUrls: ['./ship-to-master.component.css']
})
export class ShipToMasterComponent implements OnInit {

  constructor(public pomservice: PomsService, private activatedroute: ActivatedRoute) { }

  public clientcode: any;
  public clientname: any;
  public street: any;

  public address: any;
  public city: any;
  public state: any;

  public zipcode: any;
  public country: any;
  public primaryphoneno: any;
  public secondaryphoneno: any;
  public email: any;
  public faxtelephone: any;
  public id: any;
  public showbit: any;
  public shiplist: any;
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
        this.getshipmaster();
      }
      else {
        this.showbit = 1;
      }
    })
    this.getcountrymaster();
    this.stateid="";
    this.countryid="";
    this.cityid="";
    this.departmentid="";
    this.GetDepartment();
  }



  public departmentid:any;
  
  public GetDepartmentID(even) {
    this.departmentid = even.target.value;
  }

  public departmentlist:any;
  
  public GetDepartment() {

    this.pomservice.GetDepartmentMaster().subscribe(data => {

      this.departmentlist = data;
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


  public insertdetails() {
    
    var entity = {
      'ClientCode': this.clientcode,
      'ClientName': this.clientname,
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
      'stdept':this.departmentid
    }
    this.pomservice.InsertShipToMaster(entity).subscribe(data => {
      if (data != 0) {
        Swal.fire('Completed', 'Data Added Successfully');
        this.clear();
        location.href = "#/ShipToMasterDashboard"
      }
    })
  }

  public clear() {
    this.clientcode = "",
      this.clientname = "",
      this.street = "",
      this.address = "",
      this.city = "",
      this.state = "",
      this.zipcode = "",
      this.country = "",
      this.secondaryphoneno = "",
      this.faxtelephone = "",
      this.email = "";
    this.primaryphoneno = "";
  }

  public getshipmaster() {
    this.pomservice.GetShipToMaster().subscribe(data => {
      this.shiplist = data;
      var bill = this.shiplist.filter(x => x.id == this.id)
      this.clientcode = bill[0].clientCode,
        this.clientname = bill[0].clientName,
        this.street = bill[0].street,
        this.address = bill[0].address,
        this.cityid = bill[0].cityID,
        this.stateid = bill[0].stateID,
        this.zipcode = bill[0].zipCode,
        this.countryid = bill[0].countryID,
        this.primaryphoneno = bill[0].primaryPhoneNo,
        this.secondaryphoneno = bill[0].secondaryPhoneNo,
        this.email = bill[0].email,
        this.faxtelephone = bill[0].faxTelephone,
        this.departmentid = bill[0].stdept
        this.GetCityMasterbyStateid();
        this.GetStateMasterbycountryid();
        this.GetDepartment();

    }, error => {

    })
  }



  public UpdateDetails() {
    
    var entity = {
      'ID': this.id,
      'ClientCode': this.clientcode,
      'ClientName': this.clientname,
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
      'stdept':this.departmentid
    }
    this.pomservice.UpdateShipToMaster(entity).subscribe(res => {
      let data = res;
      Swal.fire('Success', 'Data Updated Successfully');
      this.getshipmaster()
      location.href = "#/ShipToMasterDashboard"

    })
  }

}
