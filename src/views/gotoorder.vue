<template>
  <div class="gotoorder">
    <div class="gotoorderWrap">
      <div class="address">
        <div class="title">
          选择收货地址
          <a href>新建地址</a>
        </div>
        <div class="content">
          <div class="noAdress">
            <div class="icon">
              <img src="https://p1.ssl.qhimg.com/t0183bfdc387e08da57.png" alt />
            </div>
            <div class="txt">还没有地址呢，赶快新建一个</div>
          </div>
        </div>
      </div>
      <div class="flex shopWrap">
        <div class="shopMsg">
          <div class="title">商品清单</div>
          <div class="flex shop">
            <div class="img">
              <img src="https://p4.ssl.qhimg.com/t01471e11479d3fd6b0.png" alt />
            </div>
            <div class="flex message">
              <div class="flexA shop_lf">
                <div class="shopName">【新品】360 智能摄像机云台乐享版标准款AP5C</div>
                <div class="classify">分类:AP5C</div>
              </div>
              <div class="flexA shop_rg">
                <div class="num">x1</div>
                <div class="price">￥199.00</div>
              </div>
            </div>
          </div>
        </div>
        <div class="payWay">
          <div class="item">
            <div class="label">支付方式</div>
            <div class="content">在线支付</div>
          </div>
          <div class="item">
            <div class="label">配送方式</div>
            <div class="content">快递</div>
          </div>
        </div>
      </div>
      <div class="coupon">
        <div class="title">使用优惠券</div>
        <div class="content">
          <div class="noCoupon">
            <div class="icon">
              <img src="https://p1.ssl.qhimg.com/t0194d5057ab538db7d.png" alt />
            </div>
            <div class="txt">暂无可用优惠券</div>
          </div>
        </div>
      </div>
      <div class="totalWrap">
        <ul>
          <li>
            <div class>
              共
              <span class="span">1件</span>商品
            </div>
            <div class="label">商品总价</div>
            <div class="price">¥199.00</div>
          </li>
          <li>
            <div class="label">运费</div>
            <div class="price">¥199.00</div>
          </li>
          <li>
            <div class="label">优惠券</div>
            <div class="price .span">¥199.00</div>
          </li>
        </ul>
        <div class="totalMoney">
          应付:
          <span>¥199.00</span>
        </div>
        <div class="submit">
          <div class="btn" @click="submit">提交订单</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gotoorder",
  methods: {
    submit() {
      this.$router.push("/payment");
    },
  },
};
</script>

<style lang="scss">
.gotoorder {
  background: #f0f0f0;
  min-height: 600px;
  overflow: hidden;
  .gotoorderWrap {
    margin: 40px auto;
    width: 1024px;
    background: #fff;
    .address {
      border-bottom: 1px solid #ddd;
      padding: 10px 20px 18px;
      .title {
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
        padding: 10px 0;
        a {
          font-size: 12px;
          font-weight: 400;
          margin-left: 16px;
        }
      }
      .content {
        display: flex;
        align-items: center;
        justify-content: center;
        .noAdress {
          .icon {
            width: 216px;
            height: 160px;
            img {
              width: 100%;
              display: block;
            }
          }
          .txt {
            color: #333;
            font-size: 12px;
            font-weight: 400;
            padding: 10px;
            margin-top: -40px;
            text-align: center;
          }
        }
      }
    }
    .shopWrap {
      flex: 1;
      border-bottom: 1px solid #ddd;
      .shopMsg {
        padding: 10px 20px;
        flex: 1;
        .title {
          font-size: 14px;
          font-weight: 700;
          line-height: 16px;
          padding: 10px 0;
        }
        .shop {
          .img {
            width: 80px;
            height: 80px;
            margin-right: 10px;
            img {
              display: block;
              width: 100%;
            }
          }
          .message {
            flex: 1;
            .shop_lf {
              align-items: initial;
              color: #333;
              font-size: 13px;
              .shopName {
                width: 240px;
                margin-right: 20px;
              }
            }
            .shop_rg {
              .num {
                color: #999;
                white-space: nowrap;
                width: 25px;
                margin-left: 5px;
              }
              .price {
                color: #f53f3a;
                width: 65px;
              }
            }
          }
        }
      }
      .payWay {
        border-left: 1px solid #ddd;
        width: 378px;
        padding: 10px 20px;
        box-sizing: border-box;
        .item {
          display: flex;
          flex-direction: column;
          margin: 10px 0 0 10px;
          .label {
            font-size: 14px;
            font-weight: 700;
            line-height: 16px;
            padding: 10px 0;
          }
          .content {
            margin-left: 10px;
            margin-bottom: 10px;
            background: #fff;
            border-radius: 4px;
            border: 1px solid #ddd;
            cursor: pointer;
            float: left;
            font-size: 12px;
            line-height: 22px;
            min-width: 80px;
            max-width: 80px;
            text-align: center;
            border-color: #f33;
          }
        }
      }
    }
    .coupon {
      border-bottom: 1px solid #ddd;
      padding: 10px 20px;
      .title {
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
        padding: 10px 0;
      }
      .content {
        display: flex;
        justify-content: center;
        .noCoupon {
          .icon {
            width: 216px;
            height: 160px;
            img {
              width: 100%;
              display: block;
            }
          }
          .txt {
            color: #333;
            font-size: 12px;
            font-weight: 400;
            padding: 10px;
            margin-top: -40px;
            text-align: center;
          }
        }
      }
    }
    .totalWrap {
      ul {
        padding: 10px 20px;
        li {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          font-size: 12px;
          .span {
            color: #f33;
          }
          .label {
            font-size: 12px;
            font-weight: 700;
            margin-left: 20px;
          }
          .price {
            min-width: 60px;
            line-height: 25px;
            padding-left: 20px;
          }
        }
      }
      .totalMoney {
        background: #fff6e9;
        padding: 10px 30px;
        text-align: right;
        font-size: 18px;
        font-weight: 700;
        line-height: 27px;
        span {
          color: #f33;
          margin-left: 10px;
        }
      }
      .submit {
        padding: 10px 30px;
        display: flex;
        justify-content: flex-end;
        .btn {
          border-radius: 6px;
          font-size: 20px;
          font-weight: 400;
          line-height: 38px;
          width: 200px;
          text-align: center;
          background-color: #f63;
          background: -webkit-linear-gradient(top, #f33 0, #f63 100%);
          background: linear-gradient(180deg, #f33 0, #f63 100%);
          color: #fff;
        }
      }
    }
  }
}
</style>