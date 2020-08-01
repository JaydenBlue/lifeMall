<template>
  <div class="addressWrap">
    <h1>
      {{$t("personal.p3")}}
      <a class="link" href="javascript:void(0)">{{$t("personal.p9")}}</a>
    </h1>
    <div class="talbe">
      <el-table size="small" :data="tableData" stripe style="width: 100%">
        <el-table-column align="center" prop="date" :label="$t('personal.p10')"></el-table-column>
        <el-table-column align="center" prop="name" :label="$t('personal.p11')"></el-table-column>
        <el-table-column align="center" prop="address" width="350" :label="$t('personal.p12')"></el-table-column>
        <el-table-column align="center" prop="name" :label="$t('personal.p13')"></el-table-column>
        <el-table-column align="center" :label="$t('personal.p14')" width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">{{$t('personal.p15')}}</el-button>
            <el-button type="text" size="small">{{$t('personal.p16')}}</el-button>
            <el-button type="text" size="small">{{$t('personal.p17')}}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>


<script>
export default {
  name: "addressWrap",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>


<style lang="scss">
.link {
  color: #dcbc82d6;
  font-size: 12px;
  margin-left: 16px;
}
.talbe{
    margin-top: 20px;
    padding: 0 30px;
}
</style>