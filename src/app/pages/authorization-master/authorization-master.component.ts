import { Component, OnInit } from '@angular/core';
import { PomsService } from '../../poms.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-authorization-master',
  templateUrl: './authorization-master.component.html',
  styleUrls: ['./authorization-master.component.css']
})
export class AuthorizationMasterComponent implements OnInit {

  constructor(public pomservice: PomsService, private activatedroute: ActivatedRoute) { }
public authorizationcode:any;
public name:any;
public primaryphoneno:any;
public secondaryphoneno:any;
public faxtelephone:any;
public id:any;
public showbit:any;
public autholist:any;
public departmentlist: any;
public departmentid: any;
public email:any;


  ngOnInit() {
    
    this.activatedroute.params.subscribe(params => {
      
      this.id = params['id'];

      if (this.id != undefined || this.id != null) {
        this.showbit = 0;
         this.GetAuthorizationMaster();
      }
      else {
        this.showbit = 1;
      }
    })
    this.GetDepartment()
    this.departmentid=""
  }



  public GetDepartment() {
    
    this.pomservice.GetDepartmentMaster().subscribe(data => {
      
      this.departmentlist = data;
    });
  }
  
  public GetDepartmentID(even) {
    this.departmentid = even.target.value;
  }
  public insertdetails() {
    
    var entity = {
      'AuthorizationCode': this.authorizationcode,
      'Name': this.name,
      'PrimaryPhoneNo': this.primaryphoneno,
      'SecondaryPhoneNo': this.secondaryphoneno,
      'FaxTelephone': this.faxtelephone,
      'DepartmentID':this.departmentid,
      'Email':this.email
    }
    this.pomservice.InsertAuthorizationMaster(entity).subscribe(data => {
      if (data != 0) {
        Swal.fire('Completed', 'Authorization Added Successfully');
        this.clear();
        location.href = "#/AuthorizationMasterDashboard"
      }
    })
  }
  public clear()
  {
    this.authorizationcode="",
    this.name="",
    this.primaryphoneno="",
    this.secondaryphoneno="",
    this.faxtelephone=""
  }
  public GetAuthorizationMaster() {
    this.pomservice.GetAuthorizationMaster().subscribe(data => {
      this.autholist = data;
      var autho=this.autholist.filter(x=>x.id==this.id)
      this.authorizationcode=autho[0].authorizationCode,
      this.name=autho[0].name,
      this.primaryphoneno=autho[0].primaryPhoneNo,
      this.secondaryphoneno=autho[0].secondaryPhoneNo,
      this.faxtelephone=autho[0].faxTelephone,
      this.departmentid=autho[0].departmentID,
      this.email=autho[0].email
    }, error => {

    })
  }



  public updatedetails() {
    
    var entity = {
      'ID': this.id,
      'AuthorizationCode': this.authorizationcode,
      'Name': this.name,
      'PrimaryPhoneNo': this.primaryphoneno,
      'SecondaryPhoneNo': this.secondaryphoneno,
      'FaxTelephone': this.faxtelephone,
      'DepartmentID':this.departmentid,
      'Email':this.email
    }
    this.pomservice.UpdateAuthorizationMaster(entity).subscribe(res => {
   let data=res;
        Swal.fire('Success', 'Authorization Updated Successfully');
        location.href = "#/AuthorizationMasterDashboard"
       
    })
  }
}
