// vite.config.ts
import { resolve } from "node:path";
import { defineConfig, loadEnv } from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/vite@5.2.8_@types+node@20.12.7_less@4.2.0/node_modules/vite/dist/node/index.js";
import dayjs from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/dayjs.min.js";

// build/vite/plugins/index.ts
import vue from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.8_vue@3.4.22/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.2.8_vue@3.4.22/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import VitePluginCertificate from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/vite-plugin-mkcert@1.17.5_vite@5.2.8/node_modules/vite-plugin-mkcert/dist/mkcert.mjs";
import Unocss from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/unocss@0.59.2_postcss@8.4.38_rollup@4.14.3_vite@5.2.8/node_modules/unocss/dist/vite.mjs";
import legacy from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/@vitejs+plugin-legacy@5.3.2_vite@5.2.8/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import Inspect from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/vite-plugin-inspect@0.8.3_rollup@4.14.3_vite@5.2.8/node_modules/vite-plugin-inspect/dist/index.mjs";
import VueDevTools from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/vite-plugin-vue-devtools@7.0.27_rollup@4.14.3_vite@5.2.8_vue@3.4.22/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";

// build/vite/plugins/svgIcons.ts
import { createSvgIconsPlugin } from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.2.8/node_modules/vite-plugin-svg-icons/dist/index.mjs";
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
import Components from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/unplugin-vue-components@0.26.0_rollup@4.14.3_vue@3.4.22/node_modules/unplugin-vue-components/dist/vite.js";
import { VantResolver } from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/unplugin-vue-components@0.26.0_rollup@4.14.3_vue@3.4.22/node_modules/unplugin-vue-components/dist/resolvers.js";
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
import AutoImport from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/unplugin-auto-import@0.17.5_@vueuse+core@10.9.0_rollup@4.14.3/node_modules/unplugin-auto-import/dist/vite.js";
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
import { visualizer } from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/rollup-plugin-visualizer@5.12.0_rollup@4.14.3/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";

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
import viteCompression from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@5.2.8/node_modules/vite-plugin-compression/dist/index.mjs";
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
import progress from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/vite-plugin-progress@0.0.7_vite@5.2.8/node_modules/vite-plugin-progress/dist/index.mjs";
var ConfigProgressPlugin = () => {
  return progress();
};

