<template>
  <div class="about" :class="themeClass">
    <div class="app-Container">
      <h1>This is an about page</h1>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.app-Container {
  width: 100%;
  height: 300px;
  @include themify($themes) {
    background: themed("background");
    color: themed("font-color");
  }
}
</style>
