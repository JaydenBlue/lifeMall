<template>
  <div class="login">
    <div class="main">
      <div class="felxE">
        <div class="close" @click="close">
          <i class="iconfont icon-guanbi2"></i>
        </div>
      </div>
      <div class="flex title">
        <div class="item acitve" v-text="$t('login.l1')">登錄</div>
      </div>
      <div class="flexC form">
        <div class="form_item">
          <i class="iconfont icon-xingmingyonghumingnichengcopy"></i>
          <input type="text" :placeholder="$t('login.l2')" />
        </div>
        <div class="form_item">
          <i class="iconfont icon-mima"></i>
          <input type="text" :placeholder="$t('login.l3')" />
        </div>
        <div class="form_item btn" v-text="$t('login.l4')">登錄</div>
        <div class="flex login2">
          <div class="txt" @click="forgetP" v-text="$t('login.l5')">忘記密碼</div>
          <div class="txt" v-text="$t('login.l6')" @click="reg">沒有賬號？立即註冊</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      imgurl: "",
      form: {
        phone: "",
        password: "",
      },
    };
  },
  created() {},
  methods: {
    close() {
      this.$store.commit("ISTOLOGIN", false);
    },
    reg() {
      this.$store.commit("ISTOREG", true);
    },
    forgetP() {
      if (document.getElementsByClassName("el-notification").length === 0) {
        this.$notify.info({
          title: this.$t("login.l7"),
          message: this.$t("login.l8"),
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba($color: #000000, $alpha: 0.3);
  z-index: 999;
  .main {
    width: 500px;
    z-index: 1000;
    text-size-adjust: 100%;
    font-size: 14px;
    line-height: 1.5;
    background-color: #fff;
    color: #6f6f6f;
    position: relative;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei,
      SimSun, sans-serif;
    font-weight: 400;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 30px 40px;
    box-sizing: border-box;
    .close {
      cursor: pointer;
    }
    .close:hover {
      color: #333;
    }
    .title {
      justify-content: space-around;
      font-size: 20px;
      font-weight: 5000;
      padding: 0 30px;
      color: #333;
      .item {
        position: relative;
        padding-bottom: 5px;
        cursor: pointer;
      }
      .acitve {
        color: #dcbc82;
      }
    }
    .form {
      margin-top: 30px;
      padding: 0 30px;
      .form_item {
        width: 360px;
        height: 42px;
        border-radius: 4px;
        border: 1px solid #ddd;
        display: flex;
        align-items: center;
        padding: 0 10px;
        margin-bottom: 20px;
        box-sizing: border-box;
        .iconfont {
          font-size: 20px;
          padding-right: 10px;
        }
        input {
          flex: 1;
          border: 0;
          outline: none;
        }
      }
      .btn {
        border: 0;
        background: #da9923;
        text-align: center;
        justify-content: center;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin-bottom: 10px;
      }
      .btn:hover {
        background: #ca932f;
      }
      .login2 {
        width: 100%;
        text-align: right;
        padding: 0 10px;
        box-sizing: border-box;
        .txt {
          color: rgb(111, 111, 111);
          cursor: pointer;
          text-decoration: underline;
        }
        .txt:hover {
          color: #ca932f;
        }
      }
    }
  }
}
</style>