// build/vite/plugins/imagemin.ts
import viteImagemin from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/vite-plugin-imagemin@0.6.1_vite@5.2.8/node_modules/vite-plugin-imagemin/dist/index.mjs";
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
import { createHtmlPlugin } from "file:///Users/yinzi/human_map_bigdata/node_modules/.pnpm/vite-plugin-html@3.2.2_vite@5.2.8/node_modules/vite-plugin-html/dist/index.mjs";
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
    unocss: "^latest",
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
      proxy: proxy_default,
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
      proxy: {
        "/api": {
          target: "http://82.156.143.98:8000",
          changeOrigin: true,
          rewrite: (path2) => path2.replace(/^\/api/, "")
        }
      }
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvdml0ZS9wbHVnaW5zL2luZGV4LnRzIiwgImJ1aWxkL3ZpdGUvcGx1Z2lucy9zdmdJY29ucy50cyIsICJidWlsZC92aXRlL3BsdWdpbnMvY29tcG9uZW50LnRzIiwgImJ1aWxkL3ZpdGUvcGx1Z2lucy9hdXRvSW1wb3J0LnRzIiwgImJ1aWxkL3ZpdGUvcGx1Z2lucy92aXN1YWxpemVyLnRzIiwgImJ1aWxkL2NvbnN0YW50LnRzIiwgImJ1aWxkL3ZpdGUvcGx1Z2lucy9jb21wcmVzcy50cyIsICJidWlsZC92aXRlL3BsdWdpbnMvcHJvZ3Jlc3MudHMiLCAiYnVpbGQvdml0ZS9wbHVnaW5zL2ltYWdlbWluLnRzIiwgImJ1aWxkL3ZpdGUvcGx1Z2lucy9hdXRvSW1hZ2UudHMiLCAiYnVpbGQvdml0ZS9wbHVnaW5zL2h0bWwudHMiLCAiYnVpbGQvdml0ZS9wcm94eS50cyIsICJwYWNrYWdlLmpzb24iLCAiYnVpbGQvdml0ZS9lbnYudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGFcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvdml0ZS5jb25maWcudHNcIjsvKlxuICogQEF1dGhvcjogRGFpWXVcbiAqIEBEYXRlOiAyMDIyLTAyLTE4IDE2OjUzOjAxXG4gKiBATGFzdEVkaXRvcnM6IERhaVl1XG4gKiBATGFzdEVkaXRUaW1lOiAyMDI0LTA0LTE2IDEzOjM2OjQ0XG4gKiBARmlsZVBhdGg6IFxcdml0ZS5jb25maWcudHNcbiAqL1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCB0eXBlIHsgQ29uZmlnRW52LCBVc2VyQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXG5pbXBvcnQgeyBjcmVhdGVWaXRlUGx1Z2lucyB9IGZyb20gJy4vYnVpbGQvdml0ZS9wbHVnaW5zJ1xuaW1wb3J0IHByb3h5IGZyb20gJy4vYnVpbGQvdml0ZS9wcm94eSdcbmltcG9ydCBwa2cgZnJvbSAnLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgeyB3cmFwcGVyRW52IH0gZnJvbSAnLi9idWlsZC92aXRlL2VudidcblxuZnVuY3Rpb24gcGF0aFJlc29sdmUoZGlyOiBzdHJpbmcpIHtcblx0cmV0dXJuIHJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJy4nLCBkaXIpXG59XG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQsIG1vZGUgfTogQ29uZmlnRW52KTogVXNlckNvbmZpZyA9PiB7XG5cdGNvbnNvbGUubG9nKGNvbW1hbmQsIG1vZGUpXG5cdGNvbnN0IHJvb3QgPSBwcm9jZXNzLmN3ZCgpXG5cdC8vIFx1NzNBRlx1NTg4M1x1NTNEOFx1OTFDRlxuXHRjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHJvb3QpXG5cdGNvbnN0IHZpdGVFbnYgPSB3cmFwcGVyRW52KGVudilcblxuXHRjb25zdCB7IFZJVEVfUE9SVCwgVklURV9QVUJMSUNfUEFUSCwgVklURV9EUk9QX0NPTlNPTEUgfSA9IHZpdGVFbnZcblxuXHRjb25zdCBpc0J1aWxkID0gY29tbWFuZCA9PT0gJ2J1aWxkJ1xuXHRyZXR1cm4ge1xuXHRcdGJhc2U6IFZJVEVfUFVCTElDX1BBVEgsIC8vIFx1Nzg2RVx1NEZERFx1OEZEOVx1NEUyQVx1NTAzQ1x1NjYyRlx1NkI2M1x1Nzg2RVx1NzY4NFx1RkYwQ1x1OTAxQVx1NUUzOFx1NEUzQSAnLydcblx0XHQvLyBcdTRGN0ZcdTc1MjggZXNidWlsZCBcdTUzOEJcdTdGMjkgXHU1MjU0XHU5NjY0IGNvbnNvbGUubG9nXG5cdFx0ZXNidWlsZDoge1xuXHRcdFx0cHVyZTogVklURV9EUk9QX0NPTlNPTEUgPyBbJ2NvbnNvbGUubG9nJywgJ2RlYnVnZ2VyJ10gOiBbXSxcblx0XHR9LFxuXHRcdHJlc29sdmU6IHtcblx0XHRcdGFsaWFzOiB7XG5cdFx0XHRcdCdAJzogcGF0aFJlc29sdmUoJ3NyYycpLFxuXHRcdFx0XHQnIyc6IHBhdGhSZXNvbHZlKCd0eXBlcycpLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHBsdWdpbnM6IGNyZWF0ZVZpdGVQbHVnaW5zKHZpdGVFbnYsIGlzQnVpbGQpLFxuXHRcdGNzczoge1xuXHRcdFx0cHJlcHJvY2Vzc29yT3B0aW9uczoge1xuXHRcdFx0XHQvLyByZWZlcmVuY2U6ICBcdTkwN0ZcdTUxNERcdTkxQ0RcdTU5MERcdTVGMTVcdTc1Mjhcblx0XHRcdFx0bGVzczoge1xuXHRcdFx0XHRcdG1vZGlmeVZhcnM6IHtcblx0XHRcdFx0XHRcdC8vICdwcmltYXJ5LWNvbG9yJzogJyMxREE1N0EnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0amF2YXNjcmlwdEVuYWJsZWQ6IHRydWUsXG5cdFx0XHRcdFx0Ly8gYWRkaXRpb25hbERhdGE6IGBAaW1wb3J0IChyZWZlcmVuY2UpIFwiJHtyZXNvbHZlKCdzcmMvYXNzZXRzL3N0eWxlL3ZhcmlhYmxlcy5sZXNzJyl9XCI7YCxcblx0XHRcdFx0XHRhZGRpdGlvbmFsRGF0YTogYEBpbXBvcnQgXCJzcmMvYXNzZXRzL3N0eWxlL3ZhcmlhYmxlcy5sZXNzXCI7YCxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRzZXJ2ZXI6IHtcblx0XHRcdHBvcnQ6IFZJVEVfUE9SVCwgLy8gXHU4QkJFXHU3RjZFXHU2NzBEXHU1MkExXHU1NDJGXHU1MkE4XHU3QUVGXHU1M0UzXHU1M0Y3XG5cdFx0XHRvcGVuOiBmYWxzZSwgLy8gXHU4QkJFXHU3RjZFXHU2NzBEXHU1MkExXHU1NDJGXHU1MkE4XHU2NUY2XHU2NjJGXHU1NDI2XHU4MUVBXHU1MkE4XHU2MjUzXHU1RjAwXHU2RDRGXHU4OUM4XHU1NjY4XG5cdFx0XHQvLyBjb3JzOiB0cnVlLCAvLyBcdTUxNDFcdThCQjhcdThERThcdTU3REZcblx0XHRcdGhvc3Q6ICcwLjAuMC4wJywgLy9cblx0XHRcdGhtcjogdHJ1ZSxcblx0XHRcdC8vIGh0dHBzOiBmYWxzZSwgLy8gXHU2REZCXHU1MkEwXHU4RkQ5XHU0RTAwXHU4ODRDXG5cdFx0XHRwcm94eSxcblx0XHRcdC8vIFx1OEJCRVx1N0Y2RVx1NEVFM1x1NzQwNlx1RkYwQ1x1NjgzOVx1NjM2RVx1NjIxMVx1NEVFQ1x1OTg3OVx1NzZFRVx1NUI5RVx1OTY0NVx1NjBDNVx1NTFCNVx1OTE0RFx1N0Y2RVxuXHRcdFx0Ly8gcHJveHk6IHtcblx0XHRcdC8vICAgJy9hcGknOiB7XG5cdFx0XHQvLyBcdTUxNERcdThEMzlcdTc2ODRcdTU3MjhcdTdFQkZSRVNUIEFQSVxuXHRcdFx0Ly8gdGFyZ2V0OiAnaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20nLFxuXHRcdFx0Ly8gICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcblx0XHRcdC8vICAgICBzZWN1cmU6IGZhbHNlLFxuXHRcdFx0Ly8gICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoJy9hcGkvJywgJy8nKVxuXHRcdFx0Ly8gICB9XG5cdFx0XHQvLyB9XG5cdFx0XHRwcm94eToge1xuXHRcdFx0XHQnL2FwaSc6IHtcblx0XHRcdFx0XHR0YXJnZXQ6ICdodHRwOi8vODIuMTU2LjE0My45ODo4MDAwJyxcblx0XHRcdFx0XHRjaGFuZ2VPcmlnaW46IHRydWUsXG5cdFx0XHRcdFx0cmV3cml0ZTogcGF0aCA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJyksXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0Ly8gXHU5MDA5XHU5ODc5XHU1M0VGXHU0RUU1XHU5MDA5XHU2MkU5XHU5NzAwXHU4OTgxXHU2MjE2XHU0RTBEXHU5NzAwXHU4OTgxXHU4RkRCXHU4ODRDXHU5ODg0XHU3RjE2XHU4QkQxXHU3Njg0XHU0RjlEXHU4RDU2XHU3Njg0XHU1NDBEXHU3OUYwXHVGRjBDVml0ZSBcdTUyMTlcdTRGMUFcdTY4MzlcdTYzNkVcdThCRTVcdTkwMDlcdTk4NzlcdTY3NjVcdTc4NkVcdTVCOUFcdTY2MkZcdTU0MjZcdTVCRjlcdThCRTVcdTRGOURcdThENTZcdThGREJcdTg4NENcdTk4ODRcdTdGMTZcdThCRDFcdTMwMDJcblx0XHRvcHRpbWl6ZURlcHM6IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogXHU0RjlEXHU4RDU2XHU5ODg0XHU2Nzg0XHU1RUZBXHVGRjBDdml0ZSBcdTU0MkZcdTUyQThcdTY1RjZcdTRGMUFcdTVDMDZcdTRFMEJcdTk3NjIgaW5jbHVkZSBcdTkxQ0NcdTc2ODRcdTZBMjFcdTU3NTdcdUZGMENcdTdGMTZcdThCRDFcdTYyMTAgZXNtIFx1NjgzQ1x1NUYwRlx1NUU3Nlx1N0YxM1x1NUI1OFx1NTIzMCBub2RlX21vZHVsZXMvLnZpdGUgXHU2NTg3XHU0RUY2XHU1OTM5XHVGRjBDXG5cdFx0XHQgKiBcdTk4NzVcdTk3NjJcdTUyQTBcdThGN0RcdTUyMzBcdTVCRjlcdTVFOTRcdTZBMjFcdTU3NTdcdTY1RjZcdTU5ODJcdTY3OUNcdTZENEZcdTg5QzhcdTU2NjhcdTY3MDlcdTdGMTNcdTVCNThcdTVDMzFcdThCRkJcdTUzRDZcdTZENEZcdTg5QzhcdTU2NjhcdTdGMTNcdTVCNThcdUZGMENcdTU5ODJcdTY3OUNcdTZDQTFcdTY3MDlcdTRGMUFcdThCRkJcdTUzRDZcdTY3MkNcdTU3MzBcdTdGMTNcdTVCNThcdTVFNzZcdTYzMDlcdTk3MDBcdTUyQTBcdThGN0Rcblx0XHRcdCAqIFx1NUMyNFx1NTE3Nlx1NUY1M1x1NjBBOFx1Nzk4MVx1NzUyOFx1NkQ0Rlx1ODlDOFx1NTY2OFx1N0YxM1x1NUI1OFx1NjVGNlx1RkYwOFx1OEZEOVx1NzlDRFx1NjBDNVx1NTFCNVx1NTNFQVx1NUU5NFx1OEJFNVx1NTNEMVx1NzUxRlx1NTcyOFx1OEMwM1x1OEJENVx1OTYzNlx1NkJCNVx1RkYwOVx1NUZDNVx1OTg3Qlx1NUMwNlx1NUJGOVx1NUU5NFx1NkEyMVx1NTc1N1x1NTJBMFx1NTE2NVx1NTIzMCBpbmNsdWRlIFx1OTFDQ1x1RkYwQ1xuXHRcdFx0ICogXHU1NDI2XHU1MjE5XHU0RjFBXHU5MDQ3XHU1MjMwXHU1RjAwXHU1M0QxXHU3M0FGXHU1ODgzXHU1MjA3XHU2MzYyXHU5ODc1XHU5NzYyXHU1MzYxXHU5ODdGXHU3Njg0XHU5NUVFXHU5ODk4XHVGRjA4dml0ZSBcdTRGMUFcdThCQTRcdTRFM0FcdTVCODNcdTY2MkZcdTRFMDBcdTRFMkFcdTY1QjBcdTc2ODRcdTRGOURcdThENTZcdTUzMDVcdTRGMUFcdTkxQ0RcdTY1QjBcdTUyQTBcdThGN0RcdTVFNzZcdTVGM0FcdTUyMzZcdTUyMzdcdTY1QjBcdTk4NzVcdTk3NjJcdUZGMDlcdUZGMENcblx0XHRcdCAqIFx1NTZFMFx1NEUzQVx1NUI4M1x1NjVFMlx1NjVFMFx1NkNENVx1NEY3Rlx1NzUyOFx1NkQ0Rlx1ODlDOFx1NTY2OFx1N0YxM1x1NUI1OFx1RkYwQ1x1NTNDOFx1NkNBMVx1NjcwOVx1NTcyOFx1NjcyQ1x1NTczMCBub2RlX21vZHVsZXMvLnZpdGUgXHU5MUNDXHU3RjEzXHU1QjU4XG5cdFx0XHQgKiBcdTZFMjlcdTk5QThcdTYzRDBcdTc5M0FcdUZGMUFcdTU5ODJcdTY3OUNcdTRGNjBcdTRGN0ZcdTc1MjhcdTc2ODRcdTdCMkNcdTRFMDlcdTY1QjlcdTVFOTNcdTY2MkZcdTUxNjhcdTVDNDBcdTVGMTVcdTUxNjVcdUZGMENcdTRFNUZcdTVDMzFcdTY2MkZcdTVGMTVcdTUxNjVcdTUyMzAgc3JjL21haW4udHMgXHU2NTg3XHU0RUY2XHU5MUNDXHVGRjBDXG5cdFx0XHQgKiBcdTVDMzFcdTRFMERcdTk3MDBcdTg5ODFcdTUxOERcdTZERkJcdTUyQTBcdTUyMzAgaW5jbHVkZSBcdTkxQ0NcdTRFODZcdUZGMENcdTU2RTBcdTRFM0Egdml0ZSBcdTRGMUFcdTgxRUFcdTUyQThcdTVDMDZcdTVCODNcdTRFRUNcdTdGMTNcdTVCNThcdTUyMzAgbm9kZV9tb2R1bGVzLy52aXRlXG5cdFx0XHQgKi9cblx0XHRcdGluY2x1ZGU6IFtcblx0XHRcdFx0J3Z1ZScsXG5cdFx0XHRcdCd2dWUtcm91dGVyJyxcblx0XHRcdFx0J3ZhbnQnLFxuXHRcdFx0XHQndmFudC9lcycsXG5cdFx0XHRcdCdwaW5pYScsXG5cdFx0XHRcdCdlY2hhcnRzJyxcblx0XHRcdFx0J3N3aXBlcicsXG5cdFx0XHRcdCdzd2lwZXIvdnVlJyxcblx0XHRcdFx0J0B2dWV1c2UvY29yZScsXG5cdFx0XHRcdCd4Z3BsYXllcicsXG5cdFx0XHRcdCdiZXR0ZXItc2Nyb2xsJyxcblx0XHRcdF0sXG5cdFx0fSxcblx0XHRidWlsZDoge1xuXHRcdFx0c291cmNlbWFwOiAhaXNCdWlsZCxcblx0XHRcdHRhcmdldDogJ2VzMjAxNScsIC8vIFx1OUVEOFx1OEJBNFx1NTAzQ1x1NjYyRlx1NEUwMFx1NEUyQSBWaXRlIFx1NzI3OVx1NjcwOVx1NzY4NFx1NTAzQ1x1MjAxNFx1MjAxNCdtb2R1bGVzJ1x1RkYwQ1x1OEZEOVx1NjYyRlx1NjMwNyBcdTY1MkZcdTYzMDFcdTUzOUZcdTc1MUYgRVMgXHU2QTIxXHU1NzU3XHU3Njg0XHU2RDRGXHU4OUM4XHU1NjY4XHUzMDAyXG5cdFx0XHQvLyBvdXREaXI6ICdkaXN0Jyxcblx0XHRcdC8vIGFzc2V0c0RpcjogJ2Fzc2V0cycsXG5cdFx0XHRtaW5pZnk6ICdlc2J1aWxkJywgLy8gdGVyc2VyXFxlc2J1aWxkXG5cdFx0XHRjaHVua1NpemVXYXJuaW5nTGltaXQ6IDIwMDAsXG5cdFx0XHQvLyBcdTUyMDZcdTUzMDVcblx0XHRcdHJvbGx1cE9wdGlvbnM6IHtcblx0XHRcdFx0Ly8gXHU4MUVBXHU1MkE4XHU1MjA2XHU1MjcyXHU1MzA1XHU1NDBEXHU4RjkzXHU1MUZBIGNodW5rU2l6ZVdhcm5pbmdMaW1pdCBcdTkxNERcdTdGNkVcdTU5MjdcdTVDMEZcblx0XHRcdFx0b3V0cHV0OiB7XG5cdFx0XHRcdFx0Y2h1bmtGaWxlTmFtZXM6ICdzdGF0aWMvanMvW25hbWVdLVtoYXNoXS5qcycsXG5cdFx0XHRcdFx0ZW50cnlGaWxlTmFtZXM6ICdzdGF0aWMvanMvW25hbWVdLVtoYXNoXS5qcycsXG5cdFx0XHRcdFx0YXNzZXRGaWxlTmFtZXM6ICdzdGF0aWMvW2V4dF0vW25hbWVdLVtoYXNoXS5bZXh0XScsXG5cdFx0XHRcdFx0bWFudWFsQ2h1bmtzOiB7XG5cdFx0XHRcdFx0XHRlY2hhcnRzOiBbJ2VjaGFydHMnXSxcblx0XHRcdFx0XHRcdHZhbnQ6IFsndmFudCddLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0Ly8gXHU1M0VBXHU2NzA5IG1pbmlmeSBcdTRFM0EgdGVyc2VyIFx1NzY4NFx1NjVGNlx1NTAxOSwgXHU2NzJDXHU5MTREXHU3RjZFXHU5ODc5XHU2MjREXHU4MEZEXHU4RDc3XHU0RjVDXHU3NTI4XG5cdFx0XHQvLyB0ZXJzZXJPcHRpb25zOiB7XG5cdFx0XHQvLyAgIC8vIFx1NzUxRlx1NEVBN1x1NzNBRlx1NTg4M1x1NTNCQlx1OTY2NCBjb25zb2xlIGRlYnVnZ2VyXG5cdFx0XHQvLyAgIGNvbXByZXNzOiB7XG5cdFx0XHQvLyAgICAga2VlcF9pbmZpbml0eTogdHJ1ZSxcblx0XHRcdC8vICAgICBkcm9wX2NvbnNvbGU6IE9iamVjdC5pcyhWSVRFX0RST1BfQ09OU09MRSwgJ3RydWUnKSxcblx0XHRcdC8vICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxuXHRcdFx0Ly8gICB9LFxuXHRcdFx0Ly8gfSxcblx0XHR9LFxuXHRcdGRlZmluZToge1xuXHRcdFx0X19TWVNURU1fSU5GT19fOiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdHBrZzoge1xuXHRcdFx0XHRcdHZlcnNpb246IHBrZy52ZXJzaW9uLFxuXHRcdFx0XHRcdGRlcGVuZGVuY2llczogcGtnLmRlcGVuZGVuY2llcyxcblx0XHRcdFx0XHRkZXZEZXBlbmRlbmNpZXM6IHBrZy5kZXZEZXBlbmRlbmNpZXMsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGxhc3RCdWlsZFRpbWU6IGRheWpzKCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyksXG5cdFx0XHR9KSxcblx0XHR9LFxuXHRcdC8vIFJlbW92ZWQgZHVwbGljYXRlICdiYXNlJyBwcm9wZXJ0eVxuXHR9XG59KVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvdml0ZS9wbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvdml0ZS9wbHVnaW5zL2luZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3BsdWdpbnMvaW5kZXgudHNcIjsvKlxuICogQEF1dGhvcjogRGFpWXVcbiAqIEBEYXRlOiAyMDIyLTEwLTEzIDExOjA1OjMwXG4gKiBATGFzdEVkaXRvcnM6IERhaVl1XG4gKiBATGFzdEVkaXRUaW1lOiAyMDI0LTA0LTE2IDE3OjQwOjM5XG4gKiBARmlsZVBhdGg6IFxcYnVpbGRcXHZpdGVcXHBsdWdpbnNcXGluZGV4LnRzXG4gKi9cbi8qKlxuICogQG5hbWUgY3JlYXRlVml0ZVBsdWdpbnNcbiAqIEBkZXNjcmlwdGlvbiBcdTVDMDFcdTg4QzVwbHVnaW5zXHU2NTcwXHU3RUM0XHU3RURGXHU0RTAwXHU4QzAzXHU3NTI4XG4gKi9cbmltcG9ydCB0eXBlIHsgUGx1Z2luT3B0aW9uIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuaW1wb3J0IFZpdGVQbHVnaW5DZXJ0aWZpY2F0ZSBmcm9tICd2aXRlLXBsdWdpbi1ta2NlcnQnXG5pbXBvcnQgVW5vY3NzIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IGxlZ2FjeSBmcm9tICdAdml0ZWpzL3BsdWdpbi1sZWdhY3knXG5pbXBvcnQgSW5zcGVjdCBmcm9tICd2aXRlLXBsdWdpbi1pbnNwZWN0J1xuaW1wb3J0IFZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcbmltcG9ydCB7IENvbmZpZ1N2Z0ljb25zUGx1Z2luIH0gZnJvbSAnLi9zdmdJY29ucydcbmltcG9ydCB7IEF1dG9SZWdpc3RyeUNvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudCdcbmltcG9ydCB7IEF1dG9JbXBvcnREZXBzIH0gZnJvbSAnLi9hdXRvSW1wb3J0J1xuaW1wb3J0IHsgQ29uZmlnVmlzdWFsaXplckNvbmZpZyB9IGZyb20gJy4vdmlzdWFsaXplcidcbmltcG9ydCB7IENvbmZpZ0NvbXByZXNzUGx1Z2luIH0gZnJvbSAnLi9jb21wcmVzcydcbmltcG9ydCB7IENvbmZpZ1Byb2dyZXNzUGx1Z2luIH0gZnJvbSAnLi9wcm9ncmVzcydcbmltcG9ydCB7IENvbmZpZ0ltYWdlbWluUGx1Z2luIH0gZnJvbSAnLi9pbWFnZW1pbidcbmltcG9ydCB7IEF1dG9JbXBvcnRJbWFnZXMgfSBmcm9tICcuL2F1dG9JbWFnZSdcbi8vIGltcG9ydCB7IENvbmZpZ1ZDb25zb2xlUGx1Z2luIH0gZnJvbSAnLi92Y29uc29sZSdcbmltcG9ydCB7IGNyZWF0ZUh0bWwgfSBmcm9tICcuL2h0bWwnXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWaXRlUGx1Z2lucyh2aXRlRW52OiBWaXRlRW52LCBpc0J1aWxkID0gZmFsc2UpIHtcblx0Y29uc3Qge1xuXHRcdFZJVEVfQVBQX0lOU1BFQ1QsXG5cdFx0VklURV9MRUdBQ1ksXG5cdFx0VklURV9VU0VfSU1BR0VNSU4sXG5cdFx0VklURV9CVUlMRF9DT01QUkVTUyxcblx0XHRWSVRFX0JVSUxEX0NPTVBSRVNTX0RFTEVURV9PUklHSU5fRklMRSxcblx0fSA9IHZpdGVFbnZcblx0Y29uc3Qgdml0ZVBsdWdpbnM6IChQbHVnaW5PcHRpb24gfCBQbHVnaW5PcHRpb25bXSlbXSA9IFtcblx0XHQvLyB2dWVcdTY1MkZcdTYzMDFcblx0XHR2dWUoe1xuXHRcdFx0c2NyaXB0OiB7XG5cdFx0XHRcdGRlZmluZU1vZGVsOiB0cnVlLCAvLyBkZWZpbmVNb2RlbCBcdThGRDlcdTY2MkZcdTRFMDBcdTRFMkFcdThCRURcdTZDRDVcdTdDRDZcblx0XHRcdFx0cHJvcHNEZXN0cnVjdHVyZTogdHJ1ZSwgLy8gXHU4OUUzXHU2Nzg0IHByb3BzXG5cdFx0XHR9LFxuXHRcdH0pLFxuXHRcdC8vIEpTWFx1NjUyRlx1NjMwMVxuXHRcdHZ1ZUpzeCgpLFxuXHRcdFVub2NzcygpLFxuXHRcdC8vIFx1OEMwM1x1OEJENVx1NURFNVx1NTE3N1xuXHRcdEluc3BlY3Qoe1xuXHRcdFx0ZW5hYmxlZDogVklURV9BUFBfSU5TUEVDVCxcblx0XHR9KSxcblx0XHQvLyBcdTYzRDBcdTRGOUJodHRwc1x1OEJDMVx1NEU2NlxuXHRcdFZpdGVQbHVnaW5DZXJ0aWZpY2F0ZSh7XG5cdFx0XHRzb3VyY2U6ICdjb2RpbmcnLFxuXHRcdH0pLFxuXHRcdC8vIFx1NTZGRVx1NzI0N1x1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NVxuXHRcdEF1dG9JbXBvcnRJbWFnZXMoKSxcblx0XHRWdWVEZXZUb29scygpLFxuXHRdXG5cdC8vIEB2aXRlanMvcGx1Z2luLWxlZ2FjeVxuXHRWSVRFX0xFR0FDWSAmJiBpc0J1aWxkICYmIHZpdGVQbHVnaW5zLnB1c2gobGVnYWN5KHsgdGFyZ2V0czogWydkZWZhdWx0cycsICdub3QgSUUgMTEnXSB9KSlcblx0dml0ZVBsdWdpbnMucHVzaChjcmVhdGVIdG1sKHZpdGVFbnYsIGlzQnVpbGQpKVxuXHQvLyBcdTgxRUFcdTUyQThcdTYzMDlcdTk3MDBcdTVGMTVcdTUxNjVcdTdFQzRcdTRFRjZcblx0dml0ZVBsdWdpbnMucHVzaChBdXRvUmVnaXN0cnlDb21wb25lbnRzKCkpXG5cblx0Ly8gXHU4MUVBXHU1MkE4XHU2MzA5XHU5NzAwXHU1RjE1XHU1MTY1XHU0RjlEXHU4RDU2XG5cdHZpdGVQbHVnaW5zLnB1c2goQXV0b0ltcG9ydERlcHMoKSlcblxuXHQvLyBcdTgxRUFcdTUyQThcdTc1MUZcdTYyMTBcdThERUZcdTc1MzFcblx0Ly8gdml0ZVBsdWdpbnMucHVzaChDb25maWdQYWdlc1BsdWdpbigpKVxuXG5cdC8vIFx1NUYwMFx1NTQyRi5nelx1NTM4Qlx1N0YyOSAgcm9sbHVwLXBsdWdpbi1nemlwXG5cdGlzQnVpbGRcblx0JiYgdml0ZVBsdWdpbnMucHVzaChcblx0XHRDb25maWdDb21wcmVzc1BsdWdpbihWSVRFX0JVSUxEX0NPTVBSRVNTLCBWSVRFX0JVSUxEX0NPTVBSRVNTX0RFTEVURV9PUklHSU5fRklMRSksXG5cdClcblxuXHQvLyBcdTY3ODRcdTVFRkFcdTY1RjZcdTY2M0VcdTc5M0FcdThGREJcdTVFQTZcdTY3NjFcblx0dml0ZVBsdWdpbnMucHVzaChDb25maWdQcm9ncmVzc1BsdWdpbigpKVxuXG5cdC8vIFx1NzlGQlx1NTJBOFx1N0FFRlx1OEMwM1x1OEJENVx1NURFNVx1NTE3N1xuXHQvLyB2aXRlUGx1Z2lucy5wdXNoKENvbmZpZ1ZDb25zb2xlUGx1Z2luKGlzQnVpbGQpKVxuXG5cdC8vIHZpdGUtcGx1Z2luLXN2Zy1pY29uc1xuXHR2aXRlUGx1Z2lucy5wdXNoKENvbmZpZ1N2Z0ljb25zUGx1Z2luKGlzQnVpbGQpKVxuXG5cdC8vIHJvbGx1cC1wbHVnaW4tdmlzdWFsaXplclxuXHR2aXRlUGx1Z2lucy5wdXNoKENvbmZpZ1Zpc3VhbGl6ZXJDb25maWcoKSlcblxuXHRWSVRFX1VTRV9JTUFHRU1JTiAmJiB2aXRlUGx1Z2lucy5wdXNoKENvbmZpZ0ltYWdlbWluUGx1Z2luKCkpXG5cdHJldHVybiB2aXRlUGx1Z2luc1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvdml0ZS9wbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvdml0ZS9wbHVnaW5zL3N2Z0ljb25zLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3BsdWdpbnMvc3ZnSWNvbnMudHNcIjsvKlxuICogQEF1dGhvcjogRGFpWXVcbiAqIEBEYXRlOiAyMDIyLTEwLTEzIDExOjA1OjMwXG4gKiBATGFzdEVkaXRvcnM6IERhaVl1XG4gKiBATGFzdEVkaXRUaW1lOiAyMDIyLTEwLTEzIDExOjI0OjE0XG4gKiBARmlsZVBhdGg6IFxcYnVpbGRcXHZpdGVcXHBsdWdpbnNcXHN2Z0ljb25zLnRzXG4gKi9cbi8qKlxuICogQG5hbWUgU3ZnSWNvbnNQbHVnaW5cbiAqIEBkZXNjcmlwdGlvbiBcdTUyQTBcdThGN0RTVkdcdTY1ODdcdTRFRjZcdUZGMENcdTgxRUFcdTUyQThcdTVGMTVcdTUxNjVcbiAqL1xuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5leHBvcnQgY29uc3QgQ29uZmlnU3ZnSWNvbnNQbHVnaW4gPSAoaXNCdWlsZDogYm9vbGVhbikgPT4ge1xuICByZXR1cm4gY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xuICAgIC8vIFx1NjMwN1x1NUI5QVx1OTcwMFx1ODk4MVx1N0YxM1x1NUI1OFx1NzY4NFx1NTZGRVx1NjgwN1x1NjU4N1x1NEVGNlx1NTkzOVxuICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzL2ljb25zL3N2ZycpXSxcbiAgICAvLyBcdTYzMDdcdTVCOUFzeW1ib2xJZFx1NjgzQ1x1NUYwRlxuICAgIHN5bWJvbElkOiAnaWNvbi1bZGlyXS1bbmFtZV0nLFxuICAgIHN2Z29PcHRpb25zOiBpc0J1aWxkLFxuICB9KVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvdml0ZS9wbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvdml0ZS9wbHVnaW5zL2NvbXBvbmVudC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvdml0ZS9wbHVnaW5zL2NvbXBvbmVudC50c1wiOy8qXG4gKiBAQXV0aG9yOiBEYWlZdVxuICogQERhdGU6IDIwMjItMTAtMTMgMTE6MDU6MzBcbiAqIEBMYXN0RWRpdG9yczogRGFpWXVcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjItMTAtMTMgMTg6MjE6NDFcbiAqIEBGaWxlUGF0aDogXFxidWlsZFxcdml0ZVxccGx1Z2luc1xcY29tcG9uZW50LnRzXG4gKi9cbi8qKlxuICogQG5hbWUgIEF1dG9SZWdpc3RyeUNvbXBvbmVudHNcbiAqIEBkZXNjcmlwdGlvbiBcdTYzMDlcdTk3MDBcdTUyQTBcdThGN0RcdUZGMENcdTgxRUFcdTUyQThcdTVGMTVcdTUxNjVcdTdFQzRcdTRFRjZcbiAqL1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCB7IFZhbnRSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcbmV4cG9ydCBjb25zdCBBdXRvUmVnaXN0cnlDb21wb25lbnRzID0gKCkgPT4ge1xuICByZXR1cm4gQ29tcG9uZW50cyh7XG4gICAgZGlyczogWydzcmMvY29tcG9uZW50cyddLFxuICAgIGV4dGVuc2lvbnM6IFsndnVlJ10sXG4gICAgZGVlcDogdHJ1ZSxcbiAgICBkdHM6ICd0eXBlcy9jb21wb25lbnRzLmQudHMnLFxuICAgIGRpcmVjdG9yeUFzTmFtZXNwYWNlOiBmYWxzZSxcbiAgICBnbG9iYWxOYW1lc3BhY2VzOiBbXSxcbiAgICBkaXJlY3RpdmVzOiB0cnVlLFxuICAgIGltcG9ydFBhdGhUcmFuc2Zvcm06IHYgPT4gdixcbiAgICBhbGxvd092ZXJyaWRlczogZmFsc2UsXG4gICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS9dLFxuICAgIGV4Y2x1ZGU6IFsvW1xcXFwvXW5vZGVfbW9kdWxlc1tcXFxcL10vLCAvW1xcXFwvXVxcLmdpdFtcXFxcL10vLCAvW1xcXFwvXVxcLm51eHRbXFxcXC9dL10sXG4gICAgcmVzb2x2ZXJzOiBbVmFudFJlc29sdmVyKCldLFxuICB9KVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvdml0ZS9wbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvdml0ZS9wbHVnaW5zL2F1dG9JbXBvcnQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3lpbnppL2h1bWFuX21hcF9iaWdkYXRhL2J1aWxkL3ZpdGUvcGx1Z2lucy9hdXRvSW1wb3J0LnRzXCI7LypcbiAqIEBBdXRob3I6IERhaVl1XG4gKiBARGF0ZTogMjAyMi0xMC0xMyAxMTowNTozMFxuICogQExhc3RFZGl0b3JzOiBEYWlZdVxuICogQExhc3RFZGl0VGltZTogMjAyMi0xMS0wOCAwODo0MzowMlxuICogQEZpbGVQYXRoOiBcXGJ1aWxkXFx2aXRlXFxwbHVnaW5zXFxhdXRvSW1wb3J0LnRzXG4gKi9cbi8qKlxuICogQG5hbWUgQXV0b0ltcG9ydERlcHNcbiAqIEBkZXNjcmlwdGlvbiBcdTYzMDlcdTk3MDBcdTUyQTBcdThGN0RcdUZGMENhcGlcdTgxRUFcdTUyQThcdTVGMTVcdTUxNjVcbiAqL1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmV4cG9ydCBjb25zdCBBdXRvSW1wb3J0RGVwcyA9ICgpID0+IHtcbiAgcmV0dXJuIEF1dG9JbXBvcnQoe1xuICAgIC8vIFx1NzZFRVx1NjgwN1x1NjU4N1x1NEVGNlxuICAgIGluY2x1ZGU6IFtcbiAgICAgIC9cXC5bdGpdc3g/JC8sIC8vIC50cywgLnRzeCwgLmpzLCAuanN4XG4gICAgICAvXFwudnVlJC8sXG4gICAgICAvXFwudnVlXFw/dnVlLywgLy8gLnZ1ZVxuICAgICAgL1xcLm1kJC8sIC8vIC5tZFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgJ3Z1ZScsXG4gICAgICAncGluaWEnLFxuICAgICAgJ3Z1ZS1yb3V0ZXInLFxuICAgICAgJ0B2dWV1c2UvY29yZScsXG4gICAgICB7XG4gICAgICAgICdAL3V0aWxzL2h0dHAvYXhpb3MnOiBbJ2RlZkh0dHAnLCAnZHJpdmVySHR0cCddLFxuICAgICAgICB2YW50OiBbJ3Nob3dGYWlsVG9hc3QnLCAnc2hvd0RpYWxvZyddLFxuICAgICAgICAnQC91dGlscy9kYXRlVXRpbCc6IFsnZm9ybWF0VG9EYXRlVGltZScsICdmb3JtYXRUb0RhdGUnLCAnZGF0ZVV0aWwnXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBkdHM6ICd0eXBlcy9hdXRvLWltcG9ydHMuZC50cycsXG4gICAgLy8gXHU4OUUzXHU1MUIzZXNsaW50XHU2MjlCXHU5NTE5XG4gICAgZXNsaW50cmM6IHtcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBmaWxlcGF0aDogJ3R5cGVzL2VzbGludHJjLWF1dG8taW1wb3J0Lmpzb24nLFxuICAgICAgZ2xvYmFsc1Byb3BWYWx1ZTogdHJ1ZSxcbiAgICB9LFxuICB9KVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvdml0ZS9wbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvdml0ZS9wbHVnaW5zL3Zpc3VhbGl6ZXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3lpbnppL2h1bWFuX21hcF9iaWdkYXRhL2J1aWxkL3ZpdGUvcGx1Z2lucy92aXN1YWxpemVyLnRzXCI7LypcbiAqIEBBdXRob3I6IERhaVl1XG4gKiBARGF0ZTogMjAyMi0xMC0xMyAxMTowNTozMFxuICogQExhc3RFZGl0b3JzOiBEYWlZdVxuICogQExhc3RFZGl0VGltZTogMjAyNC0wNC0xNiAxMToyMTo0MFxuICogQEZpbGVQYXRoOiBcXGJ1aWxkXFx2aXRlXFxwbHVnaW5zXFx2aXN1YWxpemVyLnRzXG4gKi9cbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInXG5pbXBvcnQgeyBBTkFMWVNJUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50J1xuXG5leHBvcnQgZnVuY3Rpb24gQ29uZmlnVmlzdWFsaXplckNvbmZpZygpIHtcbiAgaWYgKEFOQUxZU0lTKSB7XG4gICAgcmV0dXJuIHZpc3VhbGl6ZXIoe1xuICAgICAgZmlsZW5hbWU6ICcuL25vZGVfbW9kdWxlcy8uY2FjaGUvdmlzdWFsaXplci9zdGF0cy5odG1sJyxcbiAgICAgIG9wZW46IHRydWUsXG4gICAgICBnemlwU2l6ZTogdHJ1ZSxcbiAgICAgIGJyb3RsaVNpemU6IHRydWUsXG4gICAgfSlcbiAgfVxuICByZXR1cm4gW11cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3lpbnppL2h1bWFuX21hcF9iaWdkYXRhL2J1aWxkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvY29uc3RhbnQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3lpbnppL2h1bWFuX21hcF9iaWdkYXRhL2J1aWxkL2NvbnN0YW50LnRzXCI7LypcbiAqIEBBdXRob3I6IERhaVl1XG4gKiBARGF0ZTogMjAyMi0xMC0xMyAxMTowNDo0N1xuICogQExhc3RFZGl0b3JzOiBEYWlZdVxuICogQExhc3RFZGl0VGltZTogMjAyMi0xMC0xOSAwOTo1MTowOVxuICogQEZpbGVQYXRoOiBcXGJ1aWxkXFxjb25zdGFudC50c1xuICovXG4vKipcbiAqIEBuYW1lIENvbmZpZ1xuICogQGRlc2NyaXB0aW9uIFx1OTg3OVx1NzZFRVx1OTE0RFx1N0Y2RVxuICovXG5cbi8vIHByZWZpeFxuZXhwb3J0IGNvbnN0IEFQSV9QUkVGSVggPSAnL2FwaSdcblxuLy8gc2VydmVcbmV4cG9ydCBjb25zdCBBUElfRU5WID0gJy1mYXQwMidcbmV4cG9ydCBjb25zdCBBUElfQkFTRV9VUkwgPSBgaHR0cHM6Ly9wYXNzZW5nZXJnYXRld2F5JHtBUElfRU5WfS53c2VjYXIuY29tOjg2MDEvYFxuZXhwb3J0IGNvbnN0IEFQSV9EUklWRVJfVVJMID0gYGh0dHBzOi8vZHJpdmVyZ2F0ZXdheSR7QVBJX0VOVn0ud3NlY2FyLmNvbTo4NjAxL2BcblxuLy8gXHU1MzA1XHU0RjlEXHU4RDU2XHU1MjA2XHU2NzkwXG5leHBvcnQgY29uc3QgQU5BTFlTSVMgPSB0cnVlXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3BsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3BsdWdpbnMvY29tcHJlc3MudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3lpbnppL2h1bWFuX21hcF9iaWdkYXRhL2J1aWxkL3ZpdGUvcGx1Z2lucy9jb21wcmVzcy50c1wiOy8qXG4gKiBAQXV0aG9yOiBEYWlZdVxuICogQERhdGU6IDIwMjItMTAtMTMgMTE6MDU6MzBcbiAqIEBMYXN0RWRpdG9yczogRGFpWXVcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjItMTAtMTUgMDk6NTk6NTVcbiAqIEBGaWxlUGF0aDogXFxidWlsZFxcdml0ZVxccGx1Z2luc1xcY29tcHJlc3MudHNcbiAqL1xuLyoqXG4gKiBAbmFtZSBDb25maWdDb21wcmVzc1BsdWdpblxuICogQGRlc2NyaXB0aW9uIFx1NUYwMFx1NTQyRi5nelx1NTM4Qlx1N0YyOVxuICovXG5pbXBvcnQgdHlwZSB7IFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdml0ZUNvbXByZXNzaW9uIGZyb20gJ3ZpdGUtcGx1Z2luLWNvbXByZXNzaW9uJ1xuXG5leHBvcnQgY29uc3QgQ29uZmlnQ29tcHJlc3NQbHVnaW4gPSAoXG4gIGNvbXByZXNzOiAnZ3ppcCcgfCAnYnJvdGxpJyB8ICdub25lJyxcbiAgZGVsZXRlT3JpZ2luRmlsZSA9IGZhbHNlLFxuKTogUGx1Z2luT3B0aW9uIHwgUGx1Z2luT3B0aW9uW10gPT4ge1xuICBjb25zdCBjb21wcmVzc0xpc3QgPSBjb21wcmVzcy5zcGxpdCgnLCcpXG5cbiAgY29uc3QgcGx1Z2luczogUGx1Z2luT3B0aW9uW10gPSBbXVxuXG4gIGlmIChjb21wcmVzc0xpc3QuaW5jbHVkZXMoJ2d6aXAnKSkge1xuICAgIHBsdWdpbnMucHVzaChcbiAgICAgIHZpdGVDb21wcmVzc2lvbih7XG4gICAgICAgIGV4dDogJy5neicsXG4gICAgICAgIGRlbGV0ZU9yaWdpbkZpbGUsIC8vXHU1MjIwXHU5NjY0XHU2RTkwXHU2NTg3XHU0RUY2XG4gICAgICB9KSxcbiAgICApXG4gIH1cblxuICBpZiAoY29tcHJlc3NMaXN0LmluY2x1ZGVzKCdicm90bGknKSkge1xuICAgIHBsdWdpbnMucHVzaChcbiAgICAgIHZpdGVDb21wcmVzc2lvbih7XG4gICAgICAgIGV4dDogJy5icicsXG4gICAgICAgIGFsZ29yaXRobTogJ2Jyb3RsaUNvbXByZXNzJywgLy9cdTUzOEJcdTdGMjlcdTdCOTdcdTZDRDVcbiAgICAgICAgZGVsZXRlT3JpZ2luRmlsZSxcbiAgICAgIH0pLFxuICAgIClcbiAgfVxuICByZXR1cm4gcGx1Z2luc1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvdml0ZS9wbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvdml0ZS9wbHVnaW5zL3Byb2dyZXNzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3BsdWdpbnMvcHJvZ3Jlc3MudHNcIjsvKlxuICogQEF1dGhvcjogRGFpWXVcbiAqIEBEYXRlOiAyMDIyLTEwLTEzIDExOjA1OjMwXG4gKiBATGFzdEVkaXRvcnM6IERhaVl1XG4gKiBATGFzdEVkaXRUaW1lOiAyMDIyLTEwLTEzIDExOjE1OjM2XG4gKiBARmlsZVBhdGg6IFxcYnVpbGRcXHZpdGVcXHBsdWdpbnNcXHByb2dyZXNzLnRzXG4gKi9cbi8qKlxuICogQG5hbWUgQ29uZmlnUHJvZ3Jlc3NQbHVnaW5cbiAqIEBkZXNjcmlwdGlvbiBcdTY3ODRcdTVFRkFcdTY2M0VcdTc5M0FcdThGREJcdTVFQTZcdTY3NjFcbiAqL1xuXG5pbXBvcnQgcHJvZ3Jlc3MgZnJvbSAndml0ZS1wbHVnaW4tcHJvZ3Jlc3MnXG5leHBvcnQgY29uc3QgQ29uZmlnUHJvZ3Jlc3NQbHVnaW4gPSAoKSA9PiB7XG4gIHJldHVybiBwcm9ncmVzcygpXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3BsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3BsdWdpbnMvaW1hZ2VtaW4udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3lpbnppL2h1bWFuX21hcF9iaWdkYXRhL2J1aWxkL3ZpdGUvcGx1Z2lucy9pbWFnZW1pbi50c1wiOy8qXG4gKiBAQXV0aG9yOiBEYWlZdVxuICogQERhdGU6IDIwMjItMTAtMTMgMTE6MDU6MzBcbiAqIEBMYXN0RWRpdG9yczogRGFpWXVcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjItMTAtMTMgMTE6MTI6MTJcbiAqIEBGaWxlUGF0aDogXFxidWlsZFxcdml0ZVxccGx1Z2luc1xcaW1hZ2VtaW4udHNcbiAqL1xuaW1wb3J0IHZpdGVJbWFnZW1pbiBmcm9tICd2aXRlLXBsdWdpbi1pbWFnZW1pbidcblxuZXhwb3J0IGZ1bmN0aW9uIENvbmZpZ0ltYWdlbWluUGx1Z2luKCkge1xuICBjb25zdCBwbHVnaW4gPSB2aXRlSW1hZ2VtaW4oe1xuICAgIGdpZnNpY2xlOiB7XG4gICAgICBvcHRpbWl6YXRpb25MZXZlbDogNyxcbiAgICAgIGludGVybGFjZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgbW96anBlZzoge1xuICAgICAgcXVhbGl0eTogMjAsXG4gICAgfSxcbiAgICBvcHRpcG5nOiB7XG4gICAgICBvcHRpbWl6YXRpb25MZXZlbDogNyxcbiAgICB9LFxuICAgIHBuZ3F1YW50OiB7XG4gICAgICBxdWFsaXR5OiBbMC44LCAwLjldLFxuICAgICAgc3BlZWQ6IDQsXG4gICAgfSxcbiAgICBzdmdvOiB7XG4gICAgICBwbHVnaW5zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAncmVtb3ZlVmlld0JveCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAncmVtb3ZlRW1wdHlBdHRycycsXG4gICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSlcbiAgcmV0dXJuIHBsdWdpblxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvdml0ZS9wbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvdml0ZS9wbHVnaW5zL2F1dG9JbWFnZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvdml0ZS9wbHVnaW5zL2F1dG9JbWFnZS50c1wiOy8qXG4gKiBAQXV0aG9yOiBEYWlZdVxuICogQERhdGU6IDIwMjItMTEtMTIgMTQ6NTY6NDBcbiAqIEBMYXN0RWRpdG9yczogRGFpWXVcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjItMTEtMTIgMTU6MTc6NTlcbiAqIEBGaWxlUGF0aDogXFxidWlsZFxcdml0ZVxccGx1Z2luc1xcYXV0b0ltYWdlLnRzXG4gKi9cbmltcG9ydCB2aXRlSW1hZ2VzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1pbWFnZXMnXG5cbmV4cG9ydCBjb25zdCBBdXRvSW1wb3J0SW1hZ2VzID0gKCkgPT4ge1xuICByZXR1cm4gdml0ZUltYWdlcyh7XG4gICAgZGlyczogWydzcmMvYXNzZXRzL2ltYWdlcyddLFxuICAgIGV4dGVuc2lvbnM6IFsnanBnJywgJ2pwZWcnLCAncG5nJywgJ2dpZicsICdwbmcnXSxcbiAgfSlcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3lpbnppL2h1bWFuX21hcF9iaWdkYXRhL2J1aWxkL3ZpdGUvcGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3lpbnppL2h1bWFuX21hcF9iaWdkYXRhL2J1aWxkL3ZpdGUvcGx1Z2lucy9odG1sLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3BsdWdpbnMvaHRtbC50c1wiOy8qXG4gKiBAQXV0aG9yOiBEYWlZdVxuICogQERhdGU6IDIwMjItMTAtMTMgMTY6MDY6NDZcbiAqIEBMYXN0RWRpdG9yczogRGFpWXVcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjItMTAtMTUgMTU6MTU6MDBcbiAqIEBGaWxlUGF0aDogXFxidWlsZFxcdml0ZVxccGx1Z2luc1xcaHRtbC50c1xuICovXG5pbXBvcnQgeyBjcmVhdGVIdG1sUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4taHRtbCdcblxuY29uc3QgY29weXJpZ2h0X2NvbW1vbl9zdHlsZSA9ICdmb250LXNpemU6IDE0cHg7IG1hcmdpbi1ib3R0b206IDJweDsgcGFkZGluZzogNnB4IDhweDsgY29sb3I6ICNmZmY7J1xuY29uc3QgY29weXJpZ2h0X21haW5fc3R5bGUgPSBgJHtjb3B5cmlnaHRfY29tbW9uX3N0eWxlfSBiYWNrZ3JvdW5kOiAjZTI0MzI5O2BcbmNvbnN0IGNvcHlyaWdodF9zdWJfc3R5bGUgPSBgJHtjb3B5cmlnaHRfY29tbW9uX3N0eWxlfSBiYWNrZ3JvdW5kOiAjNzA3MDcwO2BcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUh0bWwoZW52OiBWaXRlRW52LCBpc0J1aWxkOiBib29sZWFuKSB7XG4gIGNvbnN0IHsgVklURV9HTE9CX0FQUF9USVRMRSwgVklURV9BUFBfREVCVUdfVE9PTCB9ID0gZW52XG4gIGNvbnN0IGNvcHlyaWdodFNjcmlwdCA9IGBcbjxzY3JpcHQ+XG4gIGNvbnNvbGUuaW5mbygnJWNQb3dlcmVkIGJ5JWNcdTRFMDdcdTk4N0FcdTUzRUJcdThGNjYnLCAnJHtjb3B5cmlnaHRfc3ViX3N0eWxlfScsICcke2NvcHlyaWdodF9tYWluX3N0eWxlfScsICdcdTY2RjRcdTY1QjBcdTY1RjZcdTk1RjRcdUZGMUEke25ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKX0nLCAnXFxcXG5odHRwczovL3d3dy53c2VjYXIuY29tLycpO1xuPC9zY3JpcHQ+XG4gIGBcbiAgbGV0IGRldnRvb2xTY3JpcHQgPSAnJ1xuICBzd2l0Y2ggKFZJVEVfQVBQX0RFQlVHX1RPT0wpIHtcbiAgICBjYXNlICdlcnVkYSc6XG4gICAgICBkZXZ0b29sU2NyaXB0ID0gYFxuPHNjcmlwdCBzcmM9XCIvL3VucGtnLmNvbS9lcnVkYS9lcnVkYS5qc1wiPjwvc2NyaXB0PlxuPHNjcmlwdD5cbiAgZXJ1ZGEuaW5pdCgpXG48L3NjcmlwdD5cbiAgICAgIGBcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndmNvbnNvbGUnOlxuICAgICAgZGV2dG9vbFNjcmlwdCA9IGBcbjxzY3JpcHQgc3JjPVwiLy91bnBrZy5jb20vdmNvbnNvbGUvZGlzdC92Y29uc29sZS5taW4uanNcIj48L3NjcmlwdD5cbjxzY3JpcHQ+XG4gIG5ldyBWQ29uc29sZSgpXG48L3NjcmlwdD5cbiAgICAgIGBcbiAgICAgIGJyZWFrXG4gIH1cbiAgY29uc3QgbG9hZGluZ1NjcmlwdCA9IGBcbjxzY3JpcHQ+XG4oZnVuY3Rpb24oKXtcbiAgaWYoISF3aW5kb3cuQWN0aXZlWE9iamVjdCB8fCBcIkFjdGl2ZVhPYmplY3RcIiBpbiB3aW5kb3cpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnJvd3Nlci11cGdyYWRlJykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgfSBlbHNlIHtcbiAgICB2YXIgTG9hZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nJylcbiAgICBMb2FkaW5nLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKVxuICAgIExvYWRpbmcuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBMb2FkaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKVxuICAgICAgfSwgNjAwKVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgTG9hZGluZy5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJylcbiAgICAgIH0sIDEwMDApXG4gICAgfSlcbiAgfVxufSkoKVxuPC9zY3JpcHQ+XG4gIGBcbiAgY29uc3QgaHRtbCA9IGNyZWF0ZUh0bWxQbHVnaW4oe1xuICAgIGluamVjdDoge1xuICAgICAgZGF0YToge1xuICAgICAgICB0aXRsZTogVklURV9HTE9CX0FQUF9USVRMRSxcbiAgICAgICAgY29weXJpZ2h0U2NyaXB0LFxuICAgICAgICBsb2FkaW5nU2NyaXB0LFxuICAgICAgICBkZXZ0b29sU2NyaXB0LFxuICAgICAgfSxcbiAgICB9LFxuICAgIG1pbmlmeTogaXNCdWlsZCxcbiAgfSlcbiAgcmV0dXJuIGh0bWxcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3lpbnppL2h1bWFuX21hcF9iaWdkYXRhL2J1aWxkL3ZpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3Byb3h5LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL3Byb3h5LnRzXCI7LypcbiAqIEBBdXRob3I6IERhaVl1XG4gKiBARGF0ZTogMjAyMi0xMC0xMyAxMTowNTozMFxuICogQExhc3RFZGl0b3JzOiBEYWlZdVxuICogQExhc3RFZGl0VGltZTogMjAyMi0xMC0xOSAwOTo1MTo1NlxuICogQEZpbGVQYXRoOiBcXGJ1aWxkXFx2aXRlXFxwcm94eS50c1xuICovXG5pbXBvcnQgeyBBUElfUFJFRklYLCBBUElfQkFTRV9VUkwgfSBmcm9tICcuLi9jb25zdGFudCdcbmltcG9ydCB7IFByb3h5T3B0aW9ucyB9IGZyb20gJ3ZpdGUnXG50eXBlIFByb3h5VGFyZ2V0TGlzdCA9IFJlY29yZDxzdHJpbmcsIFByb3h5T3B0aW9ucz5cblxuY29uc3QgaW5pdDogUHJveHlUYXJnZXRMaXN0ID0ge1xuICAvLyB0ZXN0XG4gIFtBUElfUFJFRklYXToge1xuICAgIHRhcmdldDogQVBJX0JBU0VfVVJMLFxuICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICByZXdyaXRlOiBwYXRoID0+IHBhdGgucmVwbGFjZShuZXcgUmVnRXhwKGBeJHtBUElfQkFTRV9VUkx9YCksICcnKSxcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdFxuIiwgIntcblx0XCJuYW1lXCI6IFwidnVlMy1tb2JpbGVcIixcblx0XCJ0eXBlXCI6IFwibW9kdWxlXCIsXG5cdFwidmVyc2lvblwiOiBcIjAuMC4xXCIsXG5cdFwicHJpdmF0ZVwiOiB0cnVlLFxuXHRcInBhY2thZ2VNYW5hZ2VyXCI6IFwicG5wbUA4LjE1LjlcIixcblx0XCJhdXRob3JcIjoge1xuXHRcdFwibmFtZVwiOiBcImRhaXl1XCIsXG5cdFx0XCJlbWFpbFwiOiBcIjYwMzYwNzQ0NkBxcS5jb21cIlxuXHR9LFxuXHRcImhvbWVwYWdlXCI6IFwiXCIsXG5cdFwicmVwb3NpdG9yeVwiOiBcIlwiLFxuXHRcImVuZ2luZXNcIjoge1xuXHRcdFwibm9kZVwiOiBcIj49MThcIlxuXHR9LFxuXHRcInNjcmlwdHNcIjoge1xuXHRcdFwiZGV2XCI6IFwidml0ZVwiLFxuXHRcdFwiYnVpbGQ6ZGV2XCI6IFwidnVlLXRzYyAtLW5vRW1pdCAmJiB2aXRlIGJ1aWxkIC0tbW9kZSBkZXZlbG9wbWVudFwiLFxuXHRcdFwiYnVpbGRcIjogXCJ2aXRlIGJ1aWxkIC0tbW9kZSBwcm9kdWN0aW9uXCIsXG5cdFx0XCJ0eXBlY2hlY2tcIjogXCJucHggdnVlLXRzYyAtLW5vRW1pdFwiLFxuXHRcdFwicHJldmlld1wiOiBcIm5wbSBydW4gYnVpbGQgJiYgdml0ZSBwcmV2aWV3XCIsXG5cdFx0XCJkZXBzOmZyZXNoXCI6IFwibnB4IHRhemUgLXdcIixcblx0XHRcImRlcHM6ZnJlc2g6bWFqb3JcIjogXCJucHggdGF6ZSBtYWpvciAtd1wiLFxuXHRcdFwiZGVwczpmcmVzaDptaW5vclwiOiBcIm5weCB0YXplIG1pbm9yIC13XCIsXG5cdFx0XCJkZXBzOmZyZXNoOnBhdGNoXCI6IFwibnB4IHRhemUgcGF0Y2ggLXdcIixcblx0XHRcInByZWluc3RhbGxcIjogXCJucHggb25seS1hbGxvdyBwbnBtXCIsXG5cdFx0XCJlc2xpbnRcIjogXCJlc2xpbnQgLS1leHQgLmpzLC52dWUsLnRzIC0taWdub3JlLXBhdGggLmVzbGludGlnbm9yZSAtLWZpeCBzcmNcIixcblx0XHRcInByZXBhcmVcIjogXCJodXNreSBpbnN0YWxsXCIsXG5cdFx0XCJjaGFuZ2Vsb2dcIjogXCJjb252ZW50aW9uYWwtY2hhbmdlbG9nIC1wIGFuZ3VsYXIgLWkgQ0hBTkdFTE9HLm1kIC1zIC1yIDBcIlxuXHR9LFxuXHRcImRlcGVuZGVuY2llc1wiOiB7XG5cdFx0XCJAYW1hcC9hbWFwLWpzYXBpLWxvYWRlclwiOiBcIl4xLjAuMVwiLFxuXHRcdFwiQGFtYXAvYW1hcC1qc2FwaS10eXBlc1wiOiBcIl4wLjAuMTVcIixcblx0XHRcIkB2dWV1c2UvY29yZVwiOiBcIl4xMC4xMS4xXCIsXG5cdFx0XCJAdnVldXNlL3NoYXJlZFwiOiBcIl4xMC4xMS4xXCIsXG5cdFx0XCJhbmltYXRlLmNzc1wiOiBcIl40LjEuMVwiLFxuXHRcdFwiYXhpb3NcIjogXCJeMS43LjdcIixcblx0XHRcImJldHRlci1zY3JvbGxcIjogXCJeMi41LjFcIixcblx0XHRcImNyeXB0by1qc1wiOiBcIl40LjIuMFwiLFxuXHRcdFwiZGF5anNcIjogXCJeMS4xMS4xM1wiLFxuXHRcdFwiZWNoYXJ0c1wiOiBcIl41LjUuMVwiLFxuXHRcdFwibG9kYXNoLWVzXCI6IFwiXjQuMTcuMjFcIixcblx0XHRcIm1pdHRcIjogXCJeMy4wLjFcIixcblx0XHRcIm5vcm1hbGl6ZS5jc3NcIjogXCJeOC4wLjFcIixcblx0XHRcIm5wcm9ncmVzc1wiOiBcIl4wLjIuMFwiLFxuXHRcdFwicGluaWFcIjogXCJeMi4yLjJcIixcblx0XHRcInFzXCI6IFwiXjYuMTMuMFwiLFxuXHRcdFwic3dpcGVyXCI6IFwiXjExLjEuMTRcIixcblx0XHRcInZhbnRcIjogXCI0LjguMTFcIixcblx0XHRcInZjb25zb2xlXCI6IFwiXjMuMTUuMVwiLFxuXHRcdFwidnVlXCI6IFwiXjMuNS4xMFwiLFxuXHRcdFwidnVlLXJvdXRlclwiOiBcIl40LjQuNVwiLFxuXHRcdFwieGdwbGF5ZXJcIjogXCJeMy4wLjIwXCJcblx0fSxcblx0XCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuXHRcdFwiQGFudGZ1L2VzbGludC1jb25maWdcIjogXCJeMi4yNy4zXCIsXG5cdFx0XCJAY29tbWl0bGludC9jbGlcIjogXCJeMTkuNS4wXCIsXG5cdFx0XCJAY29tbWl0bGludC9jb25maWctY29udmVudGlvbmFsXCI6IFwiXjE5LjUuMFwiLFxuXHRcdFwiQHR5cGVzL2JldHRlci1zY3JvbGxcIjogXCJeMS4xMi43XCIsXG5cdFx0XCJAdHlwZXMvY3J5cHRvLWpzXCI6IFwiXjQuMi4yXCIsXG5cdFx0XCJAdHlwZXMvbG9kYXNoLWVzXCI6IFwiXjQuMTcuMTJcIixcblx0XHRcIkB0eXBlcy9ub2RlXCI6IFwiXjIwLjE2LjEwXCIsXG5cdFx0XCJAdHlwZXMvbnByb2dyZXNzXCI6IFwiXjAuMi4zXCIsXG5cdFx0XCJAdHlwZXMvcXNcIjogXCJeNi45LjE2XCIsXG5cdFx0XCJAdHlwZXNjcmlwdC1lc2xpbnQvZXNsaW50LXBsdWdpblwiOiBcIl43LjE4LjBcIixcblx0XHRcIkB0eXBlc2NyaXB0LWVzbGludC9wYXJzZXJcIjogXCJeNy4xOC4wXCIsXG5cdFx0XCJAdW5vY3NzL2VzbGludC1jb25maWdcIjogXCJeMC41OS40XCIsXG5cdFx0XCJAdW5vY3NzL2VzbGludC1wbHVnaW5cIjogXCJeMC41OS40XCIsXG5cdFx0XCJAdml0ZWpzL3BsdWdpbi1sZWdhY3lcIjogXCJeNS40LjJcIixcblx0XHRcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiOiBcIl41LjEuNFwiLFxuXHRcdFwiQHZpdGVqcy9wbHVnaW4tdnVlLWpzeFwiOiBcIl4zLjEuMFwiLFxuXHRcdFwiYXV0b3ByZWZpeGVyXCI6IFwiXjEwLjQuMjBcIixcblx0XHRcImNuam0tcG9zdGNzcy1weC10by12aWV3cG9ydFwiOiBcIl4xLjAuMVwiLFxuXHRcdFwiY29udmVudGlvbmFsLWNoYW5nZWxvZy1jbGlcIjogXCJeNC4xLjBcIixcblx0XHRcImVzbGludFwiOiBcIl44LjU3LjFcIixcblx0XHRcImVzbGludC1jb25maWctcHJldHRpZXJcIjogXCJeOS4xLjBcIixcblx0XHRcImVzbGludC1kZWZpbmUtY29uZmlnXCI6IFwiXjIuMS4wXCIsXG5cdFx0XCJlc2xpbnQtcGx1Z2luLWZvcm1hdFwiOiBcIl4wLjEuMlwiLFxuXHRcdFwiZXNsaW50LXBsdWdpbi1wcmV0dGllclwiOiBcIl41LjIuMVwiLFxuXHRcdFwiZXNsaW50LXBsdWdpbi12dWVcIjogXCJeOS4yOC4wXCIsXG5cdFx0XCJodXNreVwiOiBcIl45LjEuNlwiLFxuXHRcdFwibGVzc1wiOiBcIl40LjIuMFwiLFxuXHRcdFwibGludC1zdGFnZWRcIjogXCJeMTUuMi4xMFwiLFxuXHRcdFwicG9zdGNzc1wiOiBcIl44LjQuNDdcIixcblx0XHRcInBvc3Rjc3MtbW9iaWxlLWZvcmV2ZXJcIjogXCJeNC4xLjZcIixcblx0XHRcInByZXR0aWVyXCI6IFwiXjMuMy4zXCIsXG5cdFx0XCJyb2xsdXBcIjogXCJeNC4yMi41XCIsXG5cdFx0XCJyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXJcIjogXCJeNS4xMi4wXCIsXG5cdFx0XCJ0eXBlc2NyaXB0XCI6IFwiXjUuNi4yXCIsXG5cdFx0XCJ1bm9jc3NcIjogXCJebGF0ZXN0XCIsXG5cdFx0XCJ1bnBsdWdpbi1hdXRvLWltcG9ydFwiOiBcIl4wLjE3LjhcIixcblx0XHRcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzXCI6IFwiXjAuMjYuMFwiLFxuXHRcdFwidml0ZVwiOiBcIl41LjQuOFwiLFxuXHRcdFwidml0ZS1wbHVnaW4tY29tcHJlc3Npb25cIjogXCJeMC41LjFcIixcblx0XHRcInZpdGUtcGx1Z2luLWh0bWxcIjogXCJeMy4yLjJcIixcblx0XHRcInZpdGUtcGx1Z2luLWltYWdlbWluXCI6IFwiXjAuNi4xXCIsXG5cdFx0XCJ2aXRlLXBsdWdpbi1pbnNwZWN0XCI6IFwiXjAuOC43XCIsXG5cdFx0XCJ2aXRlLXBsdWdpbi1ta2NlcnRcIjogXCJeMS4xNy42XCIsXG5cdFx0XCJ2aXRlLXBsdWdpbi1wYWdlc1wiOiBcIl4wLjMyLjNcIixcblx0XHRcInZpdGUtcGx1Z2luLXByb2dyZXNzXCI6IFwiXjAuMC43XCIsXG5cdFx0XCJ2aXRlLXBsdWdpbi1zdHlsZS1pbXBvcnRcIjogXCJeMi4wLjBcIixcblx0XHRcInZpdGUtcGx1Z2luLXN2Zy1pY29uc1wiOiBcIl4yLjAuMVwiLFxuXHRcdFwidml0ZS1wbHVnaW4tdmNvbnNvbGVcIjogXCJeMi4xLjFcIixcblx0XHRcInZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29sc1wiOiBcIl43LjQuNlwiLFxuXHRcdFwidml0ZS1wbHVnaW4tdnVlLWltYWdlc1wiOiBcIl4wLjYuMVwiLFxuXHRcdFwidnVlLWVzbGludC1wYXJzZXJcIjogXCJeOS40LjNcIixcblx0XHRcInZ1ZS10c2NcIjogXCJeMi4xLjZcIlxuXHR9LFxuXHRcInBucG1cIjoge1xuXHRcdFwicGVlckRlcGVuZGVuY3lSdWxlc1wiOiB7XG5cdFx0XHRcImlnbm9yZU1pc3NpbmdcIjogW1xuXHRcdFx0XHRcInRlcnNlclwiXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxuXHRcInJlc29sdXRpb25zXCI6IHtcblx0XHRcImJpbi13cmFwcGVyXCI6IFwibnBtOmJpbi13cmFwcGVyLWNoaW5hXCIsXG5cdFx0XCJnaWZzaWNsZVwiOiBcIjUuMi4wXCJcblx0fSxcblx0XCJsaW50LXN0YWdlZFwiOiB7XG5cdFx0XCIqXCI6IFwiZXNsaW50IC0tZml4XCJcblx0fVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveWluemkvaHVtYW5fbWFwX2JpZ2RhdGEvYnVpbGQvdml0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3lpbnppL2h1bWFuX21hcF9iaWdkYXRhL2J1aWxkL3ZpdGUvZW52LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy95aW56aS9odW1hbl9tYXBfYmlnZGF0YS9idWlsZC92aXRlL2Vudi50c1wiOy8qXG4gKiBAQXV0aG9yOiBEYWlZdVxuICogQERhdGU6IDIwMjItMTAtMTUgMDk6MzU6MTVcbiAqIEBMYXN0RWRpdG9yczogRGFpWXVcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjItMTAtMTUgMTQ6NTY6NDJcbiAqIEBGaWxlUGF0aDogXFxidWlsZFxcdml0ZVxcZW52LnRzXG4gKi9cbmNvbnN0IHsgTk9ERV9FTlYgfSA9IHByb2Nlc3MuZW52XG5cbi8vIFx1NjYyRlx1NTQyNlx1NjYyRlx1NUYwMFx1NTNEMVx1NzNBRlx1NTg4M1xuZXhwb3J0IGNvbnN0IGlzRGV2ZWxvcG1lbnQgPSBOT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J1xuXG4vLyBcdTY2MkZcdTU0MjZcdTY2MkZcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcbmV4cG9ydCBjb25zdCBpc1Byb2R1Y3Rpb24gPSBOT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG5cbi8vIFx1ODNCN1x1NTNENlx1NzNBRlx1NTg4M1x1NTNEOFx1OTFDRlxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBwZXJFbnYoZW52Q29uZjogUmVjb3JkYWJsZSk6IFZpdGVFbnYge1xuICBjb25zdCByZXQ6IGFueSA9IHt9XG5cbiAgZm9yIChjb25zdCBlbnZOYW1lIG9mIE9iamVjdC5rZXlzKGVudkNvbmYpKSB7XG4gICAgbGV0IHJlYWxOYW1lID0gZW52Q29uZltlbnZOYW1lXS5yZXBsYWNlKC9cXFxcbi9nLCAnXFxuJylcbiAgICByZWFsTmFtZSA9IHJlYWxOYW1lID09PSAndHJ1ZScgPyB0cnVlIDogcmVhbE5hbWUgPT09ICdmYWxzZScgPyBmYWxzZSA6IHJlYWxOYW1lXG5cbiAgICBpZiAoZW52TmFtZSA9PT0gJ1ZJVEVfUE9SVCcpIHtcbiAgICAgIHJlYWxOYW1lID0gTnVtYmVyKHJlYWxOYW1lKVxuICAgIH1cbiAgICBpZiAoZW52TmFtZSA9PT0gJ1ZJVEVfUFJPWFknICYmIHJlYWxOYW1lKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZWFsTmFtZSA9IEpTT04ucGFyc2UocmVhbE5hbWUucmVwbGFjZSgvJy9nLCAnXCInKSlcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlYWxOYW1lID0gJydcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0W2Vudk5hbWVdID0gcmVhbE5hbWVcbiAgICBpZiAodHlwZW9mIHJlYWxOYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgcHJvY2Vzcy5lbnZbZW52TmFtZV0gPSByZWFsTmFtZVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlYWxOYW1lID09PSAnb2JqZWN0Jykge1xuICAgICAgcHJvY2Vzcy5lbnZbZW52TmFtZV0gPSBKU09OLnN0cmluZ2lmeShyZWFsTmFtZSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldFxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQU9BLFNBQVMsZUFBZTtBQUV4QixTQUFTLGNBQWMsZUFBZTtBQUN0QyxPQUFPLFdBQVc7OztBQ0VsQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sMkJBQTJCO0FBQ2xDLE9BQU8sWUFBWTtBQUNuQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8saUJBQWlCOzs7QUNQeEIsU0FBUyw0QkFBNEI7QUFDckMsT0FBTyxVQUFVO0FBRVYsSUFBTSx1QkFBdUIsQ0FBQyxZQUFxQjtBQUN4RCxTQUFPLHFCQUFxQjtBQUFBO0FBQUEsSUFFMUIsVUFBVSxDQUFDLEtBQUssUUFBUSxRQUFRLElBQUksR0FBRyxzQkFBc0IsQ0FBQztBQUFBO0FBQUEsSUFFOUQsVUFBVTtBQUFBLElBQ1YsYUFBYTtBQUFBLEVBQ2YsQ0FBQztBQUNIOzs7QUNYQSxPQUFPLGdCQUFnQjtBQUN2QixTQUFTLG9CQUFvQjtBQUN0QixJQUFNLHlCQUF5QixNQUFNO0FBQzFDLFNBQU8sV0FBVztBQUFBLElBQ2hCLE1BQU0sQ0FBQyxnQkFBZ0I7QUFBQSxJQUN2QixZQUFZLENBQUMsS0FBSztBQUFBLElBQ2xC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
