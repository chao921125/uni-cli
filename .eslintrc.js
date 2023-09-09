// ESLint 检查 .vue 文件需要单独配置编辑器：
// https://eslint.vuejs.org/user-guide/#editor-integrations
module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es2022: true,
		"vue/setup-compiler-macros": true,
	},
	extends: ["plugin:vue/vue3-recommended"],
	parserOptions: {
		parser: "@typescript-eslint/parser",
		ecmaVersion: "latest",
		sourceType: "module",
		jsxPragma: "React",
		ecmaFeatures: {
			jsx: false,
		},
	},
	plugins: ["vue"],
	rules: {
		// eslint (http://eslint.cn/docs/rules)
		"no-console": "off", // 禁用 console
		"no-debugger": "off", // 禁用 debugger
		"no-irregular-whitespace": "off", // 禁止不规则的空白
		"no-case-declarations": "off", // 不允许在 case 子句中使用词法声明
		"no-use-before-define": "off", // 禁止在 函数/类/变量 定义之前使用它们
		"no-unused-vars": [
			"error",
			{
				vars: "all",
				args: "none",
				ignoreRestSiblings: false,
			},
		], // 禁止定义未使用的变量
		"space-before-function-paren": "off", // 强制在 function的左括号之前使用一致的空格
		"no-multiple-empty-lines": ["error", { max: 1 }], // 不允许多个空行
		"no-var": "error", // 要求使用 let 或 const 而不是 var
		"prefer-const": "off", // 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
	},
	globals: {
		uni: "readonly",
		plus: "readonly",
		getCurrentPages: "readonly",
		getApp: "readonly",
	},
	ignorePatterns: ["./pages.json", "uni_modules", "wxcomponents", "unpackage"],
};
