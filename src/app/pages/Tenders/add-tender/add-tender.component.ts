import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PomsService } from '../../../poms.service';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgxSpinnerService } from "ngx-spinner";
import { ThrowStmt } from '@angular/compiler';
import { concat } from 'rxjs';
import { formatDate } from "@angular/common";
@Component({
  selector: 'app-add-tender',
  templateUrl: './add-tender.component.html',
  styleUrls: ['./add-tender.component.css']
})
export class AddTenderComponent implements OnInit {
  public Editor = ClassicEditor;
  constructor(public pomservice: PomsService, private activatedroute: ActivatedRoute, private spinner: NgxSpinnerService) { }
  public companylist: any;
  public companyid: any;
  public ordertypeid: any;
  public supplierlist: any;
  public supplierid: any;
  public ShipViaList: any;
  public shipviaid: any;
  public foblist: any;
  public fobid: any;
  public TaxList: any;
  public taxid: any;
  public potypeid: any;
  public billlist: any;
  public billtoid: any;
  public buyerlist: any;
  public buyersid: any;
  public autholist: any;
  public authorizationid: any;

  public pono: any;
  public date: any;
  public note: any;
  public terms: any;
  public ref: any;
  public accountno: any;
  public dept: any;
  public podescription: any;
  public requisitioner: any;
  public requisition: any;

  public supplies: any;
  public shipdesc: any;
  public purchaseorderlist: any;
  public id: any;
  public showbit: any;
  public authosecondlevel: any;
  public secondauthoid: any;
  public authothirdlevel: any;
  public authothirdid: any;
  public firstlevelstatus: any;
  public secondlevelstats: any;
  public thirdelevelstatus: any;
  public departmentlist: any;
  public departmentid: any;
  public genaratorid: any;
  public Raised: any;
  public firstauthoname: any;
  public secondauthoname: any;
  public thirdauthoname: any;
  public duedate: any;
  public idcount: any;
  public todaydate: any;
  public term: any;

  ngOnInit() {
    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    this.todaydate = formatDate(myDate, format, locale);
    this.date = formatDate(myDate, format, locale);

    this.genaratorid = localStorage.getItem('genaratorid');
    this.activatedroute.params.subscribe(params => {

      this.id = params['id'];

      if (this.id != undefined || this.id != null) {
        this.showbit = 0;
        debugger
        this.GetPurchaseOrder();
        this.GetAuthorizationMaster()
      }
      else {
        this.showbit = 1;
      }
    })
    this.terms = ""
    this.note = ""
    this.podescription = ""
    this.Getbuyingcompany();
    this.GetSuppliermaster();
    this.GetShipViaMaster();
    this.GetFobMaster();
    this.GetTaxMaster();
    this.getbillmaster();
    // this.Getbuyermaster();
    this.GetAuthorizationMaster();
    this.getdepartmentmaster();
    this.GetOrderTypeMaster()
    this.companyid = 0;
    this.ordertypeid = 0;
    // this.supplierid = 0;
    // this.supplierid = 0;
    this.shipviaid = 0;
    this.fobid = 0;
    this.potypeid = 0;
    this.buyersid = 0;
    this.authorizationid = 0;
    this.billtoid = 0;
    this.taxid = 0;
    this.authothirdid = 0;
    this.secondauthoid = 0;
    this.departmentid = 0;
    this.instacode = 0;
    this.accountid = 0;
    this.shiptoid = 0;
    this.Raised = 'Raised'
    this.pomservice.GetAuthorizationMaster().subscribe(data => {
      this.autholist = data;
    }, error => {

    })

    this.pomservice.GetBuyerMaster().subscribe(data => {
      this.buyerlist = data;
      // this.buyerlist = this.buyerlist.filter(x => x.buyingCompanyID == this.companyid)
    }, error => {

    })
    this.GetInstructionMaster();
    this.getshiplist();

    // this.GetItemMaster();
    this.companyid = 9;
    this.quantity = 1;

    this.idcount = 1;
  }


