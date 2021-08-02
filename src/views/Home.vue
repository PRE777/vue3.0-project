<template>
  <div class="app-container">
    <div class="main-container">
      <funcnav-component />
      <mysource-component />
      <visual-component />
      <homefoot-component />
    </div>
    <div class="right-container">
      right
      <el-button @click="buttonClicked"> testPush</el-button>
    </div>
  </div>
</template>

<script>
import navigationComponent from "../components/nav/navigation.vue";
import funcnavComponent from "../components/home/funcnav.vue";
import mysourceComponent from "../components/home/mysource.vue";
import visualComponent from "../components/home/visualInstance.vue";
import homefootComponent from "../components/home/homeFoot.vue";
export default {
  name: "home",
  components: {
    navigationComponent,
    funcnavComponent,
    mysourceComponent,
    visualComponent,
    homefootComponent,
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
  flex-direction: column;
  float: left;
  width: 100%;
  padding: 5px 5px 25px 25px;
  box-sizing: border-box;
  // height: 1200px;
  // background-color: red;
}
.right-container {
  // display: flex;
  float: left;
  min-width: 370px;
  height: 100%;
  padding: 5px;
  background-color: rosybrown;
  box-sizing: border-box;
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
</style>
