<template>
  <div class="app-container">
    <div class="main-container">
      <div style="background: green; width: 100%; height: 1200px">left</div>
    </div>
    <div class="right-container">
      right
      <el-button @click="buttonClicked"> testPush</el-button>
    </div>
  </div>
</template>

<script>
import navigationComponent from "../components/nav/navigation.vue";

export default {
  components: {
    navigationComponent,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    buttonClicked() {
      this.$router.push("/testpage");
    },
  },

  computed: {},
};
</script>
<style lang="scss" scoped>
@import url("../assets/css/home.css");
.app-container {
  // display: flex;
  width: 100%;
  // height: 100%;
  // overflow-y: scroll;
  position: relative;
  overflow: hidden;
}
.main-container {
  display: flex;
  float: left;
  width: 100%;
  // height: 1200px;
  background-color: red;
}
.right-container {
  // display: flex;
  float: left;
  // width: 370px;
  min-width: 370px;
  height: 100%;
  background-color: rosybrown;
}
@media screen and (min-width: 1800px) {
  .main-container {
    max-width: 1430px;
  }
}

@media screen and (max-width: 1800px) {
  .main-container {
    width: calc(100% - 370px);
  }
}

@media screen and (max-width: 1366px) {
  .main-container {
    max-width: 996px;
  }
}
@media screen and (max-width: 996px) {
  .main-container {
    // width: 940px;
    min-width: 1366px;
  }
}
// @media (max-width: 1200px) {
//   .main-container {
//     max-width: 930px;
//   }
// }
// @media (max-width: 820px) {
//   .main-container {
//     max-width: 820px;
//   }
// }
// @media screen and (max-width: 1800px) {
//   .main-container {
//     min-width: 1020px;
//   }
// }
</style>
