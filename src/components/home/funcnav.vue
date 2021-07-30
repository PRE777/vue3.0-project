// 功能导览
<template>
  <div class="funcnav-container">
    <div class="title"><span>功能导览</span></div>
    <div class="func-content">
      <!-- <div class="func-content-elem">123</div> -->

      <div
        class="func-content-elem"
        v-for="(item, index) in funcNavs"
        :key="index"
      >
        <img :src="item.icon" alt="icon" width="20" height="20" />
        {{ `&nbsp;${item.title}` }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      funcNavs: [
        {
          icon: require("../../assets/imgs/home/func-icon.svg"),
          title: "网格数据接入",
        },
        {
          icon: require("../../assets/imgs/home/func-icon.svg"),
          title: "网格构建工具",
        },
        {
          icon: require("../../assets/imgs/home/func-icon.svg"),
          title: "网格数据引擎",
        },
        {
          icon: require("../../assets/imgs/home/func-icon.svg"),
          title: "网格计算引擎",
        },
        {
          icon: require("../../assets/imgs/home/func-icon.svg"),
          title: "网格图发布服务",
        },
        {
          icon: require("../../assets/imgs/home/func-icon.svg"),
          title: "网格数据可视化",
        },
        {
          icon: require("../../assets/imgs/home/func-icon.svg"),
          title: "网格数据分发下载",
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.funcnav-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  //   height: 210px;
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
    @include themify($themes) {
      color: themed("home-title-color");
    }
  }
  .func-content {
    display: flex;
    justify-content: left;
    width: 100%;
    height: 100%;
    padding: 6px 16px;
    box-sizing: border-box;
    flex-wrap: wrap;
    column-count: 4;

    //  calc
    &-elem {
      --right: 13px;
      display: flex;
      float: left;
      align-items: center;
      padding-left: 5px;
      box-sizing: border-box;
      margin: 0px var(--right) 15px 0px;
      height: 50px;
      font-size: 15px;
      width: calc((100% - var(--right) * 4) / 4);
      @include themify($themes) {
        background: themed("home-elem-bg");
        color: themed("home-ele-font-color1");
      }
      cursor: pointer;
    }
  }
}
</style>
