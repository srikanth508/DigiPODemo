import { Component, OnInit } from '@angular/core';
import { PomsService } from '../../poms.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-instruction-master-dashboard',
  templateUrl: './instruction-master-dashboard.component.html',
  styleUrls: ['./instruction-master-dashboard.component.css']
})
export class InstructionMasterDashboardComponent implements OnInit {

  constructor(public pomservice: PomsService, private spinner: NgxSpinnerService) { }
  public instructionlist: any;
  public term:any;
  public count:any;

  ngOnInit() {
    this.spinner.show();
    this.GetInstructionMaster()
  }
  public GetInstructionMaster() {

    this.pomservice.GetInstructionMaster().subscribe(data => {

      this.spinner.hide();
      this.instructionlist = data;
      this.count= this.instructionlist.length;
    }, error => {

    })
  }
  public DeleteInstructionMaster(id) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.pomservice.DeleteInstructionMaster(id).subscribe(res => {
          let test = res;
          this.GetInstructionMaster();
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
        this.GetInstructionMaster();
      }
    })
  }
}
