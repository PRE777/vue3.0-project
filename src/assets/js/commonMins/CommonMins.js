export default {
  data() {
    return { theme: "" };
  },
  computed: {
    themeClass() {
      // 必须用 vuex 获取theme（必须用vuex去构造themeClass），如果用theme不会执行监听，未找到原因
      let _theme = this.$store.getters["projectTheme/getProjectTheme"];
      return `theme-${_theme}`;
    },
  },
  watch: {
    theme(nV, oV) {
      this.$store.dispatch("projectTheme/updateProjectTheme", nV);
    },
  },
  created() {
    // console.log("mixin created");
    this.theme = this.$store.getters["projectTheme/getProjectTheme"];
  },
  mounted() {
    console.log("mixin mounted");
  },
  methods: {},
};
