<template>
  <div class="classification">
    <div class="search-box">
      <div class="search-nav">
        <span class="default_path">
          <a href>首页</a>
          <i>></i>
          <a href="javascript:void(0)" @click="searchAll">全部搜索结果</a>
        </span>
        <a class="qwords">{{name}}</a>
      </div>
    </div>
    <div class="filter-box">
      <div class="filter js-cates" v-if="name == '全部'">
        <div class="hint">分类:</div>
        <div class="option_box unspread">
          <a
            href="javascript:void(0)"
            @click="changeType(item, index)"
            :class="name == '全部' && activeIndex == index?'acitves':''"
            v-for="(item, index) in typeList"
            :key="index"
          >{{item.name}}</a>
        </div>
      </div>
      <div class="filter js-cates">
        <div class="hint">品牌:</div>
        <div class="option_box unspread">
          <a href="javascript:void(0)">360</a>
        </div>
      </div>
      <div class="filter js-cates">
        <div class="hint">排序:</div>
        <div class="option_box unspread">
          <a href="javascript:void(0)">默认</a>
          <a href="javascript:void(0)">价格</a>
        </div>
      </div>
    </div>
    <div class="list-box">
      <div class="listwrap">
        <div class="list-container">
          <div class="list">
            <div class="list-item" v-for="(item,index) in shopList" :key="index">
              <dl class="desc">
                <dt class="pic" @click="goDetail">
                  <a href="javascript:void(0)">
                    <img :src="item.thumbnail_urls" alt />
                  </a>
                </dt>
                <dd class="cont">
                  <a href>
                    <span class="title">{{item.name}}</span>
                    <span class="price">
                      <span>￥</span>
                      {{item.price}}
                    </span>
                  </a>
                </dd>
                <dd class="addbtns" @click="addCart(item)">
                  <a href="javascript:void(0)" class="add-cart">加入购物车</a>
                </dd>
              </dl>
              <div class="addSuccess">成功添加至购物车</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "classification",
  data() {
    return {
      typeList: [],
      shopList: [],
      activeIndex: 0,
      name: "",
      filterForm: {
        brand: "",
        end_price: 0,
        name: "",
        pageNum: 1,
        pageSize: 20,
        sort: 0,
        start_price: 0,
        status: 1,
        type: 1,
      },
    };
  },
  created() {
    console.log(this.$route.query);
    if (this.$route.query.word) {
      this.filterForm.name = this.$route.query.word;
      this.name = this.$route.query.word;
    }
    this.getInit();
    this.getShops();
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  methods: {
    getInit() {
      this.$api.getClassify().then((res) => {
        console.log(res);
        this.typeList = res.data.data;
      });
    },
    getShops() {
      this.$api.getShopList(this.filterForm).then((res) => {
        console.log(res);
        this.shopList = res.data.data.list;
      });
    },
    searchAll() {
      this.name = "全部";
      this.filterForm.name = ''
      this.getShops()
    },
    // 切换分类
    changeType(item, index) {
      this.activeIndex = index;
      this.filterForm.type = item.id;
      this.getShops();
    },
    addCart(item) {
      console.log(this.userInfo);
      if (this.userInfo) {
        this.$api.addCartO({
          goods_id: item.id,
          goods_sort: item.sorts.split(",")[0],
          num: 1,
        })
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
    goDetail() {
      this.$router.push("/shop/item");
    },
  },
};
</script>

<style lang="scss">
.classification {
  border-top: 1px solid #333;
  .search-box {
    background: #fff;
    font-size: 14px;
    width: 100%;
    border-bottom: 1px solid #e8e8e8;
    .search-nav {
      color: #0e0e0e;
      height: 48px;
      line-height: 48px;
      margin: 0 auto;
      width: 1240px;

      .default_path {
        margin-right: -4px;
        i {
          display: inline;
          font: 14px / 1.5 "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei",
            "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
          font-style: normal;
          padding: 0 5px;
          text-align: center;
          width: 20px;
        }
        a {
          color: #666;
          outline: none;
          text-decoration: none;
          cursor: pointer;
        }
        a:hover {
          color: #dcbc82;
        }
      }
      .qwords {
        font-size: 15px;
        cursor: pointer;
      }
      .qwords:before {
        color: #848484;
        content: ">";
        font: 14px / 1.5 "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei",
          "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
        padding: 0 5px;
      }
    }
  }
  .filter-box {
    background: #fff;
    font-size: 14px;
    width: 100%;
    a {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .unspread {
      height: 48px !important;
      overflow: hidden !important;
      .acitves {
        color: #dcbc82;
      }
    }
    .option_box {
      border-bottom: 1px solid #e8e8e8;
      float: left;
      max-height: 250px;
      overflow: auto;
      padding-left: 4px;
      position: relative;
      transition: all 0.5s;
      width: 1175px;
    }
    .filter {
      //   border-bottom: 1px solid #e8e8e8;
      line-height: 48px;
      margin: 0 auto;
      width: 1240px;
      a {
        color: #848484;
        display: inline-block;
        *display: inline;
        font-weight: 400;
        height: 48px;
        line-height: 48px;
        padding-right: 15px;
        text-decoration: none;
        width: 100px;
        *zoom: 1;
      }
      a:hover {
        color: #dcbc82;
      }
      .hint {
        color: #31373c;
        display: inline-block;
        *display: inline;
        height: 48px;
        line-height: 48px;
        width: 60px;
        // border-bottom: 1px solid #e8e8e8;
        display: block;
      }
    }
    .js-cates {
      display: flex;
      align-items: center;
    }
    .js-cates:last-child {
      border-bottom: 0 !important;
    }
  }
  .list-box {
    background: #f5f5f5;
    padding: 16px 0 30px;
    width: 100%;
    .listwrap {
      margin: 0 auto;
      position: relative;
      width: 1240px;
      .list-container {
        margin: 0 -5px;
        overflow: hidden;
        width: 1250px;
        .list {
          margin-left: 1px;
          width: 100%;
          .list-item {
            background: #fff;
            border: 1px solid #e4e4e4;
            display: inline-block;
            float: left;
            height: 328px;
            margin: 5px 5px 15px;
            overflow: hidden;
            position: relative;
            width: 238px;
            .pic {
              padding: 40px 30px 10px;
            }
          }
        }
      }
    }
  }
  dd,
  dl {
    margin: 0;
    padding: 0;
  }
  .addbtns,
  .addSuccess {
    text-align: center;
  }
  .list-item:hover .add-cart {
    display: block;
  }

  .list-item .pic img,
  .list-item .pic a {
    display: block;
    height: 165px;
    width: 165px;
  }
  .list-item .cont .title {
    color: #31373c;
    display: block;
    font-size: 14px;
    height: 24px;
    line-height: 24px;
    margin: 0 auto;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 90%;
  }
  .list-item .cont .price {
    line-height: 36px;
    // margin-top: 10px;
    display: block;
    color: #fa5437;
    font-size: 14px;
    text-align: center;
  }

  .addSuccess {
    background: #fc0d1b;
    bottom: -36px;
    color: #fff;
    display: none;
    font-size: 12px;
    height: 36px;
    left: 0;
    line-height: 36px;
    position: absolute;
    right: 0;
    z-index: 10;
  }

  .addbtns a {
    display: inline-block;
    font-size: 12px;
    height: 28px;
    line-height: 28px;
    margin-top: 10px;
    width: 120px;
  }

  .addbtns .add-cart {
    background: #fff url(http://p.ssl.qhmsg.com/t010f59b0af8a644c17.png)
      no-repeat 14px 7px;
    background-size: 15px;
    border: 1px solid #fc532d;
    color: #fc532d;
    // display: none;
    padding-left: 15px;
    width: 105px;
  }

  .addbtns .remain em {
    font-style: normal;
  }

  .addbtns a:hover {
    color: #fc0d1b;
  }

  .addbtns .add-cart:hover {
    background: #fc522c url(http://p.ssl.qhmsg.com/t0111d0b735bbb4c459.png)
      no-repeat 14px 7px;
    background-size: 15px;
    color: #fff;
  }
  .add-cart {
    margin: auto;
  }
  .list-box .list .list-item {
    background: #fff;
    border: 1px solid #e4e4e4;
    display: inline-block;
    *display: inline;
    float: left;
    height: 328px;
    margin: 5px 5px 15px;
    overflow: hidden;
    position: relative;
    width: 238px;
    *zoom: 1;
  }

  .list-item .cont .title {
    color: #31373c;
    display: block;
    font-size: 14px;
    height: 24px;
    line-height: 24px;
    margin: 0 auto;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 90%;
  }

  .list-item .cont .price {
    color: #fa5437;
    font-size: 14px;
  }

  .btns .add-cart:hover {
    background: #fc522c url(http://p.ssl.qhmsg.com/t0111d0b735bbb4c459.png)
      no-repeat 25px 9px;
    color: #fff;
  }

  .list-item:hover {
    border: 1px solid #fc0d1b !important;
    margin-bottom: 15px;
  }
}
</style>