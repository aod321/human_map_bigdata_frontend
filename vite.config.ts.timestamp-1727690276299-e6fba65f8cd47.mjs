// vite.config.ts
import { resolve } from "node:path";
import { defineConfig, loadEnv } from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/vite@5.4.8_@types+node@20.16.10_less@4.2.0_terser@5.30.3/node_modules/vite/dist/node/index.js";
import dayjs from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js";

// build/vite/plugins/index.ts
import vue from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.8_@types+node@20.16.10_less@4.2.0_terser@5.30.3__vue@3.5.10_typescript@5.6.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.4.8_@types+node@20.16.10_less@4.2.0_terser@5.30.3__vue@3.5.10_typescript@5.6.2_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import VitePluginCertificate from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/vite-plugin-mkcert@1.17.6_vite@5.4.8_@types+node@20.16.10_less@4.2.0_terser@5.30.3_/node_modules/vite-plugin-mkcert/dist/mkcert.mjs";
import Unocss from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/unocss@0.59.4_postcss@8.4.47_rollup@4.22.5_vite@5.4.8_@types+node@20.16.10_less@4.2.0_terser@5.30.3_/node_modules/unocss/dist/vite.mjs";
import legacy from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/@vitejs+plugin-legacy@5.4.2_terser@5.30.3_vite@5.4.8_@types+node@20.16.10_less@4.2.0_terser@5.30.3_/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import Inspect from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/vite-plugin-inspect@0.8.7_rollup@4.22.5_vite@5.4.8_@types+node@20.16.10_less@4.2.0_terser@5.30.3_/node_modules/vite-plugin-inspect/dist/index.mjs";
import VueDevTools from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/vite-plugin-vue-devtools@7.4.6_rollup@4.22.5_vite@5.4.8_@types+node@20.16.10_less@4.2.0_terse_i7373qg2asxcvd76tcxfzbusjq/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";

// build/vite/plugins/svgIcons.ts
import { createSvgIconsPlugin } from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.4.8_@types+node@20.16.10_less@4.2.0_terser@5.30.3_/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import path from "path";
var ConfigSvgIconsPlugin = (isBuild) => {
  return createSvgIconsPlugin({
    // 指定需要缓存的图标文件夹
    iconDirs: [path.resolve(process.cwd(), "src/assets/icons/svg")],
    // 指定symbolId格式
    symbolId: "icon-[dir]-[name]",
    svgoOptions: isBuild
  });
};

// build/vite/plugins/component.ts
import Components from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/unplugin-vue-components@0.26.0_@babel+parser@7.25.6_rollup@4.22.5_vue@3.5.10_typescript@5.6.2_/node_modules/unplugin-vue-components/dist/vite.js";
import { VantResolver } from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/unplugin-vue-components@0.26.0_@babel+parser@7.25.6_rollup@4.22.5_vue@3.5.10_typescript@5.6.2_/node_modules/unplugin-vue-components/dist/resolvers.js";
var AutoRegistryComponents = () => {
  return Components({
    dirs: ["src/components"],
    extensions: ["vue"],
    deep: true,
    dts: "types/components.d.ts",
    directoryAsNamespace: false,
    globalNamespaces: [],
    directives: true,
    importPathTransform: (v) => v,
    allowOverrides: false,
    include: [/\.vue$/, /\.vue\?vue/],
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    resolvers: [VantResolver()]
  });
};

// build/vite/plugins/autoImport.ts
import AutoImport from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/unplugin-auto-import@0.17.8_@vueuse+core@10.11.1_vue@3.5.10_typescript@5.6.2___rollup@4.22.5_webpack-sources@3.2.3/node_modules/unplugin-auto-import/dist/vite.js";
var AutoImportDeps = () => {
  return AutoImport({
    // 目标文件
    include: [
      /\.[tj]sx?$/,
      // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/,
      // .vue
      /\.md$/
      // .md
    ],
    imports: [
      "vue",
      "pinia",
      "vue-router",
      "@vueuse/core",
      {
        "@/utils/http/axios": ["defHttp", "driverHttp"],
        vant: ["showFailToast", "showDialog"],
        "@/utils/dateUtil": ["formatToDateTime", "formatToDate", "dateUtil"]
      }
    ],
    dts: "types/auto-imports.d.ts",
    // 解决eslint抛错
    eslintrc: {
      enabled: true,
      filepath: "types/eslintrc-auto-import.json",
      globalsPropValue: true
    }
  });
};

// build/vite/plugins/visualizer.ts
import { visualizer } from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/rollup-plugin-visualizer@5.12.0_rollup@4.22.5/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";

// build/constant.ts
var API_PREFIX = "/api";
var API_ENV = "-fat02";
var API_BASE_URL = `https://passengergateway${API_ENV}.wsecar.com:8601/`;
var API_DRIVER_URL = `https://drivergateway${API_ENV}.wsecar.com:8601/`;
var ANALYSIS = true;

// build/vite/plugins/visualizer.ts
function ConfigVisualizerConfig() {
  if (ANALYSIS) {
    return visualizer({
      filename: "./node_modules/.cache/visualizer/stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true
    });
  }
  return [];
}

// build/vite/plugins/compress.ts
import viteCompression from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@5.4.8_@types+node@20.16.10_less@4.2.0_terser@5.30.3_/node_modules/vite-plugin-compression/dist/index.mjs";
var ConfigCompressPlugin = (compress, deleteOriginFile = false) => {
  const compressList = compress.split(",");
  const plugins = [];
  if (compressList.includes("gzip")) {
    plugins.push(
      viteCompression({
        ext: ".gz",
        deleteOriginFile
        //删除源文件
      })
    );
  }
  if (compressList.includes("brotli")) {
    plugins.push(
      viteCompression({
        ext: ".br",
        algorithm: "brotliCompress",
        //压缩算法
        deleteOriginFile
      })
    );
  }
  return plugins;
};

// build/vite/plugins/progress.ts
import progress from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/vite-plugin-progress@0.0.7_vite@5.4.8_@types+node@20.16.10_less@4.2.0_terser@5.30.3_/node_modules/vite-plugin-progress/dist/index.mjs";
var ConfigProgressPlugin = () => {
  return progress();
};

// build/vite/plugins/imagemin.ts
import viteImagemin from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/vite-plugin-imagemin@0.6.1_vite@5.4.8_@types+node@20.16.10_less@4.2.0_terser@5.30.3_/node_modules/vite-plugin-imagemin/dist/index.mjs";
function ConfigImageminPlugin() {
  const plugin = viteImagemin({
    gifsicle: {
      optimizationLevel: 7,
      interlaced: false
    },
    mozjpeg: {
      quality: 20
    },
    optipng: {
      optimizationLevel: 7
    },
    pngquant: {
      quality: [0.8, 0.9],
      speed: 4
    },
    svgo: {
      plugins: [
        {
          name: "removeViewBox"
        },
        {
          name: "removeEmptyAttrs",
          active: false
        }
      ]
    }
  });
  return plugin;
}

// build/vite/plugins/autoImage.ts
import viteImages from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/vite-plugin-vue-images@0.6.1/node_modules/vite-plugin-vue-images/dist/index.cjs";
var AutoImportImages = () => {
  return viteImages({
    dirs: ["src/assets/images"],
    extensions: ["jpg", "jpeg", "png", "gif", "png"]
  });
};

// build/vite/plugins/html.ts
import { createHtmlPlugin } from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/vite-plugin-html@3.2.2_vite@5.4.8_@types+node@20.16.10_less@4.2.0_terser@5.30.3_/node_modules/vite-plugin-html/dist/index.mjs";
var copyright_common_style = "font-size: 14px; margin-bottom: 2px; padding: 6px 8px; color: #fff;";
var copyright_main_style = `${copyright_common_style} background: #e24329;`;
var copyright_sub_style = `${copyright_common_style} background: #707070;`;
function createHtml(env, isBuild) {
  const { VITE_GLOB_APP_TITLE, VITE_APP_DEBUG_TOOL } = env;
  const copyrightScript = `
<script>
  console.info('%cPowered by%c\u4E07\u987A\u53EB\u8F66', '${copyright_sub_style}', '${copyright_main_style}', '\u66F4\u65B0\u65F6\u95F4\uFF1A${(/* @__PURE__ */ new Date()).toLocaleString()}', '\\nhttps://www.wsecar.com/');
</script>
  `;
  let devtoolScript = "";
  switch (VITE_APP_DEBUG_TOOL) {
    case "eruda":
      devtoolScript = `
<script src="//unpkg.com/eruda/eruda.js"></script>
<script>
  eruda.init()
</script>
      `;
      break;
    case "vconsole":
      devtoolScript = `
<script src="//unpkg.com/vconsole/dist/vconsole.min.js"></script>
<script>
  new VConsole()
</script>
      `;
      break;
  }
  const loadingScript = `
<script>
(function(){
  if(!!window.ActiveXObject || "ActiveXObject" in window) {
    document.getElementById('browser-upgrade').style.display = 'block'
  } else {
    var Loading = document.querySelector('.loading')
    Loading.classList.add('animate')
    Loading.addEventListener('animationend', function() {
      setTimeout(function() {
        Loading.classList.remove('animate')
      }, 600)
      setTimeout(function() {
        Loading.classList.add('animate')
      }, 1000)
    })
  }
})()
</script>
  `;
  const html = createHtmlPlugin({
    inject: {
      data: {
        title: VITE_GLOB_APP_TITLE,
        copyrightScript,
        loadingScript,
        devtoolScript
      }
    },
    minify: isBuild
  });
  return html;
}

// build/vite/plugins/index.ts
function createVitePlugins(viteEnv, isBuild = false) {
  const {
    VITE_APP_INSPECT,
    VITE_LEGACY,
    VITE_USE_IMAGEMIN,
    VITE_BUILD_COMPRESS,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
  } = viteEnv;
  const vitePlugins = [
    // vue支持
    vue({
      script: {
        defineModel: true,
        // defineModel 这是一个语法糖
        propsDestructure: true
        // 解构 props
      }
    }),
    // JSX支持
    vueJsx(),
    Unocss(),
    // 调试工具
    Inspect({
      enabled: VITE_APP_INSPECT
    }),
    // 提供https证书
    VitePluginCertificate({
      source: "coding"
    }),
    // 图片自动导入
    AutoImportImages(),
    VueDevTools()
  ];
  VITE_LEGACY && isBuild && vitePlugins.push(legacy({ targets: ["defaults", "not IE 11"] }));
  vitePlugins.push(createHtml(viteEnv, isBuild));
  vitePlugins.push(AutoRegistryComponents());
  vitePlugins.push(AutoImportDeps());
  isBuild && vitePlugins.push(
    ConfigCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE)
  );
  vitePlugins.push(ConfigProgressPlugin());
  vitePlugins.push(ConfigSvgIconsPlugin(isBuild));
  vitePlugins.push(ConfigVisualizerConfig());
  VITE_USE_IMAGEMIN && vitePlugins.push(ConfigImageminPlugin());
  return vitePlugins;
}

// build/vite/proxy.ts
var init = {
  // test
  [API_PREFIX]: {
    target: API_BASE_URL,
    changeOrigin: true,
    rewrite: (path2) => path2.replace(new RegExp(`^${API_BASE_URL}`), "")
  }
};
var proxy_default = init;

