import { Component, OnInit } from "@angular/core";
import { PomsService } from "../../poms.service";
import Swal from "sweetalert2";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-po-genarator-login",
  templateUrl: "./po-genarator-login.component.html",
  styleUrls: ["./po-genarator-login.component.css"]
})
export class PoGenaratorLoginComponent implements OnInit {
  constructor(public pomservice: PomsService) { }

  public username: any;
  public password: any;
  public departmentlist: any;
  public departmentid: any;
  public pp: any;

  ngOnInit() {
    this.GetDepartment();
    this.departmentid == 0
  }
  public insertdetails() {

    var valpassword = this.pomservice.strongpassword(this.password);
    if (valpassword == false) {

      this.pp = 1;
    }
    else {
      if (this.departmentid == 0 || this.departmentid == "" || this.departmentid == undefined) {
        Swal.fire("Please Select Department")
      }
      else {
        var entity = {
          UserName: this.username,
          Password: this.password,
          DepartmentID: this.departmentid
        };
        this.pomservice.InsertPoGenaratorLogins(entity).subscribe(data => {
          if (data != 0) {
            Swal.fire("Completed", "Details Added Successfully");
            location.href = "#/PoGenaratorLoginDash";
            this.pp = 0;
          } else {
            Swal.fire("Error", "UserName Already Exists");
            location.href = "#/PoGenaratorLoginDash";
            this.pp = 0;
          }
        });
      }
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
