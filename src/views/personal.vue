<template>
  <div class="personnal">
    <div class="clauseLine"></div>
    <div class="content">
      <div class="left">
        <div class="group" v-for="(item, idx) in gpsItems" :key="idx">
          <div class="groupName">{{item.label}}</div>
          <ul>
            <li
              v-for="(ie, index) in item.children"
              :key="index"
              :class="ie.id == $route.path  ? 'active' : ''"
            >
              <router-link :to="ie.id">{{ie.label}}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="rightCnt">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "clause",
  data() {
    return {};
  },
  computed: {
    gpsItems() {
      return [
        {
          label: this.$t("personal.p1"),
          children: [
            {
              id: "/personal/personalCenter",
              label: this.$t("personal.p2"),
            },
            {
              id: "/personal/address",
              label: this.$t("personal.p3"),
            },
          ],
        },
        {
          label: this.$t("personal.p4"),
          children: [
            {
              id: "/personal/order",
              label: this.$t("personal.p5"),
            },
          ],
        },
        {
          label: this.$t("personal.p6"),
          children: [
            {
              id: "/personal/myCoupon",
              label: this.$t("personal.p7"),
            },
            {
              id: "/personal/wallet",
              label: this.$t("personal.p8"),
            },
          ],
        },
      ];
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.personnal {
  background: #f2f2f2;
}
.clauseLine {
  width: 100%;
  border-top: 1px solid #333;
  background: #f2f2f2;
}
.content {
  padding-top: 50px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.left {
  width: 180px;
  padding-bottom: 50px;
  box-sizing: border-box;
  padding: 20px;
  background: #fff;
  margin-bottom: 100px;
  .group {
    text-align: center;
    border-bottom: 1px solid #ddd;
    padding: 15px 0;
    .groupName {
      font-size: 15px;
      font-weight: 700;
      height: 30px;
      line-height: 30px;
      color: #333;
    }
    ul,
    li {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    li {
      display: block;
      font-size: 12px;
      min-height: 30px;
      line-height: 30px;
      margin: 5px 0;
      color: #666;
      cursor: pointer;
    }
    li:hover {
      border-left: 2px solid #999;
      border-radius: 2px;
    }
    .active {
      border-left: 2px solid #999;
      border-radius: 2px;
      background: url("../assets/img/right.png") 98% 5px no-repeat #f4f4f4;
    }
  }
  .group:last-child {
    border: none;
  }
}
.rightCnt {
  width: calc(100% - 200px);
  background: #fff;
  margin-bottom: 100px;
  min-height: 614px;
  padding: 0 15px 15px;
  box-sizing: border-box;
  .rcName {
    width: 100%;
    color: #333;
    float: left;
    font-size: 18px;
    font-weight: 400;
    border-bottom: 1px #e1e1e1 solid;
    height: 49px;
    line-height: 49px;
  }
}
</style>
<style lang="scss">
.rightCnt {
  .bigTitle {
    text-align: center;
    line-height: 21px;
    font-size: 24px;
    color: #333;
    font-weight: 700;
    margin-top: 100px;
    padding-bottom: 30px;
    box-sizing: border-box;
  }
  .smallTitle {
    line-height: 28px;
    padding: 20px 0;
    color: #333;
    font-size: 14px;
    font-weight: 700;
  }
  .smDetails {
    text-indent: 20px;
    text-align: left;
    line-height: 20px;
    background: rgb(255, 255, 255);
    font-size: 12px;
    color: #666;
  }
  .indentTwo {
    text-indent: 40px;
    line-height: 10px;
  }
}
</style>