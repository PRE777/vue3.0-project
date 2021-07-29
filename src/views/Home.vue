<template>
  <div class="app-container">
    <!-- <span >阿打算的发生大似懂非懂的发生的发生大发撒大声地</span>
    <br />
    <img alt="Vue logo" height="700" src="../assets/lion.jpeg" />
    <div class="bg"></div>
    <select v-model="theme">
      <option value="default">default</option>
      <option value="night">night</option>
    </select> -->
    <div class="main-container"></div>
    <div class="right-container"></div>
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
  methods: {},

  computed: {},
};
</script>
<style lang="scss" scoped>
.app-container {
  display: flex;
  width: 100%;
  max-width: $maxWidth;
  height: 100%;
  overflow-y: scroll;
  position: relative;
}
.main-container {
  display: flex;
  width: 100%;
  // height: 100%;
  background-color: red;
}
.right-container {
  display: flex;
  width: 200px;
  background-color: rosybrown;
}
.bg {
  width: 300px;
  height: 500px;
  background-image: url("../assets/lion.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  // background-attachment: fixed;
}
</style>
