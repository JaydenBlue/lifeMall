<template>
  <div class="cart">
    <div class="cartWrap">
      <div class="table">
        <el-table
          ref="multipleTable"
          size="small"
          :data="cartList"
          tooltip-effect="dark"
          style="width: 100%"
        >
          <!-- @selection-change="handleSelectionChange" -->
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column align="center" label="商品" width="270">
            <template slot-scope="scope">
              <div class="flexA shopMsg">
                <div class="img">
                  <img :src="scope.row.goods_url" alt />
                </div>
                <div class="name">{{scope.row.goods_name}}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="name" label="属性" width="120">
            <template slot-scope="scope">
              <div @click="handleEdit(scope.$index, scope.row)">分类:{{scope.row.goods_sort}}</div>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="address" label="单价" show-overflow-tooltip>
            <template slot-scope="scope">
              <div @click="handleEdit(scope.$index, scope.row)">¥{{scope.row.price}}</div>
            </template>
          </el-table-column>
          <el-table-column align="center" label="数量">
            <template slot-scope="scope">
              <div class="flexA opearte">
                <a @click="reduce(scope.$index, scope.row)" href="javascript:void(0)">-</a>
                <input type="text" v-model="scope.row.num" />
                <a href="javascript:void(0)" @click="add(scope.$index, scope.row)">+</a>
              </div>
            </template>
          </el-table-column>
          <el-table-column align="center" label="小计">
            <template slot-scope="scope">
              <div
                class="total"
                @click="handleEdit(scope.$index, scope.row)"
              >¥{{scope.row.num * scope.row.price}}</div>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="status">
        <div class="flex settlment">
          <div class="flexA cart_lf">
            <div class="allChoose">
              <el-checkbox v-model="checked">全选</el-checkbox>
            </div>
            <div class="delChoose">删除选中商品</div>
          </div>
          <div class="flexA cart_rg">
            <div class="totalWrap">
              <div class="flexA shopNum">
                <p>
                  已选
                  <span>3件</span>商品
                </p>
                <p>
                  合计：
                  <span>¥427.00</span>
                </p>
              </div>
              <p class="discount">已优惠：¥170.00</p>
            </div>
            <div class="settlementBtn">去结算</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart",
  data() {
    return {
      cartList: [],
      multipleSelection: [],
      pageNum: 1,
      pageSize: 10,
      checked: false,
    };
  },
  mounted() {
    this.getInit();
  },
  methods: {
    add(index, item) {
      item.num = item.num + 1;
      this.updateNum(item)
    },
    reduce(index, item) {
      if (item.num > 1) {
        item.num = item.num - 1;
        this.updateNum(item)
      }
    },
    updateNum(item){
      console.log(item)
      this.$api.updateCartO({
        cart_detail_id:item.id,
        cart_id:item.shop_cart_id,
        num:item.num
      }).then(res=> {
        console.log(res)
        this.getInit()
      })
    },
    handleDelete(index, item) {
      this.$api
        .delCartO({
          list: [
            {
              cart_detail_ids: item.id,
              cart_id: item.shop_cart_id,
              is_all: 0,
            },
          ],
        })
        .then((res) => {
          console.log(res);
          this.getInit()
        });
    },
    getInit() {
      this.$api
        .getCartO({
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        })
        .then((res) => {
          console.log(res);
          this.cartList = res.data.data.list[0].list;
        })
        .catch((err) => {});
    },
  },
};
</script>

<style lang="scss">
.cart {
  background: #f0f0f0;
  overflow: hidden;
  .cartWrap {
    color: rgba(51, 51, 51, 1);
    font-size: 14px;
    font-family: SourceHanSansCN-Bold, SourceHanSansCN;
    text-align: center;
    width: 1020px;
    margin: 20px auto;
    .table {
      font-size: 14px;
      padding: 30px;
      background: #fff;
      .opearte {
        input {
          border: 1px solid #ddd;
          float: left;
          height: 26px;
          line-height: 26px;
          margin-left: -1px;
          vertical-align: middle;
          font-family: simsun;
          font-size: 16px;
          overflow: hidden;
          width: 42px;
          box-sizing: border-box;
          background: #fff;
          color: #999;
          font-family: arial;
          font-size: 14px;
          padding: 0;
          text-align: center;
          width: 40px;
        }
        a {
          display: block;
          background: #f6f6f6;
          color: #333;
          font-family: simsun;
          font-size: 16px;
          overflow: hidden;
          width: 26px;
          height: 26px;
          text-align: center;
          line-height: 26px;
        }

        a:hover {
          color: #dcbc82;
        }
      }
      .shopMsg {
        .img {
          border: 1px solid #ddd;
          border-radius: 5px;
          height: 68px;
          width: 68px;
          margin-right: 10px;
          img {
            width: 100%;
            display: block;
          }
        }
        .name {
          color: #333;
          text-align: left;
          height: 40px;
          width: 230px;
          font: 12px "微软雅黑", Verdana, SimHei, "Microsoft JhengHei", Tahoma;
        }
      }
      .total {
        color: #f33;
      }
    }
    .status {
      .settlment {
        border: 1px solid #eaebec;
        font-size: 14px;
        height: 70px;
        line-height: 70px;
        margin-top: 15px;
        position: relative;
        text-indent: 10px;
        width: 1020px;
        background: #fff;
        padding: 0 6px;
        box-sizing: border-box;
        .cart_lf {
        }
        .cart_rg {
          p {
            margin: 0;
            text-align: right;
            padding: 0;
          }
          .totalWrap {
            display: flex;
            flex-direction: column;
            // align-items: center;
            // justify-content: center;
            .shopNum {
              font-size: 16px;
              line-height: 20px;
              text-align: right;
              p {
                span {
                  color: #f33;
                  font-size: 14px;
                  font-weight: 700;
                }
              }
            }
            .discount {
              font-size: 12px;
              line-height: 20px;
              color: #999;
            }
          }
          .settlementBtn {
            margin-left: 30px;
            background: linear-gradient(
              180deg,
              rgba(255, 51, 51, 1) 0,
              rgba(255, 102, 51, 1) 100%
            );
            border-radius: 6px;
            color: #fff;
            cursor: pointer;
            display: block;
            font-size: 20px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            text-indent: 0;
            top: 10px;
            width: 160px;
          }
        }
      }
    }
  }
}
</style>