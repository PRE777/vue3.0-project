<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <img alt="Vue logo" src="../assets/lion.jpeg" />
    <div class="bg">123</div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss" scoped>
.bg {
  width: 150px;
  height: 150px;
  background: url("../assets/lion.jpeg");
}
</style>
