import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PomsService {


  private host="HOSTNAME";
  
  private url: string = '';

  constructor(private http: HttpClient) { }

  //category
  public InsertCategoryMaster(data) {
    
    this.url = this.host + 'Master/InsertCategoryMaster';
    return this.http.post(this.url, data);
  }
  public GetCategoryMaster() {
    
    return this.http.get<any[]>(this.host + "Master/GetCategoryMaster");
  }
  public DeleteCategoryMaster(ID) {
    
    return this.http.get<any[]>(this.host + "Master/DeleteCategoryMaster?ID=" + ID);
  }
  public UpdateCategoryMaster(data) {
    
    this.url = this.host + "Master/UpdateCategoryMaster";
    return this.http.post(this.url, data);
  }

  public InsertSupplierMaster(data) {
    
    this.url = this.host + "Master/InsertSupplierMaster";
    return this.http.post(this.url, data);
  }
  //subCategory
  public InsertSubCategoryMaster(data) {
    
    this.url = this.host + "Master/InsertSubCategoryMaster";
    return this.http.post(this.url, data);
  }
  public GetSubCategoryMaster() {
    
    return this.http.get<any[]>(this.host + "Master/GetSubCategoryMaster");
  }
  public DeleteSubCategoryMaster(ID) {
    
    return this.http.get<any[]>(this.host + "Master/DeleteSubCategoryMaster?ID=" + ID);
  }
  public UpdateSubCategoryMaster(data) {
    
    this.url = this.host + "Master/UpdateSubCategoryMaster";
    return this.http.post(this.url, data);
  }

  public GetSupplierMaster() {
    
    return this.http.get<any[]>(this.host + "Master/GetSupplierMaster");
  }
  public DeleteSupplierMaster(id) {
    
    return this.http.get<any[]>(this.host + "Master/DeleteSupplierMaster?ID=" + id);
  }
  public UpdateSupplierMaster(data) {
    
    this.url = this.host + "Master/UpdateSupplierMaster";
    return this.http.post(this.url, data);
  }
  public InsertBillToMaster(data) {
    
    this.url = this.host + "Master/InsertBillToMaster";
    return this.http.post(this.url, data);
  }
  public DeleteBillToMaster(id) {
    
    return this.http.get<any[]>(this.host + "Master/DeleteBillToMaster?ID=" + id);
  }
  public GetBillToMaster() {
    
    return this.http.get<any[]>(this.host + "Master/GetBillToMaster");
  }
  public UpdateBillToMaster(data) {
    
    this.url = this.host + "Master/UpdateBillToMaster";
    return this.http.post(this.url, data);
  }
  public GetShipToMaster() {
    
    return this.http.get<any[]>(this.host + "Master/GetShipToMaster");
  }
  public UpdateShipToMaster(data) {
    
    this.url = this.host + "Master/UpdateShipToMaster";
    return this.http.post(this.url, data);
  }
  public DeleteShipToMaster(id) {
    
    return this.http.get<any[]>(this.host + "Master/DeleteShipToMaster?ID=" + id);
  }
  public InsertShipToMaster(data) {
    
    this.url = this.host + "Master/InsertShipToMaster";
    return this.http.post(this.url, data);
  }
  public GetBuyerMaster() {
    
    return this.http.get<any[]>(this.host + "Master/GetBuyerMaster");
  }
  public GetInstructionMaster() {
    
    return this.http.get<any[]>(this.host + "Master/GetInstructionMaster");
  }
  public InsertBuyerMaster(data) {
    
    this.url = this.host + "Master/InsertBuyerMaster";
    return this.http.post(this.url, data);
  }
  public InsertInstructionMaster(data) {
    
    this.url = this.host + "Master/InsertInstructionMaster";
    return this.http.post(this.url, data);
  }
  public UpdateBuyerMaster(data) {
    
    this.url = this.host + "Master/UpdateBuyerMaster";
    return this.http.post(this.url, data);
  }
  public UpdateInstructionMaster(data) {
    
    this.url = this.host + "Master/UpdateInstructionMaster";
    return this.http.post(this.url, data);
  }
  public DeleteInstructionMaster(id) {
    
    return this.http.get<any[]>(this.host + "Master/DeleteInstructionMaster?ID=" + id);
  }
  public DeleteBuyerMaster(id) {
    
    return this.http.get<any[]>(this.host + "Master/DeleteBuyerMaster?ID=" + id);
  }
  public InsertAuthorizationMaster(data) {
    
    this.url = this.host + "Master/InsertAuthorizationMaster";
    return this.http.post(this.url, data);
  }
  public UpdateAuthorizationMaster(data) {
    
    this.url = this.host + "Master/UpdateAuthorizationMaster";
    return this.http.post(this.url, data);
  }
  public DeleteAuthorizationMaster(id) {
    
    return this.http.get<any[]>(this.host + "Master/DeleteAuthorizationMaster?ID=" + id);
  }
  public GetAuthorizationMaster() {
    
    return this.http.get<any[]>(this.host + "Master/GetAuthorizationMaster");
  }
  public InsertBuyingCompanyMaster(data) {
    
    this.url = this.host + "Master/InsertBuyingCompanyMaster";
    return this.http.post(this.url, data);
  }
  public InsertFOBMaster(data) {
    
    this.url = this.host + "Master/InsertFOBMaster";
    return this.http.post(this.url, data);
  }
  public GetFOBMaster() {
    
    return this.http.get<any[]>(this.host + "Master/GetFOBMaster");
  }
  public GetBuyingCompanyMaster() {
    
    return this.http.get<any[]>(this.host + "Master/GetBuyingCompanyMaster");
  }
  public UpdateBuyingCompanyMaster(data) {
    
    this.url = this.host + "Master/UpdateBuyingCompanyMaster";
    return this.http.post(this.url, data);
  }
  public UpdateFOBMaster(data) {
    
    this.url = this.host + "Master/UpdateFOBMaster";
    return this.http.post(this.url, data);
  }
  public DeleteFOBMaster(id) {
    
    return this.http.get<any[]>(this.host + "Master/DeleteFOBMaster?ID=" + id);
  }
  public DeleteBuyingCompanyMaster(id) {
    
    return this.http.get<any[]>(this.host + "Master/DeleteBuyingCompanyMaster?ID=" + id);
  }

  //item Master
  public InsertItemMaster(data) {
    
    this.url = this.host + "Master/InsertItemMaster";
    return this.http.post(this.url, data);
  }
  public GetItemMaster() {
    
    return this.http.get<any[]>(this.host + "Master/GetItemMaster");
  }
  public DeleteItemMaster(ID) {
    
    return this.http.get<any[]>(this.host + "Master/DeleteItemMaster?ID=" + ID);
  }
  public UpdateItemMaster(data) {
    
    this.url = this.host + "Master/UpdateItemMaster";
    return this.http.post(this.url, data);
  }

  //AccountingCodeMaster
  public InsertAccountingCodeMaster(data) {
    
    this.url = this.host + "Master/InsertAccountingCodeMaster";
    return this.http.post(this.url, data);
  }
  public GetAccountingCodeMaster() {
    
    return this.http.get<any[]>(this.host + "Master/GetAccountingCodeMaster");
  }
  public DeleteAccountingCodeMaster(ID) {
    
    return this.http.get<any[]>(this.host + "Master/DeleteAccountingCodeMaster?ID=" + ID);
  }
  public UpdateAccountingCodeMaster(data) {
    
    this.url = this.host + "Master/UpdateAccountingCodeMaster";
    return this.http.post(this.url, data);
  }
  //shipVia
  public InsertShipViaMaster(data) {
    
    this.url = this.host + "Master/InsertShipViaMaster";
    return this.http.post(this.url, data);
  }
  public GetShipViaMaster() {
    
    return this.http.get<any[]>(this.host + "Master/GetShipViaMaster");
  }
  public DeleteShipViaMaster(ID) {
    
    return this.http.get<any[]>(this.host + "Master/DeleteShipViaMaster?ID=" + ID);
  }
  public UpdateShipViaMaster(data) {
    
    this.url = this.host + "Master/UpdateShipViaMaster";
    return this.http.post(this.url, data);
  }

  //Taxcode
  public InsertTaxMaster(data) {
    
    this.url = this.host + "Master/InsertTaxMaster";
    return this.http.post(this.url, data);
  }
  public GetTaxMaster() {
    
    return this.http.get<any[]>(this.host + "Master/GetTaxMaster");
  }
  public DeleteTaxMaster(ID) {
    
    return this.http.get<any[]>(this.host + "Master/DeleteTaxMaster?ID=" + ID);
  }
  public UpdateTaxMaster(data) {
    
    this.url = this.host + "Master/UpdateTaxMaster";
    return this.http.post(this.url, data);
  }
  public InsertPurchaseOrder(data) {
    
    this.url = this.host + "Master/InsertPurchaseOrder";
    return this.http.post(this.url, data);
  }
  public GetPurchaseOrder() {
    
    return this.http.get<any[]>(this.host + "Master/GetPurchaseOrder");
  }
  public InsertPurchaseOrderDetails(data) {
    
    this.url = this.host + "Master/InsertPurchaseOrderDetails";
    return this.http.post(this.url, data);
  }

  public InsertPurchaseOrderDetails_NewItems(data) {
    
    this.url = this.host + "Master/InsertPurchaseOrderDetails_NewItems";
    return this.http.post(this.url, data);
  }

  public GetPurchaseOrderDetailsByPurchaseOrderID(pid) {
    
    return this.http.get<any[]>(this.host + "Master/GetPurchaseOrderDetailsByPurchaseOrderID?PurchaseOrderID=" + pid);
  }
  public DeletePurchaseOrderDetails(ID) {
    
    return this.http.get<any[]>(this.host + "Master/DeletePurchaseOrderDetails?ID=" + ID);
  }
  public GetPurchaseOrderDetails() {
    
    return this.http.get<any[]>(this.host + "Master/GetPurchaseOrderDetails");
  }
  public UpdatePurchaseOrderDetails(data) {
    
    this.url = this.host + "Master/UpdatePurchaseOrderDetails";
    return this.http.post(this.url, data);
  }
  public DeletePurchaseOrder(id) {
    
    return this.http.get<any[]>(this.host + "Master/DeletePurchaseOrder?ID=" + id);
  }
  public UpdatePurchaseOrder(data) {
    
    this.url = this.host + "Master/UpdatePurchaseOrder";
    return this.http.post(this.url, data);
  }
  public GetCityMasterByStateID(pid) {
    
    return this.http.get<any[]>(this.host + "Master/GetCityMasterByStateID?StateID=" + pid);
  }
  public GetStateMasterByCountryID(pid) {
    
    return this.http.get<any[]>(this.host + "Master/GetStateMasterByCountryID?CountryID=" + pid);
  }
  public GetCountryMaster() {
    
    return this.http.get<any[]>(this.host + "Master/GetCountryMaster");
  }
  public GetRoleMaster() {
    
    return this.http.get<any[]>(this.host + "Master/GetRoleMaster");
  }
  public InsertRegisterLogins(data) {
    
    this.url = this.host + "Master/InsertRegisterLogins";
    return this.http.post(this.url, data);
  }
  public GetRegisterLogins() {
    
    return this.http.get<any[]>(this.host + "Master/GetRegisterLogins");
  }
  public GetRegisterLoginsByUsername( uname, pwd) {
    
    return this.http.get<any[]>(this.host + "Master/GetRegisterLoginsByUsername?UserName=" + uname + '&Password=' + pwd);
  }

  public GetSupplierInActiveStatus(id) {
    
    return this.http.get<any[]>(this.host + "Master/GetSupplierInActiveStatus?ID=" + id);
  }
  public GetSupplierActiveStatus(id) {
    
    return this.http.get<any[]>(this.host + "Master/GetSupplierActiveStatus?ID=" + id);
  }
  public InsertSupplierLogins(data) {
    
    this.url = this.host + "Master/InsertSupplierLogins";
    return this.http.post(this.url, data);
  }
  public InsertAuthorizationLogins(data) {
    
    this.url = this.host + "Master/InsertAuthorizationLogins";
    return this.http.post(this.url, data);
  }
  public GetSupplierLogins() {
    
    return this.http.get<any[]>(this.host + "Master/GetSupplierLogins");
  }
  public GetAuthorizationLogins() {
    
    return this.http.get<any[]>(this.host + "Master/GetAuthorizationLogins");
  }
  public GetRoleMasters() {
    
    return this.http.get<any[]>(this.host + "Master/GetRoleMasters");
  }
  public GetAuthorizationLoginsUnameAndPwd( uname, pwd) {
    
    return this.http.get<any[]>(this.host + "Master/GetAuthorizationLoginsUnameAndPwd?UserName=" + uname + '&Password=' + pwd);
  }
  public GetSupplierLoginsUnameAndPwd(uname, pwd) {
    
    return this.http.get<any[]>(this.host + "Master/GetSupplierLoginsUnameAndPwd?UserName=" + uname + '&Password=' + pwd);
  }
  public GetPurchaseOrderApprovredByAurizationID(id,sdate,edate) {
    
    return this.http.get<any[]>(this.host + "Master/GetPurchaseOrderApprovredByAurizationID?AuthorizationID=" + id+'&SDate='+sdate+'&EDate='+edate);
  }
  public UpdatePurchaseOrderAcceptStatus(data) {
    
    this.url = this.host + "Master/UpdatePurchaseOrderAcceptStatus";
    return this.http.post(this.url, data);
  }
  public UpdatePurchaseOrderCancelStatus(data) {
    
    this.url = this.host + "Master/UpdatePurchaseOrderCancelStatus";
    return this.http.post(this.url, data);
  }
  public GetApprovedPurchaseOrdersBySupplierID(id,sdate,edate) {
    
    return this.http.get<any[]>(this.host + "Master/GetApprovedPurchaseOrdersBySupplierID?SupplierID=" + id+'&SDate='+sdate+'&EDate='+edate);
  }

  public DisableSupplierLogins(id) {
    
    return this.http.get<any[]>(this.host + "Master/DisableSupplierLogins?ID=" + id);
  }
  public EnableSupplierLogins(id) {
    
    return this.http.get<any[]>(this.host + "Master/EnableSupplierLogins?ID=" + id);
  }


  public EnableAuthorizationLogins(id) {
    
    return this.http.get<any[]>(this.host + "Master/EnableAuthorizationLogins?ID=" + id);
  }
  public DisabeleAuthorizationLogins(id) {
    
    return this.http.get<any[]>(this.host + "Master/DisabeleAuthorizationLogins?ID=" + id);
  }
  public DisableRegisterLogins(id) {
    
    return this.http.get<any[]>(this.host+ "Master/DisableRegisterLogins?ID=" + id);
  }
  public EnableRegisterLogins(id) {
    
    return this.http.get<any[]>(this.host + "Master/EnableRegisterLogins?ID=" + id);
  }
  public UpdatePurchaseOrderSupplierAccept(data) {
    
    this.url = this.host + "Master/UpdatePurchaseOrderSupplierAccept";
    return this.http.post(this.url, data);
  }

  public InsertPoGenaratorLogins(data) {
    
    this.url = this.host + "Master/InsertPoGenaratorLogins";
    return this.http.post(this.url, data);
  }
  public GetPoGenaratorLogins() {
    
    return this.http.get<any[]>(this.host + "Master/GetPoGenaratorLogins");
  }
  public DisablePoGenaratorLogins(id) {
    
    return this.http.get<any[]>(this.host + "Master/DisablePoGenaratorLogins?ID=" + id);
  }
  public EnablePoGenaratorLogins(id) {
    
    return this.http.get<any[]>(this.host + "Master/EnablePoGenaratorLogins?ID=" + id);
  }
  public GetPoGenaratorLoginsByUnameAndPwd( uname, pwd) {
    
    return this.http.get<any[]>(this.host + "Master/GetPoGenaratorLoginsByUnameAndPwd?UserName=" + uname + '&Password=' + pwd);
  }
  public GetDepartmentMaster() {
    
    return this.http.get<any[]>(this.host + "Master/GetDepartmentMaster");
  }
  public GetSupplierTypeMaster() {
    
    return this.http.get<any[]>(this.host + "Master/GetSupplierTypeMaster");
  }
  public GetPurchaseOrderByGenaratorID(pid, sdate, edate) {
    
    return this.http.get<any[]>(this.host + "Master/GetPurchaseOrderByGenaratorID?POGenaratorID=" + pid + '&Sdate=' + sdate + '&Edate=' + edate);
  }
  public GetPurchaseOrderReportsByGenaratorID(id, sdate, edate) {
    
    return this.http.get<any[]>(this.host + "Master/GetPurchaseOrderReportsByGenaratorID?POGenaratorID=" + id + '&Sdate=' + sdate + '&Edate=' + edate);
  }
  public GetPurchaseOrderReportsStatusByGenaratorID(id, status, sdate, edate) {
    
    return this.http.get<any[]>(this.host + "Master/GetPurchaseOrderReportsStatusByGenaratorID?POGenaratorID=" + id + '&Status=' + status + '&Sdate=' + sdate + '&Edate=' + edate);
  }
  public GetPOCounts(id, sdate, edate) {
    
    return this.http.get<any[]>(this.host + "Master/GetPOCounts?AuthorizationID=" + id + '&Sdate=' + sdate + '&Edate=' + edate);
  }
  public GetApprovedPOReportsBYAuthoID(id, status, sdate, edate) {
    
    return this.http.get<any[]>(this.host + "Master/GetApprovedPOReportsBYAuthoID?AuthorizationID=" + id + '&Status=' + status + '&Sdate=' + sdate + '&Edate=' + edate);
  }
  public UpdateDeliverPurchaseOrder(id) {
    
    return this.http.get<any[]>(this.host + "Master/UpdateDeliverPurchaseOrder?ID=" + id);
  }
  public GetPurchaseOrderReportsByAdmins(sdate, edate) {
    
    return this.http.get<any[]>(this.host + "Master/GetPurchaseOrderReportsByAdmins?SDate=" + sdate + '&EDate=' + edate);
  }
  public GetPurchaseOrderReportsStatusAdmin(status, sdate, edate) {
    
    return this.http.get<any[]>(this.host + "Master/GetPurchaseOrderReportsStatusAdmin?Status=" + status + '&SDate=' + sdate + '&EDate=' + edate);
  }
  public GetPurchaseOrderBySupplierIDReports(supplierid, sdate, edate) {
    
    return this.http.get<any[]>(this.host + "Master/GetPurchaseOrderBySupplierIDReports?SupplierID=" + supplierid + '&SDate=' + sdate + '&EDate=' + edate);
  }
  public GetReportsBySupplierID(supplierid, status, sdate, edate) {
    
    return this.http.get<any[]>(this.host + "Master/GetReportsBySupplierID?SupplierID=" + supplierid + '&Status=' + status + '&SDate=' + sdate + '&EDate=' + edate);
  }

  public InsertNotificationMessages(data) {
    
    this.url = this.host + "Master/InsertNotificationMessages";
    return this.http.post(this.url, data);
  }
  public GetNotificationMessages(userdid) {
    
    return this.http.get<any[]>(this.host + "Master/GetNotificationMessages?UserID=" + userdid);
  }
  public InsertNotificationMaster(data) {
    
    this.url = this.host + "Master/InsertNotificationMaster";
    return this.http.post(this.url, data);
  }
  public InsertNotificatin_Messages(data) {
    
    this.url = this.host + "Master/InsertNotificatin_Messages";
    return this.http.post(this.url, data);
  }
  public GetNotificationMaster(pgid, supplierid, poid) {
    
    return this.http.get<any[]>(this.host + "Master/GetNotificationMaster?POGenaratorID=" + pgid + '&SupplierID=' + supplierid + '&POID=' + poid);
  }


  public InsertSupplerMasterItems(data) {
    
    this.url = this.host + "Master/InsertSupplerMasterItems";
    return this.http.post(this.url, data);
  }


  public GetSupplerMasterItems() {
    
    return this.http.get<any[]>(this.host + "Master/GetSupplerMasterItems");
  }

  public DisableAuthorizationMaster(id) {
    
    return this.http.get<any[]>(this.host + "Master/DisableAuthorizationMaster?ID=" + id);
  }

  public EnableAuthorizationMaster(id) {
    
    return this.http.get<any[]>(this.host + "Master/EnableAuthorizationMaster?ID=" + id);
  }
  public DeleteSupplerMasterItems(id) {
    
    return this.http.get<any[]>(this.host + "Master/DeleteSupplerMasterItems?ID=" + id);
  }


  public UpdateSupplerMasterItems(data) {
    
    this.url = this.host + "Master/UpdateSupplerMasterItems";
    return this.http.post(this.url, data);
  }

  public GetDistinctPONumberForMessagessssssss() {
    
    return this.http.get<any[]>(this.host + "Master/GetDistinctPONumberForMessages");
  }

  public GetTenderTypeMaster() {
    
    return this.http.get<any[]>(this.host + "Master/GetTenderTypeMaster");
  }

  //tender

  public InsertTender(data) {
    
    this.url = this.host + "Master/InsertTender";
    return this.http.post(this.url, data);
  }
  public GetTenderBySdateAndEdate(sdate, edate, tid) {
    
    return this.http.get<any[]>(this.host + "Master/GetTenderBySdateAndEdate?Sdate=" + sdate + '&Edate=' + edate + '&TenderGenaratorID=' + tid);
  }
  public GetTenderByAuthorizationID(aid, sdate, edate) {
    
    return this.http.get<any[]>(this.host + "Master/GetTenderByAuthorizationID?AuthorizationID=" + aid + '&Sdate=' + sdate + '&Edate=' + edate);
  }
  public DeleteTender(id) {
    
    return this.http.get<any[]>(this.host + "Master/DeleteTender?ID=" + id);
  }
  public CancelTenderByAuthorization(data) {
    
    this.url = this.host + "Master/CancelTenderByAuthorization";
    return this.http.post(this.url, data);
  }
  public AcceptTenderByAuthorization(data) {
    
    this.url = this.host + "Master/AcceptTenderByAuthorization";
    return this.http.post(this.url, data);
  }
  public GetTenderBids(sdate, edate) {
    
    return this.http.get<any[]>(this.host + "Master/GetTenderBids?Sdate=" + sdate + '&Edate=' + edate);
  }
  // public UploadTenderAttachments(files) {
  //   let formdata: FormData = new FormData();
  //   for (let i = 0; i < files.length; i++) {
  //     formdata.append('file_upload', files[i], files[i].name);
  //   }
  //   return this.http.post(this.host + '/Master/UploadTenderAttachments/', formdata);
  // }

  public UploadPO(files) {
    debugger
    let formdata: FormData = new FormData();
      formdata.append('file_upload', files, files.name);
    debugger
    return this.http.post(this.host + 'Master/UploadPO/', formdata);
  }


  // public UploadPO(files) {
  //   debugger
  //   let formdata: FormData = new FormData();
  //   for (let i = 0; i < files.length; i++) {
  //     formdata.append('file_upload', files[i], files[i].name);
  //   }
  //   debugger
  //   return this.http.post(this.host + '/Master/UploadPO/', formdata);
  //   debugger
  // }

  public RejectTenderBidsRejected(id) {
    
    return this.http.get<any[]>(this.host + "Master/RejectTenderBidsRejected?ID=" + id);
  }
  public AwardTenderBids(id, tid) {
    
    return this.http.get<any[]>(this.host + "Master/AwardTenderBids?ID=" + id + '&TenderID=' + tid);
  }
  public AcceptTenderBidsShortlisted(id) {
    
    return this.http.get<any[]>(this.host + "Master/AcceptTenderBidsShortlisted?ID=" + id);
  }
  public GetTenderName() {
    
    return this.http.get<any[]>(this.host + "Master/GetTenderName");
  }
  public GetTender() {
    
    return this.http.get<any[]>(this.host + "Master/GetTender");
  }


  public InsertTenderBids(data) {
    
    this.url = this.host + "Master/InsertTenderBids";
    return this.http.post(this.url, data);
  }

  public GetTenderLiveProjects(sdate, edate) {
    
    return this.http.get<any[]>(this.host + "Master/GetTenderLiveProjects?Sdate=" + sdate + '&Edate=' + edate);
  }

  public GetTenderLiveProjectsNames() {
    
    return this.http.get<any[]>(this.host + "Master/GetTenderLiveProjectsNames");
  }

  public InsertWorkSchedule(data) {
    
    this.url = this.host + "Master/InsertWorkSchedule";
    return this.http.post(this.url, data);
  }
  public InsertVendorCompanyRegistration(data) {
    
    this.url = this.host + "Master/InsertVendorCompanyRegistration";
    return this.http.post(this.url, data);
  }
  public InsertVendorsRegistration(data) {
    
    this.url = this.host + "Master/InsertVendorsRegistration";
    return this.http.post(this.url, data);
  }
  public GetVendorCompanyRegistration() {
    
    return this.http.get<any[]>(this.host + "Master/GetVendorCompanyRegistration");
  }
  public GetVendorsRegistration() {
    
    return this.http.get<any[]>(this.host + "Master/GetVendorsRegistration");
  }

  public GetVendorLogins(url, uname, pwd) {
    
    return this.http.get<any[]>(url + "Master/GetVendorLogins?UserName=" + uname + '&Password=' + pwd);
  }
  public GetTenderLiveProjectsByVendorID(sdate, edate, vid) {
    
    return this.http.get<any[]>(this.host + "Master/GetTenderLiveProjectsByVendorID?Sdate=" + sdate + '&Edate=' + edate + '&VendorID=' + vid);
  }
  public GetWorkSchedule(tid) {
    
    return this.http.get<any[]>(this.host + "Master/GetWorkSchedule?TenderID=" + tid);
  }
  public GetWorkScheduleByVendorsID(vid, tid) {
    
    return this.http.get<any[]>(this.host + "Master/GetWorkScheduleByVendorsID?VendorID=" + vid + '&TenderID=' + tid);
  }

  public UpdateWorkScheduleStatus(data) {
    
    this.url = this.host + "Master/UpdateWorkScheduleStatus";
    return this.http.post(this.url, data);
  }
  public GetALLTenders(sdate, edate) {
    
    return this.http.get<any[]>(this.host + "Master/GetALLTenders?Sdate=" + sdate + '&Edate=' + edate);
  }
  public GetTenderBySdateAndEdateViewDetails(sdate, edate) {
    
    return this.http.get<any[]>(this.host + "Master/GetTenderBySdateAndEdateViewDetails?Sdate=" + sdate + '&Edate=' + edate);
  }
  public InsertProjectContacts(data) {
    
    this.url = this.host + "Master/InsertProjectContacts";
    return this.http.post(this.url, data);
  }

  public GetProjectContacts(pid) {
    
    return this.http.get<any[]>(this.host + "Master/GetProjectContacts?PoGenaratorID=" + pid);
  }
  public GetTenderChatProjects(pid) {
    
    return this.http.get<any[]>(this.host + "Master/GetTenderChatProjects?VendorID=" + pid);
  }
  public GetProjectContactsByProjectID(pid) {
    
    return this.http.get<any[]>(this.host + "Master/GetProjectContactsByProjectID?ProjectID=" + pid);
  }
  public InsertProjectChatMessages(data) {
    
    this.url = this.host + "Master/InsertProjectChatMessages";
    return this.http.post(this.url, data);
  }
  public InsertProjectMessagesMaster(data) {
    
    this.url = this.host + "Master/InsertProjectMessagesMaster";
    return this.http.post(this.url, data);
  }

  public GetProjectMessagesMasterByChatID(pd, vid, pid) {
    
    return this.http.get<any[]>(this.host + "Master/GetProjectMessagesMasterByChatID?ProjectID=" + pd + '&VendorID=' + vid + '&PoGenaratorID=' + pid);
  }
  public GetProjectChatMessages(pid) {
    
    return this.http.get<any[]>(this.host + "Master/GetProjectChatMessages?UserID=" + pid);
  }
  public InsertVendorLogins(data) {
    
    this.url = this.host + "Master/InsertVendorLogins";
    return this.http.post(this.url, data);
  }
  public DeleteVendorLogins(pid) {
    
    return this.http.get<any[]>(this.host + "Master/DeleteVendorLogins?ID=" + pid);
  }
  public GetVendorLoginsDash() {
    
    return this.http.get<any[]>(this.host + "Master/GetVendorLoginsDash");
  }
  public UpdateTenderBidsBits(pid) {
    
    return this.http.get<any[]>(this.host + "Master/UpdateTenderBidsBits?TenderID=" + pid);
  }
  public GetTenderCounts(pid, sdate, edate) {
    
    return this.http.get<any[]>(this.host + "Master/GetTenderCounts?TenderGenaratorID=" + pid + '&Sdate=' + sdate + '&Edate=' + edate);
  }


  public UpdateSupplierLoginsPassword(data) {
    
    this.url = this.host + "Master/UpdateSupplierLoginsPassword";
    return this.http.post(this.url, data);
  }
  public UpdatePoGenaratorLoginsPassword(data) {
    
    this.url = this.host + "Master/UpdatePoGenaratorLoginsPassword";
    return this.http.post(this.url, data);
  }
  
  public UpdateAuthorizationLoginsPassword(data) {
    
    this.url = this.host + "Master/UpdateAuthorizationLoginsPassword";
    return this.http.post(this.url, data);
  }

  public EnableCategoryMaster(pid) {
    
    return this.http.get<any[]>(this.host + "Master/EnableCategoryMaster?ID=" + pid);
  }
  public DisableCategoryMaster(pid) {
    
    return this.http.get<any[]>(this.host + "Master/DisableCategoryMaster?ID=" + pid);
  }
  public EnableSubCategoryMaster(pid) {
    
    return this.http.get<any[]>(this.host + "Master/EnableSubCategoryMaster?ID=" + pid);
  }
  public DisableSubCategoryMaster(pid) {
    
    return this.http.get<any[]>(this.host + "Master/DisableSubCategoryMaster?ID=" + pid);
  }



  public DisableItemMaster(pid) {
    
    return this.http.get<any[]>(this.host + "Master/DisableItemMaster?ID=" + pid);
  }
  public EnableItemMaster(pid) {
    
    return this.http.get<any[]>(this.host + "Master/EnableItemMaster?ID=" + pid);
  }



  public GetPurchaseOrderApprovredOrders(id,sdate,edate) {
    
    return this.http.get<any[]>(this.host + "Master/GetPurchaseOrderApprovredOrders?AuthorizationID=" + id+'&SDate='+sdate+'&EDate='+edate);
  }

  
  public GetPurchaseOrderCancelledOrders(id,sdate,edate) {
    
    return this.http.get<any[]>(this.host + "Master/GetPurchaseOrderCancelledOrders?AuthorizationID=" + id+'&SDate='+sdate+'&EDate='+edate);
  }

  public UpdatePurchaseOrderSupplierReject(data) {
    
    this.url = this.host + "Master/UpdatePurchaseOrderSupplierReject";
    return this.http.post(this.url, data);
  }


  public GetApprovedPOReportsBYAuthoIDAwaitingReports(id, status, sdate, edate) {
    
    return this.http.get<any[]>(this.host + "Master/GetApprovedPOReportsBYAuthoIDAwaitingReports?AuthorizationID=" + id + '&Status=' + status + '&Sdate=' + sdate + '&Edate=' + edate);
  }



  public GetNotificatin_MessagesByDate(id, sdate, edate) {
    
    return this.http.get<any[]>(this.host + "Master/GetNotificatin_MessagesByDate?UserID=" + id + '&Sdate=' + sdate + '&Edate=' + edate);
  }


  public GetPurchaseOrderGraphTotalPOs(year) {
    
    return this.http.get<any[]>(this.host + "Master/GetPurchaseOrderGraphTotalPOs?Year=" + year);
  }

  
  public GetPurchaseOrderGraphSupplierAccptedPO(year) {
    
    return this.http.get<any[]>(this.host + "Master/GetPurchaseOrderGraphSupplierAccptedPO?Year=" + year);
  }

  public GetPurchaseOrderGraphDeliveryPOS(year) {
    
    return this.http.get<any[]>(this.host + "Master/GetPurchaseOrderGraphDeliveryPOS?Year=" + year);
  }

  
  public GetGraphTotalPOamount(year) {
    
    return this.http.get<any[]>(this.host + "Master/GetGraphTotalPOamount?Year=" + year);
  }





  public Authenicate(data) {
    this.url = this.host + "Master/Authenicate";
    return this.http.post(this.url, data);
  }

  public Gethold(userid) {
    
    return this.http.get<any[]>(this.host + "Master/Gethold?UserID=" + userid);
  }
  

  public GetHOLN(pono) {
    
    return this.http.get<any[]>(this.host + "Master/GetHOLN?ponumber=" + pono);
  }

  public GetUnitofMeasureMaster() {
    
    return this.http.get<any[]>(this.host + "Master/GetUnitofMeasureMaster");
  }


  public GetPurchaseOrderOldPO(startdate,edate,pogenaratorid) {
    
    return this.http.get<any[]>(this.host + "Master/GetPurchaseOrderOldPO?StartDate=" + startdate+'&EndDate='+edate+'&PoGenaratorID='+pogenaratorid);
  }

  public GetPurchaseOrderDetailsOldPO(userid) {
    
    return this.http.get<any[]>(this.host + "Master/GetPurchaseOrderDetailsOldPO?PurchaseOrderID=" + userid);
  }
  

  public GetSupplierMasterBySupplierCode(suppliercode) {
    
    return this.http.get<any[]>(this.host + "Master/GetSupplierMasterBySupplierCode?SupplierCode=" + suppliercode);
  }
  

  public GetItemMasterByItemCode(itemcode) {
    
    return this.http.get<any[]>(this.host + "Master/GetItemMasterByItemCode?ItemCode=" + itemcode);
  }

  public InsertDepartmentMaster(data) {
    
    this.url = this.host + "Master/InsertDepartmentMaster";
    return this.http.post(this.url, data);
  }

  public UpdateDepartmentMaster(data) {
    
    this.url = this.host + "Master/UpdateDepartmentMaster";
    return this.http.post(this.url, data);
  }

  public DeleteDepartmentMaster(id) {
    
    return this.http.get<any[]>(this.host + "Master/DeleteDepartmentMaster?ID=" + id);
  }

  public strongpassword(input) {

    var passworddetails = /^((?=.*\d)(?=.*[A-Z])(?=.*\W).{8,15})$/;
    return passworddetails.test(input);
  }
  

  public UpdateRegisterLoginsPassword(data) {
    
    this.url = this.host + "Master/UpdateRegisterLoginsPassword";
    return this.http.post(this.url, data);
  }


  public GetItemMasterByItemCodes(itemcode) {
    
    return this.http.get<any[]>(this.host + "Master/GetItemMasterByItemCodes?ItemCode=" + itemcode);
  }
  

  public GetOrderTypeMaster() {
    
    return this.http.get<any[]>(this.host + "Master/GetOrderTypeMaster");
  }

  public GetCurrencyMaster() {
    
    return this.http.get<any[]>(this.host + "Master/GetCurrencyMaster");
  }


  public InsertOrderTypeMaster(data) {
    
    this.url = this.host + "Master/InsertOrderTypeMaster";
    return this.http.post(this.url, data);
  }

  public UpdateOrderTypeMaster(data) {
    
    this.url = this.host + "Master/UpdateOrderTypeMaster";
    return this.http.post(this.url, data);
  }

  public DeleteOrderTypeMaster(id) {
    
    return this.http.get<any[]>(this.host + "Master/DeleteOrderTypeMaster?ID=" + id);
  }
  
  public sendemail1(data) {
    this.url = this.host + '/Master/sendemail';
    return this.http.post(this.url, data)
  }


  public InsertEmailError_log(data) {
    debugger
    this.url = this.host + "Master/InsertEmailError_log";
    debugger
    return this.http.post(this.url, data);
  }

  public InsertEmailSuccess_log(data) {
    debugger
    this.url = this.host + "Master/InsertEmailSuccess_log";
    return this.http.post(this.url, data);
  }

  
  public GetEmailSuccess_log(id) {
    
    return this.http.get<any[]>(this.host + "Master/GetEmailSuccess_log?Poid=" + id);
  }

  public InsertApprovedSuccess_log(data) {
    debugger
    this.url = this.host + "Master/InsertApprovedSuccess_log";
    return this.http.post(this.url, data);
  }

}
