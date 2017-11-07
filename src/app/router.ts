import { Routes } from '@angular/router';

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

//守卫
// import { AuthGuard } from './auth-guard.service'; 

export const appRoutes: Routes = [
  {
    // path: 'doctorlist', component: DoctorlistComponent
    path: 'case-list',
    // loadChildren: "./doctorlist/doctor-module.module#DoctorModuleModule",
    //添加守卫
    // canLoad: [AuthGuard],
    // canActivate: [AuthGuard],
    component: CaseListComponent,
  },
  {
    path: 'bind-info', component: BindInfoComponent,
  },
  {
    path: 'open-case', component: OpenCaseComponent,
  },
  {
    path: 'feed-back', component: FeedBackComponent,
  },
  {
    path: 'pay-case', component: PayCaseComponent,
  },
  {
    path: 'my-case', component: MyCaseComponent,
  },
  {
    path: 'doctors-advice', component: DoctorsAdviceComponent,
  },
  {
    path: 'checkout', component: CheckoutComponent,
  },
  {
    path: 'report', component: ReportComponent,
  },
  {
    path: 'agreement', component: AgreementComponent,
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/case-list',
    pathMatch: 'full',
  },
  //以上都匹配不到的情况下会会转发到错误页面
  { path: '**', component: ErrorPageComponent, }
];
