<template>
  <div class="coupon">
    <div class="couponWrap">
      <div class="couponBanner">
        <img src="https://p.ssl.qhimg.com/t01c578ed0e7e177c5c.jpg" alt />
      </div>
      <div class="couponListWrap">
        <div class="couponList">
          <div class="couponItem">
            <div class="c-item-wrapper">
              <i class="c-item-bg"></i>
              <i class="c-item-content-bg"></i>
              <div class="c-item-label">商品券</div>
              <div class="c-item-left">
                <div class="center-body">
                  <div class="c-item-num c-item-num-5">
                    <i>￥</i>
                    <strong>10.00</strong>
                  </div>
                  <div class="c-item-desc">满99.00可用</div>
                </div>
              </div>
              <div class="c-item-content">
                <p class="c-item-intro" title="限时购商品与个别商品除外">
                  <span class="c-item-tag c-item-tag-vip">黑金专享</span>限时购商品与个别商品除外
                </p>
                <p class="c-item-time">2020.7.1 00:00-2020.7.31 23:55</p>
                <a href="javascript:void(0)" class="c-item-oper js-coupon-get">
                  <span class="c-item-btn" @click="receive">领取</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "coupon",
  methods: {
    receive() {
      this.$store.commit("ISTOLOGIN", true);
    },
  },
};
</script>

