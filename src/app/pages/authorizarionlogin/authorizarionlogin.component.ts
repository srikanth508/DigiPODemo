import { Component, OnInit } from '@angular/core';
import { PomsService } from '../../poms.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-authorizarionlogin',
  templateUrl: './authorizarionlogin.component.html',
  styleUrls: ['./authorizarionlogin.component.css']
})
export class AuthorizarionloginComponent implements OnInit {

  constructor(public pomservice: PomsService) { }

  public autholist: any;
  public authorizationid: any;
  public username: any;
  public password: any;
  public departmentlist: any;
  public departmentid: any;

  ngOnInit() {
    this.GetAuthomaster();
    this.authorizationid = 0
    this.GetDepartment();
  }
  public GetAuthomaster() {
    this.pomservice.GetAuthorizationMaster().subscribe(data => {
      this.autholist = data;
    }, error => {

    })
  }

  public GetauthorizationID(even) {
    this.authorizationid = even.target.value;
  }

  public pp: any;

  public insertdetails() {
    var valpassword = this.pomservice.strongpassword(this.password);
    if (valpassword == false) {
      this.pp = 1;
    }
    else
    {
      var entity = {
        'AuthorizationID': this.authorizationid,
        'UserName': this.username,
        'Password': this.password,
        DepartmentID: 1
      }
      this.pomservice.InsertAuthorizationLogins(entity).subscribe(data => {
        if (data != 0) {
          Swal.fire('Completed', 'Details Added Successfully');
          location.href = "#/Authologindash"
          this.pp=0;
        }
        else {
          Swal.fire('Error', 'UserName Already Exists')
          location.href = "#/Authologindash"
          this.pp=0;
        }
      }
      )
    }

  }

  public GetDepartment() {
    this.pomservice.GetDepartmentMaster().subscribe(data => {
      this.departmentlist = data;
    });
  }

  public GetDepartmentID(even) {
    this.departmentid = even.target.value;
  }
}
