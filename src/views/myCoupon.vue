
<template>
  <div class="myCoupon">
    <h1>{{$t("personal.p7")}}</h1>
    <div class="tabs">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="$t('personal.p24')" name="first">未使用</el-tab-pane>
        <el-tab-pane :label="$t('personal.p25')" name="second">已使用</el-tab-pane>
        <el-tab-pane :label="$t('personal.p26')" name="third">已过期</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>


<script>
export default {
  name: "myCoupon",
  data() {
    return {
      activeName: "first",
    };
  },
};
</script>


<style lang="scss">
.tabs {
  margin-top: 20px;
  padding: 0 30px;
}
</style>