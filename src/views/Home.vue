<template>
  <!-- <div class="home"> -->
  <div class="app-container">
    <span>阿打算的发生大似懂非懂的发生的发生大发撒大声地</span>
    <br />
    <img alt="Vue logo" height="700" src="../assets/lion.jpeg" />
    <div class="bg"></div>
    <select v-model="theme">
      <option value="default">default</option>
      <option value="night">night</option>
      <!-- <option value="blue">Blue</option> -->
    </select>
  </div>
  <!-- </div> -->
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
.app-container {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
.bg {
  width: 300px;
  height: 500px;
  background: url("../assets/lion.jpeg");
}
</style>
