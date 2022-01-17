import { Component, OnInit } from "@angular/core";
import { PomsService } from "../../poms.service";
import Swal from "sweetalert2";
@Component({
  selector: "app-supplier-login",
  templateUrl: "./supplier-login.component.html",
  styleUrls: ["./supplier-login.component.css"]
})
export class SupplierLoginComponent implements OnInit {
  constructor(public pomservice: PomsService) { }
  public supplierlist: any;
  public supplierid: any;
  public username: any;
  public password: any;
  public departmentlist: any;
  public departmentid: any;

  ngOnInit() {
    this.GetSuppliermaster();
    this.supplierid = 0;
    this.GetDepartment();
  }
  public GetSuppliermaster() {
    this.pomservice.GetSupplierMaster().subscribe(
      data => {
        this.supplierlist = data;
      },
      error => { }
    );
  }
  public GetSupplierID(even) {

    this.supplierid = even.target.value;
  }

  public pp: any;

  public insertdetails() {

    var valpassword = this.pomservice.strongpassword(this.password);
    if (valpassword == false) {
      this.pp = 1;
    }
    else {
      var entity = {
        SupplierID: this.supplierid,
        UserName: this.username,
        Password: this.password,
        DepartmentID: 0
      };
      this.pomservice.InsertSupplierLogins(entity).subscribe(data => {
        if (data != 0) {
          Swal.fire("Completed", "Details Added Successfully");
          location.href = "#/SupplierLoginDash";
          this.pp = 0;
        } else {
          Swal.fire("Error", "UserName Already Exists");
          location.href = "#/SupplierLoginDash";
          this.pp = 0;
        }
      });
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
