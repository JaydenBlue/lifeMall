<template>
  <div class="userpay">
    <div class="userpayWrap">
      <div class="flex title">
        <div class="label">
          订单提交成功，请尽快付款！订单号：
          <span>2021614191601000002</span>
        </div>
        <div class="price">
          应付金额
          <strong>129.00</strong>元
        </div>
      </div>
      <div class="main">
        <h2>微信支付</h2>
        <div class="code"></div>
        <div class="tips">
          <p>请使用微信扫一扫</p>
          <p>扫描二维码支付</p>
        </div>
        <a href class="other" @click="other">选择其他支付方式</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userpay",
  methods: {
    other() {
    //   this.$router.go(0);
    },
  },
};
</script>

<style lang="scss">
.userpay {
  background: #f0f0f0;
  overflow: hidden;
  .userpayWrap {
    background: #fff;
    border: 1px solid #ddd;
    margin: 40px auto;
    min-height: 520px;
    width: 1000px;
    .title {
      padding: 20px 30px;
      font-size: 14px;
      height: 30px;
      line-height: 30px;
      .label {
      }
      .price {
        strong {
          color: red;
          font-size: 16px;
          padding: 0 5px;
        }
      }
    }
    .main {
      background: url(https://p4.ssl.qhimg.com/t019b4df8a8979b71c1.png)
        no-repeat 550px 25px;
      clear: both;
      min-height: 480px;
      padding: 0 30px;
      h2 {
        font-size: 18px;
        padding-bottom: 30px;
      }
      .code {
        border: 1px solid #ddd;
        height: 260px;
        margin: 0 0 20px 130px;
        padding: 10px;
        width: 260px;
      }
      .tips {
        background: url(https://p3.ssl.qhimg.com/t014dc0b63bbc95de87.png)
          no-repeat 20px 12px #03bd09;
        background-size: 36px 36px;
        color: #fff;
        font-size: 14px;
        height: 55px;
        margin-left: 130px;
        padding-top: 5px;
        width: 282px;
        margin-bottom: 10px;
        p {
          //   padding: 5px 0 0 70px;
          padding-top: 5px;
          padding-left: 70px;
          margin: 0;
        }
      }
      .other {
        font-size: 14px;
        padding-top: 20px;
      }
    }
  }
}
</style>