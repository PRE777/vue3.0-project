<template>
  <el-container>
    <el-header><navigation-component /></el-header>
    <el-main>
      <div class="app-container">
        <span>阿打算的发生大似懂非懂的发生的发生大发撒大声地</span>
        <br />
        <select v-model="theme">
          <option value="default">default</option>
          <option value="night">night</option>
        </select>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import navigationComponent from "../components/nav/navigation.vue";
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  components: {
    navigationComponent,
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
.el-header {
  padding: 0;
}
.app-container {
  height: 400px;
  @include themify($themes) {
    background: themed("background");
    color: themed("font-color");
  }
  // overflow: scroll;
}
.bg {
  width: 300px;
  height: 200px;
  background: url("../assets/lion.jpeg");
}
</style>
