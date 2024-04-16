// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
	{
		ignores: [],
		vue: true,
		typescript: true,
		unocss: true,
		stylistic: {
			indent:	'tab', // 2 , 4, or 'tab'
			quotes:	'single', // or 'double'
		},
		// 使用外部格式化程序来格式化 ESLint 无法处理的文件（ .css 、 .html 等）
		formatters: {
			css: true,
			html: true,
			markdown: 'prettier',
		},
		rules: {
			'no-console': 'off',
			// 'no-mixed-spaces-and-tabs': 'off',
			// 强制组件顶级元素的顺序
			'vue/block-order': [
				'error',
				{
					order: ['template', 'script', 'style'],
				},
			],
			// 			// 禁止未使用的变量
			'no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],
			'max-params': ['error', 4],
			// 代码块嵌套的深度禁止超过 4 层
			'max-depth': ['error', 4],
			// 回调函数嵌套禁止超过 3 层，多了请用 async await 替代
			'max-nested-callbacks': ['error', 4],
			// 禁止使用 Array 构造函数时传入的参数超过一个
			// 参数为多个时表示创建一个指定内容的数组，此时可以用数组字面量实现，不必使用构造函数
			'no-array-constructor': 'error',
			// 禁止 if else 的条件判断中出现重复的条件
			'no-dupe-else-if': 'error',
			// 禁止出现空代码块，允许 catch 为空代码块
			'no-empty': [
				'error',
				{
					allowEmptyCatch: true,
				},
			],
			// 禁止出现没必要的字符串连接
			'no-useless-concat': 'error',
			// 禁止使用 var
			'no-var': 'error',
			// 禁止变量申明时用逗号一次申明多个
			'one-var': ['error', 'never'],
			// 必须使用 ... 而不是 Object.assign，除非 Object.assign 的第一个参数是一个变量
			'prefer-object-spread': 'error',
			// 回调函数必须使用箭头函数
			'prefer-arrow-callback': 'error',
			// "stroustrup"：强制一致的大括号风格，左括号必须与控制语句在同一行开始，右括号必须独占一行。
			'brace-style': ['error', 'stroustrup'],
			// 强制使用 node 全局变量 process 而不是 require("process") 。
			'node/prefer-global/process': 'off',
			// 对所有控制语句强制执行一致的大括号样式，（只有一行的时候eslint默认是不需要大括号的，这样会降低代码清晰度）
			'curly': ['error', 'all'],
		},
	},
)

// // 配置文档: https://eslint.nodejs.cn/
// import { defineFlatConfig } from "eslint-define-config";
// import * as parserVue from "vue-eslint-parser";
// import pluginVue from "eslint-plugin-vue";
// import configPrettier from "eslint-config-prettier";
// import pluginPrettier from "eslint-plugin-prettier";
// import * as parserTypeScript from "@typescript-eslint/parser";
// import pluginTypeScript from "@typescript-eslint/eslint-plugin";
// import js from "@eslint/js";