// package.json
var package_default = {
  name: "vue3-mobile",
  type: "module",
  version: "0.0.1",
  private: true,
  packageManager: "pnpm@8.15.9",
  author: {
    name: "daiyu",
    email: "603607446@qq.com"
  },
  homepage: "",
  repository: "",
  engines: {
    node: ">=18"
  },
  scripts: {
    dev: "vite",
    "build:dev": "vue-tsc --noEmit && vite build --mode development",
    build: "vite build --mode production",
    typecheck: "npx vue-tsc --noEmit",
    preview: "npm run build && vite preview",
    "deps:fresh": "npx taze -w",
    "deps:fresh:major": "npx taze major -w",
    "deps:fresh:minor": "npx taze minor -w",
    "deps:fresh:patch": "npx taze patch -w",
    preinstall: "npx only-allow pnpm",
    eslint: "eslint --ext .js,.vue,.ts --ignore-path .eslintignore --fix src",
    prepare: "husky install",
    changelog: "conventional-changelog -p angular -i CHANGELOG.md -s -r 0"
  },
  dependencies: {
    "@amap/amap-jsapi-loader": "^1.0.1",
    "@amap/amap-jsapi-types": "^0.0.15",
    "@vueuse/core": "^10.11.1",
    "@vueuse/shared": "^10.11.1",
    "animate.css": "^4.1.1",
    axios: "^1.7.7",
    "better-scroll": "^2.5.1",
    "crypto-js": "^4.2.0",
    dayjs: "^1.11.13",
    echarts: "^5.5.1",
    "lodash-es": "^4.17.21",
    mitt: "^3.0.1",
    "normalize.css": "^8.0.1",
    nprogress: "^0.2.0",
    pinia: "^2.2.2",
    qs: "^6.13.0",
    swiper: "^11.1.14",
    vant: "4.8.11",
    vconsole: "^3.15.1",
    vue: "^3.5.10",
    "vue-router": "^4.4.5",
    xgplayer: "^3.0.20"
  },
  devDependencies: {
    "@antfu/eslint-config": "^2.27.3",
    "@commitlint/cli": "^19.5.0",
    "@commitlint/config-conventional": "^19.5.0",
    "@types/better-scroll": "^1.12.7",
    "@types/crypto-js": "^4.2.2",
    "@types/lodash-es": "^4.17.12",
    "@types/node": "^20.16.10",
    "@types/nprogress": "^0.2.3",
    "@types/qs": "^6.9.16",
    "@typescript-eslint/eslint-plugin": "^7.18.0",
    "@typescript-eslint/parser": "^7.18.0",
    "@unocss/eslint-config": "^0.59.4",
    "@unocss/eslint-plugin": "^0.59.4",
    "@vitejs/plugin-legacy": "^5.4.2",
    "@vitejs/plugin-vue": "^5.1.4",
    "@vitejs/plugin-vue-jsx": "^3.1.0",
    autoprefixer: "^10.4.20",
    "cnjm-postcss-px-to-viewport": "^1.0.1",
    "conventional-changelog-cli": "^4.1.0",
    eslint: "^8.57.1",
    "eslint-config-prettier": "^9.1.0",
    "eslint-define-config": "^2.1.0",
    "eslint-plugin-format": "^0.1.2",
    "eslint-plugin-prettier": "^5.2.1",
    "eslint-plugin-vue": "^9.28.0",
    husky: "^9.1.6",
    less: "^4.2.0",
    "lint-staged": "^15.2.10",
    postcss: "^8.4.47",
    "postcss-mobile-forever": "^4.1.6",
    prettier: "^3.3.3",
    rollup: "^4.22.5",
    "rollup-plugin-visualizer": "^5.12.0",
    typescript: "^5.6.2",
    unocss: "^0.59.4",
    "unplugin-auto-import": "^0.17.8",
    "unplugin-vue-components": "^0.26.0",
    vite: "^5.4.8",
    "vite-plugin-compression": "^0.5.1",
    "vite-plugin-html": "^3.2.2",
    "vite-plugin-imagemin": "^0.6.1",
    "vite-plugin-inspect": "^0.8.7",
    "vite-plugin-mkcert": "^1.17.6",
    "vite-plugin-pages": "^0.32.3",
    "vite-plugin-progress": "^0.0.7",
    "vite-plugin-style-import": "^2.0.0",
    "vite-plugin-svg-icons": "^2.0.1",
    "vite-plugin-vconsole": "^2.1.1",
    "vite-plugin-vue-devtools": "^7.4.6",
    "vite-plugin-vue-images": "^0.6.1",
    "vue-eslint-parser": "^9.4.3",
    "vue-tsc": "^2.1.6"
  },
  pnpm: {
    peerDependencyRules: {
      ignoreMissing: [
        "terser"
      ]
    }
  },
  resolutions: {
    "bin-wrapper": "npm:bin-wrapper-china",
    gifsicle: "5.2.0"
  },
  "lint-staged": {
    "*": "eslint --fix"
  }
};

// build/vite/env.ts
var { NODE_ENV } = process.env;
function wrapperEnv(envConf) {
  const ret = {};
  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, "\n");
    realName = realName === "true" ? true : realName === "false" ? false : realName;
    if (envName === "VITE_PORT") {
      realName = Number(realName);
    }
    if (envName === "VITE_PROXY" && realName) {
      try {
        realName = JSON.parse(realName.replace(/'/g, '"'));
      } catch (error) {
        realName = "";
      }
    }
    ret[envName] = realName;
    if (typeof realName === "string") {
      process.env[envName] = realName;
    } else if (typeof realName === "object") {
      process.env[envName] = JSON.stringify(realName);
    }
  }
  return ret;
}

