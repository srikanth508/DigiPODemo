import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { PomsService } from '../../poms.service';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private PomsService: PomsService) { }

  public username: any;
  public password: any;
  public result: any;
  public roleid: any;
  public rolelist: any;
  public companycode: any;
  public companyurl: any;
  public companyurllist: any;
  public temp: any;


  ngOnInit() {

    this.spinner.show();
   

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
    this.getrolemaster()
  }

  public getrolemaster() {

    this.PomsService.GetRoleMasters().subscribe(data => {

      this.rolelist = data;
    }, error => {

    })
  }

  public GetRoleID(even) {

    this.roleid = even.target.value;
  }
  // public login(){
  //   localStorage.setItem('temp', '1');
  //   location.href = '#/Home';
  //   location.reload();
  //   Swal.fire('Login Successful')
  // }

  public logins() {
    if (this.roleid == undefined) {
      Swal.fire("Please Select Role");
    }
    if (this.username == null || this.password == undefined) {
      Swal.fire('Error', 'Please Enter UserName and Password!');
    }
    else {

      if (this.roleid == '1') {
        debugger
        var entiy = {
          'UserName': this.username,
          'Password': this.password,
          'RoleID': 1
        }
        this.PomsService.Authenicate(entiy).subscribe(res => {
          ;
          if (res['requestMessage'] != undefined || null) {
            localStorage.setItem('token', res['requestMessage'].headers[0].value[0]);
            this.PomsService.GetRegisterLoginsByUsername(this.username, this.password).subscribe(
              data => {
                debugger
                this.result = data;
                debugger
                if (this.result != null && this.result.length != 0) {
                  debugger
                  sessionStorage.setItem('temp', '1');
                  localStorage.setItem('user', this.result[0].loginname);
                  localStorage.setItem('roleid', '1')
                  location.href = '#/AdminDashboard';
                  location.reload();
                  debugger
                }
                else {
                  Swal.fire('Error', 'User Name and Password Not valid');
                  this.username = "";
                  this.password = "";
                }

              }, error => {
              }
            )
          }

        })
      }
      else if (this.roleid == '2') {
        var entiy = {
          'UserName': this.username,
          'Password': this.password,
          'RoleID': 1
        }
        this.PomsService.Authenicate(entiy).subscribe(res => {
          ;
          if (res['requestMessage'] != undefined || null) {
            localStorage.setItem('token', res['requestMessage'].headers[0].value[0]);
            this.PomsService.GetPoGenaratorLoginsByUnameAndPwd(this.username, this.password).subscribe(
              data => {

                this.result = data;

                if (this.result != null && this.result.length != 0) {
                  sessionStorage.setItem('temp', '1');
                  localStorage.setItem('user', this.result[0].loginname);
                  localStorage.setItem('genaratorid', this.result[0].id);
                  localStorage.setItem('UserID', this.result[0].id);
                  localStorage.setItem('roleid', '2')
                  location.href = '#/PurchaseOrderDash';
                  location.reload();
                }
                else {
                  Swal.fire('Error', 'User Name and Password Not valid');
                  this.username = "";
                  this.password = "";
                }
              }, error => {
              }
            )

          }

        })

      }
      else if (this.roleid == '3') {

        var entiy = {
          'UserName': this.username,
          'Password': this.password,
          'RoleID': 1
        }
        this.PomsService.Authenicate(entiy).subscribe(res => {
          if (res['requestMessage'] != undefined || null) {
            localStorage.setItem('token', res['requestMessage'].headers[0].value[0]);
            this.PomsService.GetAuthorizationLoginsUnameAndPwd(this.username, this.password).subscribe(
              data => {

                this.result = data;

                if (this.result != null && this.result.length != 0) {
                  sessionStorage.setItem('temp', '1');
                  localStorage.setItem('user', this.result[0].loginname);
                  localStorage.setItem('authorizatioid', this.result[0].authorizationID);

                  localStorage.setItem('roleid', '3')
                  location.href = '#/ApprovePODash';
                  location.reload();

                }
                else {
                  Swal.fire('Error', 'User Name and Password Not valid');
                  this.username = "";
                  this.password = "";
                }

              }, error => {
              }
            )
          }
        })
      }
      else if (this.roleid == '4') {
        var entiy = {
          'UserName': this.username,
          'Password': this.password,
          'RoleID': 1
        }
        this.PomsService.Authenicate(entiy).subscribe(res => {
          if (res['requestMessage'] != undefined || null) {
            localStorage.setItem('token', res['requestMessage'].headers[0].value[0]);

            this.PomsService.GetSupplierLoginsUnameAndPwd(this.username, this.password).subscribe(
              data => {

                this.result = data;

                if (this.result != null && this.result.length != 0) {
                  sessionStorage.setItem('temp', '1');
                  localStorage.setItem('user', this.result[0].supplierName);
                  localStorage.setItem('Supplierid', this.result[0].supplierID);
                  localStorage.setItem('UserID', this.result[0].supplierID);
                  localStorage.setItem('roleid', '4')
                  location.href = '#/MyPo';
                  location.reload();
                }
                else {
                  Swal.fire('Error', 'User Name and Password Not valid');
                  this.username = "";
                  this.password = "";
                }

              }, error => {
              }
            )
          }
        })
      }
    }
  }

}
