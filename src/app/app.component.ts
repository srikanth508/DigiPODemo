import { Component } from '@angular/core';
import { PomsService } from '././poms.service'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POMS';
  constructor(private PomsService: PomsService) { }
  public temp: any;
  public userid:any;
  public messages:any;
  public count:any;

  ngOnInit() {
    this.temp = sessionStorage.getItem("temp");
   
    // if (this.temp == 1) {
    //   debugger
    //   Swal.fire("DigiPO is opened in another tab. Please logout from that tab to login here");
    // }

    this.userid = localStorage.getItem('UserID');
    this.GetMessages()
  }

  public GetMessages() {
    this.PomsService.GetNotificationMessages(this.userid).subscribe(data => {
      
      this.messages = data[0];
      this.count=this.messages.msgcount
    })
  }




  public logout() {
    
    sessionStorage.clear();
    localStorage.clear();
    location.href = "#/Login";
    location.reload();

  }

  public onActivate(event) {
    window.scroll(0, 0);
  }

}
