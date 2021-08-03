// 日志
<template>
  <div class="log-container">
    <div class="title">
      <span> 日志 </span>
      <span class="more" @click="moreClicked">···</span>
    </div>
    <div class="log-content">
      <ul>
        <li v-for="(item, index) in logs" :key="index">
          <span class="span1">{{ item.time }}</span>
          <span class="span2">{{ item.message }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logs: [
        {
          time: "1-1",
          message: "创建索引库XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        },
        { time: "2-3", message: "上传文件XXXXXX" },
        { time: "3-3", message: "数据索引库XXXXXX创建成功" },
        { time: "4-5", message: "创建索引库XXXXXX" },
        { time: "5-6", message: "创建索引库XXXXXX" },
        { time: "6-7", message: "创建索引库XXXXXX" },
        { time: "6-8", message: "创建索引库XXXXXX" },
        { time: "7-10", message: "创建索引库XXXXXX" },
        { time: "8-11", message: "创建索引库XXXXXX" },
        { time: "9-12", message: "创建索引库XXXXXX" },
        { time: "10-14", message: "创建索引库XXXXXX" },
        { time: "11-20", message: "创建索引库XXXXXX" },
        { time: "12-28", message: "创建索引库XXXXXX" },
        { time: "12-30", message: "创建索引库XXXXXX" },
        { time: "12-30", message: "创建索引库XXXXXX" },
        { time: "12-30", message: "创建索引库XXXXXX" },
        { time: "12-30", message: "创建索引库XXXXXX" },
        { time: "12-30", message: "创建索引库XXXXXX" },
        { time: "12-30", message: "创建索引库XXXXXX" },
      ],
    };
  },
  mounted() {},
  methods: {
    // 展示更多
    moreClicked() {},
  },
};
</script>
<style lang="scss" scoped>
.log-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 343px;
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
    position: relative;
    @include themify($themes) {
      color: themed("home-title-color");
    }
    .more {
      position: absolute;
      text-align: center;
      width: 30px;
      height: 40px;
      line-height: 40px;
      right: 15px;
      top: 0px;
      font-size: 25px;
      cursor: pointer;
      letter-spacing: -5px;
      @include themify($themes) {
        color: themed("home-more-color");
      }
    }
  }
  .log-content {
    width: 100%;
    height: 100%;
    padding: 5px 5px 10px 10px;
    box-sizing: border-box;
    font-size: 14px;
    overflow: hidden;
    ul {
      display: flex;
      flex-direction: column;
      margin-block-start: 5px;
      padding-inline-start: 10px;
      box-sizing: border-box;
      overflow: auto;
      height: 100%;
    }
    li {
      width: 100%;
      height: 25px;
      list-style: none;
      text-align: left;
      .span1 {
        float: left;
        width: 30%;
        height: 100%;
      }
      .span2 {
        float: left;
        width: 70%;
        height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
