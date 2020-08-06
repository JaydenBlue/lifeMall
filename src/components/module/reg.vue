<template>
  <div class="reg">
    <div class="main">
      <div class="felxE">
        <div class="close" @click="close">
          <i class="iconfont icon-guanbi2"></i>
        </div>
      </div>
      <div class="flex title">
        <div
          @click="changeType(0)"
          :class="activeIndex == 0?'item acitve':'item'"
          v-text="$t('reg.r1')"
        >手機號註冊</div>
        <div
          @click="changeType(1)"
          :class="activeIndex == 1?'item acitve':'item'"
          v-text="$t('reg.r2')"
        >郵箱註冊</div>
      </div>
      <div class="flexC form">
        <div v-if="activeIndex == 0" class="form_item form_item1">
          <div class="flexA form_btn1">
            <i class="iconfont icon-shoujihaoma"></i>
            <div class="code">+{{form.column}}</div>
          </div>
          <div class="input">
            <input type="text" v-model="form.m_name" :placeholder="$t('reg.r3')" />
          </div>
        </div>
        <div v-else class="form_item form_item1">
          <i class="iconfont icon-youxiang"></i>
          <input type="text" v-model="form.m_name" :placeholder="$t('reg.r13')" />
        </div>
        <div class="form_item form_item1">
          <div class="input">
            <i class="iconfont icon-yanzhengma1"></i>
            <input type="text" v-model="form.img_code" :placeholder="$t('reg.r4')" />
          </div>
          <div class="flexC form_btn" @click="getPicCode">
            <img :src="imgurl" :alt="$t('reg.r14')" />
          </div>
        </div>
        <div class="form_item form_item1">
          <div class="input">
            <i class="iconfont icon-duanxinyanzhengma"></i>
            <input type="text" v-model="form.sms_code" :placeholder="$t('reg.r5')" />
          </div>
          <div class="flexC form_btn">
            <span v-show="show" @click="getCode" v-text="$t('reg.r6')">獲取驗證碼</span>
            <span v-show="!show" class="count">{{count}} s</span>
          </div>
        </div>
        <div class="form_item">
          <i class="iconfont icon-mima"></i>
          <input type="password" v-model="form.m_pwd" :placeholder="$t('reg.r7')" />
        </div>
        <div class="form_item">
          <i class="iconfont icon-mima"></i>
          <input type="password" v-model="form.m_pwd2" :placeholder="$t('reg.r8')" />
        </div>
        <div class="form_item">
          <i class="iconfont icon-yaoqingma"></i>
          <input type="text" v-model="form.introduce_m_id" :placeholder="$t('reg.r9')" />
        </div>
        <div class="form_item btn" v-text="$t('reg.r10')" @click="phoneReg">註冊</div>
        <div class="felxE login" @click="login">
          <span v-text="$t('reg.r11')">已有賬號,</span>
          <span class="color" v-text="$t('reg.r12')">直接登錄</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "reg",
  data() {
    return {
      imgurl: "",
      kaptcha_token: "",
      activeIndex: 0,
      show: true,
      count: "",
      timer: null,
      form: {
        column: "86",
        introduce_m_id: "",
        img_code: "",
        m_name: "",
        sms_code: "",
        m_pwd: "",
        m_pwd2: "",
      },
    };
  },
  created() {
    this.getPicCode();
  },
  methods: {
    getCode() {
      if (this.activeIndex == 0 && !this.form.m_name) {
        if (document.getElementsByClassName("el-notification").length === 0) {
          this.$notify.info({
            title: this.$t("login.l7"),
            message: "请输入手机号码",
          });
        }
      } else if (
        this.activeIndex == 0 &&
        !/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.form.m_name)
      ) {
        if (document.getElementsByClassName("el-notification").length === 0) {
          this.$notify.info({
            title: this.$t("login.l7"),
            message: "输入的手机号格式有误",
          });
        }
      } else if (this.activeIndex == 1 && !this.form.m_name) {
        if (document.getElementsByClassName("el-notification").length === 0) {
          this.$notify.info({
            title: this.$t("login.l7"),
            message: "请输入邮箱地址",
          });
        }
      } else if (
        this.activeIndex == 1 &&
        !(this.form.m_name.indexOf("@") > -1)
      ) {
        if (document.getElementsByClassName("el-notification").length === 0) {
          this.$notify.info({
            title: this.$t("login.l7"),
            message: "输入的邮箱格式有误",
          });
        }
      } else if (!this.form.img_code) {
        if (document.getElementsByClassName("el-notification").length === 0) {
          this.$notify.info({
            title: this.$t("login.l7"),
            message: "请输入图片验证码",
          });
        }
      } else {
        console.log(123);
        const that = this;
        this.$api
          .getPhoneCode({
            name: this.form.column + "_" + this.form.m_name,
            kaptcha_token: this.kaptcha_token,
            img_code: this.form.img_code,
          })
          .then((res) => {
            that.show = false;
            that.startDown();
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
            if (
              document.getElementsByClassName("el-notification").length === 0
            ) {
              this.$notify.info({
                title: this.$t("login.l7"),
                message: err.data.msg,
              });
            }
          });
      }
    },
    startDown() {
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    phoneReg() {
      if (this.activeIndex == 0 && !this.form.m_name) {
        if (document.getElementsByClassName("el-notification").length === 0) {
          this.$notify.info({
            title: this.$t("login.l7"),
            message: "请输入手机号码",
          });
        }
      } else if (
        this.activeIndex == 0 &&
        !/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.form.m_name)
      ) {
        if (document.getElementsByClassName("el-notification").length === 0) {
          this.$notify.info({
            title: this.$t("login.l7"),
            message: "输入的手机号格式有误",
          });
        }
      } else if (this.activeIndex == 1 && !this.form.m_name) {
        if (document.getElementsByClassName("el-notification").length === 0) {
          this.$notify.info({
            title: this.$t("login.l7"),
            message: "请输入邮箱地址",
          });
        }
      } else if (
        this.activeIndex == 1 &&
        !(this.form.m_name.indexOf("@") > -1)
      ) {
        if (document.getElementsByClassName("el-notification").length === 0) {
          this.$notify.info({
            title: this.$t("login.l7"),
            message: "输入的邮箱格式有误",
          });
        }
      } else if (!this.form.img_code) {
        if (document.getElementsByClassName("el-notification").length === 0) {
          this.$notify.info({
            title: this.$t("login.l7"),
            message: "请输入图片验证码",
          });
        }
      } else if (!this.form.sms_code) {
        if (document.getElementsByClassName("el-notification").length === 0) {
          this.$notify.info({
            title: this.$t("login.l7"),
            message: "请输入短信验证码",
          });
        }
      } else if (!this.form.m_pwd) {
        if (document.getElementsByClassName("el-notification").length === 0) {
          this.$notify.info({
            title: this.$t("login.l7"),
            message: "请设置登录密码",
          });
        }
      } else if (!this.form.m_pwd2) {
        if (document.getElementsByClassName("el-notification").length === 0) {
          this.$notify.info({
            title: this.$t("login.l7"),
            message: "请确认登录密码",
          });
        }
      } else {
        this.$api
          .memberRegdo({
            introduce_m_id: this.form.introduce_m_id,
            m_name: this.form.column + "_" + this.form.m_name,
            m_pwd: this.form.m_pwd,
            m_type: 0,
            sms_code: this.form.sms_code,
          })
          .then((res) => {
            if (res.data.status == 0) {
              if (
                document.getElementsByClassName("el-notification").length === 0
              ) {
                this.$notify.info({
                  title: this.$t("login.l7"),
                  message: "注册成功",
                });
              }
              this.$store.commit("ISTOLOGIN", true);
            }
          })
          .catch((err) => {
            if (
              document.getElementsByClassName("el-notification").length === 0
            ) {
              this.$notify.info({
                title: this.$t("login.l7"),
                message: err.data.msg,
              });
            }
          });
      }
    },
    // 获取图形验证码
    getPicCode() {
      this.$api.picCode().then((res) => {
        console.log(res);
        this.imgurl = res.data.img;
        this.kaptcha_token = res.data.kaptcha_token;
      });
    },
    // 切换邮箱或手机号注册
    changeType(index) {
      this.activeIndex = index;
      this.form = {
        column: "86",
        introduce_m_id: "",
        img_code: "",
        m_name: "",
        sms_code: "",
        m_pwd: "",
        m_pwd2: "",
      };
      this.getPicCode();
    },
    close() {
      this.$store.commit("ISTOREG", false);
    },
    login() {
      this.$store.commit("ISTOLOGIN", true);
    },
  },
};
</script>