  public shiplist: any;


  public getshiplist() {
    this.pomservice.GetShipToMaster().subscribe(
      data => {
        this.shiplist = data;

      },
      error => { }
    );
  }
  orderlist: any;
  dummorderlist: any;
  public GetOrderTypeMaster() {
    this.pomservice.GetOrderTypeMaster().subscribe(
      data => {
        this.dummorderlist = data;
        this.orderlist = this.dummorderlist.filter(x => x.id != 4)
      },
      error => { }
    );
  }



  public shiptoid: any;

  public GetShiptoID(even) {
    this.shiptoid = even.target.value;
  }


  ItemList: any;
  itemdd = {};


  public GetItemMaster() {
    this.pomservice.GetItemMaster().subscribe(data => {

      this.ItemList = data;


    });
  }



  public itemid: any;
  public itemlist: any;
  public tablecount: any;
  public suppliercode: any;


  // public GetItemID(item: any) {
  //   debugger
  //   this.itemid = item.id;

  //   var list1 = this.ItemList.filter(x => x.id == this.itemid)
  //   this.suppliercode = list1[0].itemSupplierCode
  //   this.tablecount = 1;
  // }

  public supplieritemslist: any;
  public filtersupplieritems: any;





  //   public GetItemMasterItems() {
  //     debugger
  //     this.pomservice.GetSupplerMasterItems().subscribe(data => {
  //       this.supplieritemslist = data;
  // debugger
  //       this.filtersupplieritems = this.supplieritemslist.filter(x => x.itemID == this.itemid)
  //     })
  //   }

  public acctype = {};


  public AccountingList: any;

  public GetAccountingCodeMaster() {
    this.pomservice.GetAccountingCodeMaster().subscribe(data => {
      this.dummaccountlist = data;
      this.AccountingList = this.dummaccountlist.filter(x => x.poTypeID == this.potypeid)

      this.acctype = {
        singleSelection: true,
        idField: 'id',
        textField: 'accountingCode',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        //  itemsShowLimit: 3,
        allowSearchFilter: true

      };

    });
  }

  public accountid: any;
  public dummaccountlist: any;
  public accountdescription: any;

  public GetAccountingID(Item: any) {
    debugger
    this.accountid = Item.id;

    var list = this.dummaccountlist.filter(x => x.id == this.accountid)
    this.accountno = list[0].accountingCode,
      this.accountdescription = list[0].accountingDescription
    debugger
  }


  public GetAccountingIDs(even) {
    debugger
    this.accountid = even.target.value;

    var list = this.dummaccountlist.filter(x => x.id == this.accountid)
    this.accountno = list[0].accountingCode,
      this.accountdescription = list[0].accountingDescription
    debugger
  }


  public instructionlist: any;

  dummistlist: any;
  public GetInstructionMaster() {
    this.pomservice.GetInstructionMaster().subscribe(data => {
      this.instructionlist = data;
      this.dummistlist = data;
    }, error => {

    })
  }


  public Getbuyingcompany() {
    this.pomservice.GetBuyingCompanyMaster().subscribe(data => {
      this.companylist = data;

    }, error => {

    })
  }

  // public Getbuyermaster() {
  //   this.pomservice.GetBuyerMaster().subscribe(data => {
  //     this.buyerlist = data;
  //     this.buyerlist=this.buyerlist.filter(x=>x.buyingCompanyID==this.companyid)
  //   }, error => {

  //   })
  // }
  public getdate(even) {
    this.date = even.target.value;
    this.duedate = "";
  }


  public getdepartmentmaster() {
    this.pomservice.GetDepartmentMaster().subscribe(data => {
      this.departmentlist = data;
    }, error => {

    })
  }



  GetVendorID(item: any) {
    this.vendorid.push(item.id)
  }

  supp = {};

