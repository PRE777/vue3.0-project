const path = require("path");
const webpack = require("webpack");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  publicPath: "./",
  assetsDir: "static", // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  outputDir: process.env.outputDir,
  indexPath: "index.html", //指定生成的index.html输出路径
  filenameHashing: true, // 构建后的文件是否启用哈希命名
  // 是否在save文件时lint代码, 需要先安装cli-plugin-eslint
  lintOnSave: false,
  // lintOnSave: process.env.NODE_ENV !== "production",
  //是否使用包含运行时编译器的 Vue 构建版本。设置true后你就可以在使用template
  runtimeCompiler: true, //ture: runtime-compiler  false: runtime-only
  productionSourceMap: process.env.NODE_ENV !== "production",
  devServer: {
    host: "localhost",
    port: 8095,
    proxy: {
      "/api": {
        target: "http://59.110.228.107:8020",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "", //这里理解成用'/api'代替target里面的地址,比如我要调用'http://40.00.100.100:3002/user/add'，直接写'/api/user/add'即可
        },
      },
    },
    https: false,
    disableHostCheck: true, // 处理host不识别问题
    open: true, //自动打开浏览器
    hotOnly: true, //是否热更新
    compress: true, // 是否开启gzip压缩
    // history模式下的url会请求到服务器端，但是服务器端并没有这一个资源文件，就会返回404，所以需要配置这一项
    historyApiFallback: {
      index: "/index.html", //与output的publicPath有关(HTMLplugin生成的html默认为index.html)
    },
    watchOptions: {
      // 监听模式选项
      // 不监听的文件或文件夹，支持正则匹配。默认为空
      ignored: /node_modules/,
      // 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高
      // 默认为300ms
      aggregateTimeout: 300,
      // 判断文件是否发生变化是不停的去询问系统指定文件有没有变化，默认每秒问 1000 次
      poll: 1000,
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "北斗伏羲";
      return args;
    });
    //  让webpack正确处理多行字符串
    config.output.sourcePrefix = " ";
    config.amd.toUrlUndefined = true;

    config.resolve.alias
      .set("@", path.resolve("src"))
      .set("assets", path.resolve("src/assets"))
      .set("components", path.resolve("src/components"))
      .set("js", path.resolve("src/assets/js"))
      .set("imgs", path.resolve("src/assets/imgs"))
      .set("https", path.resolve("src/https"))
      .set("static", path.resolve("src/static"));

    //   小图片压缩成 base64 格式
    //10kb以内的图片会被打包成内联元素
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap((options) => Object.assign(options, { limit: 1024 * 10 }));
  },
  //   configureWebpack: {
  //     output: {
  //       sourcePrefix: " ", // 让webpack正确处理多行字符串
  //     },
  //     amd: {
  //       toUrlUndefined: true,
  //     },
  //     resolve: {
  //       alias: {
  //         vue$: "vue/dist/vue.esm.js",
  //         "@": path.resolve("src"),
  //         components: path.resolve("src/components"),
  //         https: path.resolve("src/https"),
  //         js: path.resolve("src/assets/js"),
  //       },
  //       modules: ["./src/components", "node_modules"],
  //     },
  //   },

  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      config.mode = "production";
      //打包build的时候去掉console的调试信息
      config.optimization.minimizer = [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_console: true, // console
              drop_debugger: true,
              pure_funcs: ["console.log"], // 移除console
            },
          },
        }),
      ];
      //打包文件大小配置
      config["performance"] = {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000,
      };

      config.plugins.push(
        ...[
          // moment/locale 上下文里符合 /zh-cn|zh-hk|en/ 表达式的文件，因此也只会打包这几种本地化内容
          new webpack.ContextReplacementPlugin(
            /moment[/\\]locale$/,
            /zh-cn|zh-hk|en/
          ),
        ]
      );
    } else {
      // config.resolve.alias
    }
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
    extract: true,
    sourceMap: true, // 开启 CSS source maps 否则浏览器中无法查看样式归属
    // css预设器配置项
    loaderOptions: {
      // 给 sass-loader 传递选项
      scss: {
        // sass-loader版本V8以上
        prependData: '@import "~@/assets/css/scss/theme/themeMixin.scss";',
        // sass-loader版本V8以下
        // additionalData: '@import "~@/assets/css/scss/common.scss";'
      },
    },
  },
  // 第三方插件配置
  pluginOptions: {},
};
