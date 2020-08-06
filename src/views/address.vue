<template>
  <div class="addressWrap">
    <h1>
      {{$t("personal.p3")}}
      <a class="link" href="javascript:void(0)">{{$t("personal.p9")}}</a>
      <v-region type="column" :town="true">1223435465</v-region>
    </h1>
    <div class="talbe">
      <el-table size="small" :data="addressList" stripe style="width: 100%">
        <el-table-column align="center" prop="name" :label="$t('personal.p10')"></el-table-column>
        <el-table-column align="center" prop="phone" :label="$t('personal.p11')"></el-table-column>
        <el-table-column align="center" :label="$t('personal.p12')">
          <template slot-scope="scope">
            <div>{{scope.row.province}} {{scope.row.city}} {{scope.row.county}}</div>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="detailed" :label="$t('personal.p13')"></el-table-column>
        <el-table-column align="center" prop="is_default" label="是否默认">
          <template slot-scope="scope">
            <div>
              <el-switch
                v-model="scope.row.is_default"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-value="1"
                inactive-value="0"
              ></el-switch>
            </div>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="create_time" label="创建时间"></el-table-column>
        <el-table-column align="center" :label="$t('personal.p14')" width="200">
          <template slot-scope="scope">
            <!-- <el-button
              @click="handleClick(scope.row)"
              type="text"
              size="small"
            >{{$t('personal.p15')}}</el-button>-->
            <el-button
              type="text"
              @click="handleClick(scope.row)"
              size="small"
            >{{$t('personal.p16')}}</el-button>
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
      addressList: [],
    };
  },
  created() {
    this.getInit();
  },
  methods: {
    handleClick() {},
    getInit() {
      this.$api.getAddress().then((res) => {
        console.log(res);
        this.addressList = res.data.data;
      });
    },
  },
};
</script>


<style lang="scss">
.link {
  color: #dcbc82d6;
  font-size: 12px;
  margin-left: 16px;
}
.talbe {
  margin-top: 20px;
  padding: 0 30px;
}
</style>