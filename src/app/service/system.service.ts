import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Config } from '../config';
import { Util } from '../util';
import { stringify } from "query-string"

@Injectable()
export class SystemService {

  constructor(private http: HttpClient, ) { }
  // 获取token
  getToken(system: any): Promise<any> {
    // 获取随机字符串
    return this.http.get<any>(Config.getToken + '?uc=' + system.uc + '&fr=' + system.fr + '&ty=' + system.ty)
      .toPromise();
  }
  // 校验验证码
  verifyCode(args: any): Promise<any> {
    let boole = false;
    return this.http.post(Config.verifyCode, args)
      .toPromise()
      /* .then((args: Response | any) => {
        if (args.status) {
          boole = true
        } else {
          boole = false
        }
        return boole;
      }) */;
  }

  // 发送手机验证码
  sendPhoneCode(system: any): Promise<any> {
    return this.http.get(Config.sendMsg + "?uc=" + system.uc + "&mb=" + system.mb + "&ty=" + system.ty + "&ic=" + system.ic).toPromise()
      .then(args => {
        return args || {};
      })
  }
  
  // 登录及注册
  submitLogin(login: any): Promise<any> {
    return this.http.post(Config.reglogin, login).toPromise()
      .then(args => {
        return args || {};
      })
  }

  //关注
  follow(param: any): Promise<any> {
    return this.http.post(param.isFollow ? Config.unfollow : Config.follow, param).toPromise();
  }



  paySuccess(prepayid: string): Promise<any> {
    return this.http.post(Config.paySuccess, { prepayid: prepayid }).toPromise();
  }

  //订单支付
  orderPay(sendParam: any): Promise<any> {
    return this.http.post(Config.orderPay, sendParam).toPromise();
  }

}
