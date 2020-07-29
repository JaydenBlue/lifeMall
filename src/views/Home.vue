<template>
  <div class="homes">
    <div class="bannerBox">
      <el-carousel class="bannerList">
        <el-carousel-item class="bannerli" v-for="(el,i) in bannerList" :key="i">
          <img :src="el.newsBannerDetail.d_img_url" alt />
        </el-carousel-item>
      </el-carousel>
      <div class="marquee-wrap">
        <ul class="marquee-list" :class="{'animate-up': animateUp}">
          <li v-for="(item, index) in newListData" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
    <div class="ogter">
      <div class="content">
        <div class="fltitle" v-text="$t('home.h8')">热门推荐</div>
        <div class="suggests">
          <div class="lis" v-for="(el,i) in hotGoods" :key="i">
            <div class="mark">
              <span v-show="el.hot == 1" v-text="$t('home.h9')">爆款</span>
            </div>
            <el-image :src="el.thumbnail_urls" fit="cover">
              <div slot="placeholder" class="image-slot">
                <img class="goodsDefaults" src="@/assets/img/goodsDefault.png" alt srcset />
              </div>
            </el-image>
            <div class="goodsName">
              <span class="big">{{el.name}}</span>
              <span class="small">{{el.details}}</span>
            </div>
            <div class="price">￥{{el.price}}</div>
          </div>
        </div>
        <div class="fltitle" v-text="$t('home.h10')">促销产品</div>
        <div class="suggests">
          <div class="lis" v-for="(el,i) in PromotiontGoods" :key="i">
            <div class="mark">
              <span v-show="el.hot == 1" v-text="$t('home.h9')">爆款</span>
            </div>
            <el-image :src="el.thumbnail_urls" fit="cover">
              <div slot="placeholder" class="image-slot">
                <img class="goodsDefaults" src="@/assets/img/goodsDefault.png" alt srcset />
              </div>
            </el-image>
            <div class="goodsName">
              <span class="big">{{el.name}}</span>
              <span class="small">{{el.details}}</span>
            </div>
            <div class="price">￥{{el.price}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Bus from "@/components/bus.js";

import {
  mallHomeBanner,
  mallHomeGoodsTypes,
  newsNewses,
  mallGoodsHotGoods,
  mallGoodsPromotionsActivity,
} from "@/request/api";

export default {
  name: "homes",
  data() {
    return {
      //新闻公告
      animateUp: false,
      newListData: [],
      timer: null,
      setInterCcrollAnimate: "",
      //banner图
      bannerList: [],
      //热门商品
      hotGoods: [],
      //促销商品
      PromotiontGoods: [],
    };
  },
  created() {
    this.init();
  },
  mounted() {},
  watch: {},
  methods: {
    scrollAnimate() {
      this.animateUp = true;
      setTimeout(() => {
        this.newListData.push(this.newListData[0]);
        this.newListData.shift();
        this.animateUp = false;
      }, 500);
    },
    init() {
      this.cache();
      mallHomeBanner().then((res) => {
        this.bannerList = res.data;

        this.$cookies.set("HomeBannerList", res.data);
      });
      newsNewses().then((res) => {
        clearInterval(this.timer);
        let arr1 = res.data.list;
        this.newListData = [];
        for (let i = 0; i < arr1.length; i++) {
          this.newListData.push(arr1[i].a_title);
        }
        this.timer = setInterval(this.scrollAnimate, 1500);

        this.$cookies.set("HomeNewListData", res.data.list);
      });
      // mallHomeGoodsTypes().then((res)=>{
      //   console.log(res);
      // })
      //热门推荐
      mallGoodsHotGoods({
        pageNum: 1,
        pageSize: 8,
      }).then((res) => {
        this.hotGoods = res.data.list;

        this.$cookies.set("HomehotGoods", res.data);
      });
      //促销活动
      mallGoodsPromotionsActivity({
        pageNum: 1,
        pageSize: 16,
      }).then((res) => {
        this.PromotiontGoods = res.data.list;

        this.$cookies.set("HomePromotiontGoods", res.data.list);
      });
    },
    //检查是否有数据缓存
    cache() {
      let hbl = this.$cookies.get("HomeBannerList");
      if (hbl) {
        this.bannerList = hbl;
      }

      let hnld = this.$cookies.get("HomeNewListData");
      if (hnld) {
        let arr1 = hbl;
        this.newListData = [];
        for (let i = 0; i < arr1.length; i++) {
          this.newListData.push(arr1[i].a_title);
        }
        this.timer = setInterval(this.scrollAnimate, 1500);
      }

      let hhg = this.$cookies.get("HomehotGoods");
      if (hhg) {
        this.hotGoods = hhg;
      }

      let hpg = this.$cookies.get("HomePromotiontGoods");
      if (hpg) {
        this.PromotiontGoods = hpg;
      }
    },
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="scss">
.homes {
}
.bannerBox {
  position: relative;
  .bannerList {
    height: 500px;
    .bannerli {
      height: 500px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .marquee-wrap {
    width: 100%;
    height: 40px;
    background: rgba(51, 51, 51, 0.4);
    margin: 0 auto;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    z-index: 9;
    .marquee-list {
      width: 1200px;
      margin: 0 auto;
      li {
        width: 100%;
        height: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        list-style: none;
        line-height: 40px;
        text-align: left;
        color: #fff;
        font-size: 12px;
        font-weight: 400;
      }
      li:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .animate-up {
      transition: all 0.5s ease-in-out;
      transform: translateY(-40px);
    }
  }
}
.ogter {
  width: 100%;
  background: #e8e8e8;
  padding-top: 20px;
  .content {
    width: 1200px;
    margin: 0 auto;
  }
}
.fltitle {
  color: #333;
  font-size: 20px;
  background: url("../assets/img/flback.png") no-repeat;
  background-size: auto 100%;
  height: 60px;
  line-height: 60px;
  text-indent: 50px;
  color: #fff;
  font-weight: 600;
}
.suggests {
  width: 100%;
  padding-bottom: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  .lis {
    width: 23.5%;
    min-height: 300px;
    background: #fff;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.15s;
    margin-top: 22px;
    padding: 30px 20px;
    box-sizing: border-box;
    .mark {
      height: 50px;
      span {
        display: block;
        width: fit-content;
        padding: 1px 25px;
        font-size: 14px;
        color: #fff;
        margin: 0 auto;
        background: #f17f38;
      }
    }
    .el-image {
      width: 250px;
      height: 250px;
    }
    .goodsDefaults {
      display: block;
      width: 240px;
      height: auto;
      margin: 0 auto;
      text-align: center;
    }
    .goodsName {
      margin-top: 10px;
      .big {
        display: block;
        width: 100%;
        color: #333;
        font-size: 18px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .small {
        display: block;
        color: #999;
        font-size: 14px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .price {
      text-align: center;
      padding: 8px 0;
      color: #dd0e00;
      font-size: 20px;
    }
  }
  .lis:hover {
    transform: translate(0, -3px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
}
</style>