// vite.config.ts
function pathResolve(dir) {
  return resolve(process.cwd(), ".", dir);
}
var vite_config_default = defineConfig(({ command, mode }) => {
  console.log(command, mode);
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_DROP_CONSOLE } = viteEnv;
  const isBuild = command === "build";
  return {
    base: VITE_PUBLIC_PATH,
    // 确保这个值是正确的，通常为 '/'
    // 使用 esbuild 压缩 剔除 console.log
    esbuild: {
      pure: VITE_DROP_CONSOLE ? ["console.log", "debugger"] : []
    },
    resolve: {
      alias: {
        "@": pathResolve("src"),
        "#": pathResolve("types")
      }
    },
    plugins: createVitePlugins(viteEnv, isBuild),
    css: {
      preprocessorOptions: {
        // reference:  避免重复引用
        less: {
          modifyVars: {
            // 'primary-color': '#1DA57A',
          },
          javascriptEnabled: true,
          // additionalData: `@import (reference) "${resolve('src/assets/style/variables.less')}";`,
          additionalData: `@import "src/assets/style/variables.less";`
        }
      }
    },
    server: {
      port: VITE_PORT,
      // 设置服务启动端口号
      open: false,
      // 设置服务启动时是否自动打开浏览器
      // cors: true, // 允许跨域
      host: "0.0.0.0",
      //
      hmr: true,
      // https: false, // 添加这一行
      proxy: proxy_default
      // 设置代理，根据我们项目实际情况配置
      // proxy: {
      //   '/api': {
      // 免费的在线REST API
      // target: 'http://jsonplaceholder.typicode.com',
      //     changeOrigin: true,
      //     secure: false,
      //     rewrite: (path) => path.replace('/api/', '/')
      //   }
      // }
    },
    // 选项可以选择需要或不需要进行预编译的依赖的名称，Vite 则会根据该选项来确定是否对该依赖进行预编译。
    optimizeDeps: {
      /**
       * 依赖预构建，vite 启动时会将下面 include 里的模块，编译成 esm 格式并缓存到 node_modules/.vite 文件夹，
       * 页面加载到对应模块时如果浏览器有缓存就读取浏览器缓存，如果没有会读取本地缓存并按需加载
       * 尤其当您禁用浏览器缓存时（这种情况只应该发生在调试阶段）必须将对应模块加入到 include 里，
       * 否则会遇到开发环境切换页面卡顿的问题（vite 会认为它是一个新的依赖包会重新加载并强制刷新页面），
       * 因为它既无法使用浏览器缓存，又没有在本地 node_modules/.vite 里缓存
       * 温馨提示：如果你使用的第三方库是全局引入，也就是引入到 src/main.ts 文件里，
       * 就不需要再添加到 include 里了，因为 vite 会自动将它们缓存到 node_modules/.vite
       */
      include: [
        "vue",
        "vue-router",
        "vant",
        "vant/es",
        "pinia",
        "echarts",
        "swiper",
        "swiper/vue",
        "@vueuse/core",
        "xgplayer",
        "better-scroll"
      ]
    },
    build: {
      sourcemap: !isBuild,
      target: "es2015",
      // 默认值是一个 Vite 特有的值——'modules'，这是指 支持原生 ES 模块的浏览器。
      // outDir: 'dist',
      // assetsDir: 'assets',
      minify: "esbuild",
      // terser\esbuild
      chunkSizeWarningLimit: 2e3,
      // 分包
      rollupOptions: {
        // 自动分割包名输出 chunkSizeWarningLimit 配置大小
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
          manualChunks: {
            echarts: ["echarts"],
            vant: ["vant"]
          }
        }
      }
      // 只有 minify 为 terser 的时候, 本配置项才能起作用
      // terserOptions: {
      //   // 生产环境去除 console debugger
      //   compress: {
      //     keep_infinity: true,
      //     drop_console: Object.is(VITE_DROP_CONSOLE, 'true'),
      //     drop_debugger: true,
      //   },
      // },
    },
    define: {
      __SYSTEM_INFO__: JSON.stringify({
        pkg: {
          version: package_default.version,
          dependencies: package_default.dependencies,
          devDependencies: package_default.devDependencies
        },
        lastBuildTime: dayjs().format("YYYY-MM-DD HH:mm:ss")
      })
    }
    // Removed duplicate 'base' property
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvdml0ZS9wbHVnaW5zL2luZGV4LnRzIiwgImJ1aWxkL3ZpdGUvcGx1Z2lucy9zdmdJY29ucy50cyIsICJidWlsZC92aXRlL3BsdWdpbnMvY29tcG9uZW50LnRzIiwgImJ1aWxkL3ZpdGUvcGx1Z2lucy9hdXRvSW1wb3J0LnRzIiwgImJ1aWxkL3ZpdGUvcGx1Z2lucy92aXN1YWxpemVyLnRzIiwgImJ1aWxkL2NvbnN0YW50LnRzIiwgImJ1aWxkL3ZpdGUvcGx1Z2lucy9jb21wcmVzcy50cyIsICJidWlsZC92aXRlL3BsdWdpbnMvcHJvZ3Jlc3MudHMiLCAiYnVpbGQvdml0ZS9wbHVnaW5zL2ltYWdlbWluLnRzIiwgImJ1aWxkL3ZpdGUvcGx1Z2lucy9hdXRvSW1hZ2UudHMiLCAiYnVpbGQvdml0ZS9wbHVnaW5zL2h0bWwudHMiLCAiYnVpbGQvdml0ZS9wcm94eS50cyIsICJwYWNrYWdlLmpzb24iLCAiYnVpbGQvdml0ZS9lbnYudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGFcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvdml0ZS5jb25maWcudHNcIjsvKlxuICogQEF1dGhvcjogRGFpWXVcbiAqIEBEYXRlOiAyMDIyLTAyLTE4IDE2OjUzOjAxXG4gKiBATGFzdEVkaXRvcnM6IERhaVl1XG4gKiBATGFzdEVkaXRUaW1lOiAyMDI0LTA0LTE2IDEzOjM2OjQ0XG4gKiBARmlsZVBhdGg6IFxcdml0ZS5jb25maWcudHNcbiAqL1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCB0eXBlIHsgQ29uZmlnRW52LCBVc2VyQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXG5pbXBvcnQgeyBjcmVhdGVWaXRlUGx1Z2lucyB9IGZyb20gJy4vYnVpbGQvdml0ZS9wbHVnaW5zJ1xuaW1wb3J0IHByb3h5IGZyb20gJy4vYnVpbGQvdml0ZS9wcm94eSdcbmltcG9ydCBwa2cgZnJvbSAnLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgeyB3cmFwcGVyRW52IH0gZnJvbSAnLi9idWlsZC92aXRlL2VudidcblxuZnVuY3Rpb24gcGF0aFJlc29sdmUoZGlyOiBzdHJpbmcpIHtcblx0cmV0dXJuIHJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJy4nLCBkaXIpXG59XG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQsIG1vZGUgfTogQ29uZmlnRW52KTogVXNlckNvbmZpZyA9PiB7XG5cdGNvbnNvbGUubG9nKGNvbW1hbmQsIG1vZGUpXG5cdGNvbnN0IHJvb3QgPSBwcm9jZXNzLmN3ZCgpXG5cdC8vIFx1NzNBRlx1NTg4M1x1NTNEOFx1OTFDRlxuXHRjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHJvb3QpXG5cdGNvbnN0IHZpdGVFbnYgPSB3cmFwcGVyRW52KGVudilcblxuXHRjb25zdCB7IFZJVEVfUE9SVCwgVklURV9QVUJMSUNfUEFUSCwgVklURV9EUk9QX0NPTlNPTEUgfSA9IHZpdGVFbnZcblxuXHRjb25zdCBpc0J1aWxkID0gY29tbWFuZCA9PT0gJ2J1aWxkJ1xuXHRyZXR1cm4ge1xuXHRcdGJhc2U6IFZJVEVfUFVCTElDX1BBVEgsIC8vIFx1Nzg2RVx1NEZERFx1OEZEOVx1NEUyQVx1NTAzQ1x1NjYyRlx1NkI2M1x1Nzg2RVx1NzY4NFx1RkYwQ1x1OTAxQVx1NUUzOFx1NEUzQSAnLydcblx0XHQvLyBcdTRGN0ZcdTc1MjggZXNidWlsZCBcdTUzOEJcdTdGMjkgXHU1MjU0XHU5NjY0IGNvbnNvbGUubG9nXG5cdFx0ZXNidWlsZDoge1xuXHRcdFx0cHVyZTogVklURV9EUk9QX0NPTlNPTEUgPyBbJ2NvbnNvbGUubG9nJywgJ2RlYnVnZ2VyJ10gOiBbXSxcblx0XHR9LFxuXHRcdHJlc29sdmU6IHtcblx0XHRcdGFsaWFzOiB7XG5cdFx0XHRcdCdAJzogcGF0aFJlc29sdmUoJ3NyYycpLFxuXHRcdFx0XHQnIyc6IHBhdGhSZXNvbHZlKCd0eXBlcycpLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHBsdWdpbnM6IGNyZWF0ZVZpdGVQbHVnaW5zKHZpdGVFbnYsIGlzQnVpbGQpLFxuXHRcdGNzczoge1xuXHRcdFx0cHJlcHJvY2Vzc29yT3B0aW9uczoge1xuXHRcdFx0XHQvLyByZWZlcmVuY2U6ICBcdTkwN0ZcdTUxNERcdTkxQ0RcdTU5MERcdTVGMTVcdTc1Mjhcblx0XHRcdFx0bGVzczoge1xuXHRcdFx0XHRcdG1vZGlmeVZhcnM6IHtcblx0XHRcdFx0XHRcdC8vICdwcmltYXJ5LWNvbG9yJzogJyMxREE1N0EnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0amF2YXNjcmlwdEVuYWJsZWQ6IHRydWUsXG5cdFx0XHRcdFx0Ly8gYWRkaXRpb25hbERhdGE6IGBAaW1wb3J0IChyZWZlcmVuY2UpIFwiJHtyZXNvbHZlKCdzcmMvYXNzZXRzL3N0eWxlL3ZhcmlhYmxlcy5sZXNzJyl9XCI7YCxcblx0XHRcdFx0XHRhZGRpdGlvbmFsRGF0YTogYEBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlL3ZhcmlhYmxlcy5sZXNzXCI7YCxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRzZXJ2ZXI6IHtcblx0XHRcdHBvcnQ6IFZJVEVfUE9SVCwgLy8gXHU4QkJFXHU3RjZFXHU2NzBEXHU1MkExXHU1NDJGXHU1MkE4XHU3QUVGXHU1M0UzXHU1M0Y3XG5cdFx0XHRvcGVuOiBmYWxzZSwgLy8gXHU4QkJFXHU3RjZFXHU2NzBEXHU1MkExXHU1NDJGXHU1MkE4XHU2NUY2XHU2NjJGXHU1NDI2XHU4MUVBXHU1MkE4XHU2MjUzXHU1RjAwXHU2RDRGXHU4OUM4XHU1NjY4XG5cdFx0XHQvLyBjb3JzOiB0cnVlLCAvLyBcdTUxNDFcdThCQjhcdThERThcdTU3REZcblx0XHRcdGhvc3Q6ICcwLjAuMC4wJywgLy9cblx0XHRcdGhtcjogdHJ1ZSxcblx0XHRcdC8vIGh0dHBzOiBmYWxzZSwgLy8gXHU2REZCXHU1MkEwXHU4RkQ5XHU0RTAwXHU4ODRDXG5cdFx0XHRwcm94eSxcblx0XHRcdC8vIFx1OEJCRVx1N0Y2RVx1NEVFM1x1NzQwNlx1RkYwQ1x1NjgzOVx1NjM2RVx1NjIxMVx1NEVFQ1x1OTg3OVx1NzZFRVx1NUI5RVx1OTY0NVx1NjBDNVx1NTFCNVx1OTE0RFx1N0Y2RVxuXHRcdFx0Ly8gcHJveHk6IHtcblx0XHRcdC8vICAgJy9hcGknOiB7XG5cdFx0XHQvLyBcdTUxNERcdThEMzlcdTc2ODRcdTU3MjhcdTdFQkZSRVNUIEFQSVxuXHRcdFx0Ly8gdGFyZ2V0OiAnaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20nLFxuXHRcdFx0Ly8gICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcblx0XHRcdC8vICAgICBzZWN1cmU6IGZhbHNlLFxuXHRcdFx0Ly8gICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoJy9hcGkvJywgJy8nKVxuXHRcdFx0Ly8gICB9XG5cdFx0XHQvLyB9XG5cdFx0fSxcblx0XHQvLyBcdTkwMDlcdTk4NzlcdTUzRUZcdTRFRTVcdTkwMDlcdTYyRTlcdTk3MDBcdTg5ODFcdTYyMTZcdTRFMERcdTk3MDBcdTg5ODFcdThGREJcdTg4NENcdTk4ODRcdTdGMTZcdThCRDFcdTc2ODRcdTRGOURcdThENTZcdTc2ODRcdTU0MERcdTc5RjBcdUZGMENWaXRlIFx1NTIxOVx1NEYxQVx1NjgzOVx1NjM2RVx1OEJFNVx1OTAwOVx1OTg3OVx1Njc2NVx1Nzg2RVx1NUI5QVx1NjYyRlx1NTQyNlx1NUJGOVx1OEJFNVx1NEY5RFx1OEQ1Nlx1OEZEQlx1ODg0Q1x1OTg4NFx1N0YxNlx1OEJEMVx1MzAwMlxuXHRcdG9wdGltaXplRGVwczoge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBcdTRGOURcdThENTZcdTk4ODRcdTY3ODRcdTVFRkFcdUZGMEN2aXRlIFx1NTQyRlx1NTJBOFx1NjVGNlx1NEYxQVx1NUMwNlx1NEUwQlx1OTc2MiBpbmNsdWRlIFx1OTFDQ1x1NzY4NFx1NkEyMVx1NTc1N1x1RkYwQ1x1N0YxNlx1OEJEMVx1NjIxMCBlc20gXHU2ODNDXHU1RjBGXHU1RTc2XHU3RjEzXHU1QjU4XHU1MjMwIG5vZGVfbW9kdWxlcy8udml0ZSBcdTY1ODdcdTRFRjZcdTU5MzlcdUZGMENcblx0XHRcdCAqIFx1OTg3NVx1OTc2Mlx1NTJBMFx1OEY3RFx1NTIzMFx1NUJGOVx1NUU5NFx1NkEyMVx1NTc1N1x1NjVGNlx1NTk4Mlx1Njc5Q1x1NkQ0Rlx1ODlDOFx1NTY2OFx1NjcwOVx1N0YxM1x1NUI1OFx1NUMzMVx1OEJGQlx1NTNENlx1NkQ0Rlx1ODlDOFx1NTY2OFx1N0YxM1x1NUI1OFx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1NEYxQVx1OEJGQlx1NTNENlx1NjcyQ1x1NTczMFx1N0YxM1x1NUI1OFx1NUU3Nlx1NjMwOVx1OTcwMFx1NTJBMFx1OEY3RFxuXHRcdFx0ICogXHU1QzI0XHU1MTc2XHU1RjUzXHU2MEE4XHU3OTgxXHU3NTI4XHU2RDRGXHU4OUM4XHU1NjY4XHU3RjEzXHU1QjU4XHU2NUY2XHVGRjA4XHU4RkQ5XHU3OUNEXHU2MEM1XHU1MUI1XHU1M0VBXHU1RTk0XHU4QkU1XHU1M0QxXHU3NTFGXHU1NzI4XHU4QzAzXHU4QkQ1XHU5NjM2XHU2QkI1XHVGRjA5XHU1RkM1XHU5ODdCXHU1QzA2XHU1QkY5XHU1RTk0XHU2QTIxXHU1NzU3XHU1MkEwXHU1MTY1XHU1MjMwIGluY2x1ZGUgXHU5MUNDXHVGRjBDXG5cdFx0XHQgKiBcdTU0MjZcdTUyMTlcdTRGMUFcdTkwNDdcdTUyMzBcdTVGMDBcdTUzRDFcdTczQUZcdTU4ODNcdTUyMDdcdTYzNjJcdTk4NzVcdTk3NjJcdTUzNjFcdTk4N0ZcdTc2ODRcdTk1RUVcdTk4OThcdUZGMDh2aXRlIFx1NEYxQVx1OEJBNFx1NEUzQVx1NUI4M1x1NjYyRlx1NEUwMFx1NEUyQVx1NjVCMFx1NzY4NFx1NEY5RFx1OEQ1Nlx1NTMwNVx1NEYxQVx1OTFDRFx1NjVCMFx1NTJBMFx1OEY3RFx1NUU3Nlx1NUYzQVx1NTIzNlx1NTIzN1x1NjVCMFx1OTg3NVx1OTc2Mlx1RkYwOVx1RkYwQ1xuXHRcdFx0ICogXHU1NkUwXHU0RTNBXHU1QjgzXHU2NUUyXHU2NUUwXHU2Q0Q1XHU0RjdGXHU3NTI4XHU2RDRGXHU4OUM4XHU1NjY4XHU3RjEzXHU1QjU4XHVGRjBDXHU1M0M4XHU2Q0ExXHU2NzA5XHU1NzI4XHU2NzJDXHU1NzMwIG5vZGVfbW9kdWxlcy8udml0ZSBcdTkxQ0NcdTdGMTNcdTVCNThcblx0XHRcdCAqIFx1NkUyOVx1OTlBOFx1NjNEMFx1NzkzQVx1RkYxQVx1NTk4Mlx1Njc5Q1x1NEY2MFx1NEY3Rlx1NzUyOFx1NzY4NFx1N0IyQ1x1NEUwOVx1NjVCOVx1NUU5M1x1NjYyRlx1NTE2OFx1NUM0MFx1NUYxNVx1NTE2NVx1RkYwQ1x1NEU1Rlx1NUMzMVx1NjYyRlx1NUYxNVx1NTE2NVx1NTIzMCBzcmMvbWFpbi50cyBcdTY1ODdcdTRFRjZcdTkxQ0NcdUZGMENcblx0XHRcdCAqIFx1NUMzMVx1NEUwRFx1OTcwMFx1ODk4MVx1NTE4RFx1NkRGQlx1NTJBMFx1NTIzMCBpbmNsdWRlIFx1OTFDQ1x1NEU4Nlx1RkYwQ1x1NTZFMFx1NEUzQSB2aXRlIFx1NEYxQVx1ODFFQVx1NTJBOFx1NUMwNlx1NUI4M1x1NEVFQ1x1N0YxM1x1NUI1OFx1NTIzMCBub2RlX21vZHVsZXMvLnZpdGVcblx0XHRcdCAqL1xuXHRcdFx0aW5jbHVkZTogW1xuXHRcdFx0XHQndnVlJyxcblx0XHRcdFx0J3Z1ZS1yb3V0ZXInLFxuXHRcdFx0XHQndmFudCcsXG5cdFx0XHRcdCd2YW50L2VzJyxcblx0XHRcdFx0J3BpbmlhJyxcblx0XHRcdFx0J2VjaGFydHMnLFxuXHRcdFx0XHQnc3dpcGVyJyxcblx0XHRcdFx0J3N3aXBlci92dWUnLFxuXHRcdFx0XHQnQHZ1ZXVzZS9jb3JlJyxcblx0XHRcdFx0J3hncGxheWVyJyxcblx0XHRcdFx0J2JldHRlci1zY3JvbGwnLFxuXHRcdFx0XSxcblx0XHR9LFxuXHRcdGJ1aWxkOiB7XG5cdFx0XHRzb3VyY2VtYXA6ICFpc0J1aWxkLFxuXHRcdFx0dGFyZ2V0OiAnZXMyMDE1JywgLy8gXHU5RUQ4XHU4QkE0XHU1MDNDXHU2NjJGXHU0RTAwXHU0RTJBIFZpdGUgXHU3Mjc5XHU2NzA5XHU3Njg0XHU1MDNDXHUyMDE0XHUyMDE0J21vZHVsZXMnXHVGRjBDXHU4RkQ5XHU2NjJGXHU2MzA3IFx1NjUyRlx1NjMwMVx1NTM5Rlx1NzUxRiBFUyBcdTZBMjFcdTU3NTdcdTc2ODRcdTZENEZcdTg5QzhcdTU2NjhcdTMwMDJcblx0XHRcdC8vIG91dERpcjogJ2Rpc3QnLFxuXHRcdFx0Ly8gYXNzZXRzRGlyOiAnYXNzZXRzJyxcblx0XHRcdG1pbmlmeTogJ2VzYnVpbGQnLCAvLyB0ZXJzZXJcXGVzYnVpbGRcblx0XHRcdGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMjAwMCxcblx0XHRcdC8vIFx1NTIwNlx1NTMwNVxuXHRcdFx0cm9sbHVwT3B0aW9uczoge1xuXHRcdFx0XHQvLyBcdTgxRUFcdTUyQThcdTUyMDZcdTUyNzJcdTUzMDVcdTU0MERcdThGOTNcdTUxRkEgY2h1bmtTaXplV2FybmluZ0xpbWl0IFx1OTE0RFx1N0Y2RVx1NTkyN1x1NUMwRlxuXHRcdFx0XHRvdXRwdXQ6IHtcblx0XHRcdFx0XHRjaHVua0ZpbGVOYW1lczogJ3N0YXRpYy9qcy9bbmFtZV0tW2hhc2hdLmpzJyxcblx0XHRcdFx0XHRlbnRyeUZpbGVOYW1lczogJ3N0YXRpYy9qcy9bbmFtZV0tW2hhc2hdLmpzJyxcblx0XHRcdFx0XHRhc3NldEZpbGVOYW1lczogJ3N0YXRpYy9bZXh0XS9bbmFtZV0tW2hhc2hdLltleHRdJyxcblx0XHRcdFx0XHRtYW51YWxDaHVua3M6IHtcblx0XHRcdFx0XHRcdGVjaGFydHM6IFsnZWNoYXJ0cyddLFxuXHRcdFx0XHRcdFx0dmFudDogWyd2YW50J10sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHQvLyBcdTUzRUFcdTY3MDkgbWluaWZ5IFx1NEUzQSB0ZXJzZXIgXHU3Njg0XHU2NUY2XHU1MDE5LCBcdTY3MkNcdTkxNERcdTdGNkVcdTk4NzlcdTYyNERcdTgwRkRcdThENzdcdTRGNUNcdTc1Mjhcblx0XHRcdC8vIHRlcnNlck9wdGlvbnM6IHtcblx0XHRcdC8vICAgLy8gXHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU1M0JCXHU5NjY0IGNvbnNvbGUgZGVidWdnZXJcblx0XHRcdC8vICAgY29tcHJlc3M6IHtcblx0XHRcdC8vICAgICBrZWVwX2luZmluaXR5OiB0cnVlLFxuXHRcdFx0Ly8gICAgIGRyb3BfY29uc29sZTogT2JqZWN0LmlzKFZJVEVfRFJPUF9DT05TT0xFLCAndHJ1ZScpLFxuXHRcdFx0Ly8gICAgIGRyb3BfZGVidWdnZXI6IHRydWUsXG5cdFx0XHQvLyAgIH0sXG5cdFx0XHQvLyB9LFxuXHRcdH0sXG5cdFx0ZGVmaW5lOiB7XG5cdFx0XHRfX1NZU1RFTV9JTkZPX186IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0cGtnOiB7XG5cdFx0XHRcdFx0dmVyc2lvbjogcGtnLnZlcnNpb24sXG5cdFx0XHRcdFx0ZGVwZW5kZW5jaWVzOiBwa2cuZGVwZW5kZW5jaWVzLFxuXHRcdFx0XHRcdGRldkRlcGVuZGVuY2llczogcGtnLmRldkRlcGVuZGVuY2llcyxcblx0XHRcdFx0fSxcblx0XHRcdFx0bGFzdEJ1aWxkVGltZTogZGF5anMoKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKSxcblx0XHRcdH0pLFxuXHRcdH0sXG5cdFx0Ly8gUmVtb3ZlZCBkdXBsaWNhdGUgJ2Jhc2UnIHByb3BlcnR5XG5cdH1cbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3BsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3BsdWdpbnMvaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3lpbnppL2h1bWFuX21hcF9iaWdkYXRhL2J1aWxkL3ZpdGUvcGx1Z2lucy9pbmRleC50c1wiOy8qXG4gKiBAQXV0aG9yOiBEYWlZdVxuICogQERhdGU6IDIwMjItMTAtMTMgMTE6MDU6MzBcbiAqIEBMYXN0RWRpdG9yczogRGFpWXVcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjQtMDQtMTYgMTc6NDA6MzlcbiAqIEBGaWxlUGF0aDogXFxidWlsZFxcdml0ZVxccGx1Z2luc1xcaW5kZXgudHNcbiAqL1xuLyoqXG4gKiBAbmFtZSBjcmVhdGVWaXRlUGx1Z2luc1xuICogQGRlc2NyaXB0aW9uIFx1NUMwMVx1ODhDNXBsdWdpbnNcdTY1NzBcdTdFQzRcdTdFREZcdTRFMDBcdThDMDNcdTc1MjhcbiAqL1xuaW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXG5pbXBvcnQgVml0ZVBsdWdpbkNlcnRpZmljYXRlIGZyb20gJ3ZpdGUtcGx1Z2luLW1rY2VydCdcbmltcG9ydCBVbm9jc3MgZnJvbSAndW5vY3NzL3ZpdGUnXG5pbXBvcnQgbGVnYWN5IGZyb20gJ0B2aXRlanMvcGx1Z2luLWxlZ2FjeSdcbmltcG9ydCBJbnNwZWN0IGZyb20gJ3ZpdGUtcGx1Z2luLWluc3BlY3QnXG5pbXBvcnQgVnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xuaW1wb3J0IHsgQ29uZmlnU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICcuL3N2Z0ljb25zJ1xuaW1wb3J0IHsgQXV0b1JlZ2lzdHJ5Q29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50J1xuaW1wb3J0IHsgQXV0b0ltcG9ydERlcHMgfSBmcm9tICcuL2F1dG9JbXBvcnQnXG5pbXBvcnQgeyBDb25maWdWaXN1YWxpemVyQ29uZmlnIH0gZnJvbSAnLi92aXN1YWxpemVyJ1xuaW1wb3J0IHsgQ29uZmlnQ29tcHJlc3NQbHVnaW4gfSBmcm9tICcuL2NvbXByZXNzJ1xuaW1wb3J0IHsgQ29uZmlnUHJvZ3Jlc3NQbHVnaW4gfSBmcm9tICcuL3Byb2dyZXNzJ1xuaW1wb3J0IHsgQ29uZmlnSW1hZ2VtaW5QbHVnaW4gfSBmcm9tICcuL2ltYWdlbWluJ1xuaW1wb3J0IHsgQXV0b0ltcG9ydEltYWdlcyB9IGZyb20gJy4vYXV0b0ltYWdlJ1xuLy8gaW1wb3J0IHsgQ29uZmlnVkNvbnNvbGVQbHVnaW4gfSBmcm9tICcuL3Zjb25zb2xlJ1xuaW1wb3J0IHsgY3JlYXRlSHRtbCB9IGZyb20gJy4vaHRtbCdcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZpdGVQbHVnaW5zKHZpdGVFbnY6IFZpdGVFbnYsIGlzQnVpbGQgPSBmYWxzZSkge1xuXHRjb25zdCB7XG5cdFx0VklURV9BUFBfSU5TUEVDVCxcblx0XHRWSVRFX0xFR0FDWSxcblx0XHRWSVRFX1VTRV9JTUFHRU1JTixcblx0XHRWSVRFX0JVSUxEX0NPTVBSRVNTLFxuXHRcdFZJVEVfQlVJTERfQ09NUFJFU1NfREVMRVRFX09SSUdJTl9GSUxFLFxuXHR9ID0gdml0ZUVudlxuXHRjb25zdCB2aXRlUGx1Z2luczogKFBsdWdpbk9wdGlvbiB8IFBsdWdpbk9wdGlvbltdKVtdID0gW1xuXHRcdC8vIHZ1ZVx1NjUyRlx1NjMwMVxuXHRcdHZ1ZSh7XG5cdFx0XHRzY3JpcHQ6IHtcblx0XHRcdFx0ZGVmaW5lTW9kZWw6IHRydWUsIC8vIGRlZmluZU1vZGVsIFx1OEZEOVx1NjYyRlx1NEUwMFx1NEUyQVx1OEJFRFx1NkNENVx1N0NENlxuXHRcdFx0XHRwcm9wc0Rlc3RydWN0dXJlOiB0cnVlLCAvLyBcdTg5RTNcdTY3ODQgcHJvcHNcblx0XHRcdH0sXG5cdFx0fSksXG5cdFx0Ly8gSlNYXHU2NTJGXHU2MzAxXG5cdFx0dnVlSnN4KCksXG5cdFx0VW5vY3NzKCksXG5cdFx0Ly8gXHU4QzAzXHU4QkQ1XHU1REU1XHU1MTc3XG5cdFx0SW5zcGVjdCh7XG5cdFx0XHRlbmFibGVkOiBWSVRFX0FQUF9JTlNQRUNULFxuXHRcdH0pLFxuXHRcdC8vIFx1NjNEMFx1NEY5Qmh0dHBzXHU4QkMxXHU0RTY2XG5cdFx0Vml0ZVBsdWdpbkNlcnRpZmljYXRlKHtcblx0XHRcdHNvdXJjZTogJ2NvZGluZycsXG5cdFx0fSksXG5cdFx0Ly8gXHU1NkZFXHU3MjQ3XHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XG5cdFx0QXV0b0ltcG9ydEltYWdlcygpLFxuXHRcdFZ1ZURldlRvb2xzKCksXG5cdF1cblx0Ly8gQHZpdGVqcy9wbHVnaW4tbGVnYWN5XG5cdFZJVEVfTEVHQUNZICYmIGlzQnVpbGQgJiYgdml0ZVBsdWdpbnMucHVzaChsZWdhY3koeyB0YXJnZXRzOiBbJ2RlZmF1bHRzJywgJ25vdCBJRSAxMSddIH0pKVxuXHR2aXRlUGx1Z2lucy5wdXNoKGNyZWF0ZUh0bWwodml0ZUVudiwgaXNCdWlsZCkpXG5cdC8vIFx1ODFFQVx1NTJBOFx1NjMwOVx1OTcwMFx1NUYxNVx1NTE2NVx1N0VDNFx1NEVGNlxuXHR2aXRlUGx1Z2lucy5wdXNoKEF1dG9SZWdpc3RyeUNvbXBvbmVudHMoKSlcblxuXHQvLyBcdTgxRUFcdTUyQThcdTYzMDlcdTk3MDBcdTVGMTVcdTUxNjVcdTRGOURcdThENTZcblx0dml0ZVBsdWdpbnMucHVzaChBdXRvSW1wb3J0RGVwcygpKVxuXG5cdC8vIFx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMFx1OERFRlx1NzUzMVxuXHQvLyB2aXRlUGx1Z2lucy5wdXNoKENvbmZpZ1BhZ2VzUGx1Z2luKCkpXG5cblx0Ly8gXHU1RjAwXHU1NDJGLmd6XHU1MzhCXHU3RjI5ICByb2xsdXAtcGx1Z2luLWd6aXBcblx0aXNCdWlsZFxuXHQmJiB2aXRlUGx1Z2lucy5wdXNoKFxuXHRcdENvbmZpZ0NvbXByZXNzUGx1Z2luKFZJVEVfQlVJTERfQ09NUFJFU1MsIFZJVEVfQlVJTERfQ09NUFJFU1NfREVMRVRFX09SSUdJTl9GSUxFKSxcblx0KVxuXG5cdC8vIFx1Njc4NFx1NUVGQVx1NjVGNlx1NjYzRVx1NzkzQVx1OEZEQlx1NUVBNlx1Njc2MVxuXHR2aXRlUGx1Z2lucy5wdXNoKENvbmZpZ1Byb2dyZXNzUGx1Z2luKCkpXG5cblx0Ly8gXHU3OUZCXHU1MkE4XHU3QUVGXHU4QzAzXHU4QkQ1XHU1REU1XHU1MTc3XG5cdC8vIHZpdGVQbHVnaW5zLnB1c2goQ29uZmlnVkNvbnNvbGVQbHVnaW4oaXNCdWlsZCkpXG5cblx0Ly8gdml0ZS1wbHVnaW4tc3ZnLWljb25zXG5cdHZpdGVQbHVnaW5zLnB1c2goQ29uZmlnU3ZnSWNvbnNQbHVnaW4oaXNCdWlsZCkpXG5cblx0Ly8gcm9sbHVwLXBsdWdpbi12aXN1YWxpemVyXG5cdHZpdGVQbHVnaW5zLnB1c2goQ29uZmlnVmlzdWFsaXplckNvbmZpZygpKVxuXG5cdFZJVEVfVVNFX0lNQUdFTUlOICYmIHZpdGVQbHVnaW5zLnB1c2goQ29uZmlnSW1hZ2VtaW5QbHVnaW4oKSlcblx0cmV0dXJuIHZpdGVQbHVnaW5zXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3BsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3BsdWdpbnMvc3ZnSWNvbnMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3lpbnppL2h1bWFuX21hcF9iaWdkYXRhL2J1aWxkL3ZpdGUvcGx1Z2lucy9zdmdJY29ucy50c1wiOy8qXG4gKiBAQXV0aG9yOiBEYWlZdVxuICogQERhdGU6IDIwMjItMTAtMTMgMTE6MDU6MzBcbiAqIEBMYXN0RWRpdG9yczogRGFpWXVcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjItMTAtMTMgMTE6MjQ6MTRcbiAqIEBGaWxlUGF0aDogXFxidWlsZFxcdml0ZVxccGx1Z2luc1xcc3ZnSWNvbnMudHNcbiAqL1xuLyoqXG4gKiBAbmFtZSBTdmdJY29uc1BsdWdpblxuICogQGRlc2NyaXB0aW9uIFx1NTJBMFx1OEY3RFNWR1x1NjU4N1x1NEVGNlx1RkYwQ1x1ODFFQVx1NTJBOFx1NUYxNVx1NTE2NVxuICovXG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN2Zy1pY29ucydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbmV4cG9ydCBjb25zdCBDb25maWdTdmdJY29uc1BsdWdpbiA9IChpc0J1aWxkOiBib29sZWFuKSA9PiB7XG4gIHJldHVybiBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgLy8gXHU2MzA3XHU1QjlBXHU5NzAwXHU4OTgxXHU3RjEzXHU1QjU4XHU3Njg0XHU1NkZFXHU2ODA3XHU2NTg3XHU0RUY2XHU1OTM5XG4gICAgaWNvbkRpcnM6IFtwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9hc3NldHMvaWNvbnMvc3ZnJyldLFxuICAgIC8vIFx1NjMwN1x1NUI5QXN5bWJvbElkXHU2ODNDXHU1RjBGXG4gICAgc3ltYm9sSWQ6ICdpY29uLVtkaXJdLVtuYW1lXScsXG4gICAgc3Znb09wdGlvbnM6IGlzQnVpbGQsXG4gIH0pXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3BsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3BsdWdpbnMvY29tcG9uZW50LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3BsdWdpbnMvY29tcG9uZW50LnRzXCI7LypcbiAqIEBBdXRob3I6IERhaVl1XG4gKiBARGF0ZTogMjAyMi0xMC0xMyAxMTowNTozMFxuICogQExhc3RFZGl0b3JzOiBEYWlZdVxuICogQExhc3RFZGl0VGltZTogMjAyMi0xMC0xMyAxODoyMTo0MVxuICogQEZpbGVQYXRoOiBcXGJ1aWxkXFx2aXRlXFxwbHVnaW5zXFxjb21wb25lbnQudHNcbiAqL1xuLyoqXG4gKiBAbmFtZSAgQXV0b1JlZ2lzdHJ5Q29tcG9uZW50c1xuICogQGRlc2NyaXB0aW9uIFx1NjMwOVx1OTcwMFx1NTJBMFx1OEY3RFx1RkYwQ1x1ODFFQVx1NTJBOFx1NUYxNVx1NTE2NVx1N0VDNFx1NEVGNlxuICovXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IHsgVmFudFJlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuZXhwb3J0IGNvbnN0IEF1dG9SZWdpc3RyeUNvbXBvbmVudHMgPSAoKSA9PiB7XG4gIHJldHVybiBDb21wb25lbnRzKHtcbiAgICBkaXJzOiBbJ3NyYy9jb21wb25lbnRzJ10sXG4gICAgZXh0ZW5zaW9uczogWyd2dWUnXSxcbiAgICBkZWVwOiB0cnVlLFxuICAgIGR0czogJ3R5cGVzL2NvbXBvbmVudHMuZC50cycsXG4gICAgZGlyZWN0b3J5QXNOYW1lc3BhY2U6IGZhbHNlLFxuICAgIGdsb2JhbE5hbWVzcGFjZXM6IFtdLFxuICAgIGRpcmVjdGl2ZXM6IHRydWUsXG4gICAgaW1wb3J0UGF0aFRyYW5zZm9ybTogdiA9PiB2LFxuICAgIGFsbG93T3ZlcnJpZGVzOiBmYWxzZSxcbiAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlL10sXG4gICAgZXhjbHVkZTogWy9bXFxcXC9dbm9kZV9tb2R1bGVzW1xcXFwvXS8sIC9bXFxcXC9dXFwuZ2l0W1xcXFwvXS8sIC9bXFxcXC9dXFwubnV4dFtcXFxcL10vXSxcbiAgICByZXNvbHZlcnM6IFtWYW50UmVzb2x2ZXIoKV0sXG4gIH0pXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3BsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3BsdWdpbnMvYXV0b0ltcG9ydC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvdml0ZS9wbHVnaW5zL2F1dG9JbXBvcnQudHNcIjsvKlxuICogQEF1dGhvcjogRGFpWXVcbiAqIEBEYXRlOiAyMDIyLTEwLTEzIDExOjA1OjMwXG4gKiBATGFzdEVkaXRvcnM6IERhaVl1XG4gKiBATGFzdEVkaXRUaW1lOiAyMDIyLTExLTA4IDA4OjQzOjAyXG4gKiBARmlsZVBhdGg6IFxcYnVpbGRcXHZpdGVcXHBsdWdpbnNcXGF1dG9JbXBvcnQudHNcbiAqL1xuLyoqXG4gKiBAbmFtZSBBdXRvSW1wb3J0RGVwc1xuICogQGRlc2NyaXB0aW9uIFx1NjMwOVx1OTcwMFx1NTJBMFx1OEY3RFx1RkYwQ2FwaVx1ODFFQVx1NTJBOFx1NUYxNVx1NTE2NVxuICovXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuZXhwb3J0IGNvbnN0IEF1dG9JbXBvcnREZXBzID0gKCkgPT4ge1xuICByZXR1cm4gQXV0b0ltcG9ydCh7XG4gICAgLy8gXHU3NkVFXHU2ODA3XHU2NTg3XHU0RUY2XG4gICAgaW5jbHVkZTogW1xuICAgICAgL1xcLlt0al1zeD8kLywgLy8gLnRzLCAudHN4LCAuanMsIC5qc3hcbiAgICAgIC9cXC52dWUkLyxcbiAgICAgIC9cXC52dWVcXD92dWUvLCAvLyAudnVlXG4gICAgICAvXFwubWQkLywgLy8gLm1kXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAndnVlJyxcbiAgICAgICdwaW5pYScsXG4gICAgICAndnVlLXJvdXRlcicsXG4gICAgICAnQHZ1ZXVzZS9jb3JlJyxcbiAgICAgIHtcbiAgICAgICAgJ0AvdXRpbHMvaHR0cC9heGlvcyc6IFsnZGVmSHR0cCcsICdkcml2ZXJIdHRwJ10sXG4gICAgICAgIHZhbnQ6IFsnc2hvd0ZhaWxUb2FzdCcsICdzaG93RGlhbG9nJ10sXG4gICAgICAgICdAL3V0aWxzL2RhdGVVdGlsJzogWydmb3JtYXRUb0RhdGVUaW1lJywgJ2Zvcm1hdFRvRGF0ZScsICdkYXRlVXRpbCddLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGR0czogJ3R5cGVzL2F1dG8taW1wb3J0cy5kLnRzJyxcbiAgICAvLyBcdTg5RTNcdTUxQjNlc2xpbnRcdTYyOUJcdTk1MTlcbiAgICBlc2xpbnRyYzoge1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIGZpbGVwYXRoOiAndHlwZXMvZXNsaW50cmMtYXV0by1pbXBvcnQuanNvbicsXG4gICAgICBnbG9iYWxzUHJvcFZhbHVlOiB0cnVlLFxuICAgIH0sXG4gIH0pXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3BsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3BsdWdpbnMvdmlzdWFsaXplci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvdml0ZS9wbHVnaW5zL3Zpc3VhbGl6ZXIudHNcIjsvKlxuICogQEF1dGhvcjogRGFpWXVcbiAqIEBEYXRlOiAyMDIyLTEwLTEzIDExOjA1OjMwXG4gKiBATGFzdEVkaXRvcnM6IERhaVl1XG4gKiBATGFzdEVkaXRUaW1lOiAyMDI0LTA0LTE2IDExOjIxOjQwXG4gKiBARmlsZVBhdGg6IFxcYnVpbGRcXHZpdGVcXHBsdWdpbnNcXHZpc3VhbGl6ZXIudHNcbiAqL1xuaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gJ3JvbGx1cC1wbHVnaW4tdmlzdWFsaXplcidcbmltcG9ydCB7IEFOQUxZU0lTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnQnXG5cbmV4cG9ydCBmdW5jdGlvbiBDb25maWdWaXN1YWxpemVyQ29uZmlnKCkge1xuICBpZiAoQU5BTFlTSVMpIHtcbiAgICByZXR1cm4gdmlzdWFsaXplcih7XG4gICAgICBmaWxlbmFtZTogJy4vbm9kZV9tb2R1bGVzLy5jYWNoZS92aXN1YWxpemVyL3N0YXRzLmh0bWwnLFxuICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgIGd6aXBTaXplOiB0cnVlLFxuICAgICAgYnJvdGxpU2l6ZTogdHJ1ZSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBbXVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC9jb25zdGFudC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvY29uc3RhbnQudHNcIjsvKlxuICogQEF1dGhvcjogRGFpWXVcbiAqIEBEYXRlOiAyMDIyLTEwLTEzIDExOjA0OjQ3XG4gKiBATGFzdEVkaXRvcnM6IERhaVl1XG4gKiBATGFzdEVkaXRUaW1lOiAyMDIyLTEwLTE5IDA5OjUxOjA5XG4gKiBARmlsZVBhdGg6IFxcYnVpbGRcXGNvbnN0YW50LnRzXG4gKi9cbi8qKlxuICogQG5hbWUgQ29uZmlnXG4gKiBAZGVzY3JpcHRpb24gXHU5ODc5XHU3NkVFXHU5MTREXHU3RjZFXG4gKi9cblxuLy8gcHJlZml4XG5leHBvcnQgY29uc3QgQVBJX1BSRUZJWCA9ICcvYXBpJ1xuXG4vLyBzZXJ2ZVxuZXhwb3J0IGNvbnN0IEFQSV9FTlYgPSAnLWZhdDAyJ1xuZXhwb3J0IGNvbnN0IEFQSV9CQVNFX1VSTCA9IGBodHRwczovL3Bhc3NlbmdlcmdhdGV3YXkke0FQSV9FTlZ9LndzZWNhci5jb206ODYwMS9gXG5leHBvcnQgY29uc3QgQVBJX0RSSVZFUl9VUkwgPSBgaHR0cHM6Ly9kcml2ZXJnYXRld2F5JHtBUElfRU5WfS53c2VjYXIuY29tOjg2MDEvYFxuXG4vLyBcdTUzMDVcdTRGOURcdThENTZcdTUyMDZcdTY3OTBcbmV4cG9ydCBjb25zdCBBTkFMWVNJUyA9IHRydWVcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3lpbnppL2h1bWFuX21hcF9iaWdkYXRhL2J1aWxkL3ZpdGUvcGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3lpbnppL2h1bWFuX21hcF9iaWdkYXRhL2J1aWxkL3ZpdGUvcGx1Z2lucy9jb21wcmVzcy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvdml0ZS9wbHVnaW5zL2NvbXByZXNzLnRzXCI7LypcbiAqIEBBdXRob3I6IERhaVl1XG4gKiBARGF0ZTogMjAyMi0xMC0xMyAxMTowNTozMFxuICogQExhc3RFZGl0b3JzOiBEYWlZdVxuICogQExhc3RFZGl0VGltZTogMjAyMi0xMC0xNSAwOTo1OTo1NVxuICogQEZpbGVQYXRoOiBcXGJ1aWxkXFx2aXRlXFxwbHVnaW5zXFxjb21wcmVzcy50c1xuICovXG4vKipcbiAqIEBuYW1lIENvbmZpZ0NvbXByZXNzUGx1Z2luXG4gKiBAZGVzY3JpcHRpb24gXHU1RjAwXHU1NDJGLmd6XHU1MzhCXHU3RjI5XG4gKi9cbmltcG9ydCB0eXBlIHsgUGx1Z2luT3B0aW9uIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2aXRlQ29tcHJlc3Npb24gZnJvbSAndml0ZS1wbHVnaW4tY29tcHJlc3Npb24nXG5cbmV4cG9ydCBjb25zdCBDb25maWdDb21wcmVzc1BsdWdpbiA9IChcbiAgY29tcHJlc3M6ICdnemlwJyB8ICdicm90bGknIHwgJ25vbmUnLFxuICBkZWxldGVPcmlnaW5GaWxlID0gZmFsc2UsXG4pOiBQbHVnaW5PcHRpb24gfCBQbHVnaW5PcHRpb25bXSA9PiB7XG4gIGNvbnN0IGNvbXByZXNzTGlzdCA9IGNvbXByZXNzLnNwbGl0KCcsJylcblxuICBjb25zdCBwbHVnaW5zOiBQbHVnaW5PcHRpb25bXSA9IFtdXG5cbiAgaWYgKGNvbXByZXNzTGlzdC5pbmNsdWRlcygnZ3ppcCcpKSB7XG4gICAgcGx1Z2lucy5wdXNoKFxuICAgICAgdml0ZUNvbXByZXNzaW9uKHtcbiAgICAgICAgZXh0OiAnLmd6JyxcbiAgICAgICAgZGVsZXRlT3JpZ2luRmlsZSwgLy9cdTUyMjBcdTk2NjRcdTZFOTBcdTY1ODdcdTRFRjZcbiAgICAgIH0pLFxuICAgIClcbiAgfVxuXG4gIGlmIChjb21wcmVzc0xpc3QuaW5jbHVkZXMoJ2Jyb3RsaScpKSB7XG4gICAgcGx1Z2lucy5wdXNoKFxuICAgICAgdml0ZUNvbXByZXNzaW9uKHtcbiAgICAgICAgZXh0OiAnLmJyJyxcbiAgICAgICAgYWxnb3JpdGhtOiAnYnJvdGxpQ29tcHJlc3MnLCAvL1x1NTM4Qlx1N0YyOVx1N0I5N1x1NkNENVxuICAgICAgICBkZWxldGVPcmlnaW5GaWxlLFxuICAgICAgfSksXG4gICAgKVxuICB9XG4gIHJldHVybiBwbHVnaW5zXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3BsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3BsdWdpbnMvcHJvZ3Jlc3MudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3lpbnppL2h1bWFuX21hcF9iaWdkYXRhL2J1aWxkL3ZpdGUvcGx1Z2lucy9wcm9ncmVzcy50c1wiOy8qXG4gKiBAQXV0aG9yOiBEYWlZdVxuICogQERhdGU6IDIwMjItMTAtMTMgMTE6MDU6MzBcbiAqIEBMYXN0RWRpdG9yczogRGFpWXVcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjItMTAtMTMgMTE6MTU6MzZcbiAqIEBGaWxlUGF0aDogXFxidWlsZFxcdml0ZVxccGx1Z2luc1xccHJvZ3Jlc3MudHNcbiAqL1xuLyoqXG4gKiBAbmFtZSBDb25maWdQcm9ncmVzc1BsdWdpblxuICogQGRlc2NyaXB0aW9uIFx1Njc4NFx1NUVGQVx1NjYzRVx1NzkzQVx1OEZEQlx1NUVBNlx1Njc2MVxuICovXG5cbmltcG9ydCBwcm9ncmVzcyBmcm9tICd2aXRlLXBsdWdpbi1wcm9ncmVzcydcbmV4cG9ydCBjb25zdCBDb25maWdQcm9ncmVzc1BsdWdpbiA9ICgpID0+IHtcbiAgcmV0dXJuIHByb2dyZXNzKClcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3lpbnppL2h1bWFuX21hcF9iaWdkYXRhL2J1aWxkL3ZpdGUvcGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3lpbnppL2h1bWFuX21hcF9iaWdkYXRhL2J1aWxkL3ZpdGUvcGx1Z2lucy9pbWFnZW1pbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvdml0ZS9wbHVnaW5zL2ltYWdlbWluLnRzXCI7LypcbiAqIEBBdXRob3I6IERhaVl1XG4gKiBARGF0ZTogMjAyMi0xMC0xMyAxMTowNTozMFxuICogQExhc3RFZGl0b3JzOiBEYWlZdVxuICogQExhc3RFZGl0VGltZTogMjAyMi0xMC0xMyAxMToxMjoxMlxuICogQEZpbGVQYXRoOiBcXGJ1aWxkXFx2aXRlXFxwbHVnaW5zXFxpbWFnZW1pbi50c1xuICovXG5pbXBvcnQgdml0ZUltYWdlbWluIGZyb20gJ3ZpdGUtcGx1Z2luLWltYWdlbWluJ1xuXG5leHBvcnQgZnVuY3Rpb24gQ29uZmlnSW1hZ2VtaW5QbHVnaW4oKSB7XG4gIGNvbnN0IHBsdWdpbiA9IHZpdGVJbWFnZW1pbih7XG4gICAgZ2lmc2ljbGU6IHtcbiAgICAgIG9wdGltaXphdGlvbkxldmVsOiA3LFxuICAgICAgaW50ZXJsYWNlZDogZmFsc2UsXG4gICAgfSxcbiAgICBtb3pqcGVnOiB7XG4gICAgICBxdWFsaXR5OiAyMCxcbiAgICB9LFxuICAgIG9wdGlwbmc6IHtcbiAgICAgIG9wdGltaXphdGlvbkxldmVsOiA3LFxuICAgIH0sXG4gICAgcG5ncXVhbnQ6IHtcbiAgICAgIHF1YWxpdHk6IFswLjgsIDAuOV0sXG4gICAgICBzcGVlZDogNCxcbiAgICB9LFxuICAgIHN2Z286IHtcbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdyZW1vdmVWaWV3Qm94JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdyZW1vdmVFbXB0eUF0dHJzJyxcbiAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9KVxuICByZXR1cm4gcGx1Z2luXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3BsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3BsdWdpbnMvYXV0b0ltYWdlLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3BsdWdpbnMvYXV0b0ltYWdlLnRzXCI7LypcbiAqIEBBdXRob3I6IERhaVl1XG4gKiBARGF0ZTogMjAyMi0xMS0xMiAxNDo1Njo0MFxuICogQExhc3RFZGl0b3JzOiBEYWlZdVxuICogQExhc3RFZGl0VGltZTogMjAyMi0xMS0xMiAxNToxNzo1OVxuICogQEZpbGVQYXRoOiBcXGJ1aWxkXFx2aXRlXFxwbHVnaW5zXFxhdXRvSW1hZ2UudHNcbiAqL1xuaW1wb3J0IHZpdGVJbWFnZXMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWltYWdlcydcblxuZXhwb3J0IGNvbnN0IEF1dG9JbXBvcnRJbWFnZXMgPSAoKSA9PiB7XG4gIHJldHVybiB2aXRlSW1hZ2VzKHtcbiAgICBkaXJzOiBbJ3NyYy9hc3NldHMvaW1hZ2VzJ10sXG4gICAgZXh0ZW5zaW9uczogWydqcGcnLCAnanBlZycsICdwbmcnLCAnZ2lmJywgJ3BuZyddLFxuICB9KVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvdml0ZS9wbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvdml0ZS9wbHVnaW5zL2h0bWwudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3lpbnppL2h1bWFuX21hcF9iaWdkYXRhL2J1aWxkL3ZpdGUvcGx1Z2lucy9odG1sLnRzXCI7LypcbiAqIEBBdXRob3I6IERhaVl1XG4gKiBARGF0ZTogMjAyMi0xMC0xMyAxNjowNjo0NlxuICogQExhc3RFZGl0b3JzOiBEYWlZdVxuICogQExhc3RFZGl0VGltZTogMjAyMi0xMC0xNSAxNToxNTowMFxuICogQEZpbGVQYXRoOiBcXGJ1aWxkXFx2aXRlXFxwbHVnaW5zXFxodG1sLnRzXG4gKi9cbmltcG9ydCB7IGNyZWF0ZUh0bWxQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1odG1sJ1xuXG5jb25zdCBjb3B5cmlnaHRfY29tbW9uX3N0eWxlID0gJ2ZvbnQtc2l6ZTogMTRweDsgbWFyZ2luLWJvdHRvbTogMnB4OyBwYWRkaW5nOiA2cHggOHB4OyBjb2xvcjogI2ZmZjsnXG5jb25zdCBjb3B5cmlnaHRfbWFpbl9zdHlsZSA9IGAke2NvcHlyaWdodF9jb21tb25fc3R5bGV9IGJhY2tncm91bmQ6ICNlMjQzMjk7YFxuY29uc3QgY29weXJpZ2h0X3N1Yl9zdHlsZSA9IGAke2NvcHlyaWdodF9jb21tb25fc3R5bGV9IGJhY2tncm91bmQ6ICM3MDcwNzA7YFxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSHRtbChlbnY6IFZpdGVFbnYsIGlzQnVpbGQ6IGJvb2xlYW4pIHtcbiAgY29uc3QgeyBWSVRFX0dMT0JfQVBQX1RJVExFLCBWSVRFX0FQUF9ERUJVR19UT09MIH0gPSBlbnZcbiAgY29uc3QgY29weXJpZ2h0U2NyaXB0ID0gYFxuPHNjcmlwdD5cbiAgY29uc29sZS5pbmZvKCclY1Bvd2VyZWQgYnklY1x1NEUwN1x1OTg3QVx1NTNFQlx1OEY2NicsICcke2NvcHlyaWdodF9zdWJfc3R5bGV9JywgJyR7Y29weXJpZ2h0X21haW5fc3R5bGV9JywgJ1x1NjZGNFx1NjVCMFx1NjVGNlx1OTVGNFx1RkYxQSR7bmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpfScsICdcXFxcbmh0dHBzOi8vd3d3LndzZWNhci5jb20vJyk7XG48L3NjcmlwdD5cbiAgYFxuICBsZXQgZGV2dG9vbFNjcmlwdCA9ICcnXG4gIHN3aXRjaCAoVklURV9BUFBfREVCVUdfVE9PTCkge1xuICAgIGNhc2UgJ2VydWRhJzpcbiAgICAgIGRldnRvb2xTY3JpcHQgPSBgXG48c2NyaXB0IHNyYz1cIi8vdW5wa2cuY29tL2VydWRhL2VydWRhLmpzXCI+PC9zY3JpcHQ+XG48c2NyaXB0PlxuICBlcnVkYS5pbml0KClcbjwvc2NyaXB0PlxuICAgICAgYFxuICAgICAgYnJlYWtcbiAgICBjYXNlICd2Y29uc29sZSc6XG4gICAgICBkZXZ0b29sU2NyaXB0ID0gYFxuPHNjcmlwdCBzcmM9XCIvL3VucGtnLmNvbS92Y29uc29sZS9kaXN0L3Zjb25zb2xlLm1pbi5qc1wiPjwvc2NyaXB0PlxuPHNjcmlwdD5cbiAgbmV3IFZDb25zb2xlKClcbjwvc2NyaXB0PlxuICAgICAgYFxuICAgICAgYnJlYWtcbiAgfVxuICBjb25zdCBsb2FkaW5nU2NyaXB0ID0gYFxuPHNjcmlwdD5cbihmdW5jdGlvbigpe1xuICBpZighIXdpbmRvdy5BY3RpdmVYT2JqZWN0IHx8IFwiQWN0aXZlWE9iamVjdFwiIGluIHdpbmRvdykge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdicm93c2VyLXVwZ3JhZGUnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICB9IGVsc2Uge1xuICAgIHZhciBMb2FkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmcnKVxuICAgIExvYWRpbmcuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpXG4gICAgTG9hZGluZy5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIExvYWRpbmcuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZScpXG4gICAgICB9LCA2MDApXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBMb2FkaW5nLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKVxuICAgICAgfSwgMTAwMClcbiAgICB9KVxuICB9XG59KSgpXG48L3NjcmlwdD5cbiAgYFxuICBjb25zdCBodG1sID0gY3JlYXRlSHRtbFBsdWdpbih7XG4gICAgaW5qZWN0OiB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRpdGxlOiBWSVRFX0dMT0JfQVBQX1RJVExFLFxuICAgICAgICBjb3B5cmlnaHRTY3JpcHQsXG4gICAgICAgIGxvYWRpbmdTY3JpcHQsXG4gICAgICAgIGRldnRvb2xTY3JpcHQsXG4gICAgICB9LFxuICAgIH0sXG4gICAgbWluaWZ5OiBpc0J1aWxkLFxuICB9KVxuICByZXR1cm4gaHRtbFxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvdml0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3lpbnppL2h1bWFuX21hcF9iaWdkYXRhL2J1aWxkL3ZpdGUvcHJveHkudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3lpbnppL2h1bWFuX21hcF9iaWdkYXRhL2J1aWxkL3ZpdGUvcHJveHkudHNcIjsvKlxuICogQEF1dGhvcjogRGFpWXVcbiAqIEBEYXRlOiAyMDIyLTEwLTEzIDExOjA1OjMwXG4gKiBATGFzdEVkaXRvcnM6IERhaVl1XG4gKiBATGFzdEVkaXRUaW1lOiAyMDIyLTEwLTE5IDA5OjUxOjU2XG4gKiBARmlsZVBhdGg6IFxcYnVpbGRcXHZpdGVcXHByb3h5LnRzXG4gKi9cbmltcG9ydCB7IEFQSV9QUkVGSVgsIEFQSV9CQVNFX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50J1xuaW1wb3J0IHsgUHJveHlPcHRpb25zIH0gZnJvbSAndml0ZSdcbnR5cGUgUHJveHlUYXJnZXRMaXN0ID0gUmVjb3JkPHN0cmluZywgUHJveHlPcHRpb25zPlxuXG5jb25zdCBpbml0OiBQcm94eVRhcmdldExpc3QgPSB7XG4gIC8vIHRlc3RcbiAgW0FQSV9QUkVGSVhdOiB7XG4gICAgdGFyZ2V0OiBBUElfQkFTRV9VUkwsXG4gICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgIHJld3JpdGU6IHBhdGggPT4gcGF0aC5yZXBsYWNlKG5ldyBSZWdFeHAoYF4ke0FQSV9CQVNFX1VSTH1gKSwgJycpLFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0XG4iLCAie1xuXHRcIm5hbWVcIjogXCJ2dWUzLW1vYmlsZVwiLFxuXHRcInR5cGVcIjogXCJtb2R1bGVcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMC4wLjFcIixcblx0XCJwcml2YXRlXCI6IHRydWUsXG5cdFwicGFja2FnZU1hbmFnZXJcIjogXCJwbnBtQDguMTUuOVwiLFxuXHRcImF1dGhvclwiOiB7XG5cdFx0XCJuYW1lXCI6IFwiZGFpeXVcIixcblx0XHRcImVtYWlsXCI6IFwiNjAzNjA3NDQ2QHFxLmNvbVwiXG5cdH0sXG5cdFwiaG9tZXBhZ2VcIjogXCJcIixcblx0XCJyZXBvc2l0b3J5XCI6IFwiXCIsXG5cdFwiZW5naW5lc1wiOiB7XG5cdFx0XCJub2RlXCI6IFwiPj0xOFwiXG5cdH0sXG5cdFwic2NyaXB0c1wiOiB7XG5cdFx0XCJkZXZcIjogXCJ2aXRlXCIsXG5cdFx0XCJidWlsZDpkZXZcIjogXCJ2dWUtdHNjIC0tbm9FbWl0ICYmIHZpdGUgYnVpbGQgLS1tb2RlIGRldmVsb3BtZW50XCIsXG5cdFx0XCJidWlsZFwiOiBcInZpdGUgYnVpbGQgLS1tb2RlIHByb2R1Y3Rpb25cIixcblx0XHRcInR5cGVjaGVja1wiOiBcIm5weCB2dWUtdHNjIC0tbm9FbWl0XCIsXG5cdFx0XCJwcmV2aWV3XCI6IFwibnBtIHJ1biBidWlsZCAmJiB2aXRlIHByZXZpZXdcIixcblx0XHRcImRlcHM6ZnJlc2hcIjogXCJucHggdGF6ZSAtd1wiLFxuXHRcdFwiZGVwczpmcmVzaDptYWpvclwiOiBcIm5weCB0YXplIG1ham9yIC13XCIsXG5cdFx0XCJkZXBzOmZyZXNoOm1pbm9yXCI6IFwibnB4IHRhemUgbWlub3IgLXdcIixcblx0XHRcImRlcHM6ZnJlc2g6cGF0Y2hcIjogXCJucHggdGF6ZSBwYXRjaCAtd1wiLFxuXHRcdFwicHJlaW5zdGFsbFwiOiBcIm5weCBvbmx5LWFsbG93IHBucG1cIixcblx0XHRcImVzbGludFwiOiBcImVzbGludCAtLWV4dCAuanMsLnZ1ZSwudHMgLS1pZ25vcmUtcGF0aCAuZXNsaW50aWdub3JlIC0tZml4IHNyY1wiLFxuXHRcdFwicHJlcGFyZVwiOiBcImh1c2t5IGluc3RhbGxcIixcblx0XHRcImNoYW5nZWxvZ1wiOiBcImNvbnZlbnRpb25hbC1jaGFuZ2Vsb2cgLXAgYW5ndWxhciAtaSBDSEFOR0VMT0cubWQgLXMgLXIgMFwiXG5cdH0sXG5cdFwiZGVwZW5kZW5jaWVzXCI6IHtcblx0XHRcIkBhbWFwL2FtYXAtanNhcGktbG9hZGVyXCI6IFwiXjEuMC4xXCIsXG5cdFx0XCJAYW1hcC9hbWFwLWpzYXBpLXR5cGVzXCI6IFwiXjAuMC4xNVwiLFxuXHRcdFwiQHZ1ZXVzZS9jb3JlXCI6IFwiXjEwLjExLjFcIixcblx0XHRcIkB2dWV1c2Uvc2hhcmVkXCI6IFwiXjEwLjExLjFcIixcblx0XHRcImFuaW1hdGUuY3NzXCI6IFwiXjQuMS4xXCIsXG5cdFx0XCJheGlvc1wiOiBcIl4xLjcuN1wiLFxuXHRcdFwiYmV0dGVyLXNjcm9sbFwiOiBcIl4yLjUuMVwiLFxuXHRcdFwiY3J5cHRvLWpzXCI6IFwiXjQuMi4wXCIsXG5cdFx0XCJkYXlqc1wiOiBcIl4xLjExLjEzXCIsXG5cdFx0XCJlY2hhcnRzXCI6IFwiXjUuNS4xXCIsXG5cdFx0XCJsb2Rhc2gtZXNcIjogXCJeNC4xNy4yMVwiLFxuXHRcdFwibWl0dFwiOiBcIl4zLjAuMVwiLFxuXHRcdFwibm9ybWFsaXplLmNzc1wiOiBcIl44LjAuMVwiLFxuXHRcdFwibnByb2dyZXNzXCI6IFwiXjAuMi4wXCIsXG5cdFx0XCJwaW5pYVwiOiBcIl4yLjIuMlwiLFxuXHRcdFwicXNcIjogXCJeNi4xMy4wXCIsXG5cdFx0XCJzd2lwZXJcIjogXCJeMTEuMS4xNFwiLFxuXHRcdFwidmFudFwiOiBcIjQuOC4xMVwiLFxuXHRcdFwidmNvbnNvbGVcIjogXCJeMy4xNS4xXCIsXG5cdFx0XCJ2dWVcIjogXCJeMy41LjEwXCIsXG5cdFx0XCJ2dWUtcm91dGVyXCI6IFwiXjQuNC41XCIsXG5cdFx0XCJ4Z3BsYXllclwiOiBcIl4zLjAuMjBcIlxuXHR9LFxuXHRcImRldkRlcGVuZGVuY2llc1wiOiB7XG5cdFx0XCJAYW50ZnUvZXNsaW50LWNvbmZpZ1wiOiBcIl4yLjI3LjNcIixcblx0XHRcIkBjb21taXRsaW50L2NsaVwiOiBcIl4xOS41LjBcIixcblx0XHRcIkBjb21taXRsaW50L2NvbmZpZy1jb252ZW50aW9uYWxcIjogXCJeMTkuNS4wXCIsXG5cdFx0XCJAdHlwZXMvYmV0dGVyLXNjcm9sbFwiOiBcIl4xLjEyLjdcIixcblx0XHRcIkB0eXBlcy9jcnlwdG8tanNcIjogXCJeNC4yLjJcIixcblx0XHRcIkB0eXBlcy9sb2Rhc2gtZXNcIjogXCJeNC4xNy4xMlwiLFxuXHRcdFwiQHR5cGVzL25vZGVcIjogXCJeMjAuMTYuMTBcIixcblx0XHRcIkB0eXBlcy9ucHJvZ3Jlc3NcIjogXCJeMC4yLjNcIixcblx0XHRcIkB0eXBlcy9xc1wiOiBcIl42LjkuMTZcIixcblx0XHRcIkB0eXBlc2NyaXB0LWVzbGludC9lc2xpbnQtcGx1Z2luXCI6IFwiXjcuMTguMFwiLFxuXHRcdFwiQHR5cGVzY3JpcHQtZXNsaW50L3BhcnNlclwiOiBcIl43LjE4LjBcIixcblx0XHRcIkB1bm9jc3MvZXNsaW50LWNvbmZpZ1wiOiBcIl4wLjU5LjRcIixcblx0XHRcIkB1bm9jc3MvZXNsaW50LXBsdWdpblwiOiBcIl4wLjU5LjRcIixcblx0XHRcIkB2aXRlanMvcGx1Z2luLWxlZ2FjeVwiOiBcIl41LjQuMlwiLFxuXHRcdFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI6IFwiXjUuMS40XCIsXG5cdFx0XCJAdml0ZWpzL3BsdWdpbi12dWUtanN4XCI6IFwiXjMuMS4wXCIsXG5cdFx0XCJhdXRvcHJlZml4ZXJcIjogXCJeMTAuNC4yMFwiLFxuXHRcdFwiY25qbS1wb3N0Y3NzLXB4LXRvLXZpZXdwb3J0XCI6IFwiXjEuMC4xXCIsXG5cdFx0XCJjb252ZW50aW9uYWwtY2hhbmdlbG9nLWNsaVwiOiBcIl40LjEuMFwiLFxuXHRcdFwiZXNsaW50XCI6IFwiXjguNTcuMVwiLFxuXHRcdFwiZXNsaW50LWNvbmZpZy1wcmV0dGllclwiOiBcIl45LjEuMFwiLFxuXHRcdFwiZXNsaW50LWRlZmluZS1jb25maWdcIjogXCJeMi4xLjBcIixcblx0XHRcImVzbGludC1wbHVnaW4tZm9ybWF0XCI6IFwiXjAuMS4yXCIsXG5cdFx0XCJlc2xpbnQtcGx1Z2luLXByZXR0aWVyXCI6IFwiXjUuMi4xXCIsXG5cdFx0XCJlc2xpbnQtcGx1Z2luLXZ1ZVwiOiBcIl45LjI4LjBcIixcblx0XHRcImh1c2t5XCI6IFwiXjkuMS42XCIsXG5cdFx0XCJsZXNzXCI6IFwiXjQuMi4wXCIsXG5cdFx0XCJsaW50LXN0YWdlZFwiOiBcIl4xNS4yLjEwXCIsXG5cdFx0XCJwb3N0Y3NzXCI6IFwiXjguNC40N1wiLFxuXHRcdFwicG9zdGNzcy1tb2JpbGUtZm9yZXZlclwiOiBcIl40LjEuNlwiLFxuXHRcdFwicHJldHRpZXJcIjogXCJeMy4zLjNcIixcblx0XHRcInJvbGx1cFwiOiBcIl40LjIyLjVcIixcblx0XHRcInJvbGx1cC1wbHVnaW4tdmlzdWFsaXplclwiOiBcIl41LjEyLjBcIixcblx0XHRcInR5cGVzY3JpcHRcIjogXCJeNS42LjJcIixcblx0XHRcInVub2Nzc1wiOiBcIl4wLjU5LjRcIixcblx0XHRcInVucGx1Z2luLWF1dG8taW1wb3J0XCI6IFwiXjAuMTcuOFwiLFxuXHRcdFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHNcIjogXCJeMC4yNi4wXCIsXG5cdFx0XCJ2aXRlXCI6IFwiXjUuNC44XCIsXG5cdFx0XCJ2aXRlLXBsdWdpbi1jb21wcmVzc2lvblwiOiBcIl4wLjUuMVwiLFxuXHRcdFwidml0ZS1wbHVnaW4taHRtbFwiOiBcIl4zLjIuMlwiLFxuXHRcdFwidml0ZS1wbHVnaW4taW1hZ2VtaW5cIjogXCJeMC42LjFcIixcblx0XHRcInZpdGUtcGx1Z2luLWluc3BlY3RcIjogXCJeMC44LjdcIixcblx0XHRcInZpdGUtcGx1Z2luLW1rY2VydFwiOiBcIl4xLjE3LjZcIixcblx0XHRcInZpdGUtcGx1Z2luLXBhZ2VzXCI6IFwiXjAuMzIuM1wiLFxuXHRcdFwidml0ZS1wbHVnaW4tcHJvZ3Jlc3NcIjogXCJeMC4wLjdcIixcblx0XHRcInZpdGUtcGx1Z2luLXN0eWxlLWltcG9ydFwiOiBcIl4yLjAuMFwiLFxuXHRcdFwidml0ZS1wbHVnaW4tc3ZnLWljb25zXCI6IFwiXjIuMC4xXCIsXG5cdFx0XCJ2aXRlLXBsdWdpbi12Y29uc29sZVwiOiBcIl4yLjEuMVwiLFxuXHRcdFwidml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzXCI6IFwiXjcuNC42XCIsXG5cdFx0XCJ2aXRlLXBsdWdpbi12dWUtaW1hZ2VzXCI6IFwiXjAuNi4xXCIsXG5cdFx0XCJ2dWUtZXNsaW50LXBhcnNlclwiOiBcIl45LjQuM1wiLFxuXHRcdFwidnVlLXRzY1wiOiBcIl4yLjEuNlwiXG5cdH0sXG5cdFwicG5wbVwiOiB7XG5cdFx0XCJwZWVyRGVwZW5kZW5jeVJ1bGVzXCI6IHtcblx0XHRcdFwiaWdub3JlTWlzc2luZ1wiOiBbXG5cdFx0XHRcdFwidGVyc2VyXCJcblx0XHRcdF1cblx0XHR9XG5cdH0sXG5cdFwicmVzb2x1dGlvbnNcIjoge1xuXHRcdFwiYmluLXdyYXBwZXJcIjogXCJucG06YmluLXdyYXBwZXItY2hpbmFcIixcblx0XHRcImdpZnNpY2xlXCI6IFwiNS4yLjBcIlxuXHR9LFxuXHRcImxpbnQtc3RhZ2VkXCI6IHtcblx0XHRcIipcIjogXCJlc2xpbnQgLS1maXhcIlxuXHR9XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvdml0ZS9lbnYudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3lpbnppL2h1bWFuX21hcF9iaWdkYXRhL2J1aWxkL3ZpdGUvZW52LnRzXCI7LypcbiAqIEBBdXRob3I6IERhaVl1XG4gKiBARGF0ZTogMjAyMi0xMC0xNSAwOTozNToxNVxuICogQExhc3RFZGl0b3JzOiBEYWlZdVxuICogQExhc3RFZGl0VGltZTogMjAyMi0xMC0xNSAxNDo1Njo0MlxuICogQEZpbGVQYXRoOiBcXGJ1aWxkXFx2aXRlXFxlbnYudHNcbiAqL1xuY29uc3QgeyBOT0RFX0VOViB9ID0gcHJvY2Vzcy5lbnZcblxuLy8gXHU2NjJGXHU1NDI2XHU2NjJGXHU1RjAwXHU1M0QxXHU3M0FGXHU1ODgzXG5leHBvcnQgY29uc3QgaXNEZXZlbG9wbWVudCA9IE5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnXG5cbi8vIFx1NjYyRlx1NTQyNlx1NjYyRlx1NzUxRlx1NEVBN1x1NzNBRlx1NTg4M1xuZXhwb3J0IGNvbnN0IGlzUHJvZHVjdGlvbiA9IE5PREVfRU5WID09PSAncHJvZHVjdGlvbidcblxuLy8gXHU4M0I3XHU1M0Q2XHU3M0FGXHU1ODgzXHU1M0Q4XHU5MUNGXG5leHBvcnQgZnVuY3Rpb24gd3JhcHBlckVudihlbnZDb25mOiBSZWNvcmRhYmxlKTogVml0ZUVudiB7XG4gIGNvbnN0IHJldDogYW55ID0ge31cblxuICBmb3IgKGNvbnN0IGVudk5hbWUgb2YgT2JqZWN0LmtleXMoZW52Q29uZikpIHtcbiAgICBsZXQgcmVhbE5hbWUgPSBlbnZDb25mW2Vudk5hbWVdLnJlcGxhY2UoL1xcXFxuL2csICdcXG4nKVxuICAgIHJlYWxOYW1lID0gcmVhbE5hbWUgPT09ICd0cnVlJyA/IHRydWUgOiByZWFsTmFtZSA9PT0gJ2ZhbHNlJyA/IGZhbHNlIDogcmVhbE5hbWVcblxuICAgIGlmIChlbnZOYW1lID09PSAnVklURV9QT1JUJykge1xuICAgICAgcmVhbE5hbWUgPSBOdW1iZXIocmVhbE5hbWUpXG4gICAgfVxuICAgIGlmIChlbnZOYW1lID09PSAnVklURV9QUk9YWScgJiYgcmVhbE5hbWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlYWxOYW1lID0gSlNPTi5wYXJzZShyZWFsTmFtZS5yZXBsYWNlKC8nL2csICdcIicpKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVhbE5hbWUgPSAnJ1xuICAgICAgfVxuICAgIH1cbiAgICByZXRbZW52TmFtZV0gPSByZWFsTmFtZVxuICAgIGlmICh0eXBlb2YgcmVhbE5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwcm9jZXNzLmVudltlbnZOYW1lXSA9IHJlYWxOYW1lXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVhbE5hbWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBwcm9jZXNzLmVudltlbnZOYW1lXSA9IEpTT04uc3RyaW5naWZ5KHJlYWxOYW1lKVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmV0XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBT0EsU0FBUyxlQUFlO0FBRXhCLFNBQVMsY0FBYyxlQUFlO0FBQ3RDLE9BQU8sV0FBVzs7O0FDRWxCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyxZQUFZO0FBQ25CLE9BQU8sWUFBWTtBQUNuQixPQUFPLGFBQWE7QUFDcEIsT0FBTyxpQkFBaUI7OztBQ1B4QixTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLFVBQVU7QUFFVixJQUFNLHVCQUF1QixDQUFDLFlBQXFCO0FBQ3hELFNBQU8scUJBQXFCO0FBQUE7QUFBQSxJQUUxQixVQUFVLENBQUMsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLHNCQUFzQixDQUFDO0FBQUE7QUFBQSxJQUU5RCxVQUFVO0FBQUEsSUFDVixhQUFhO0FBQUEsRUFDZixDQUFDO0FBQ0g7OztBQ1hBLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsb0JBQW9CO0FBQ3RCLElBQU0seUJBQXlCLE1BQU07QUFDMUMsU0FBTyxXQUFXO0FBQUEsSUFDaEIsTUFBTSxDQUFDLGdCQUFnQjtBQUFBLElBQ3ZCLFlBQVksQ0FBQyxLQUFLO0FBQUEsSUFDbEIsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsc0JBQXNCO0FBQUEsSUFDdEIsa0JBQWtCLENBQUM7QUFBQSxJQUNuQixZQUFZO0FBQUEsSUFDWixxQkFBcUIsT0FBSztBQUFBLElBQzFCLGdCQUFnQjtBQUFBLElBQ2hCLFNBQVMsQ0FBQyxVQUFVLFlBQVk7QUFBQSxJQUNoQyxTQUFTLENBQUMsMEJBQTBCLG1CQUFtQixrQkFBa0I7QUFB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
