import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import Swal from "sweetalert2";
import { PomsService } from "../../poms.service";
@Component({
  selector: 'app-total-porevenue',
  templateUrl: './total-porevenue.component.html',
  styleUrls: ['./total-porevenue.component.css']
})
export class TotalPORevenueComponent implements OnInit {


  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{ ticks: { min: 0, stepSize: 1000, max: 10000 } }] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData = []
  deliverlist: any[];
  constructor(public pomservice: PomsService) { }


  supplierlist: any;
  public totalposlist: any;
  public year: any;


  ngOnInit() {

    this.year = "2021"
    
    this.pomservice.GetGraphTotalPOamount(this.year).subscribe(data => {
      this.totalposlist = data;
      

      this.barChartData = [
        {
          data: [this.totalposlist[0].janmoney, this.totalposlist[0].feb, this.totalposlist[0].march, this.totalposlist[0].april, this.totalposlist[0].may, this.totalposlist[0].june, this.totalposlist[0].july, this.totalposlist[0].aug, this.totalposlist[0].sep, this.totalposlist[0].oct, this.totalposlist[0].nov, this.totalposlist[0].dec], label: 'PO Amount'
        }

      ];
    })
  }


  public ChangeYear(even) {
    this.year = even.target.value;

    this.pomservice.GetGraphTotalPOamount(this.year).subscribe(data => {
      this.totalposlist = data;
      

      this.barChartData = [
        {
          data: [this.totalposlist[0].janmoney, this.totalposlist[0].feb, this.totalposlist[0].march, this.totalposlist[0].april, this.totalposlist[0].may, this.totalposlist[0].june, this.totalposlist[0].july, this.totalposlist[0].aug, this.totalposlist[0].sep, this.totalposlist[0].oct, this.totalposlist[0].nov, this.totalposlist[0].dec], label: 'PO Amount'
        }

      ];
    })
  }
}
