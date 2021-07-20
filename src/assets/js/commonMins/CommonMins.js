export default {
  data() {
    return {
      theme: "default",
    };
  },
  computed: {
    themeClass() {
      this.$store.dispatch("projectTheme/updateProjectTheme", this.theme);
      return `theme-${this.theme}`;
    },
  },
  created() {
    this.theme = this.$store.getters["projectTheme/getProjectTheme"];
    debugger;
  },
  methods: {},
};