  public GetSuppliermaster() {
    this.pomservice.GetSupplierMaster().subscribe(data => {
      this.supplierlist = data;

      this.supplierlist = this.supplierlist.filter(x => x.supplierStatus == 0)
      this.supp = {
        singleSelection: false,
        idField: 'id',
        textField: 'supplierName',
        // selectAllText: 'Select All',
        // unSelectAllText: 'UnSelect All',
        //  itemsShowLimit: 3,
        allowSearchFilter: true

      };

    }, error => {

    })
  }

  public GetShipViaMaster() {
    this.pomservice.GetShipViaMaster().subscribe(data => {

      this.ShipViaList = data;
    })
  }
  public GetFobMaster() {
    this.pomservice.GetFOBMaster().subscribe(data => {
      this.foblist = data;
    }, error => {
    })
  }
  public GetTaxMaster() {
    this.pomservice.GetTaxMaster().subscribe(data => {

      this.TaxList = data;
    })
  }

  public getbillmaster() {
    this.pomservice.GetBillToMaster().subscribe(data => {
      this.billlist = data;
    }, error => {

    })
  }


  taxpercentage: any;

  public GetAuthorizationMaster() {
    this.pomservice.GetAuthorizationMaster().subscribe(data => {
      this.autholist = data;
    }, error => {

    })
  }

  instdesc: any;

  public GetInstructionCode(even) {
    debugger

    this.instacode = even.target.value;

    var list = this.dummistlist.filter(x => x.instructionCode == this.instacode)
    this.instdesc = list[0].instruction,
      this.instructionid = list[0].id
  }

  public GetDepartmentID(even) {

    this.departmentid = even.target.value;
  }

  public GetCompanyID(even) {

    this.companyid = even.target.value;


  }
  public GetOrderTypeID(even) {

    this.ordertypeid = even.target.value;
  }
  // public GetSupplierID(even) {

  //   this.supplierid = even.target.value;
  //   var suppliess = this.supplierlist.filter(x => x.id == this.supplierid)
  //   this.supplies = suppliess[0].supplies

  // }
  public fobdesc: any;

  public GetShipViaID(even) {

    this.shipviaid = even.target.value;

    var ship = this.ShipViaList.filter(x => x.id == this.shipviaid)
    this.shipdesc = ship[0].shipViaDescription
  }
  public GetFobID(even) {

    this.fobid = even.target.value;
    var list1 = this.foblist.filter(x => x.id == this.fobid)
    this.fobdesc = list1[0].fobDescription

  }
  public GetTaxID(even) {

    this.taxid = even.target.value;
    var taxlist = this.TaxList.filter(x => x.id == this.taxid)

    this.taxpercentage = taxlist[0].taxPercentage
  }


  public potypeidforactid: any;
  public Potypename: any;

  public GetPoTypeID(even) {

    this.potypeid = even.target.value;
    debugger
    if (this.potypeid == 1) {
      this.Potypename = 'Expense';
    }
    else if (this.potypeid == 2) {
      this.Potypename = 'Capital'
    }
    // let list1 = even.target.value.split(",");
    // this.potypeid = list1[0];
    // this.potypeidforactid = list1[1];

    this.GetAccountingCodeMaster();

  }

  public GetBillToID(even) {

    this.billtoid = even.target.value;
  }
  public GetBuyersID(even) {

    this.buyersid = even.target.value;
  }

  public GetAuthorizationID(even) {

    this.authorizationid = even.target.value;

    var list = this.autholist.filter(x => x.id == this.authorizationid)
    this.firstauthoname = list[0].name

    this.authosecondlevel = this.autholist.filter(x => x.id != this.authorizationid)
  }


  public GetAuthorizationSecondlevelID(even) {

    this.secondauthoid = even.target.value;

    var list = this.autholist.filter(x => x.id == this.secondauthoid)
    this.secondauthoname = list[0].name

    this.authothirdlevel = this.authosecondlevel.filter(x => x.id != this.secondauthoid)
  }



