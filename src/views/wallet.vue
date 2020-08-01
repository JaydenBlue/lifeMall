
<template>
  <div class="wallet">
    <h1>{{$t("personal.p8")}}</h1>
    <div class="cards">
      <el-card class="box-card" v-for="item in 3" :key="item">
        <div slot="header" class="flex clearfix">
          <div class="lf">
            <img src="https://p5.ssl.qhimg.com/t01787c0ae3b7e166d0.png" alt />
            <span>EUC</span>
          </div>
          <div class="flex">
            <el-button style="float: right; padding: 3px 0" type="text">充值</el-button>
            <el-button style="float: right; padding: 3px 0" type="text">提现</el-button>
          </div>
        </div>
        <div class="text mians">
          <div class="flex">
            <div class="item">
              <div class="label">总量</div>
              <div class="content">0</div>
            </div>
            <div class="item">
              <div class="label">可用</div>
              <div class="content">0</div>
            </div>
            <div class="item">
              <div class="label">冻结</div>
              <div class="content">0</div>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>


<script>
export default {
  name: "wallet",
};
</script>


<style lang="scss">
.cards {
  display: flex;
  flex-wrap: wrap;
  padding: 0 30rpx;
  box-sizing: border-box;
  margin-top: 20px;
  .box-card {
    width: 440px;
    margin: 15px;
  }
  .lf {
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
    }
  }
  .mians {
    padding: 0 20px;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .label {
      }
      .content {
        margin-top: 10px;
      }
    }
  }
}
</style>