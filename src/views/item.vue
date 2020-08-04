<template>
  <div class="shopDetail">
    <div class="shopWrap">
      <div class="flex">
        <div class="shopPic">
          <img :src="shopMsg.thumbnail_urls" alt />
        </div>
        <div class="shopInfo">
          <div class="shopName">{{shopMsg.name}}</div>
          <div class="subTitle">{{shopMsg.merchant_name}}</div>
          <div class="subItem">
            <div class="label">价格</div>
            <div class="main1">
              <div class="price">¥{{shopMsg.price}}</div>
            </div>
          </div>
          <div class="subItem">
            <div class="label">库存</div>
            <div class="main1">
              <div class>{{shopMsg.stock}} 件</div>
            </div>
          </div>
          <div class="subItem">
            <div class="label">规格</div>
            <div class="main1">
              <div
                :class="activeIndex1== index ?'itemT activeTs':'itemT'"
                @click="changeSpec(item,index)"
                v-for="(item,index) in shopMsg.sorts.split(',')"
                :key="index"
              >{{item}}</div>
            </div>
          </div>
          <div class="subItem">
            <div class="label">数量</div>
            <div class="main1">
              <a href="javascript:void(0)">-</a>
              <input type="text" value="1" />
              <a href="javascript:void(0)">+</a>
            </div>
          </div>
          <div class="subItem">
            <div class="toBuy" @click="toPay">立即购买</div>
            <div class="addCart" @click="addCart">加入购物车</div>
          </div>
        </div>
      </div>
      <div class="main">
        <!-- <ul class="box_fixed" id="boxFixed" :class="{'is_fixed' : isFixed}">123132</ul> -->
        <div class="flex tabWrap">
          <div class="flexA tabs">
            <div
              :class="activeIndex==index?'tab active':'tab'"
              v-for="(item ,index) in tabs"
              :key="index"
            >
              <span>{{item}}</span>
            </div>
          </div>
          <div class="pay"></div>
        </div>
        <div class="shopDetail">
          <div v-html="shopMsg.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "shopDetail",
  data() {
    return {
      isFixed: true,
      offsetTop: 0,
      activeIndex: 0,
      activeIndex1: 0,
      tabs: ["产品详情", "评论"],
      goodId: "",
      shopMsg: {},
    };
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight, true);
    // this.$nextTick(() => {
    //   //获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
    //   this.offsetTop = document.querySelector("#boxFixed").offsetTop;
    // });
    this.goodId = this.$route.query.goodId || "";
    this.getInit();
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  methods: {
    getInit() {
      this.$api
        .getShopDetail({
          goodId: this.goodId,
        })
        .then((res) => {
          console.log(res);
          this.shopMsg = res.data.data;
        });
    },
    changeSpec(name, index) {
      this.activeIndex1 = index;
    },

    addCart() {
      console.log(this.userInfo);
      if (this.userInfo) {
        if (document.getElementsByClassName("el-notification").length === 0) {
          this.$notify.info({
            title: this.$t("login.l7"),
            message: "添加成功",
          });
        }
      } else {
        this.$store.commit("ISTOLOGIN", true);
      }
    },
    toPay() {
      this.$router.push("/payment");
    },
    initHeight(e) {
      console.log(123);
      // 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 (被卷曲的高度)
      // var scrollTop =
      //   window.pageYOffset ||
      //   document.documentElement.scrollTop ||
      //   document.body.scrollTop;
      let scrollY = document.documentElement.scrollTop;
      console.log(scrollY);
      // var scrollTop = e.target.documentElement.scrollTop || e.target.body.scrollTop;
      // console.log(scrollTop);
      // //如果被卷曲的高度大于吸顶元素到顶端位置 的距离
      // this.isFixed = scrollTop > this.offsetTop ? true : false;
      // console.log(123);
    },
  },
  //回调中移除监听
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss">
.shopDetail {
  border-top: 1px solid #333;
  .shopWrap {
    background: #fff;
    padding-top: 40px;
    margin: 0 auto;
    min-height: 700px;
    padding-bottom: 50px;
    width: 1240px;
    color: #333;
    .shopPic {
      margin-right: 80px;
      width: 482px;
      img {
        width: 480px;
        height: 480px;
      }
    }
    .shopInfo {
      flex: 1;
      font-size: 14px;
      overflow: hidden;
      padding-top: 12px;
      padding: 0 20px 0 15px;
      .shopName {
        font-size: 18px;
        font-weight: 400;
        line-height: 25px;
      }
      .subTitle {
        color: #f33;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        margin-top: 7px;
        padding-bottom: 16px;
      }
      .subItem {
        display: flex;
        align-items: center;
        padding: 0 0 8px 0;
        .label {
          height: 24px;
          text-align: justify;
          width: 45px;
          font-size: 14px;
          margin-right: 10px;
          color: #999;
          white-space: nowrap;
        }
        .main1 {
          display: flex;
          align-items: center;
          .itemT {
            margin: 5px;
            border-radius: 4px;
            border: 1px solid #ddd;
            color: #333;
            display: block;
            height: 26px;
            line-height: 26px;
            padding: 0 20px;
            cursor: pointer;
          }
          .activeTs {
            background: #ffebe9;
            border-color: #f33;
          }
          .price {
            color: #fa5437;
            font-weight: 600;
            font-size: 24px;
          }
          .disabled {
            background: #fff;
            color: #ddd;
            cursor: not-allowed;
          }
          input {
            border: 1px solid #ddd;
            float: left;
            height: 26px;
            line-height: 26px;
            margin-left: -1px;
            vertical-align: middle;
            font-family: simsun;
            font-size: 16px;
            overflow: hidden;
            width: 42px;
            box-sizing: border-box;
            background: #fff;
            color: #999;
            font-family: arial;
            font-size: 14px;
            padding: 0;
            text-align: center;
            width: 40px;
          }
          a {
            display: block;
            background: #f6f6f6;
            color: #333;
            font-family: simsun;
            font-size: 16px;
            overflow: hidden;
            width: 26px;
            height: 26px;
            text-align: center;
            line-height: 26px;
          }

          a:hover {
            color: #dcbc82;
          }
        }
        .toBuy {
          margin-right: 16px;
          vertical-align: top;
          border: 1px solid transparent;
          background: #ffebe9;
          border-color: #f33;
          color: #f33;
          border-radius: 6px;
          font-size: 20px;
          font-weight: 400;
          line-height: 38px;
          width: 200px;
          cursor: pointer;
          display: inline-block;
          outline: 0;
          padding: 0;
          text-align: center;
          white-space: nowrap;
        }
        .toBuy:hover {
          opacity: 0.8;
        }
        .addCart {
          margin-right: 16px;
          vertical-align: top;
          border: 1px solid transparent;
          cursor: pointer;
          display: inline-block;
          outline: 0;
          padding: 0;
          text-align: center;
          white-space: nowrap;
          background-color: #f63;
          background: -webkit-linear-gradient(top, #f33 0, #f63 100%);
          background: linear-gradient(180deg, #f33 0, #f63 100%);
          color: #fff;
          border-radius: 6px;
          font-size: 20px;
          font-weight: 400;
          line-height: 38px;
          width: 200px;
        }
        .addCart:hover {
          opacity: 0.8;
        }
      }
    }
    .main {
      width: 1000px;
      margin: 40px auto;
      .tabWrap {
        width: 1000px;
        box-sizing: border-box;
        background: #fff;
        border: 1px solid #ddd;
        padding: 0 7px;
        .tabs {
          height: 50px;
          .tab {
            font-size: 14px;
            color: #333;
            padding: 0 30px;
            border-right: 1px solid #333;
            cursor: pointer;
            span {
              position: relative;
            }
          }
          .tab:hover {
            color: #dcbc82;
          }
          .tab:last-child {
            border-right: 0;
          }
          .active span:after {
            display: block;
            background-color: #f33;
            background: -webkit-linear-gradient(
              left,
              #f33 0,
              rgba(255, 51, 51, 0.3) 100%
            );
            background: linear-gradient(
              90deg,
              #f33 0,
              rgba(255, 51, 51, 0.3) 100%
            );
            bottom: -1px;
            content: "";
            height: 5px;
            left: 0;
            position: absolute;
            right: 0;
          }
        }
        .pay {
        }
      }
      .shopDetail {
        border: 1px solid #ddd;
        border-top: 0;
        display: flex;
        justify-content: center;
      }
    }
    // .box_fixed {
    //   width: 500px;
    //   height: 40px;
    //   border: 2px dashed pink;
    //   border-radius: 20px;
    //   margin: 0 auto;
    //   line-height: 40px;
    //   background: #eeeeee;
    // }
    // .is_fixed {
    //   position: fixed;
    //   top: 80px;
    //   z-index: 999;
    // }
  }
}
</style>