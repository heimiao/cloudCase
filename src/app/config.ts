
let evmt = "dvlp.";
import { environment } from "../environments/environment"
switch (environment.production) {
    case "test":
        evmt = "test."
        break;
    case "prod":
        evmt = ""
        break;
    default:
        evmt = "dvlp."
        break;
}

export const baseUrl = "http://" + evmt + "api.rtf365.com";
// "http://dvlp.api.rtf365.com";

export const imgUrl = "http://" + evmt + "img.rtf365.com/img";

export const icodeUrl = "http://" + evmt + "icode.rtf365.com";

export const weixinUrl = "http://" + evmt + "wx.rtf365.com";
//"http://192.168.248.12:8012"// "http://api.rtf365.com"//;

export let Config = {
    //  登录
    reglogin: weixinUrl + '/patient/reglogin',
    //  通过openId登录
    loginByOpenId: weixinUrl + '/patient/login/openid',

    //  获取token，imgtoken?uc=:uc&fr=:fr&ty=:ty 
    getToken: icodeUrl + '/imgtoken',
    //  获取验证码图片 img?uc=:uc&fr=:fr&ty=:ty&ic=:ic&dt=:dt
    getCodePic: icodeUrl + '/img',
    //  验证验证码是否存在
    verifyCode: baseUrl + '/vimg',
    //  验证电话唯一validmb?mb=:mb
    verifyPhone: baseUrl + '/agent/validmb',
    //  发送短信vcode?uc=:uc&ic=:ic&mb=:mb&ty=0
    sendMsg: baseUrl + '/vcode',
    // 获取医生http://api.rtf365.com/v1/auth/list/doctor?page=:page&size=:size
    getDoctorList: weixinUrl + '/auth/list/doctor',
    myDoctorList: weixinUrl + '/auth/doctor/service/list',
    //  获取医生详细
    getDoctorById: weixinUrl + '/auth/info/doctor',
    //  获取指定医生服务
    getServiceById: weixinUrl + '/service/doctor',
    //  申请服务
    applyService: weixinUrl + '/service/apply',
    // 获取我的订单
    getMyOrderList: weixinUrl + '/finance/order/list',
    // 获取订单详细
    getOrderById: weixinUrl + '/finance/order/info',
    // 取消订单
    cancelOrder: weixinUrl + '/finance/order/cancal',
    // 关注
    follow: weixinUrl + '/auth/follow',
    //  取消关注
    unfollow: weixinUrl + '/auth/unfollow',
    //  支付
    pay: weixinUrl + '/auth/unfollow',
    //支付成功
    paySuccess: weixinUrl + '/wechat/success',
    //订单支付
    orderPay: weixinUrl + '/finance/pay',
}


//系统配置项
export const stateMap = {   
    //支付方式1 券支付 2 现金支付  3 微信支付 4支付宝支付 
    dealStatus: [{
        state: 1,
        name: "支付中"
    },
    {
        state: 9,
        name: "完成"
    },
    {
        state: 0,
        name: "撤销"
    },
    {
        state: -1,
        name: "撤销"
    },
    ],
 
  
     

}
 