  public GetAuthorizationThirdid(even) {

    this.authothirdid = even.target.value;

    var list = this.autholist.filter(x => x.id == this.authothirdid)
    this.thirdauthoname = list[0].name
  }


  public instacode: any;
  public purchaseorderid: any;
  public instructionid: any;
  tenderconditions: any;


  public insertdetails() {
    if (this.Itemqwerty.length == 0 || this.taxid == 0 || this.potypeid == 0 || this.billtoid == 0 || this.shiptoid == 0 || this.instructionid == 0 || this.ordertypeid == 0 || this.accountid == 0 || this.departmentid == 0) {
      Swal.fire('Please fill all mandatory fields')
    }
    else {
      debugger
      if (this.authorizationid == 0) {
        this.firstlevelstatus = 1;
      }
      if (this.secondauthoid == 0) {
        this.secondlevelstats = 1;
      }
      if (this.authothirdid == 0) {
        this.thirdelevelstatus = 1;
      }
      debugger
      var entity = {
        'BuyingCompanyID': this.companyid,
        'PoNo': this.potypeid,
        'Date': this.date,
        'OrderType': this.ordertypeid,
        'SupplierID': this.supplierid,
        'ShipViaID': this.shipviaid,
        'FOBID': this.fobid,
        'Note': this.note,
        'TaxID': this.taxid,
        'Terms': this.terms,
        'Reference': this.ref,
        'AccountNo': this.accountno,
        'Dept': this.departmentid,
        'PoType': this.Potypename,
        'PoDescription': this.podescription,
        'BillToID': this.billtoid,
        'Requistioner': this.requisitioner,
        'Requisition': this.requisition,
        'BuyersID': this.buyersid,
        'AuthorizationID': this.authorizationid,
        'SecondAuthorizationID': this.secondauthoid,
        'ThirdAuthorizationID': this.authothirdid,
        'FirstLevelAuthoStatus': this.firstlevelstatus,
        'SecondLevelAuthoStatus': this.secondlevelstats,
        'ThirdLevelAuthoStatus': this.thirdelevelstatus,
        'POGenaratorID': this.genaratorid,
        'instcode': this.instacode,
        'duedate': this.duedate,
        'ShiptoID': this.shiptoid,
        'AccountID': this.accountid,
        'InstructID': this.instructionid,
        'PoTypeID': this.potypeid,
        'TenderConditions': this.tenderconditions,
        'AttchmentUrl': ''
      }
      this.pomservice.InsertTender(entity).subscribe(data => {
        if (data != 0) {
          this.purchaseorderid = data;
          Swal.fire('Completed', 'Data Added Successfully');
          this.InsertItemDetails();
          this.insertvendors();

          // if (this.authorizationid != 0) {
          //   this.sendmailFirstlevel()
          // }
          // if (this.secondauthoid != 0) {
          //   this.SendmailSecondlevel()
          // }
          // if (this.authothirdid != 0) {
          //   this.Sendmailthirdlevel()
          // }


          location.href = "#/TenderDash"
        }
      })
    }
  }
  vendorid = []

  insertvendors() {
    for (let j = 0; j < this.vendorid.length; j++) {
      var entity = {
        'TenderID': this.purchaseorderid,
        'VendorID': this.vendorid[j]
      }
      this.pomservice.InsertTender_Vendors(entity).subscribe(data => {

      })
    }

  }





  public dummitemlist: any;
  public itemno: any;
  public itemname: any;
  public cost: any;
  public pricingunit: any;
  public pricingfactor: any;
  public unit: any;
  public itemsuppliercode: any;


  public checkitemsupliercode: any;

  count: any;

