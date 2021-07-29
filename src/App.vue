<template>
  <el-container id="app" :class="themeClass">
    <el-header class="el-header">
      <navigation-component
        v-on:productMenuToggle="productMenuToggle"
      ></navigation-component
    ></el-header>
    <el-main>
      <router-view />
      <transition name="slide-fade">
        <product-menu v-if="productMenuShow" />
      </transition>
    </el-main>
  </el-container>
</template>

<script>
import navigationComponent from "./components/nav/navigation.vue";
import productMenu from "./components/nav/productMenu.vue";
export default {
  prodBtn: null,
  prodDiv: null,
  components: {
    navigationComponent,
    productMenu,
  },
  data() {
    return {
      productMenuShow: false,
    };
  },
  computed: {},
  created() {
    console.log("app created");
  },
  mounted() {},
  methods: {
    productMenuToggle(val) {
      if (val) {
        this.productMenuShow = val;
        this.$nextTick(() => {
          this.prodDiv = document.getElementById("product-menu");
          this.prodBtn = document.getElementById("product");
          this.prodDiv.style.left = `${this.prodBtn.offsetLeft}px`;
        });
      } else {
        this.$nextTick(() => {
          if (this.prodDiv == null) {
            this.productMenuShow = false;
            return;
          }
          let event = window.event;
          let x = event.clientX;
          let y = event.clientY;
          // console.log(`x=${x},y=${y}`);
          let divx1 = this.prodDiv.offsetLeft;
          let divy1 = this.prodDiv.offsetParent.offsetTop;
          let divx2 = this.prodDiv.offsetLeft + this.prodDiv.offsetWidth;
          let divy2 =
            this.prodDiv.offsetParent.offsetTop - 4 + this.prodDiv.offsetHeight;
          let product = document.getElementById("product");
          let productWidth = product.offsetWidth;
          if (
            divx1 <= x &&
            x <= divx1 + productWidth &&
            0 < y &&
            divx1 <= x &&
            x <= divx2 &&
            divy1 <= y + 4 &&
            y <= divy2
          ) {
            this.prodDiv.onmouseleave = () => {
              let event = window.event;
              let x = event.clientX;
              let y = event.clientY;
              let productLeft = product.offsetLeft;
              let productHeight = product.offsetHeight;
              if (
                productLeft <= x &&
                x <= productLeft + productWidth &&
                0 <= y &&
                y <= productHeight + 4
              ) {
                // 在“产品大全”按钮内部
              } else {
                this.productMenuShow = false;
                this.prodDiv.onmouseleave = null;
              }
            };
          } else {
            this.productMenuShow = false;
          }
        });
      }
    },
  },
};
</script>

<style lang="scss">
@import url("./assets/css/animation.css");
html,
body {
  height: 100%;
  width: 100%;
  margin: 0px;
  position: relative;
  overflow: hidden;
  @include themify($themes) {
    background-color: themed("foil-bg");
  }
  // overflow-y: scroll;
  // overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  margin: 0px;
  height: 100%;
  // min-width: 1200px;
  min-width: 1200px;
  // min-height: 700px;
  position: relative;
}
.el-container {
  @include themify($themes) {
    background-color: themed("foil-bg");
  }
}
.el-header {
  padding: 0;
  height: 60px;
  @include themify($themes) {
    background-color: themed("foil-bg");
    box-shadow: 0 2px 4px 0 themed("nav-shadow-color");
  }
}
.el-main {
  display: flex;
  justify-content: center;
  padding: 5px;
  box-sizing: border-box;
  position: relative;
  @include themify($themes) {
    background: themed("foil-bg");
    color: themed("font-color");
  }
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #7c0b11;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
