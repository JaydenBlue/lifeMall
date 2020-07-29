<template>
  <div class="reg">
    <div class="main">
      <div class="felxE">
        <div class="close">
          <i class="iconfont icon-guanbi2"></i>
        </div>
      </div>
      <div class="flex title">
        <div
          v-for="(item, index) in titleList"
          :key="index"
          @click="changeType(index)"
          :class="activeIndex == index?'item acitve':'item'"
        >{{item}}</div>
      </div>
      <div class="flexC form" v-if="activeIndex == 0">
        <div class="form_item form_item1">
          <div class="flexA form_btn1">
            <i class="iconfont icon-shoujihaoma"></i>
            <div class="code">+86</div>
          </div>
          <div class="input">
            <input type="text" placeholder="请输入手机号" />
          </div>
        </div>
        <div class="form_item form_item1">
          <div class="input">
            <i class="iconfont icon-yanzhengma1"></i>
            <input type="text" placeholder="请输入图形验证码" />
          </div>
          <div class="flexC form_btn" @click="getPicCode">
            <img :src="imgurl" alt="图形验证码" />
          </div>
        </div>
        <div class="form_item form_item1">
          <div class="input">
            <i class="iconfont icon-duanxinyanzhengma"></i>
            <input type="text" placeholder="请输入验证码" />
          </div>
          <div class="flexC form_btn">获取验证码</div>
        </div>
        <div class="form_item">
          <i class="iconfont icon-mima"></i>
          <input type="text" placeholder="请设置登录密码" />
        </div>
        <div class="form_item">
          <i class="iconfont icon-mima"></i>
          <input type="text" placeholder="请确认登录密码" />
        </div>
        <div class="form_item">
          <i class="iconfont icon-yaoqingma"></i>
          <input type="text" placeholder="请输入推荐码(选填)" />
        </div>
        <div class="form_item btn">注册</div>
        <div class="felxE login">
          已有账号,
          <span>直接登录</span>
        </div>
      </div>
      <div class="flexC form" v-if="activeIndex == 1">
        <div class="form_item form_item1">
          <i class="iconfont icon-youxiang"></i>
          <input type="text" placeholder="请输入邮箱" />
        </div>
        <div class="form_item form_item1">
          <div class="input">
            <i class="iconfont icon-yanzhengma1"></i>
            <input type="text" placeholder="请输入图形验证码" />
          </div>
          <div class="flexC form_btn" @click="getPicCode">
            <img :src="imgurl" alt="图形验证码" />
          </div>
        </div>
        <div class="form_item form_item1">
          <div class="input">
            <i class="iconfont icon-duanxinyanzhengma"></i>
            <input type="text" placeholder="请输入验证码" />
          </div>
          <div class="flexC form_btn">获取验证码</div>
        </div>
        <div class="form_item">
          <i class="iconfont icon-mima"></i>
          <input type="text" placeholder="请设置登录密码" />
        </div>
        <div class="form_item">
          <i class="iconfont icon-mima"></i>
          <input type="text" placeholder="请确认登录密码" />
        </div>
        <div class="form_item">
          <i class="iconfont icon-yaoqingma"></i>
          <input type="text" placeholder="请输入推荐码(选填)" />
        </div>
        <div class="form_item btn">注册</div>
        <div class="felxE login">
          已有账号,
          <span>直接登录</span>
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
      activeIndex: 0,
      titleList: ["手机号注册", "邮箱注册"],
      form: {
        phone: "",
        picCode: "",
        smsCode: "",
        password: "",
      },
    };
  },
  created() {
    this.getPicCode();
  },
  methods: {
    // 获取图形验证码
    getPicCode() {
      this.$api.picCode().then((res) => {
        console.log(res);
        this.imgurl = res.img;
      });
    },
    // 切换邮箱或手机号注册
    changeType(index) {
      this.activeIndex = index;
      this.getPicCode();
    },
  },
};
</script>

<style lang="scss">
.reg {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba($color: #000000, $alpha: 0.3);
  z-index: 3999;
  .main {
    width: 500px;
    z-index: 4000;
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
        span {
          color: #da9923;
          cursor: pointer;
        }
        span:hover {
          color: #ca932f;
        }
      }
    }
  }
}
</style>