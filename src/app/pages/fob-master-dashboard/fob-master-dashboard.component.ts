import { Component, OnInit } from '@angular/core';
import { PomsService } from '../../poms.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-fob-master-dashboard',
  templateUrl: './fob-master-dashboard.component.html',
  styleUrls: ['./fob-master-dashboard.component.css']
})
export class FobMasterDashboardComponent implements OnInit {

  constructor(public pomservice: PomsService) { }
  public foblist: any;
  public term:any;
  public count:any;
  ngOnInit() {
    this.GetFobMaster();
  }
  public GetFobMaster() {
    this.pomservice.GetFOBMaster().subscribe(data => {
      this.foblist = data;
      this.count= this.foblist.length;
    }, error => {
    })
  }
  public DeleteFOBMaster(id) {
    
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.pomservice.DeleteFOBMaster(id).subscribe(res => {
          let test = res;
          this.GetFobMaster();
        })
        Swal.fire(
          'Deleted!',
          'Your Data has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Data  is safe :)',
          'error'
        )
        this.GetFobMaster();
      }
    })
  }
}
