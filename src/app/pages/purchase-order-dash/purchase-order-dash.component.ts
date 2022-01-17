import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PomsService } from '../../poms.service';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from "@angular/common";
import { NgDateRangePickerOptions } from "ng-daterangepicker";


@Component({
  selector: 'app-purchase-order-dash',
  templateUrl: './purchase-order-dash.component.html',
  styleUrls: ['./purchase-order-dash.component.css']
})
export class PurchaseOrderDashComponent implements OnInit {
  options: NgDateRangePickerOptions;


  constructor(public pomservice: PomsService, private activatedroute: ActivatedRoute) { }

  public countlist: any;
  public genaratorid: any;
  public pid: any;
  public status:any;
  SDate = new Date();
  EDate = new Date();
  public startdate: any;
  public enddate: any;
  public todaydate: any;
  public CurrentTime: any;
  public Date: any;
  public value: any;
public defaultopen:any;
public tendercountlist:any;
  ngOnInit() {
    this.defaultopen=0;
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
    this.genaratorid = localStorage.getItem('genaratorid');
    this.GetStatusByGenaratorID();
    this.GetTenderCounts()
  }

  public GetStatusByGenaratorID() {
    this.pomservice.GetPurchaseOrderReportsByGenaratorID(this.genaratorid,this.startdate,this.enddate).subscribe(data => {
      this.countlist = data;
    }, error => {

    })
  }


  public GetActivePoslist(status) {
    
    // this.pid = id;
    this.status=status;
    // localStorage.setItem('pid', this.pid);
    localStorage.setItem('Status', this.status);
  }
  selectedDate(data) {
    
    var sdate = data.split("-");
    this.startdate = sdate[0] + "-" + sdate[1] + "-" + sdate[2];
    this.enddate = sdate[3] + "-" + sdate[4] + "-" + sdate[5];
    localStorage.setItem("startdate", this.startdate);
    localStorage.setItem("enddate", this.enddate);
    this.GetStatusByGenaratorID();
   


  
  }





// <script>
// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();
// </script>

  public openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;
  document.getElementById("defaultOpen").click();
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
  document.getElementById("defaultOpen").click();
}





//tenders count


 public GetTenderCounts() {
    this.pomservice.GetTenderCounts(this.genaratorid,this.startdate,this.enddate).subscribe(data => {
      this.tendercountlist = data;
    }, error => {

    })
  }


  public SletecTenderDate(data)
  {
      
    var sdate = data.split('-')
    this.startdate = sdate[0]
    this.enddate = sdate[1]
    this.GetTenderCounts()
  }



  public GetTenderStatuss(status)
  {
    
    localStorage.setItem('STATUS',status);
    localStorage.setItem('STARTDATE',this.startdate)
       localStorage.setItem('ENDDATE',this.enddate)
  }
}
