<template>
  <div class="nav">
    <el-row type="flex" class="app-navigation" justify="start">
      <el-col :span="4" class="logo">
        <img
          src="@/assets/imgs/common/logo.svg"
          alt="logo"
          style="cursor: pointer"
          @click="logoClicked"
        />
      </el-col>
      <el-col :span="4" class="el-col-class">
        <span>产品大全</span>
      </el-col>
      <el-col :span="16">
        <select v-model="theme" @change="selectChange">
          <option value="default">default</option>
          <option value="night">night</option>
          <!-- <option value="blue">Blue</option> -->
        </select>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
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
    // selectChange() {
    //   let a = this.theme;
    //   debugger;
    // },
  },
};
</script>
<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 60px;
}
.app-navigation {
  height: 100%;
  margin: auto;
  //   background: rgb(71, 136, 136);
  @include themify($themes) {
    background: themed("background");
    color: themed("font-color");
  }
  .logo {
    display: flex;
    align-items: center;
    width: 100%;
    padding-left: 20px;
  }
  .el-col-class {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
