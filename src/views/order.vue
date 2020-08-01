<template>
  <div class="order">
    <h1>{{$t("personal.p5")}}</h1>
    <div class="tabs">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="$t('personal.p18')" name="first">{{$t('personal.p18')}}</el-tab-pane>
        <el-tab-pane :label="$t('personal.p19')" name="second">{{$t('personal.p19')}}</el-tab-pane>
        <el-tab-pane :label="$t('personal.p20')" name="third">{{$t('personal.p20')}}</el-tab-pane>
        <el-tab-pane :label="$t('personal.p21')" name="four">{{$t('personal.p21')}}</el-tab-pane>
        <el-tab-pane :label="$t('personal.p22')" name="five">{{$t('personal.p22')}}</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>


<script>
export default {
  name: "order",
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>


<style lang="scss">
.tabs {
  margin-top: 20px;
  padding: 0 30px;
}
</style>