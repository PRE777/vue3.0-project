// 用户信息
<template>
  <div class="user-container">
    <div class="icon-content">
      <!-- src="../../assets/imgs/home/userIcon.svg" -->
      <img
        src="../../assets/imgs/home/userIcon.svg"
        width="61"
        height="61"
        alt="user icon"
      />
    </div>
    <div class="user-info">
      <span class="nickname">张三李四王二麻子</span>
      <div style="display: flex; align-items: center">
        <span>账户ID：&nbsp;&nbsp;</span>
        <span class="userId">{{ id }}</span>
      </div>
      <div style="display: flex; align-items: center">
        <span>实名认证 &nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span :class="realnameClass">{{
          isRealName ? "已实名" : "未实名认证"
        }}</span>
        <!-- &nbsp;&nbsp;&nbsp; -->
        <pre style="margin: 0">&#9;</pre>
        <input
          class="input-btn"
          type="button"
          :value="isRealName ? '查看' : '去认证'"
          @click="buttonClicked"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userInfo",
  data() {
    return {
      id: "122334455",
      isRealName: false, // 是否实名认证
      realnameClass: "unRealname", //
    };
  },
  watch: {
    isRealName(newV) {
      if (newV) {
        // 已实名
        this.realnameClass = "realname";
      } else {
        this.realnameClass = "unRealname";
      }
    },
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.isRealName = true;
    }, 2000);
  },
  methods: {
    // 查看  or 去认证
    buttonClicked() {
      if (this.isRealName) {
        //  查看
      } else {
        // 去实名认证
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.user-container {
  display: flex;
  width: 100%;
  height: 110px;
  margin-bottom: 16px;
  @include themify($themes) {
    box-shadow: 0 2px 4px 0 themed("nav-shadow-color");
    background-color: themed("background");
  }
  .icon-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100%;
    img {
      border-radius: 61px;
    }
  }
  .user-info {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    height: 100%;
    // background-color: cadetblue;
    padding: 21px 5px 21px 5px;
    box-sizing: border-box;
    font-size: 13px;
    @include themify($themes) {
      color: themed("home-user-info-default-color");
    }
    .nickname {
      font-size: 14px;
      @include themify($themes) {
        color: themed("home-user-info-nickname-color");
      }
    }
    .userId {
      @include themify($themes) {
        color: themed("home-user-info-userId-color");
      }
    }
    .realname {
      @include themify($themes) {
        color: themed("home-user-info-real-name-color");
      }
    }
    .unRealname {
      @include themify($themes) {
        color: themed("home-user-info-unreal-name-color");
      }
    }
    .input-btn {
      //   width: 40px;
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
    .input-btn:hover {
      @include themify($themes) {
        background-color: themed("home-user-info-button-hover-background");
        color: themed("home-user-info-button-color");
      }
    }
  }
}
</style>
