<template>
  <el-container id="app" :class="themeClass">
    <el-header><navigation-component /></el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import navigationComponent from "./components/nav/navigation.vue";
export default {
  components: {
    navigationComponent,
  },
  data() {
    return {};
  },
  computed: {},
  created() {
    console.log("app created");
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
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