  public GetItemNo() {
    if (this.itemno == undefined) {
      Swal.fire("Please Enter Item No");
      this.tablecount = 0;
    }
    else {
      this.spinner.show();
      debugger
      this.pomservice.GetItemMasterByItemCodes(this.itemno).subscribe(data => {
        debugger
        if (data.length == 0) {
          Swal.fire("There is no Item on this item no");
          this.tablecount = 0;
          this.spinner.hide();
        }
        else {
          debugger
          debugger
          this.ItemList = data;
          this.dummitemlist = data;
          this.count = this.ItemList.length;
          this.spinner.hide();
          this.tablecount = 1;
          this.quantity = 1;
          debugger
          // var list = this.dummitemlist.filter(x => x.itemCode == this.itemno);
          // this.itemid = this.dummitemlist[0].id,
          //   this.itemname = this.dummitemlist[0].itemName,
          //   this.cost = this.dummitemlist[0].cost,
          //   this.pricingunit = this.dummitemlist[0].pricingUnit,
          //   this.pricingfactor = this.dummitemlist[0].pricingFactor,
          //   this.unit = this.dummitemlist[0].unit,
          //   this.itemsuppliercode = this.dummitemlist[0].itemSupplierCode,
          //   this.checkitemsupliercode = this.dummitemlist[0].itemSupplierCode,
          //   this.totalprice = this.dummitemlist[0].cost,
          //   this.description = this.dummitemlist[0].description
          debugger
          // this.GetSupplierCode();

          // this.spinner.hide();
        }
      });
    }
  }


  public GetSupplierCode() {
    debugger
    this.pomservice.GetSupplierMasterBySupplierCode(this.itemsuppliercode).subscribe(
      data => {
        if (data.length == 0) {
          this.spinner.hide();
        }
        else {
          this.tablecount = 1;
          this.spinner.hide();
          debugger
          this.supplierlist = data;

        }
        // this.filtersupplieritems=this.supplierlist.filter(x=>x.supplierCode==this.suppliercode)
        // debugger
      },
      error => { }
    );
  }



  // public valuechange1(cost,sup)
  // {
  //   if (sup.quantity == "") {
  //     debugger
  //     this.ItemList.filter(x => x.id == sup.id)[0].cost = Number(sup.quantity) * Number(sup.cost);
  //     this.totalprice = 0;
  //   }
  //   else {
  //     debugger
  //     // this.quantity = quantity;
  //     debugger
  //     this.ItemList.filter(x => x.id == sup.id)[0].cost = Number(sup.quantity) * Number(sup.cost);

  //     debugger
  //   }

  // }





  public valuechange1(cost, sup) {
    debugger
    if (sup.cost == "") {
      debugger
      this.ItemList.filter(x => x.id == sup.id)[0].cost = 0;
      this.totalprice = 0;
      this.valuechange(sup.quantity, sup)
    }
    else {
      debugger
      // this.quantity = quantity;
      debugger
      this.ItemList.filter(x => x.id == sup.id)[0].cost = cost
      this.valuechange(sup.quantity, sup)
      debugger
    }
  }


  public quantity: any;
  public totalprice: any;
  public totallllll: any;
  public valuechange(quantity, sup) {
    debugger
    if (sup.quantity == "") {
      debugger
      this.ItemList.filter(x => x.id == sup.id)[0].totalPrice = Number(sup.quantity) * Number(sup.cost);
      this.totalprice = 0;
    }
    else {
      debugger
      this.quantity = quantity;
      debugger
      this.ItemList.filter(x => x.id == sup.id)[0].totalPrice = Number(sup.quantity) * Number(sup.cost);

      debugger
    }
  }


  public decimalPlaces(totalprice) {
    debugger
    var match = ('' + totalprice).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    if (!match) { return 0; }
    return Math.max(
      0,

      // Number of digits right of decimal point.
      (match[1] ? match[1].length : 0)
      // Adjust for scientific notation.
      - (match[2] ? +match[2] : 0));
    debugger
  }



  public Itemqwerty = [];
  public description: any;

  public tablecountforadd: any;

