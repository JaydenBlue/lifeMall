<template>
  <div class="area">
    <div class="main">
      <div class="felxE title">
        <div class="item acitve">新增地址</div>
        <div class="close" @click="close">
          <i class="iconfont icon-guanbi2"></i>
        </div>
      </div>
      <div class="flexC form">
        <div class="form_item form_item1">
          <div class="label">收货人</div>
          <div class="input">
            <input type="text" v-model="form.name" placeholder="收货人姓名" />
          </div>
        </div>
        <div class="form_item form_item1">
          <div class="label">手机号</div>
          <div class="input">
            <input type="text" v-model="form.phone" placeholder="请输入收货人手机号" />
          </div>
        </div>
        <div class="form_item form_item1">
          <div class="label">地址</div>
          <div class="input">
            <v-region
              type="column"
              @values="regionChange"
              :area="true"
            >请选择地址{{form.province}}{{form.county}}{{form.city}}</v-region>
          </div>
        </div>
        <div class="form_item form_item1">
          <div class="label"></div>
          <div class="textarea">
            <textarea name v-model="form.detailed" placeholder="请输入详细地址" id></textarea>
          </div>
        </div>
        <div class="form_item">
          <div class="label">默认</div>
          <div>
            <el-switch
              v-model="form.is_default"
              active-color="#13ce66"
              inactive-color="#ff4949"
              :active-value="1"
              :inactive-value="0"
            ></el-switch>
          </div>
        </div>
        <div class="form_item btn" @click="save">保存</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "area",
  data() {
    return {
      imgurl: "",
      kaptcha_token: "",
      activeIndex: 1,
      show: true,
      count: "",
      timer: null,
      form: {
        city: "",
        county: "",
        detailed: "",
        is_default: 1,
        name: "",
        nationality: "china",
        phone: "",
        province: "",
        remark: "remark",
      },
    };
  },
  created() {
    this.getPicCode();
  },
  methods: {
    regionChange(data) {
      console.log(data);
      this.form.province = data.province.value;
      this.form.county = data.city.value;
      this.form.city = data.area.value;
    },
    save() {
      if (!this.form.name) {
        if (document.getElementsByClassName("el-notification").length === 0) {
          this.$notify.info({
            title: this.$t("login.l7"),
            message: "请输入收货人姓名",
          });
        }
      } else if (!this.form.phone) {
        if (document.getElementsByClassName("el-notification").length === 0) {
          this.$notify.info({
            title: this.$t("login.l7"),
            message: "请输入收货人手机号",
          });
        }
      } else if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.form.phone)) {
        if (document.getElementsByClassName("el-notification").length === 0) {
          this.$notify.info({
            title: this.$t("login.l7"),
            message: "输入的手机号格式有误",
          });
        }
      } else if (!this.form.province) {
        if (document.getElementsByClassName("el-notification").length === 0) {
          this.$notify.info({
            title: this.$t("login.l7"),
            message: "请选择收货地址",
          });
        }
      } else if (!this.form.detailed) {
        if (document.getElementsByClassName("el-notification").length === 0) {
          this.$notify.info({
            title: this.$t("login.l7"),
            message: "请输入详细地址",
          });
        }
      } else {
        this.$api
          .addAdress(this.form)
          .then((res) => {
            if (res.data.status == 0) {
              if (
                document.getElementsByClassName("el-notification").length === 0
              ) {
                this.$notify.info({
                  title: this.$t("login.l7"),
                  message: "添加成功",
                });
              }
              this.$emit("addParentAge", this.parentActualAge);
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
    close() {
      this.$emit("addParentAge", this.parentActualAge);
    },
  },
};
</script>

<style lang="scss" scoped>
.area {
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
      justify-content: space-between;
      font-size: 20px;
      font-weight: 5000;
      // padding: 0 30px;
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
      // padding: 0 30px;

      .form_item {
        // width: 360px;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 10px;
        margin-bottom: 20px;
        box-sizing: border-box;
        .label {
          width: 60px;
          text-align: right;
          padding-right: 20px;
        }
        .iconfont {
          font-size: 20px;
          padding-right: 10px;
        }
        .input {
          border-radius: 4px;
          border: 1px solid #ddd;
          padding: 0 12px;
          height: 38px;
        }
        .address {
          flex: 1;
          .input {
            border-radius: 4px;
            border: 1px solid #ddd;
            padding: 0 12px;
            height: 38px;
            margin-bottom: 12px;
          }
        }
        input {
          flex: 1;
          border: 0;
          outline: none;
        }
      }
      .addressWrap {
        align-items: inherit;
      }
      .form_item1 {
        // padding: 0;
        // border: 0;
        padding-right: 0;
        justify-content: space-between;
        .input {
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
        .textarea {
          flex: 1;
          height: 60px;
          border-radius: 4px;
          border: 1px solid #ddd;
          padding: 10px 5px 0 12px;
          textarea {
            border: 0;
            outline: none;
            width: 100%;
            height: 90%;
          }
        }
        .form_btn {
          min-width: 100px;
          height: 42px;
          overflow: hidden;
          border-radius: 4px;
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
        border-radius: 4px;
        justify-content: center;
        color: #fff;
        font-size: 20px;
        width: 80%;
        height: 42px;
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