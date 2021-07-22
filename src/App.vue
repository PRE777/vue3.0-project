<template>
  <div id="app" :class="themeClass">
    <!-- <navigation-component /> -->
    <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
    <router-view />
  </div>
</template>

<script>
// import navigationComponent from "./components/nav/navigation.vue";
export default {
  components: {
    // navigationComponent,
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
  background: rgba(136, 255, 0, 0.774);
  position: relative;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // height: 100%;
  // min-width: 1200px;
  // min-height: 600px;
  // margin: 0px;
  // position: relative;
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