  public getTotalList(sup) {
    debugger
    if (sup.quantity == "" || sup.quantity == 0) {
      debugger
      Swal.fire('Please Enter Quantity');
    }
    else if (this.Itemqwerty.length == 0) {
      debugger
      this.tablecountforadd = 2;
      // this.tablecount = 0;
      this.supplierid = sup.supplierID;
      this.terms = sup.terms
      var entity = {
        'Sno': this.idcount,
        'ItemNo': sup.itemCode,
        'ItemID': sup.id,
        'ItemName': sup.itemName,
        'Description': sup.description,
        'Unit': sup.unit,
        'Quantity': sup.quantity,
        'DueDate': '',
        'Price': sup.cost,
        'TotalPrice': sup.totalPrice,
        'uom': this.unit,
        'SupplierID': sup.supplierCode,
        'SupplierName': sup.supplierName
      }
      this.Itemqwerty.push(entity);

      debugger
      this.ItemList = this.ItemList.filter(x => x.id != sup.id);
      // this.ItemList = this.ItemList.slice(itemlist, this.ItemList.length);
      debugger
      this.idcount = this.idcount + 1;
      this.itemname = "";
      this.cost = "";
      this.pricingunit = "";
      this.unit = "";
      this.itemsuppliercode = "";
      this.totalprice = "";
      this.quantity = 1;
      this.itemno = "";
    }
    else if (this.Itemqwerty[0].SupplierID == sup.supplierCode && this.Itemqwerty[0].ItemID != sup.id) {
      this.tablecountforadd = 2;
      // this.tablecount = 0;
      var entity = {
        'Sno': this.idcount,
        'ItemNo': sup.itemCode,
        'ItemID': sup.id,
        'ItemName': sup.itemName,
        'Description': sup.description,
        'Unit': sup.unit,
        'Quantity': sup.quantity,
        'DueDate': '',
        'Price': sup.cost,
        'TotalPrice': sup.totalPrice,
        'uom': this.unit,
        'SupplierID': sup.supplierCode,
        'SupplierName': sup.supplierName
      }
      this.Itemqwerty.push(entity);
      this.idcount = this.idcount + 1;
      debugger
      this.ItemList = this.ItemList.filter(x => x.id != sup.id);
      // this.ItemList = this.ItemList.slice(itemlist, this.ItemList.length);
      debugger
      this.itemname = "";
      this.cost = "";
      this.pricingunit = "";
      this.unit = "";
      this.itemsuppliercode = "";
      this.totalprice = "";
      this.quantity = "";
      this.itemno = "";
    }
    else {
      Swal.fire('Items Should Belong to the Same Vendor. Please Select Items Accordingly');
      this.tablecountforadd = 2;
      // this.tablecount = 0;
      this.itemno = "";
    }
  }

  public delete(sno) {

    for (let i = 0; i < this.Itemqwerty.length; i++) {

      if (sno == this.Itemqwerty[i].Sno) {

        this.Itemqwerty.splice(i, 1);
      }
    }

  }



  public InsertItemDetails() {
    for (let i = 0; i < this.Itemqwerty.length; i++) {
      var entity = {
        'PurchaseOrderID': this.purchaseorderid,
        'ItemID': this.Itemqwerty[i].ItemID,
        'ItemName': this.Itemqwerty[i].ItemName,
        'Description': this.Itemqwerty[i].Description,
        'Unit': this.Itemqwerty[i].Unit,
        'Quantity': this.Itemqwerty[i].Quantity,
        'DueDate': new Date(),
        'Price': this.Itemqwerty[i].Price,
        'TotalPrice': this.Itemqwerty[i].TotalPrice,
        'TaxPercentage': 0,
        'TaxAmount': 0,
        'itemlnno': 0,
        'uom': this.Itemqwerty[i].Unit,
        'shipto': 0,
      }
      this.pomservice.InsertTenderOrderDetails(entity).subscribe(data => {
        if (data != 0) {
          Swal.fire('Completed', 'Data Added Successfully');
          this.tablecount = 0;
          location.href = "#/TenderDash"

        }
      })
    }
  }







