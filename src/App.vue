<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import store from "@/store/store.js";

import Cookie from "js-cookie";

export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {
    console.log(store)
    // document.body.removeChild(document.getElementById("Loading"));
    //读取cookie
    let auth = Cookie.get("auth");
    if (auth) {
      this.$store.commit("isLoginChange", true);
      this.$store.commit("tokenChange", auth);
    }
    // let lang_type = this.$cookies.get("lang_type");
    // if (lang_type) {
    //   this.$i18n.locale = lang_type + "";
    // }
  },
  watch: {},
};
</script>


<style lang="scss">
body,
html,
#app {
  padding: 0;
  margin: 0 auto;
  height: 100%;
  background: #fff;
  position: relative;
  overflow-x: hidden;
}

h1 {
  border-bottom: 1px #e1e1e1 solid;
  color: #333;
  font-size: 14px;
  font-weight: 700;
  height: 59px;
  line-height: 59px;
  margin: 0 -15px;
  padding: 0 15px;
}
a {
  color: #666;
  cursor: pointer;
}
a:hover {
  color: #dcbc82;
}
.el-tabs__item:hover {
  color: #dcbc82;
}
.el-tabs__item.is-active {
  color: #dcbc82;
}
.el-tabs__active-bar {
  background: #dcbc82;
}
.el-button--text {
  color: #dcbc82d6;
}
.el-button--text:hover {
  color: #dcbc82;
}
.el-loading-mask {
  background-color: rgba(0, 0, 0, 0.1);
}
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.flexA {
  display: flex;
  align-items: center;
}
.flexC {
  display: flex;
  align-items: center;
  justify-content: center;
}
.felxE {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.flexC {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
