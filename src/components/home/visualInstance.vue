// 可视化实例

<template>
  <div class="mysource-container" v-if="visualInstances.length != 0">
    <div class="title">
      <span>{{ title }}</span>
      <span class="more" @click="moreClicked">···</span>
    </div>
    <div class="visual-content" @click="visualInstanceClicked">
      <div
        class="visual-content-elem"
        v-for="(item, index) in visualInstances"
        :key="index"
        :data-index="index"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "visualInstance",
  data() {
    return {
      title: "可视化实例",
      visualInstances: [
        {
          name: "可视化图表-1",
          path: "",
        },
        {
          name: "可视化图表-2",
          path: "",
        },
        {
          name: "可视化图表-3",
          path: "",
        },
        {
          name: "可视化图表-4",
          path: "",
        },
        {
          name: "可视化图表-5",
          path: "",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    // 更多
    moreClicked() {},
    // 可视化视图点击
    visualInstanceClicked(e) {
      const index = e.target.dataset.index * 1;
      const path = this.visualInstances[index].path;
      this.$router.push({ path });
    },
  },
};
</script>
<style lang="scss" scoped>
.mysource-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 350px;
  margin-bottom: 16px;
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
      width: 30px;
      height: 40px;
      line-height: 40px;
      right: 20px;
      top: 0px;
      font-size: 25px;
      letter-spacing: -5px;
      cursor: pointer;
      @include themify($themes) {
        color: themed("home-more-color");
      }
    }
  }
  .visual-content {
    display: flex;
    justify-content: left;
    width: 100%;
    height: 100%;
    padding: 6px 6px 34px 16px;
    box-sizing: border-box;
    flex-wrap: wrap;
    &-elem {
      --right: 13px;
      display: flex;
      float: left;
      align-items: center;
      justify-content: center;
      padding-left: 5px;
      box-sizing: border-box;
      margin: 0px var(--right) 15px 0px;
      height: 120px;
      font-size: 14px;
      width: calc((100% - var(--right) * 4) / 4);
      @include themify($themes) {
        background: themed("home-elem-bg");
      }
      cursor: pointer;
    }
  }
}
</style>