  // public sendmailFirstlevel() {
  //   var mailentity = {
  //     ToEmail: 'srikanthreddy0905@gmail.com',
  //     Subject: 'New PO',
  //     FromEmail: 'Info@digiPO.net',
  //     ContentType: "text/html",
  //     Content: "Dear " + this.firstauthoname + "<br>"
  //       + "A New PO has been issued by company. Please Log In Your Account and Kindly Reply For Your Acceptance <br><br>" + "Regards <br>" + "DigiPO Team",
  //   }

  //   this.pomservice.SendMail(mailentity).subscribe(data => {

  //     Swal.fire('Mail sent successfully.');

  //   })
  // }


  // public SendmailSecondlevel() {
  //   var mailentity = {
  //     ToEmail: 'srikanthreddy0905@gmail.com',
  //     Subject: 'New PO',
  //     FromEmail: 'Info@digiPO.net',
  //     ContentType: "text/html",
  //     Content: "Dear " + this.secondauthoname + "<br>"
  //       + "A New PO has been issued by company. Please Log In Your Account and Kindly Reply For Your Acceptance <br><br>" + "Regards <br>" + "DigiPO Team",
  //   }

  //   this.pomservice.SendMail(mailentity).subscribe(data => {

  //     Swal.fire('Mail sent successfully.');

  //   })
  // }



  // public Sendmailthirdlevel() {
  //   var mailentity = {
  //     ToEmail: 'srikanthreddy0905@gmail.com',
  //     Subject: 'New PO',
  //     FromEmail: 'Info@digiPO.net',
  //     ContentType: "text/html",
  //     Content: "Dear " + this.thirdauthoname + "<br>"
  //       + "A New PO has been issued by company. Please Log In Your Account and Kindly Reply For Your Acceptance <br><br>" + "Regards <br>" + "DigiPO Team",
  //   }

  //   this.pomservice.SendMail(mailentity).subscribe(data => {

  //     Swal.fire('Mail sent successfully.');

  //   })
  // }




  public GetPurchaseOrder() {
    this.GetAuthorizationMaster();
    this.pomservice.GetPurchaseOrder().subscribe(data => {
      debugger
      this.purchaseorderlist = data;
      var purchase = this.purchaseorderlist.filter(x => x.id == this.id)
      debugger
      debugger
      this.companyid = purchase[0].buyingCompanyID,
        this.pono = purchase[0].poNo
      this.date = purchase[0].date
      this.ordertypeid = purchase[0].orderType
      this.supplierid = purchase[0].supplierID
      this.supplies = purchase[0].supplies,
        this.shipviaid = purchase[0].shipViaID
      this.note = purchase[0].note
      this.taxid = purchase[0].taxID
      this.terms = purchase[0].terms
      this.ref = purchase[0].reference
      this.accountno = purchase[0].accountNo
      this.departmentid = purchase[0].dept
      this.potypeid = purchase[0].poType
      this.podescription = purchase[0].poDescription
      this.billtoid = purchase[0].billToID
      this.requisitioner = purchase[0].requistioner
      this.requisition = purchase[0].requisition
      this.buyersid = purchase[0].buyersID
      this.authorizationid = purchase[0].authorizationID
      this.shipdesc = purchase[0].shipViaDescription
      this.secondauthoid = purchase[0].secondAuthorizationID
      this.authothirdid = purchase[0].thirdAuthorizationID
      this.firstlevelstatus = purchase[0].firstLevelAuthoStatus
      this.secondlevelstats = purchase[0].secondLevelAuthoStatus
      this.thirdelevelstatus = purchase[0].thirdLevelAuthoStatus,
        this.duedate = purchase[0].duedate,
        this.shiptoid = purchase[0].shiptoID,
        this.accountid = purchase[0].accountID,
        this.instructionid = purchase[0].instructID,
        this.instacode = purchase[0].instructionCode,
        this.instdesc = purchase[0].instruction,
        this.taxpercentage = purchase[0].taxPercentage,
        this.accountdescription = purchase[0].accountingDescription,
        this.potypeid = purchase[0].poTypeID,
        this.fobid = purchase[0].fobid,
        this.Potypename = purchase[0].poType
      // this.accountno=purchase[0].accountNo,

      debugger
      this.pomservice.GetOrderTypeMaster().subscribe(
        data => {
          this.orderlist = data;

        },
        error => { }
      );


      this.GetAccountingCodeMaster();

      this.pomservice.GetBuyerMaster().subscribe(data => {
        this.buyerlist = data;
        // this.buyerlist = this.buyerlist.filter(x => x.buyingCompanyID == this.companyid)
      }, error => {
      })

      // this.pomservice.GetAuthorizationMaster().subscribe(data => {
      //   this.autholist = data;
      // }, error => {

      // })

      this.authosecondlevel = this.autholist.filter(x => x.id != this.authorizationid)
      this.authothirdlevel = this.authosecondlevel.filter(x => x.id != this.secondauthoid)


    }, error => {

    })
  }

