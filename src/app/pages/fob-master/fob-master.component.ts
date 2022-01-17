import { Component, OnInit } from '@angular/core';
import { PomsService } from '../../poms.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-fob-master',
  templateUrl: './fob-master.component.html',
  styleUrls: ['./fob-master.component.css']
})
export class FobMasterComponent implements OnInit {

  constructor(public pomservice: PomsService, private activatedroute: ActivatedRoute) { }
  public id: any;
  public showbit:any;
  public fobcode:any;
  public fobcdesc:any;
  public foblist:any;

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      
      this.id = params['id'];

      if (this.id != undefined || this.id != null) {
        this.showbit = 0;
       this.GetFobMaster();
      }
      else {
        this.showbit = 1;
      }
    })
  }
  public insertdetails() {
    
    var entity = {
      'FobCode': this.fobcode,
      'FobDescription': this.fobcdesc,
    }
    this.pomservice.InsertFOBMaster(entity).subscribe(data => {
      if (data != 0) {
        Swal.fire('Completed', 'Data Added Successfully');
        location.href="#/FobMasterDashboard"
        this.clear();
      }
    })
  }
  public clear()
  {
    this.fobcode="",
    this.fobcdesc=""
  }
  public GetFobMaster() {
    this.pomservice.GetFOBMaster().subscribe(data => {
      this.foblist = data;
      var fob=this.foblist.filter(x=>x.id==this.id)
      this.fobcode=fob[0].fobCode,
      this.fobcdesc=fob[0].fobDescription

    }, error => {
    })
  }
  
  public UpdateDetails() {
    
    var entity = {
      'ID':this.id,
      'FobCode': this.fobcode,
      'FobDescription': this.fobcdesc,
    }
    this.pomservice.UpdateFOBMaster(entity).subscribe(res => {
     let data=res;
        Swal.fire('Completed', 'Data Updated Successfully');
        location.href="#/FobMasterDashboard"
       
      
    })
  }
}
