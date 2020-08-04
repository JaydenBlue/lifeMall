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
api.getShopList = p => Api('/mall/goods/get/mallGoodsPage', "post", p)

// 获取商品详情数据
api.getShopDetail = p => Api(`mall/goods/get/mallGoods/${p.goodId}`, "get", p);



export default api