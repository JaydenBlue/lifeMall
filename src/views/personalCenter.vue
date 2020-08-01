

<template>
  <div class="personalCenter">
    <h1>{{$t("personal.p2")}}</h1>
    <div class="main">
      <div class="userImg">
        <img src="https://p1.ssl.qhmsg.com/dm/100_100_100/t0105d6cf9b508f72c8.jpg" alt />
        <div class="nickName">设置昵称</div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "personalCenter",
};
</script>


<style lang="scss">
.personalCenter {
  .main {
    margin-top: 20px;
    .userImg {
      height: 180px;
      padding-right: 20px;
      position: relative;
      text-align: center;
      width: 280px;
      background: #f3efef94;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        height: 60px;
        margin: 10px auto;
        width: 60px;
        border-radius: 50%;
      }
      .nickName {
        font-size: 14px;
        margin-top: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: middle;
        white-space: nowrap;
        width: 95%;
        cursor: pointer;
      }
      .nickName:hover {
        color: #dcbc82;
      }
    }
  }
}
</style>