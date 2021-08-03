<template>
  <div class="app-container">
    <div class="main-container">
      <funcnav-component />
      <mysource-component />
      <visual-component />
      <homefoot-component />
    </div>
    <div class="right-container">
      <!-- <el-button @click="buttonClicked"> testPush</el-button> -->
      <user-info-component />
      <cost-overview-component />
      <resource-bundle-component />
      <unavailable-remind-component />
      <log-component />
    </div>
  </div>
</template>

<script>
import navigationComponent from "../components/nav/navigation.vue";
import funcnavComponent from "../components/home/funcnav.vue";
import mysourceComponent from "../components/home/mysource.vue";
import visualComponent from "../components/home/visualInstance.vue";
import homefootComponent from "../components/home/homeFoot.vue";
import userInfoComponent from "../components/home/userInfo.vue";
import costOverviewComponent from "../components/home/costOverview.vue";
import resourceBundleComponent from "../components/home/resourceBundle.vue";
import unavailableRemindComponent from "../components/home/unavailableRemind.vue";
import logComponent from "../components/home/log.vue";
export default {
  name: "home",
  components: {
    navigationComponent,
    funcnavComponent,
    mysourceComponent,
    visualComponent,
    homefootComponent,
    userInfoComponent,
    costOverviewComponent,
    resourceBundleComponent,
    unavailableRemindComponent,
    logComponent,
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
  padding: 5px 15px 25px 25px;
  // height: 100%;
  // overflow-y: scroll;
  position: relative;
  overflow: hidden;
}
.app-container::after {
  height: 0;
  clear: both;
  display: block;
  visibility: hidden;
}
.main-container {
  display: flex;
  flex-direction: column;
  float: left;
  width: 100%;
  padding-right: 5px;
  box-sizing: border-box;
  // height: 1200px;
  // background-color: red;
}
.right-container {
  display: flex;
  flex-direction: column;
  float: left;
  min-width: 370px;
  max-width: 370px;
  height: 100%;
  padding: 0 5px;
  // background-color: rosybrown;
  box-sizing: border-box;
}

@media screen and (min-width: 1800px) {
  .main-container {
    max-width: 1390px;
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
