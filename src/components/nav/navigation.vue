<template>
  <div class="app-navigation">
    <div class="logo">
      <img
        src="@/assets/imgs/common/logo.svg"
        alt="logo"
        @click="logoClicked"
      />
    </div>
    <div class="product">
      <span class="arrow" @mouseenter="mouseEnter" @mouseleave="mouseLeave"
        >产品大全&nbsp;
      </span>
    </div>
    <div class="nav user">
      <select v-model="theme" @change="selectChange">
        <option value="default">default</option>
        <option value="night">night</option>
      </select>
    </div>
    <transition name="slide-fade">
      <product-menu v-if="productMenuShow" />
    </transition>
  </div>
</template>
<script>
import productMenu from "./productMenu.vue";
export default {
  components: {
    productMenu,
  },
  data() {
    return {
      productMenuShow: false,
    };
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
      console.log("mouseEnter");
      // this.productMenuShow = true;
    },
    mouseLeave() {
      console.log("mouseLeave");
      // this.productMenuShow = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.app-navigation {
  display: flex;
  align-items: center;
  width: 100%;
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
  .arrow::after {
    position: absolute;
    top: 23px;
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


.slide-fade-enter-active {
  transition: all 0.5s ease-in;
  transform: translateY(0)
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-100%);
  // opacity: 0;
}
</style>
