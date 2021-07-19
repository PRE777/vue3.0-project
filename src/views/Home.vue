<template>
  <div class="home" :class="themeClass">
    <div class="app-container">
      <p>试试手动多多多多多多多</p>
      <img alt="Vue logo" src="../assets/logo.png" />
      <img alt="Vue logo" src="../assets/lion.jpeg" />
      <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
      <div class="bg"></div>

      <select v-model="theme">
        <option value="default">default</option>
        <option value="night">night</option>
        <!-- <option value="blue">Blue</option> -->
      </select>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      theme: "default",
    };
  },
  components: {
    HelloWorld,
  },
  computed: {
    themeClass() {
      return `theme-${this.theme}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.app-container {
  @include themify($themes) {
    background: themed("background");
    color: themed("font-color"); 
  }
}
.bg {
  width: 150px;
  height: 150px;
  background: url("../assets/lion.jpeg");
}
</style>
