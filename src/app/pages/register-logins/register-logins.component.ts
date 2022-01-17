import { Component, OnInit } from '@angular/core';
import { PomsService } from '../../poms.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register-logins',
  templateUrl: './register-logins.component.html',
  styleUrls: ['./register-logins.component.css']
})
export class RegisterLoginsComponent implements OnInit {

  constructor(public pomservice: PomsService) { }
  public rolelist: any;
  public roleid: any;
  public username: any;
  public password: any;
  public roles: any;
  public companyname: any;
  public noofusers: any;
  public contactname: any;
  public phoneno: any;
  public email: any;


  ngOnInit() {
    this.getrolemaster();
    this.roleid = 0;
  }
  public getrolemaster() {
    this.pomservice.GetRoleMaster().subscribe(data => {
      this.rolelist = data;

    }, error => {

    })
  }

  public pp: any;

  public insertdetails() {
    debugger
    var valpassword = this.pomservice.strongpassword(this.password);
    if (valpassword == false) {

      this.pp = 1;
    }
    else {
      var entity = {
        'RoleID': 0,
        'UserName': this.username,
        'Password': this.password,
        'CompanyName': this.companyname,
        'NoofUsers': this.noofusers,
        'ContactName': this.contactname,
        'PhoneNo': this.phoneno,
        'Email': this.email
      }
      this.pomservice.InsertRegisterLogins(entity).subscribe(data => {
        if (data != 0) {
          Swal.fire('Completed', 'Details Added Successfully');
          location.href = "#/RegisterDash"
        }
        else {
          Swal.fire('Error', 'Company Already Exists')
          location.href = "#/RegisterDash"
        }
      }
      )
    }
  }


}
