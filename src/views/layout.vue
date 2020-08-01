<template>
  <div class="layout">
    <Header></Header>
    <HeaderSearch></HeaderSearch>
    <router-view></router-view>
    <Bottom></Bottom>
    <Reg  v-if="isToReg" />
    <Login v-if="isToLogin" />
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import Header from "@/components/module/header.vue";
import Bottom from "@/components/module/bottom.vue";
import HeaderSearch from "@/components/module/headerSearch.vue";
import Reg from "@/components/module/reg.vue";
import Login from "@/components/module/login.vue";

export default {
  name: "layout",
  components: {
    Header,
    Bottom,
    HeaderSearch,
    Reg,
    Login,
  },
  computed: {
    ...mapGetters(["isToLogin", "isToReg"]),
  },
  mounted(){
    console.log(this.isToLogin)
  }
};
</script>

<style lang="scss">
</style>
