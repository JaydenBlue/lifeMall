/**
* api接口统一管理
*/
import { get, post } from './http'

// banner
// export const mallHomeBanner = p => get('mall/home/banner', p);
export const mallHomeBanner = p => get('news/get/rotationChart/10/1', p);

// 热门推荐
export const mallHomeGoodsTypes = p => get('mall/home/goodsTypes', p);

// 新闻
export const newsNewses = p => get('news/newses/10/1/8/' + new Date().getTime(), p);

// 热门推荐
export const mallGoodsHotGoods = p => post('mall/goods/hotGoods', p);

// 促销活动
export const mallGoodsPromotionsActivity = p => post('mall/goods/promotionsActivity', p);

