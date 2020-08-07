import { Api } from '@/request/http'

const api = {}

api.mallHomeBanner = p => Api('news/get/rotationChart/10/1', "get", p);

// 热门推荐
api.mallHomeGoodsTypes = p => Api('mall/home/goodsTypes', "get", p);

// 新闻
api.newsNewses = p => Api('news/newses/10/1/8/' + new Date().getTime(), "get", p);

// 热门推荐
api.mallGoodsHotGoods = p => Api('mall/goods/hotGoods', "post", p);

// 促销活动
api.mallGoodsPromotionsActivity = p => Api('mall/goods/promotionsActivity', "post", p);

// 图片验证码
api.picCode = p => Api('member/kaptcha', "get", p);

// 账号密码登录
api.pwdLogin = p => Api('member/logindo', "post", p);

// 获取用户信息
api.getUserInfo = p => Api('mall/assets/memberInfo', "post", p);

// 获取分类列表
api.getClassify = p => Api('mall/home/goodsTypes', "get", p);

// 获取商品列表接口
api.getShopList = p => Api('mall/goods/get/mallGoodsPage', "post", p)

// 获取商品详情数据
api.getShopDetail = p => Api(`mall/goods/get/mallGoods/${p.goodId}`, "get", p);

// 退出登录
api.memberLogout = p => Api('member/logout', 'get')

// 手机号码注册
api.memberRegdo = p => Api('member/regdo', 'post', p);

// 注册获取手机验证码
api.getPhoneCode = p => Api(`member/mail_sms/${p.name}/reg/${p.kaptcha_token}/${p.img_code}`, 'get', p);


// 我的钱包
api.getWallet = p => Api(`mall/assets/assetsList`, 'get', p)

// 所有优惠券
api.getAllCoupon = p => Api(`mall/coupon/couponList`, 'get', p)

// 我的优惠券
api.getCoupon = p => Api(`mall/coupon/myCouponList`, 'get', p)

// 领取优惠券
api.mallCouponReceiveCoupon = p => Api(`mall/coupon/receiveCoupon/${p.id}`, p);

// 获取收货地址
api.getAddress = p => Api(`mall/receivingAddress/get/mallReceivingAddresses`, 'post', p);

// 获取指定id的收货地址
api.getAddressOne = p => Api(`mall/receivingAddress/get/mallReceivingAddress/${p.id}`, 'post', p);

// 修改收货地址
api.updateAdress = p => Api(`mall/receivingAddress/update/mallReceivingAddress`, 'post', p);

// 删除收货地址
api.delAdress = p => Api(`mall/receivingAddress/delete/mallReceivingAddress/${p.id}`, 'get', p);

// 新增收货地址
api.addAdress = p => Api(`mall/receivingAddress/add/mallReceivingAddress`, 'post', p);

// 添加购物车
api.addCartO = p => Api(`mall/shopCart/add/mallShopCartGoods`, 'post', p);



export default api