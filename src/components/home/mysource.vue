// 我的资源
<template>
  <div class="mysource-container">
    <div class="title">
      <span>{{ title }}</span>
    </div>
    <div class="mysource-content" @click="sourceItemClicked">
      <div
        class="mysource-content-elem"
        v-for="(item, index) in sources"
        :key="index"
        :data-index="index"
      >
        <span class="mysource-content-elem-span1" :data-index="index">{{
          item.value
        }}</span>
        <span class="mysource-content-elem-span2" :data-index="index">{{
          item.name
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mysource",
  data() {
    return {
      title: "我的资源",
      sources: [
        {
          value: "2000G",
          name: "资源总量",
          path: "",
        },
        {
          value: "20",
          name: "数据库",
          path: "",
        },
        {
          value: "12",
          name: "发布服务",
          path: "",
        },
        {
          value: "1230",
          name: "网络模型",
          path: "",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    sourceItemClicked(e) {
      const index = e.target.dataset.index * 1;
      const path = this.sources[index].path;
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
  height: 210px;
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
    @include themify($themes) {
      color: themed("home-title-color");
    }
  }
  .mysource-content {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    padding: 6px 6px 6px 16px;
    box-sizing: border-box;
    flex-wrap: wrap;
    &-elem {
      --right: 13px;
      --space: 10px;
      margin-right: var(--space);
      display: flex;
      justify-content: center;
      flex-direction: column;
      // width: 210px;
      height: 120px;
      cursor: pointer;
      width: calc((100% - var(--space) * 3 - var(--right)) / 4);
      @include themify($themes) {
        background: themed("home-elem-bg");
      }
      &-span1 {
        font-size: 20px;
        font-family: SourceHanSansSC-Normal;
        @include themify($themes) {
          color: themed("home-ele-font-color");
        }
      }
      &-span2 {
        font-size: 14px;
        font-family: SourceHanSansSC-Normal;
      }
    }
  }
}
</style>