// /** @type {import('eslint-define-config').FlatESLintConfig} */
// export default defineFlatConfig([
// 	{
// 		...js.configs.recommended,
// 		ignores: ["src/assets/**"],
// 		plugins: {
// 			prettier: pluginPrettier,
// 		},
// 		rules: {
// 			...configPrettier.rules,
// 			...pluginPrettier.configs.recommended.rules,
// 			/*
// 			 * Eslint规则配置
// 			 * 配置文档: https://eslint.nodejs.cn/docs/latest/rules/
// 			 */
// 			// 需要 let 或 const 而不是 var
// 			"no-var": "error",
// 			// 禁止在定义变量之前使用变量
// 			"no-use-before-define": "off",
// 			// 声明后永远不会重新分配的变量需要 const 声明
// 			"prefer-const": "error",
// 			// 禁止不规则空格
// 			"no-irregular-whitespace": "off",
// 			// 禁止使用 debugger
// 			"no-debugger": "off",
// 			// 禁止未使用的变量
// 			"no-unused-vars": [
// 				"error",
// 				{
// 					argsIgnorePattern: "^_",
// 					varsIgnorePattern: "^_",
// 				},
// 			],
// 			// 使用 prettier 插件
// 			"prettier/prettier": [
// 				"error",
// 				{
// 					endOfLine: "auto",
// 				},
// 			],
// 		},
// 	},
// 	{
// 		files: ["**/*.?([cm])ts", "**/*.?([cm])tsx"],
// 		languageOptions: {
// 			parser: parserTypeScript,
// 			parserOptions: {
// 				ecmaVersion: 2020,
// 				sourceType: "module",
// 				jsxPragma: "React",
// 				ecmaFeatures: {
// 					jsx: true,
// 				},
// 			},
// 		},
// 		plugins: {
// 			"@typescript-eslint": pluginTypeScript,
// 		},
// 		rules: {
// 			...pluginTypeScript.configs.recommended.rules,
// 			/*
// 			 * TypeScript规则配置
// 			 * 配置文档: https://typescript-eslint.nodejs.cn/rules/)
// 			 */
// 			// 根据参数、属性和变量的默认值或初始值推断其类型
// 			"@typescript-eslint/no-inferrable-types": "off",
// 			// 禁止使用自定义 ts 模块和命名空间
// 			"@typescript-eslint/no-namespace": "off",
// 			// 禁止使用 any 类型
// 			"@typescript-eslint/no-explicit-any": "off",
// 			// 禁止使用特定类型
// 			"@typescript-eslint/ban-types": "off",
// 			// 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式返回类型声明
// 			"@typescript-eslint/explicit-function-return-type": "off",
// 			// 不允许在 import 语句中使用 require 语句
// 			"@typescript-eslint/no-var-requires": "off",
// 			// 禁止空函数
// 			"@typescript-eslint/no-empty-function": "off",
// 			// 禁止在变量定义之前使用它们
// 			"@typescript-eslint/no-use-before-define": "off",
// 			// 禁止 @ts-<directive> 注释代码
// 			"@typescript-eslint/ban-ts-comment": "off",
// 			// 不允许使用后缀运算符的非空断言(!)
// 			"@typescript-eslint/no-non-null-assertion": "off",
// 			// 要求导出函数和类的公共类方法的显式返回和参数类型
// 			"@typescript-eslint/explicit-module-boundary-types": "off",
// 			// 使用顶层 type 限定符进行导入
// 			"@typescript-eslint/no-import-type-side-effects": "error",
// 			// 不允许在可选链表达式后使用非空断言
// 			"@typescript-eslint/no-non-null-asserted-optional-chain": "off",
// 			// 禁止定义未使用的变量
// 			"@typescript-eslint/no-unused-vars": [
// 				"warn",
// 				{
// 					argsIgnorePattern: "^_",
// 					varsIgnorePattern: "^_",
// 				},
// 			],
// 			// 允许在导入上指定 type 关键字
// 			"@typescript-eslint/consistent-type-imports": [
// 				"error",
// 				{
// 					disallowTypeAnnotations: false,
// 					fixStyle: "inline-type-imports",
// 				},
// 			],
// 			// 允许枚举成员的值是多种不同类型的有效 js 表达式
// 			"@typescript-eslint/prefer-literal-enum-member": [
// 				"error",
// 				{
// 					allowBitwiseExpressions: true,
// 				},
// 			],
// 		},
// 	},
// 	{
// 		files: ["*.d.ts"],
// 		rules: {
// 			"eslint-comments/no-unlimited-disable": "off",
// 			"import/no-duplicates": "off",
// 			"unused-imports/no-unused-vars": "off",
// 		},
// 	},
// 	{
// 		files: ["*.?([cm])js"],
// 		rules: {
// 			"@typescript-eslint/no-require-imports": "off",
// 			"@typescript-eslint/no-var-requires": "off",
// 		},
// 	},
// 	{
// 		files: ["**/*.vue"],
// 		languageOptions: {
// 			parser: parserVue,
// 			parserOptions: {
// 				parser: "@typescript-eslint/parser",
// 				ecmaVersion: 2020,
// 				sourceType: "module",
// 				jsxPragma: "React",
// 				ecmaFeatures: {
// 					jsx: true,
// 				},
// 				extraFileExtensions: [".vue"],
// 			},
// 		},
// 		plugins: {
// 			vue: pluginVue,
// 		},
// 		processor: pluginVue.processors[".vue"],
// 		rules: {
// 			...pluginVue.configs.base.rules,
// 			...pluginVue.configs["vue3-essential"].rules,
// 			...pluginVue.configs["vue3-recommended"].rules,
// 			/*
// 			 * Vue规则配置
// 			 * 配置文档: https://eslint.vuejs.org/rules/)
// 			 */
// 			// 禁止 v-for 指令或作用域属性的未使用变量定义
// 			"vue/no-unused-vars": "off",
// 			// 禁止使用 V-HTML 来防止 XSS 攻击
// 			"vue/no-v-html": "off",
// 			// 禁止强制执行属性的顺序
// 			"vue/attributes-order": "off",
// 			// 禁止必须设置 props 的默认值
// 			"vue/require-default-prop": "off",
// 			// 禁止强制每个组件都应位于其自己的文件中
// 			"vue/one-component-per-file": "off",
// 			// 禁止计算属性中的副作用
// 			"vue/no-side-effects-in-computed-properties": "off",
// 			// 禁止在组件定义中使用保留名称
// 			"vue/no-reserved-component-names": "off",
// 			// 禁止在模板中的自定义组件上强制实施属性命名样式
// 			"vue/attribute-hyphenation": "off",
// 			// 禁止必须设置 props 的默认值
// 			"vue/require-default-prop": "off",
// 			// 禁止要求组件名称始终为多个字母
// 			"vue/multi-word-component-names": "off",
// 			// 禁止强制执行每行的最大属性数
// 			"vue/max-attributes-per-line": "off",
// 			// 禁止要求在单行元素的内容之前和之后使用换行符
// 			"vue/singleline-html-element-content-newline": "off",
// 			// 禁止强制执行元素自闭合
// 			"vue/html-self-closing": [
// 				"error",
// 				{
// 					html: {
// 						void: "always",
// 						normal: "always",
// 						component: "always",
// 					},
// 					svg: "always",
// 					math: "always",
// 				},
// 			],
// 		},
// 	},
// ]);
