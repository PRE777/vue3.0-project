// 日志
<template>
  <div class="log-container">
    <div class="title">
      <span> 日志 </span>
      <span class="more" @click="moreClicked">···</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    // 展示更多
    moreClicked() {},
  },
};
</script>
<style lang="scss" scoped>
.log-container {
  display: flex;
  width: 100%;
  height: 343px;
  //   margin-bottom: 16px;
  @include themify($themes) {
    box-shadow: 0 2px 4px 0 themed("nav-shadow-color");
    background-color: themed("background");
  }
  .title {
    width: 100%;
    height: 40px;
    text-align: left;
    line-height: 25px;
    padding: 10px 16px 5px 16px;
    box-sizing: border-box;
    font-family: SourceHanSansSC-Medium;
    letter-spacing: 0;
    position: relative;
    @include themify($themes) {
      color: themed("home-title-color");
    }
    .more {
      position: absolute;
      text-align: center;
      width: 50px;
      height: 40px;
      line-height: 40px;
      right: 20px;
      top: 0px;
      font-size: 30px;
      cursor: pointer;
      letter-spacing: -5px;
      @include themify($themes) {
        color: themed("home-more-color");
      }
    }
  }
}
</style>
