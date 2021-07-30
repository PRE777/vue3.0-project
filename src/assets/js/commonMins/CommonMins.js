import { mapState } from "vuex";
export default {
  data() {
    return { theme: this.$store.getters["projectTheme/getProjectTheme"] };
  },
  computed: {
    // themeClass() {
    //   // 必须用 vuex 获取theme（必须用vuex去构造themeClass），如果用theme不会执行监听，未找到原因
    //   let _theme = this.$store.getters["projectTheme/getProjectTheme"];
    //   return `theme-${_theme}`;
    // },
    ...mapState("projectTheme", {
      themeClass: (state) => {
        let _theme = state.theme;
        return `theme-${_theme}`;
      },
    }),
  },
  watch: {
    theme(nV, oV) {
      this.$store.dispatch("projectTheme/updateProjectTheme", nV);
    },
  },
  created() {
    // debugger;
    // window.scrollTo(0, 0);
  },
  mounted() {
    console.log("mixin mounted");
  },
  methods: {},
};
