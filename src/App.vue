<template>
  <el-container id="app" :class="themeClass">
    <el-header>
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
      let div = null;
      if (val) {
        this.productMenuShow = val;
      } else {
        // this.$nextTick(() => {
        div = document.getElementById("product-menu");
        if (div == null) {
          this.productMenuShow = false;
          return;
        }
        debugger;
        document.onmouseout = (event) => {
          let x = event.clientX;
          let y = event.clientY;
          let divx1 = div.offsetLeft;
          let divy1 = div.offsetParent.offsetTop;
          let divW = div.offsetWidth;
          let divH = div.offsetHeight;

          let newX = x - divx1;
          let newY = y - divy1;
          if (newX <= divW && 0 < newX && newY <= divH && 0 < newY) {
            // 此时在div中 不做处理
          } else {
            // 不在div中，隐藏div
            this.productMenuShow = false;
            document.onmouseout = null;
          }

          // let divx1 = div.offsetLeft;
          // let divy1 = div.screenY;
          // let divx2 = div.offsetLeft + div.offsetWidth;
          // let divy2 = div.screenY + div.offsetHeight;
          // if (x < divx1 || x > divx2 || y < divy1 || y > divy2) {
          //   // 不在div上。。
          //   this.productMenuShow = false;
          //   document.onmouseout = null;
          // }
        };
        // document.onmouseout = (event) => {
        //   let x = event.clientX;
        //   let y = event.clientY;
        //   let divx1 = div.offsetLeft;
        //   let divy1 = div.screenY;
        //   let divx2 = div.offsetLeft + div.offsetWidth;
        //   let divy2 = div.screenY + div.offsetHeight;
        //   if (x < divx1 || x > divx2 || y < divy1 || y > divy2) {
        //     // 不在div上。。
        //     this.productMenuShow = false;
        //     document.onmouseout = null;
        //   }
        // };
        // });
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
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  height: 100%;
  // min-width: 1200px;
  min-width: 920px;
  // min-height: 600px;
  position: relative;
}
.el-header {
  padding: 0;
  height: 60px;
  // @include themify($themes) {
  //   box-shadow: 0 2px 4px 0 themed("nav-shadow-color");
  // }
}
.el-main {
  padding: 5px;
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
