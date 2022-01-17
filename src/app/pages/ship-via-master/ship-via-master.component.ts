import { Component, OnInit } from '@angular/core';
import { PomsService } from '../../poms.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ship-via-master',
  templateUrl: './ship-via-master.component.html',
  styleUrls: ['./ship-via-master.component.css']
})
export class ShipViaMasterComponent implements OnInit {
  ShipCodeID: any;
  saveupdatebtn: number;
  categorylist: any;
  ShipViaCode: any;
  ShipViaDescription: any;
  ShipCode: any;
  Description: any;

  constructor(private PomsService: PomsService, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      
      this.ShipCodeID = params['id'];
      if (this.ShipCodeID == undefined) {
        this.saveupdatebtn = 0;
      }
      else {
        this.saveupdatebtn = 1;
        this.PomsService.GetShipViaMaster().subscribe(data => {
          
          this.categorylist = data;
          this.categorylist = this.categorylist.filter(x => x.id == this.ShipCodeID);
          this.ShipViaCode = this.categorylist[0].shipViaCode;
          this.Description = this.categorylist[0].shipViaDescription;

        })
      }
    }
    )
   

  }





  public InsertShipViaMaster() {
    
    var Entity = {
      "ShipViaCode": this.ShipViaCode,
      "ShipViaDescription": this.Description,

    }
    this.PomsService.InsertShipViaMaster(Entity).subscribe((data: any) => {
      if (data != undefined) {
        
        Swal.fire('success', 'Ship Via Code Master Saved Successfully', 'success');
        location.href = "#/ShipViaMasterDashboard"

      }
    });
  }

  public UpdateShipViaMaster() {
    
    var Entity = {
      "ID": this.ShipCodeID,
      "ShipViaCode": this.ShipViaCode,
      "ShipViaDescription": this.Description,



    }
    this.PomsService.UpdateShipViaMaster(Entity).subscribe((data: any) => {
      if (data != undefined) {
        
        Swal.fire('success', 'Ship Via  Code  updated Successfully', 'success');
        location.href = "#/ShipViaMasterDashboard"

      }
    });
  }

}
