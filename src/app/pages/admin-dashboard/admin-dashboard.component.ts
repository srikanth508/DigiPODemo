import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { PomsService } from "../../poms.service";
import { ActivatedRoute } from "@angular/router";
import { formatDate } from "@angular/common";
import { NgDateRangePickerOptions } from "ng-daterangepicker";
@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"]
})
export class AdminDashboardComponent implements OnInit {
  options: NgDateRangePickerOptions;

  constructor(
    public pomservice: PomsService,
    private activatedroute: ActivatedRoute
  ) { }
  public countlist: any;
  public genaratorid: any;
  public pid: any;
  public status: any;
  SDate = new Date();
  EDate = new Date();
  public startdate: any;
  public enddate: any;
  public todaydate: any;
  public CurrentTime: any;
  public Date: any;
  public value: any;
  public CategoryList: any;
  public CategoryListdata: any;
  public categorycount: any;
  public SubcategoryList1: any;
  public SubcategoryListcount: any;
  public itemlist: any;
  public itemcount: any;

  ngOnInit() {
    this.options = {
      theme: "default",
      range: "tm",
      dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      presetNames: [
        "This Month",
        "Last Month",
        "This Week",
        "Last Week",
        "This Year",
        "Last Year",
        "Start",
        "End"
      ],
      dateFormat: "yyyy/MM/dd",
      outputFormat: "YYYY-MM-DD",
      startOfWeek: 1
    };

    this.Date = new Date();

    var kkk = this.SDate.setDate(this.SDate.getDate() - 300);
    
    var lll = this.EDate.setDate(this.EDate.getDate() + 300);

    

    const format = "yyyy-MM-dd";
    const myDate = new Date();
    const locale = "en-US";
    this.todaydate = formatDate(myDate, format, locale);

    this.startdate = formatDate(kkk, format, locale);
    this.enddate = formatDate(lll, format, locale);
    localStorage.setItem("startdate", this.startdate);
    localStorage.setItem("enddate", this.enddate);
    
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let newformat = hours >= 12 ? "PM" : "AM";
    // Find current hour in AM-PM Format
    hours = hours % 12;
    // To display "0" as "12"
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? 0 + minutes : minutes;

    this.CurrentTime = hours + ":" + minutes + " " + newformat;

    this.GetStatusByGenaratorID();

    this.pomservice.GetCategoryMaster().subscribe(data => {
      
      this.CategoryListdata = data
      this.categorycount = this.CategoryListdata.length;
    })


    this.pomservice.GetSubCategoryMaster().subscribe(data => {
      
      this.SubcategoryList1 = data;
      this.SubcategoryListcount = this.SubcategoryList1.length;

    })


    this.pomservice.GetItemMaster().subscribe(data => {
      
      this.itemlist = data;
      this.itemcount = this.itemlist.length;
    })


  }

  public GetStatusByGenaratorID() {
    this.pomservice
      .GetPurchaseOrderReportsByAdmins(this.startdate, this.enddate)
      .subscribe(
        data => {
          this.countlist = data;
        },
        error => { }
      );
  }

  public GetActivePoslist(status) {
    
    this.status = status;

    localStorage.setItem("Statusss", this.status);
  }


  selectedDate(data) {
    
    var sdate = data.split("-");
    this.startdate = sdate[0] + "-" + sdate[1] + "-" + sdate[2];
    this.enddate = sdate[3] + "-" + sdate[4] + "-" + sdate[5];
    localStorage.setItem("startdate", this.startdate);
    localStorage.setItem("enddate", this.enddate);
    this.GetStatusByGenaratorID();
  }
}