  finallist: any;




  // public GetDate(even) {

  //   this.date = even.target.value;
  // }






  public updatedetails() {
    debugger
    if (this.taxid == 0 || this.authorizationid == 0 || this.potypeid == 0 || this.buyersid == 0 || this.billtoid == 0 || this.shiptoid == 0 || this.fobid == 0 || this.instructionid == 0 || this.ordertypeid == 0 || this.shipviaid == 0 || this.accountid == 0 || this.departmentid == 0 || this.companyid == 0) {
      Swal.fire('Please fill all mandatory fields')
    }
    else {
      // if (this.authorizationid == 0) {
      //   this.firstlevelstatus = 1;
      // }
      // else {
      //   this.firstlevelstatus = 0;
      // }
      if (this.secondauthoid == 0) {
        this.secondlevelstats = 1;
      }
      else {
        this.secondlevelstats = 0;
      }

      if (this.authothirdid == 0) {
        this.thirdelevelstatus = 1;
      }
      else {
        this.thirdelevelstatus = 0;
      }
      debugger
      debugger
      var entity = {
        'ID': this.id,
        'BuyingCompanyID': this.companyid,
        'PoNo': this.pono,
        'Date': this.date,
        'OrderType': this.ordertypeid,
        'SupplierID': this.supplierid,
        'ShipViaID': this.shipviaid,
        'Note': this.note,
        'TaxID': this.taxid,
        'Terms': this.terms,
        'Reference': this.ref,
        'AccountNo': this.accountno,
        'Dept': this.departmentid,
        'PoType': this.Potypename,
        'PoDescription': this.podescription,
        'BillToID': this.billtoid,
        'Requistioner': this.requisitioner,
        'Requisition': this.requisition,
        'BuyersID': this.buyersid,
        'AuthorizationID': this.authorizationid,
        'SecondAuthorizationID': this.secondauthoid,
        'ThirdAuthorizationID': this.authothirdid,
        'FirstLevelAuthoStatus': this.firstlevelstatus,
        'SecondLevelAuthoStatus': this.secondlevelstats,
        'ThirdLevelAuthoStatus': this.thirdelevelstatus,
        'instcode': this.instacode,
        'duedate': this.duedate,
        'ShiptoID': this.shiptoid,
        'AccountID': this.accountid,
        'InstructID': this.instructionid,
        'FOBID': this.fobid,
        'PoTypeID': this.potypeid
      }
      this.pomservice.UpdatePurchaseOrder(entity).subscribe(res => {
        let data = res
        Swal.fire('Completed', 'Data Updated Successfully');

        location.href = "#/PurchaseOrderDashboard"

      })
    }
  }


  public Showofdash() {
    this.tablecount = 0;
  }

}
