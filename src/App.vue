<template>
  <div id="app" :class="themeClass">
    <el-container>
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
  </div>
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
          console.log(12333);
          this.prodDiv = document.getElementById("product-menu");
          this.prodBtn = document.getElementById("product");
          this.prodDiv.style.left = `${this.prodBtn.offsetLeft}px`;
          // this.prodDiv.style.top = `${this.prodBtn.offsetHeight}px`;
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
  margin: 0 auto;
}
#app {
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: SourceHanSansSC-Normal;
  text-align: center;
  margin: 0px;
  width: 100%;
  height: 100%;
  min-width: $minWidth;
}
.el-container {
  @include themify($themes) {
    background-color: themed("foil-bg");
    color: themed("font-color");
  }
}
.el-header {
  padding: 0;
  height: 60px;
}
.el-main {
  display: flex;
  justify-content: center;
  padding: 0px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}
</style>
