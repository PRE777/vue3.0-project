// 可用资源包

<template>
  <div class="bundle-container">
    <div class="title">
      <span> 可用资源包 </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "resourceBundle",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.bundle-container {
  display: flex;
  width: 100%;
  height: 130px;
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
}
</style>
