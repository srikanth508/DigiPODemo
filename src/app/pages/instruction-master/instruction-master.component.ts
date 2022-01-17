import { Component, OnInit } from '@angular/core';
import { PomsService } from '../../poms.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-instruction-master',
  templateUrl: './instruction-master.component.html',
  styleUrls: ['./instruction-master.component.css']
})
export class InstructionMasterComponent implements OnInit {

  constructor(public pomservice: PomsService, private activatedroute: ActivatedRoute) { }
  public id: any;
  public showbit: any;
  public instructioncode: any;
  public instruction: any;
  public instructionlist: any;

  ngOnInit() {

    this.activatedroute.params.subscribe(params => {
      
      this.id = params['id'];

      if (this.id != undefined || this.id != null) {
        this.showbit = 0;
         this.GetInstructionMaster();
      }
      else {
        this.showbit = 1;
      }
    })
  }
  public insertdetails() {
    
    var entity = {
      'InstructionCode': this.instructioncode,
      'Instruction': this.instruction,
    }
    this.pomservice.InsertInstructionMaster(entity).subscribe(data => {
      if (data != 0) {
        Swal.fire('Completed', 'Data Added Successfully');
        location.href = "#/InstructionMasterDashboard"

        this.clear();
      }
    })
  }

  public clear() {
    this.instruction = "",
      this.instructioncode = ""
  }


  public GetInstructionMaster() {
    this.pomservice.GetInstructionMaster().subscribe(data => {
      this.instructionlist = data;
      var insta = this.instructionlist.filter(x => x.id == this.id)
      this.instructioncode = insta[0].instructionCode,
        this.instruction = insta[0].instruction
    }, error => {

    })
  }


  public Updatedetails() {
    
    var entity = {
      'ID': this.id,
      'InstructionCode': this.instructioncode,
      'Instruction': this.instruction,

    }
    this.pomservice.UpdateInstructionMaster(entity).subscribe(res => {
      let data = res;
      Swal.fire('Success', 'Data Updated Successfully');
      location.href = "#/InstructionMasterDashboard"

    })
  }
}
