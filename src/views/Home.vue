<template>
  <div class="app-container">
    <span @mouseenter="mouseEnter" @mouseleave="mouseLeave">阿打算的发生大似懂非懂的发生的发生大发撒大声地</span>
    <br />
    <img alt="Vue logo" height="700" src="../assets/lion.jpeg" />
    <div class="bg"></div>
    <select v-model="theme">
      <option value="default">default</option>
      <option value="night">night</option>
    </select>
    <!-- <transition name="slide-fade">
      <product-menu v-if="productMenuShow" />
    </transition> -->
  </div>
</template>

<script>
import navigationComponent from "../components/nav/navigation.vue";
// import productMenu from "../components/nav/productMenu.vue";

export default {
  components: {
    navigationComponent,
    // productMenu,
  },
  data() {
    return {
      // productMenuShow: true,
    };
  },
  created() {},
  mounted() {},
  methods: {
    mouseEnter() {
      console.log("mouseEnter");
      this.productMenuShow = true;
    },
    mouseLeave() {
      console.log("mouseLeave");
      this.productMenuShow = false;
    },
  },

  computed: {},
};
</script>
<style lang="scss" scoped>
.app-container {
  width: 100%;
  height: 100%;
  // overflow-x: hidden;
  // overflow-y: scroll;
  overflow: scroll;
  position: relative;
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
