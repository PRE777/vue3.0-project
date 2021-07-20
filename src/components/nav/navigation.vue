<template>
  <el-row type="flex" class="app-navigation" :class="themeClass">
    <el-col
      :span="6"
      style="display: flex; align-items: center; padding-left: 20px"
    >
      <img class="logo" src="../../../public/logo.png" alt="logo" />北斗伏羲
    </el-col>
    <el-col :span="4"> </el-col>
    <el-col :span="14"> </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.app-navigation {
  width: 100%;
  height: 64px;
  background: rgb(71, 136, 136);
  margin: auto;

  .logo {
    width: 24px;
    height: 28px;
  }
}
</style>
