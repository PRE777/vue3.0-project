<template>
  <div class="nav">
    <!-- <div class="app-navigation">
      <div class="el-col-logo">
        <img
          src="@/assets/imgs/common/logo.svg"
          alt="logo"
          style="cursor: pointer;"
          @click="logoClicked"
        />
      </div>
    </div> -->

    <el-row type="flex" class="app-navigation" justify="start">
      <el-col :span="4" class="el-col-logo">
        <img
          src="@/assets/imgs/common/logo.svg"
          alt="logo"
          style="cursor: pointer"
          @click="logoClicked"
        />
      </el-col>
      <el-col :span="2" class="el-col-product">
        <span class="arrow">产品大全&nbsp; </span>
      </el-col>
      <el-col :span="18">
        <select v-model="theme" @change="selectChange">
          <option value="default">default</option>
          <option value="night">night</option>
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
  },
};
</script>
<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 60px;
  display: flex;
}
.app-navigation {
  width: 100%;
  height: 100%;
  margin: auto;
  @include themify($themes) {
    background: themed("background");
    color: themed("nav-font-color");
    font-size: themed("nav-font-size");
    box-shadow: 0 2px 4px 0 themed("nav-shadow-color");
  }
  .el-col {
    display: flex;
    align-items: center;
    &-logo {
      width: 100%;
      padding-left: 20px;
    }
    &-product {
      position: relative;
      justify-content: center;
      cursor: pointer;
    }
    .arrow::after {
      position: absolute;
      top: 25px;
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
}
</style>
