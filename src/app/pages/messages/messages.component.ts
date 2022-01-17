import { Component, OnInit } from '@angular/core';
import { PomsService } from '../../poms.service';
import Swal from 'sweetalert2'
import { NgDateRangePickerOptions } from 'ng-daterangepicker';
import { formatDate } from "@angular/common";
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  options: NgDateRangePickerOptions;
  constructor(private PomsService: PomsService) { }

  public messages: any;
  public userid: any;
  public sendername: any;
  public receivername: any;
  public poid: any;
  public senderid: any;
  public receiverid: any;
  public message: any;
  public pogenaratorid: any;
  public chatid: any;
  public supplierid: any;
  public username: any;
  public term: any;
  public count: any;


  public ponos: any;
  public pono: any;
  public dummponos: any;
  public msgdummlist: any;


  SDate = new Date();
  EDate = new Date();
  value: any;
  public startdate: any;
  public enddate: any;
  public todaydate: any;



  ngOnInit() {

    this.options = {
      theme: 'default',
      range: 'tm',
      dayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      presetNames: ['This Month', 'Last Month', 'This Week', 'Last Week', 'This Year', 'Last Year', 'Start', 'End'],
      dateFormat: 'yyyy/MM/dd',
      outputFormat: 'YYYY/MM/DD',
      startOfWeek: 1
    };

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let newformat = hours >= 12 ? 'PM' : 'AM';
    // Find current hour in AM-PM Format 
    hours = hours % 12;
    // To display "0" as "12" 
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? 0 + minutes : minutes;

    var kkk = this.SDate.setDate(this.SDate.getDate() - 300);
    var lll = this.EDate.setDate(this.EDate.getDate() + 300);

    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    this.todaydate = formatDate(myDate, format, locale);

    this.startdate = formatDate(kkk, format, locale);
    this.enddate = formatDate(lll, format, locale);


    this.userid = localStorage.getItem('UserID');
    this.username = localStorage.getItem('user');
    this.GetMessages();
    
    this.PomsService.GetDistinctPONumberForMessagessssssss().subscribe(data => {
      
      this.dummponos=data;
       this.ponos = this.dummponos.filter(x => x.poGenaratorID == this.userid || x.supplierID == this.userid)
     
    })
  }




  selectedDate(data) {
    
    var sdate = data.split('-')
    this.startdate = sdate[0]
    this.enddate = sdate[1]


    this.PomsService.GetNotificatin_MessagesByDate(this.userid, this.startdate, this.enddate).subscribe(data => {
      
      this.messages = data;
      this.msgdummlist = data;
      this.count = this.messages.length
    })

  }



  public GetMessages() {
    this.PomsService.GetNotificationMessages(this.userid).subscribe(data => {
      
      this.messages = data;
      this.msgdummlist = data;
      this.count = this.messages.length
    })
  }


  public GetPoNos(even) {
    
    this.pono = even.target.value;
    if (even.target.value != 0) {
      
      this.messages = this.msgdummlist.filter(x => x.poNo == this.pono)
      this.count = this.messages.length
    }
    else {
      this.GetMessages()
    }

  }
  public GetChatID(chatid) {
    
    this.chatid = chatid;
    // this.sendername = senderName;
    // this.pogenaratorid = pOGenaratorID;
    // this.supplierid = supplierID
    // this.poid = pOid;

    // this.PomsService.GetNotificationMaster(this.userid, this.supplierid).subscribe(data => {
    //   
    //   if (data.length == 0) {
    //     var ett = {
    //       'POGenaratorID': this.pogenaratorid,
    //       'SupplierID': this.supplierid,
    //       'POID': this.poid
    //     }
    //     this.PomsService.InsertNotificationMaster(ett).subscribe(data => {
    //       this.chatid = data;
    //     })
    //   }
    //   else {
    //     this.chatid = data[0].id;
    //   }
    // })

  }




  public insertmessage() {

    var entity = {
      'ChatID': this.chatid,
      'SenderName': this.username,
      'Messages': this.message
    }
    this.PomsService.InsertNotificatin_Messages(entity).subscribe(data => {
      this.GetMessages();
      Swal.fire('Completed', 'Message Sent Successfully');
      this.message = "";
    })

  }


  // public insertmessage() {
  //   

  //   var entity = {
  //     'SenderID': this.userid,
  //     'ReceiverID': this.receiverid,
  //     'Message': this.message,
  //     'POID': this.poid,
  //     'SenderName': this.receivername,
  //     'ReceiverName': this.sendername,
  //   }
  //   this.PomsService.InsertNotificationMessages(entity).subscribe(data => {
  //     if (data != 0) {
  //       Swal.fire('Completed', 'Message Sent Successfully');
  //       this.message = "";
  //       this.GetMessages()

  //     }
  //   })
  // }




  public openacc(poid) {

    this.PomsService.GetNotificationMessages(this.userid).subscribe(data => {
      
      this.messages = data;
      this.messages = this.messages.filter(x => x.poid == poid)
      this.count = this.messages.length
    })

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }

}
