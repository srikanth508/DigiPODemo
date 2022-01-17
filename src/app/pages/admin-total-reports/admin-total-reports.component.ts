import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import Swal from "sweetalert2";
import { PomsService } from "../../poms.service";

@Component({
  selector: 'app-admin-total-reports',
  templateUrl: './admin-total-reports.component.html',
  styleUrls: ['./admin-total-reports.component.css']
})
export class AdminTotalReportsComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{ ticks: { min: 0, stepSize: 1, max: 600 } }] },
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

    this.year="2021"
    
    this.pomservice.GetPurchaseOrderGraphTotalPOs(this.year).subscribe(data => {
      this.totalposlist = data;
      
      this.pomservice.GetPurchaseOrderGraphSupplierAccptedPO(this.year).subscribe(data => {
        this.supplierlist = data;
        
        this.pomservice.GetPurchaseOrderGraphDeliveryPOS(this.year).subscribe(data => {
          this.deliverlist = data; 
          this.barChartData = [
            {
              data: [this.totalposlist[0].janTotalpos, this.totalposlist[0].febtotalpos, this.totalposlist[0].marchtotalpos, this.totalposlist[0].apriltotalpos, this.totalposlist[0].maytotalpos, this.totalposlist[0].junetotalpos, this.totalposlist[0].julypos, this.totalposlist[0].augustpos, this.totalposlist[0].septpos, this.totalposlist[0].octpos, this.totalposlist[0].novpos, this.totalposlist[0].decpos], label: 'Raised PO'
            },
            { data: [this.supplierlist[0].jancount, this.supplierlist[0].febcount, this.supplierlist[0].marchcount, this.supplierlist[0].aprilcount, this.supplierlist[0].maycount, this.supplierlist[0].junecount, this.supplierlist[0].julycount, this.supplierlist[0].augcount, this.supplierlist[0].sepcount, this.supplierlist[0].octcount, this.supplierlist[0].novcount, this.supplierlist[0].deccount], label: 'Authorized PO' },
            { data: [this.deliverlist[0].jancount, this.deliverlist[0].febcount, this.deliverlist[0].marchcount, this.deliverlist[0].aprilcount, this.deliverlist[0].maycount, this.deliverlist[0].junecount, this.deliverlist[0].julycount, this.deliverlist[0].augustcount, this.deliverlist[0].septcount, this.deliverlist[0].octcount, this.deliverlist[0].novcount, this.deliverlist[0].deccount], label: 'Delivered PO' },

          ];

        })
      })


    })
  }




  public ChangeYear(even) {
    this.year = even.target.value;


    this.pomservice.GetPurchaseOrderGraphTotalPOs(this.year).subscribe(data => {
      this.totalposlist = data;
      
      this.pomservice.GetPurchaseOrderGraphSupplierAccptedPO(this.year).subscribe(data => {
        this.supplierlist = data;
        
        this.pomservice.GetPurchaseOrderGraphDeliveryPOS(this.year).subscribe(data => {
          this.deliverlist = data; this.barChartData = [
            {
              data: [this.totalposlist[0].janTotalpos, this.totalposlist[0].febtotalpos, this.totalposlist[0].marchtotalpos, this.totalposlist[0].apriltotalpos, this.totalposlist[0].maytotalpos, this.totalposlist[0].junetotalpos, this.totalposlist[0].julypos, this.totalposlist[0].augustpos, this.totalposlist[0].septpos, this.totalposlist[0].octpos, this.totalposlist[0].novpos, this.totalposlist[0].decpos], label: 'Raised PO'
            },
            { data: [this.supplierlist[0].jancount, this.supplierlist[0].febcount, this.supplierlist[0].marchcount, this.supplierlist[0].aprilcount, this.supplierlist[0].maycount, this.supplierlist[0].junecount, this.supplierlist[0].julycount, this.supplierlist[0].augcount, this.supplierlist[0].sepcount, this.supplierlist[0].octcount, this.supplierlist[0].novcount, this.supplierlist[0].deccount], label: 'Accepted PO' },
            { data: [this.deliverlist[0].jancount, this.deliverlist[0].febcount, this.deliverlist[0].marchcount, this.deliverlist[0].aprilcount, this.deliverlist[0].maycount, this.deliverlist[0].junecount, this.deliverlist[0].julycount, this.deliverlist[0].augustcount, this.deliverlist[0].septcount, this.deliverlist[0].octcount, this.deliverlist[0].novcount, this.deliverlist[0].deccount], label: 'Delivered' },

          ];

        })
      })


    })
  }

}
