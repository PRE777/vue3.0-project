<template>
  <div class="cost-container">
    <div class="title">
      <span>费用概览</span>
    </div>
    <div class="middle-content">
      <div class="balance">
        <span>余额</span>
        <span class="amount">{{ amount }}</span>
        <input class="topup" type="button" value="充值" @click="topupClicked" />
      </div>
      <div class="renew">
        <span>待续费 </span>
        <span class="amount">{{ renew }}</span>
      </div>
    </div>
    <div class="invoice">
      <div class="invoice-content">
        <span>可开发票</span> <span>{{ invoice }}元</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 余额
      amount: 9999.0,
      // 待续费
      renew: 9999.0,
      // 可开发票
      invoice: 999999.99,
    };
  },
  mounted() {},
  methods: {
    // 充值
    topupClicked() {},
  },
};
</script>
<style lang="scss" scoped>
.cost-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 186px;
  margin-bottom: 16px;
  @include themify($themes) {
    box-shadow: 0 2px 4px 0 themed("nav-shadow-color");
    background-color: themed("background");
  }
  .title {
    width: 100%;
    height: 40px;
    text-align: left;
    line-height: 25px;
    padding: 10px 16px 5px 16px;
    box-sizing: border-box;
    font-family: SourceHanSansSC-Medium;
    letter-spacing: 0;
    @include themify($themes) {
      color: themed("home-title-color");
    }
  }
  .middle-content {
    display: flex;
    width: 100%;
    height: 45%;
    .balance,
    .renew {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      height: 100%;
      font-size: 14px;
      font-family: SourceHanSansSC-Normal;
      @include themify($themes) {
        color: themed("home-user-info-userId-color");
      }
      position: relative;
    }
    .topup {
      position: absolute;
      right: 25px;
      top: 12px;
      width: 40px;
      height: 20px;
      font-size: 12px;
      @include themify($themes) {
        background-color: themed("home-user-info-button-background");
        color: themed("home-user-info-button-color");
      }
      border-radius: 3px;
      border: none;
      cursor: pointer;
    }
    .topup:hover {
      @include themify($themes) {
        background-color: themed("home-user-info-button-hover-background");
        color: themed("home-user-info-button-color");
      }
    }

    span {
      height: 30px;
      letter-spacing: 0;
    }
    .amount {
      font-size: 15px;
      font-family: SourceHanSansSC-Medium;
      font-weight: 500;
      letter-spacing: 0;

      @include themify($themes) {
        color: themed("home-user-info-nickname-color");
      }
    }
  }
  .invoice {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 5px 20px;
    box-sizing: border-box;
    font-size: 14px;

    &-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      padding: 0 5px;
      @include themify($themes) {
        background-color: themed("home-elem-bg");
      }
    }
  }
}
</style>