<style lang="scss">
.coupon {
  background: #f2f2f2;
  overflow: hidden;
  .couponWrap {
    background: #fff;
    margin: 30px auto;
    overflow: hidden;
    padding: 40px 0 50px;
    width: 1020px;
    .couponBanner {
      margin: 0 40px;
      img {
        border: 0;
        vertical-align: middle;
        width: 100%;
      }
    }
    .couponListWrap {
      min-height: 500px;
      margin: 15px 40px;
      .couponList {
        .couponItem {
          color: #313336;
          position: relative;
          width: 455px;
          display: inline-block;
          font-size: 14px;
          margin: 20px 0 0 30px;
          vertical-align: top;
          .c-item-wrapper {
            height: 128px;
            padding: 5px 5px 5px 0;
            position: relative;
            z-index: 5;
            .c-item-bg {
              background: #fcd7d2;
              background: -webkit-linear-gradient(
                265deg,
                #fee7e4 0,
                #fcd7d2 100%
              );
              background: linear-gradient(185deg, #fee7e4 0, #fcd7d2 100%);
              left: 150px;
              right: 20px;
              bottom: 0;
              content: "";
              position: absolute;
              top: 0;
            }
            .c-item-bg:before {
              background-position: top left;
              right: 100%;
              width: 150px;
            }
            .c-item-bg::before {
              background-image: url(https://p.ssl.qhimg.com/t01346aca4da5fbccd2.png);
              background-size: auto 100%;
              bottom: 0;
              content: "";
              position: absolute;
              top: 0;
            }
            .c-item-bg:after {
              background-position: top right;
              left: 100%;
              width: 20px;
            }
            .c-item-bg:after {
              bottom: 0;
              content: "";
              position: absolute;
              top: 0;
              background-image: url(https://p.ssl.qhimg.com/t01346aca4da5fbccd2.png);
              background-size: auto 100%;
            }
            .c-item-content-bg {
              background: #fff;
              left: 139px;
              right: 31px;
              bottom: 5px;
              top: 5px;
              content: "";
              position: absolute;
            }
            .c-item-content-bg:before {
              background-position: top left;
              right: 100%;
              width: 9px;
              bottom: 5px;
              top: 5px;
              background: url(https://p.ssl.qhimg.com/t015589f9392de3fbd5.png);
              height: 100%;
              top: 0;
              bottom: 0;
              content: "";
              position: absolute;
              top: 0;
            }
            .c-item-content-bg:after {
              background-position: top right;
              // left: 100%;
              width: 30px;
            }
            .c-item-content-bg:after {
              background: url(https://p.ssl.qhimg.com/t015589f9392de3fbd5.png);
              height: 100%;
              top: 0;
              bottom: 5px;
              top: 5px;
              bottom: 0;
              content: "";
              position: absolute;
              top: 0;
              right: -20px;
            }
            .c-item-label {
              background-position: 0 0;
              background-size: 68px 130px;
              background-repeat: no-repeat;
              color: #fff;
              font-weight: 400;
              font-size: 12px;
              height: 25px;
              left: -5px;
              line-height: 20px;
              position: absolute;
              text-align: center;
              top: 10px;
              width: 68px;
              z-index: 5;
              background-image: url(https://p.ssl.qhimg.com/t010be8e7cf48374c86.png);
            }
            .c-item-left {
              float: left;
              font-size: 0;
              height: 100%;
              padding-right: 4px;
              text-align: center;
              width: 139px;
              box-sizing: border-box;
              position: relative;
              z-index: 1;
              .center-body {
                display: inline-block;
                *display: inline;
                font-size: 12px;
                letter-spacing: normal;
                margin: 0 !important;
                padding: 0 !important;
                vertical-align: middle;
                white-space: normal;
                width: 100%;
                word-spacing: normal;
                word-wrap: break-word;
                *zoom: 1;
                .c-item-num {
                  color: #f33;
                  font-size: 60px;
                  font-weight: 600;
                  line-height: 1.1;
                  i {
                    font-family: arial;
                    font-style: normal;
                    font-size: 12px;
                    font-weight: 400;
                    margin-right: -2px;
                  }
                }
                .c-item-num-5 {
                  font-size: 36px;
                  margin: 5px 0;
                }
                .c-item-desc {
                  color: #313336;
                  font-size: 12px;
                  font-weight: 400;
                  line-height: 1;
                  white-space: nowrap;
                }
              }
            }
            .c-item-left:after {
              content: "";
              display: inline-block;
              *display: inline;
              font-size: 0;
              height: 100%;
              vertical-align: middle;
              width: 0;
              *zoom: 1;
            }
            .c-item-content {
              height: 128px;
              overflow: hidden;
              padding: 10px 20px 10px 15px;
              position: relative;
              box-sizing: border-box;
              z-index: 1;
              .c-item-intro {
                -webkit-box-orient: vertical;
                display: -webkit-box;
                font-weight: 400;
                -webkit-line-clamp: 2;
                line-height: 21px;
                max-height: 42px;
                overflow: hidden;
                .c-item-tag {
                  background: #ff9f00;
                  border-radius: 2px;
                  color: #fff;
                  display: inline-block;
                  font-size: 14px;
                  line-height: 1;
                  padding: 2px 5px;
                  position: relative;
                  top: -1px;
                  vertical-align: middle;
                }
                .c-item-tag-vip {
                  background: #271b14;
                  color: #ffd764;
                  margin-right: 6px;
                }
              }
              .c-item-time {
                height: 18px;
                line-height: 18px;
                margin-top: 6px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .c-item-oper {
                bottom: 10px;
                position: absolute;
                right: 20px;
                color: #666;
                outline: none;
                text-decoration: none;
                .c-item-btn {
                  background: #f33;
                  border-radius: 25px;
                  -webkit-box-sizing: border-box;
                  box-sizing: border-box;
                  color: #fff;
                  cursor: pointer;
                  display: inline-block;
                  font-size: 12px;
                  font-weight: 400;
                  line-height: 1;
                  min-width: 60px;
                  padding: 4px 10px;
                  text-align: center;
                }
              }
            }
          }
          .c-item-wrapper:before {
            height: 50px;
            right: 0;
            top: 0;
            width: 50px;
            content: "";
            position: absolute;
            z-index: 10;
          }
          .c-item-wrapper:after {
            height: 35px;
            right: 5px;
            top: 5px;
            width: 35px;
            content: "";
            position: absolute;
            z-index: 10;
          }
        }
      }
    }
  }
}
</style>