<style lang="scss" scoped>
.reg {
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
      .item:before {
        position: absolute;
        z-index: 1;
        left: 0px;
        bottom: 0px;
        display: inline-block;
        height: 3px;
        width: 100%;
        border-radius: 3px;
        background-color: #da9923;
        content: "";
        transform: scale3d(0, 1, 1);
        transform-origin: center;
        transition: all 0.5s;
      }
      .item:hover:before {
        transform: scale3d(1, 1, 1);
        color: #ed6d00;
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
      .form_item1 {
        // padding: 0;
        // border: 0;
        padding-right: 0;
        justify-content: space-between;
        .input {
          height: 100%;
          display: flex;
          align-items: center;
          //   border-radius: 4px;
          //   border: 1px solid #ddd;
          //   padding: 0 10px;
          flex: 1;
          input {
            flex: 1;
          }
        }
        .form_btn {
          min-width: 100px;
          height: 42px;
          overflow: hidden;
          text-align: center;
          margin-left: 20px;
          color: #ca932f;
          cursor: pointer;
          img {
            height: 40px;
            display: block;
          }
        }
        .form_btn:hover {
          color: #ca932f;
        }
        .code {
          width: 30px;
          margin-left: 0;
          color: #ca932f;
          margin-right: 10px;
          cursor: pointer;
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
      .login {
        width: 100%;
        text-align: right;
        padding-right: 10px;
        .color {
          color: #da9923;
          cursor: pointer;
        }
        .color:hover {
          color: #ca932f;
        }
      }
    }
  }
}
</style>