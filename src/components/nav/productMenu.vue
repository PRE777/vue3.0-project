<template>
  <div id="product-menu" class="prod-menu">
    <p>
      ad防守打法的阿斯顿发生 萨达是多少第三方
      撒的发生的发生的发生大发士大夫撒地方撒打发斯蒂芬估计快了就颇为数据库拉打扫房间阿萨德；了杀了副科级拉萨的房间里；拉水电费爱豆世纪理发师开发商都看看SDK快递费股份偶问问；’阿道夫；辣豆腐回哪里；砥节奉公金坷垃法规及钢结构卡拉建范的；离开家就；‘阿拉斯加就；’
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  destroyed() {
    console.log(111111111111);
    // document.onmouseout = null;
  },
};
</script>

<style lang="scss" scoped>
$contain-height: 200px;
$contain-width: 500px;
$contain-left: 160px;
.prod-menu {
  display: flex;
  @include themify($themes) {
    background: themed("background");
    color: themed("font-color");
    border: solid 1px themed("shadow-color");
  }
  width: $contain-width;
  height: $contain-height;
  position: absolute;
  top: 0;
  left: $contain-left;
  animation: slideUpDown 0.5s 1;
}
@keyframes slideUpDown {
  0% {
    top: -$contain-height;
  }
  100% {
    top: 0;
  }
}
</style>
