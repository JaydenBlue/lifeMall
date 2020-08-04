<template>
  <div class="payment">
    <div class="paymentWrap">
      <div class="flex payInfo">
        <div class="title">
          <div class="flexA dt">
            <div class="icon">
              <img src="https://p.ssl.qhimg.com/t01f9c13fd418241734.jpg" alt />
            </div>
            <div class="txt">
              订单提交成功，请您在
              <span class="time">
                <span>00</span>时
                <span>00</span>分
                <span>00</span>秒
              </span>内完成支付
            </div>
          </div>
          <div class="orderNo">订单号：2021613861601000002</div>
        </div>
        <div class="price">
          应付金额:
          <span>￥</span>
          <span class="num">129.00</span>
        </div>
      </div>
      <div class="payWay">
        <div class="payTitle">请选择支付方式</div>
        <div class="choose">
          <div class="dt">支付平台</div>
          <ul class="flexA chooseItem">
            <li>
              <img src="https://p1.ssl.qhimg.com/t0113249b7f1b9a96f0.jpg" alt />
            </li>
            <li @click="jumpwx">
              <img src="https://p2.ssl.qhimg.com/t014d8518078980aa23.jpg" alt />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "payment",
  methods: {
    jumpwx() {
      this.$router.push("/userpay");
    },
  },
};
</script>

<style lang="scss">
.payment {
  background: #f0f0f0;
  overflow: hidden;
  .paymentWrap {
    width: 1240px;
    margin: 40px auto;
    .payInfo {
      background: #fff;
      border: 1px solid #ddd;
      color: #333;
      font-size: 14px;
      line-height: 28px;
      margin: 40px auto;
      padding: 30px 70px;
      .title {
        color: #333;
        font-size: 24px;
        line-height: 42px;
        .dt {
          .icon {
            width: 30px;
            height: 38px;
            margin-right: 10px;
            img {
              display: block;
              width: 100%;
            }
          }
          .txt {
            .time {
              span {
                color: #f6382c;
                padding: 0 2px;
                font-weight: 600;
                font-size: 28px;
              }
            }
          }
        }
        .orderNo {
          color: #333;
          font-size: 14px;
          line-height: 28px;
          padding-left: 40px;
        }
      }
      .price {
        font-size: 18px;
        span {
          color: #eb2427;
          font-size: 16px;
        }
        .num {
          color: #eb2427;
          font-size: 36px;
          font-weight: 500;
        }
      }
    }
  }
  .payWay {
    background: #fff;
    border: 1px solid #ddd;
    .payTitle {
      background: #fafafa;
      border-bottom: 1px solid #efefef;
      color: #343434;
      font-size: 20px;
      height: 70px;
      line-height: 70px;
      padding-left: 70px;
    }
    .choose {
      margin-top: 40px;
      padding-left: 70px;
      padding-bottom: 100px;
      .dt {
        color: #535353;
        font-weight: 400;
      }
      .chooseItem {
        li {
          border: 1px solid #ddd;
          cursor: pointer;
          display: inline-block;
          margin-top: 20px;
          margin-right: 20px;
          padding: 5px 10px;
        }
        li:hover {
          border-color: #dcbc82;
        }
      }
    }
  }
}
</style>