import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { ItemMasterComponent } from './pages/item-master/item-master.component';
import { ItemMasterDashboardComponent } from './pages/item-master-dashboard/item-master-dashboard.component';
import { SupplierMasterComponent } from './pages/supplier-master/supplier-master.component';
import { SupplierMasterDashboardComponent } from './pages/supplier-master-dashboard/supplier-master-dashboard.component';
import { BillToMasterComponent } from './pages/bill-to-master/bill-to-master.component';
import { BillToMasterDashboardComponent } from './pages/bill-to-master-dashboard/bill-to-master-dashboard.component';
import { ShipToMasterComponent } from './pages/ship-to-master/ship-to-master.component';
import { ShipToMasterDashboardComponent } from './pages/ship-to-master-dashboard/ship-to-master-dashboard.component';
import { BuyerMasterComponent } from './pages/buyer-master/buyer-master.component';
import { BuyerMasterDashboardComponent } from './pages/buyer-master-dashboard/buyer-master-dashboard.component';
import { AuthorizationMasterComponent } from './pages/authorization-master/authorization-master.component';
import { AuthorizationMasterDashboardComponent } from './pages/authorization-master-dashboard/authorization-master-dashboard.component';
import { InstructionMasterComponent } from './pages/instruction-master/instruction-master.component';
import { InstructionMasterDashboardComponent } from './pages/instruction-master-dashboard/instruction-master-dashboard.component';
import { AccountingCodeMasterComponent } from './pages/accounting-code-master/accounting-code-master.component';
import { AccountingCodeMasterDashboardComponent } from './pages/accounting-code-master-dashboard/accounting-code-master-dashboard.component';
import { BuyingCompanyMasterComponent } from './pages/buying-company-master/buying-company-master.component';
import { BuyingCompanyMasterDashboardComponent } from './pages/buying-company-master-dashboard/buying-company-master-dashboard.component';
import { ShipViaMasterComponent } from './pages/ship-via-master/ship-via-master.component';
import { ShipViaMasterDashboardComponent } from './pages/ship-via-master-dashboard/ship-via-master-dashboard.component';
import { FobMasterComponent } from './pages/fob-master/fob-master.component';
import { FobMasterDashboardComponent } from './pages/fob-master-dashboard/fob-master-dashboard.component';
import { TaxAdditionsComponent } from './pages/tax-additions/tax-additions.component';
import { TaxAdditionsDashboardComponent } from './pages/tax-additions-dashboard/tax-additions-dashboard.component';
import { TextMasterComponent } from './pages/text-master/text-master.component';
import { TextMasterDashboardComponent } from './pages/text-master-dashboard/text-master-dashboard.component';
import { PurchaseOrderComponent } from './pages/purchase-order/purchase-order.component';
import { PurchaseOrderDetailsComponent } from './pages/purchase-order-details/purchase-order-details.component';
import { PurchaseOrderDashboardComponent } from './pages/purchase-order-dashboard/purchase-order-dashboard.component';
import { ApprovePoComponent } from './pages/approve-po/approve-po.component';
import { OutputsComponent } from './pages/outputs/outputs.component';
import { ItemCategoryComponent } from './pages/item-category/item-category.component';
import { ItemCategoryDashboardComponent } from './pages/item-category-dashboard/item-category-dashboard.component';
import { ItemSubCategoryComponent } from './pages/item-sub-category/item-sub-category.component';
import { ItemSubCategoryDashboardComponent } from './pages/item-sub-category-dashboard/item-sub-category-dashboard.component';
import { MyPoComponent } from './pages/my-po/my-po.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { EditProductOrderdetailsComponent } from './pages/edit-product-orderdetails/edit-product-orderdetails.component';
import { RegisterLoginsComponent } from './pages/register-logins/register-logins.component';
import { RegisterDashComponent } from './pages/register-dash/register-dash.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SupplierLoginComponent } from './pages/supplier-login/supplier-login.component';
import { SupplierLoginDashComponent } from './pages/supplier-login-dash/supplier-login-dash.component';
import { AuthorizarionloginComponent } from './pages/authorizarionlogin/authorizarionlogin.component';
import { AuthologindashComponent } from './pages/authologindash/authologindash.component';
import { PoGenaratorLoginComponent } from './pages/po-genarator-login/po-genarator-login.component';
import { PoGenaratorLoginDashComponent } from './pages/po-genarator-login-dash/po-genarator-login-dash.component';
import { PurchaseOrderDashComponent } from './pages/purchase-order-dash/purchase-order-dash.component';
import { NgDateRangePickerModule } from 'ng-daterangepicker';
import { PoGenaratorReportsComponent } from './pages/po-genarator-reports/po-genarator-reports.component';
import { FileSaverModule } from 'ngx-filesaver';
import { ApprovePODashComponent } from './pages/approve-podash/approve-podash.component';
import { ApprovePoReportsComponent } from './pages/approve-po-reports/approve-po-reports.component';
import { AdminDashboardComponent } from '../app/pages/admin-dashboard/admin-dashboard.component';
import { AdminDashReportsComponent } from './pages/admin-dash-reports/admin-dash-reports.component';
import { SupplierDashComponent } from './pages/supplier-dash/supplier-dash.component';
import { SupplierReportsComponent } from './pages/supplier-reports/supplier-reports.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SupplierItemsComponent } from './pages/supplier-items/supplier-items.component';
import { SupplierItemsDashComponent } from './pages/supplier-items-dash/supplier-items-dash.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { EditSupplierItemMasterComponent } from './pages/edit-supplier-item-master/edit-supplier-item-master.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { AmazeDashComponent } from './pages/AmazeLogin/amaze-dash/amaze-dash.component';
import { PoOrderItemsComponent } from './pages/PoGenarator/po-order-items/po-order-items.component';
import { POOrderReportsComponent } from './pages/PoGenarator/poorder-reports/poorder-reports.component';
import { ApprovesPosComponent } from './pages/approves-pos/approves-pos.component';
import { CancelledPosComponent } from './pages/cancelled-pos/cancelled-pos.component';
import { SupplierAcceptedOrdersComponent } from './pages/supplier-accepted-orders/supplier-accepted-orders.component';
import { SupplierCancelledOrdersComponent } from './pages/supplier-cancelled-orders/supplier-cancelled-orders.component';
import { DeliveredPosComponent } from './pages/delivered-pos/delivered-pos.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AdminTotalReportsComponent } from './pages/admin-total-reports/admin-total-reports.component';
import { ChartsModule } from 'ng2-charts';
import { TotalPORevenueComponent } from './pages/total-porevenue/total-porevenue.component';
import { MyHttpInterceptor } from './interceptor/my-http-interceptor';
import { HoldPOComponent } from './pages/hold-po/hold-po.component';
import { OldPOComponent } from './pages/old-po/old-po.component';
import { DeptMasterComponent } from './pages/dept-master/dept-master.component';
import { DeptMasterDashComponent } from './pages/dept-master-dash/dept-master-dash.component';
import { OrderTypeMasterComponent } from './pages/order-type-master/order-type-master.component';
import { OrderTypeMasterDashComponent } from './pages/order-type-master-dash/order-type-master-dash.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    ItemMasterComponent,
    ItemMasterDashboardComponent,
    SupplierMasterComponent,
    SupplierMasterDashboardComponent,
    BillToMasterComponent,
    BillToMasterDashboardComponent,
    ShipToMasterComponent,
    ShipToMasterDashboardComponent,
    BuyerMasterComponent,
    BuyerMasterDashboardComponent,
    AuthorizationMasterComponent,
    AuthorizationMasterDashboardComponent,
    InstructionMasterComponent,
    InstructionMasterDashboardComponent,
    AccountingCodeMasterComponent,
    AccountingCodeMasterDashboardComponent,
    BuyingCompanyMasterComponent,
    BuyingCompanyMasterDashboardComponent,
    ShipViaMasterComponent,
    ShipViaMasterDashboardComponent,
    FobMasterComponent,
    FobMasterDashboardComponent,
    TaxAdditionsComponent,
    TaxAdditionsDashboardComponent,
    TextMasterComponent,
    TextMasterDashboardComponent,
    PurchaseOrderComponent,
    PurchaseOrderDetailsComponent,
    PurchaseOrderDashboardComponent,
    ApprovePoComponent,
    OutputsComponent,
    ItemCategoryComponent,
    ItemCategoryDashboardComponent,
    ItemSubCategoryComponent,
    ItemSubCategoryDashboardComponent,
    MyPoComponent,
    MessagesComponent,
    EditProductOrderdetailsComponent,
    RegisterLoginsComponent,
    RegisterDashComponent,
    SupplierLoginComponent,
    SupplierLoginDashComponent,
    AuthorizarionloginComponent,
    AuthologindashComponent,
    PoGenaratorLoginComponent,
    PoGenaratorLoginDashComponent,
    PurchaseOrderDashComponent,
    PoGenaratorReportsComponent,
    ApprovePODashComponent,
    ApprovePoReportsComponent,
    AdminDashboardComponent,
    AdminDashReportsComponent,
    SupplierDashComponent,
    SupplierReportsComponent,
    FooterComponent,

    SupplierItemsComponent,
    SupplierItemsDashComponent,
    MyProfileComponent,
    EditSupplierItemMasterComponent,
  
    AmazeDashComponent,
    PoOrderItemsComponent,
    POOrderReportsComponent,
    ApprovesPosComponent,
    CancelledPosComponent,
    SupplierAcceptedOrdersComponent,
    SupplierCancelledOrdersComponent,
    DeliveredPosComponent,
    AdminTotalReportsComponent,
    TotalPORevenueComponent,
    HoldPOComponent,
    OldPOComponent,
    DeptMasterComponent,
    DeptMasterDashComponent,
    OrderTypeMasterComponent,
    OrderTypeMasterDashComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    Ng2SearchPipeModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgDateRangePickerModule,
    FileSaverModule,
     CKEditorModule,
     NgxDropzoneModule,
     NgxPaginationModule,
     ChartsModule,
     BrowserAnimationsModule,

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
