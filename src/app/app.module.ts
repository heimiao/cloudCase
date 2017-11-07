import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//表单
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// 请求
import { HttpModule } from '@angular/http';
// Import HttpClientModule from @angular/common/http
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadInterceptor } from './intercpet'

import { AppComponent } from './app.component';

// 导入路由模块
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './router';

//ngx-boostrap组件库
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';

//服务
import { SystemService } from './service/system.service';


//自定义组件
import { CaseListComponent } from './case-list/case-list.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AgreementComponent } from './agreement/agreement.component';
import { BindInfoComponent } from './bind-info/bind-info.component';
import { OpenCaseComponent } from './open-case/open-case.component';
import { PayCaseComponent } from './open-case/pay-case/pay-case.component';

import { FeedBackComponent } from './open-case/feed-back/feed-back.component';
import { MyCaseComponent } from './my-case/my-case.component';
import { DoctorsAdviceComponent } from './my-case/doctors-advice/doctors-advice.component';
import { CheckoutComponent } from './my-case/checkout/checkout.component';
import { ReportComponent } from './my-case/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    CaseListComponent,
    LoginComponent,
    ErrorPageComponent,
    AgreementComponent,
    BindInfoComponent,
    OpenCaseComponent,
    PayCaseComponent,
    FeedBackComponent,
    MyCaseComponent,
    DoctorsAdviceComponent,
    CheckoutComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), // ,{useHash: true}{ enableTracing: true }
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    // 请求
    HttpClientModule,
    // 模版表单
    FormsModule,
    // 响应式表单
    ReactiveFormsModule,
    // 请求
    HttpModule,
  ],
  providers: [SystemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
