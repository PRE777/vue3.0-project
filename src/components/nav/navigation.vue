<template>
  <div id="app-navigation" class="app-navigation">
    <div class="logo">
      <img
        src="@/assets/imgs/common/logo.svg"
        alt="logo"
        @click="logoClicked"
      />
    </div>
    <div
      id="product"
      class="product"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
    >
      <!-- &nbsp; -->
      <span>产品大全 </span>
    </div>
    <div class="nav user">
      <select v-model="theme" @change="selectChange">
        <option value="default">default</option>
        <option value="night">night</option>
      </select>
    </div>
  </div>
</template>
<script>
import productMenu from "./productMenu.vue";
export default {
  components: {
    productMenu,
  },
  data() {
    return {};
  },
  created() {},

  mounted() {
    let a = this.themeClass;
    console.log("navigation mounted");
  },
  methods: {
    logoClicked() {
      debugger;
    },
    mouseEnter() {
      // console.log("mouseEnter");
      this.$emit("productMenuToggle", true);
    },
    mouseLeave() {
      // console.log("mouseLeave");
      this.$emit("productMenuToggle", false);
    },
  },
};
</script>
<style lang="scss" scoped>
.app-navigation {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: $maxWidth;
  height: 56px;
  margin: auto;
  @include themify($themes) {
    background: themed("background");
    color: themed("nav-font-color");
    font-size: themed("nav-font-size");
    box-shadow: 0 2px 4px 0 themed("nav-shadow-color");
  }
}
.nav {
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
}
.logo {
  @extend .nav;
  min-width: 130px;
  padding-left: 20px;
  cursor: pointer;
}
.product {
  @extend .nav;
  min-width: 100px;
  justify-content: center;
  cursor: pointer;
  font-size: 15px;
  span::after {
    position: absolute;
    top: 23px;
    right: 6px;
    width: 6px;
    height: 6px;
    @include themify($themes) {
      $font-color: themed("nav-font-color");
      border-right: 1px solid $font-color;
      border-bottom: 1px solid $font-color;
    }
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    content: "";
  }
}
.user {
  @extend .nav;
  width: 100%;
  justify-content: flex-end;
  padding-right: 20px;
}
</style>
