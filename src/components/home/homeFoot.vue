<template>
  <div class="foot-container">
    <div class="developTool">
      <div class="title"><span>开发者工具</span></div>
      <div class="developTool-content" @click="devToolClicked">
        <span
          v-for="(item, index) in devTools"
          :key="index"
          :data-index="index"
          >{{ item.name }}</span
        >
      </div>
    </div>
    <div class="recommend">
      <div class="title"><span>推荐</span></div>
      <div class="recommend-content" @click="recommendClicked">
        <span
          style="width: 100%"
          v-for="(item, index) in recommends"
          :key="index"
          :data-index="index"
          >{{ item.name }}</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      devTools: [
        {
          name: "网络计算机API列表",
          path: "",
        },
        {
          name: "工单提交",
          path: "",
        },
        {
          name: "网络计算机SDK下载",
          path: "",
        },
        {
          name: "资源使用分析",
          path: "",
        },
        {
          name: "SDK使用帮助",
          path: "",
        },
      ],
      recommends: [
        {
          name: "网络图发布服务",
          path: "",
        },
        {
          name: "网络数据建模",
          path: "",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    devToolClicked(e) {
      const index = e.target.dataset.index * 1;
      const path = this.devTools[index].path;
      this.$router.push({ path });
    },
    recommendClicked(e) {
      const index = e.target.dataset.index * 1;
      const path = this.recommends[index].path;
      this.$router.push({ path });
    },
  },
};
</script>
<style lang="scss" scoped>
.foot-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 150px;
  padding: 5px;
  box-sizing: border-box;
  background: transparent;
  font-size: 13px;
  font-family: SourceHanSansSC-Normal;
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
    font-size: 15px;
  }
  span {
    text-align: left;
    float: left;
    width: 50%;
    cursor: pointer;
  }
  .developTool {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    margin-right: 5px;
    @include themify($themes) {
      box-shadow: 0 2px 4px 0 themed("nav-shadow-color");
      background-color: themed("background");
    }
    &-content {
      width: 100%;
      height: 100%;
      padding: 5px 10px 5px 16px;
      box-sizing: border-box;
      margin: auto;
    }
  }

  .recommend {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    margin-left: 5px;
    @include themify($themes) {
      box-shadow: 0 2px 4px 0 themed("nav-shadow-color");
      background-color: themed("background");
    }
    &-content {
      width: 100%;
      height: 100%;
      padding: 5px 10px 5px 16px;
      box-sizing: border-box;
      margin: auto;
    }
  }
}
</style>
