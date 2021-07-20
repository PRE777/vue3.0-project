export default {
  data() {
    return {
      theme: "",
    };
  },
  computed: {
    themeClass() {
      debugger;
      this.$store.dispatch("projectTheme/updateProjectTheme", this.theme);
      return `theme-${this.theme}`;
    },
  },
  created() {
    this.theme = this.$store.getters["projectTheme/getProjectTheme"];
  },
  methods: {},
};
