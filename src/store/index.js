import { createStore } from "vuex";

// 页面主题状态
const projectTheme = {
  namespaced: true, // 避免存在相同属性

  state: {
    theme: "night", // 默认主题是 default,night
  },
  getters: {
    getProjectTheme(state) {
      return state.theme;
    },
  },
  //尽量不要外部调用
  mutations: {
    updateProjectTheme(state, newTheme) {
      state.theme = newTheme;
    },
  },
  // 外部赋值使用
  actions: {
    updateProjectTheme(context, newTheme) {
      context.commit("updateProjectTheme", newTheme);
    },
  },
};

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    projectTheme,
  },
});

/**
 * 用法
 * this.$store.getters['projectTheme/getProjectTheme'] // 取值
 * this.$store.dispatch('projectTheme/updateProjectTheme','default');// 赋值
 */
