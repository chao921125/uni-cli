<script>
	import config from "@/config/index";

	export default {
		globalData: {
			title: "CC APP",
		},
		// 只能在App.vue里监听应用的生命周期
		onLaunch: function () {
			config.loadFontFace();
			// 设置小程序分享
			wx.showShareMenu({
				withShareTicket: true,
				menus: ["shareAppMessage", "shareTimeline"],
			});
		},
		// 只能在App.vue里监听应用的生命周期
		onShow: function () {},
		// 只能在App.vue里监听应用的生命周期
		onHide: function () {
			console.log("App Hide");
		},
		onError: function () {
			console.log("App Error");
		},
		onUniNViewMessage: function () {
			console.log("App UniNViewMessage");
		},
		onUnhandledRejection: function () {
			console.log("App UnhandledRejection");
		},
		onPageNotFound: function () {
			console.log("App PageNotFound");
		},
		onThemeChange: function () {
			console.log("App ThemeChange");
		},
	};
</script>

<style lang="scss">
	/* 组件 */
	@import "@/wxcomponents/vant/common/index.wxss";
	// #ifdef H5
	/* 字体 */
	@import "@/static/fonts/index.css";
	/* 图标 */
	@import "@/static/iconfonts/iconfont/iconfont.css";
	// #endif
	/* 每个页面公共css */
	@import "@/static/styles/index.scss";
</style>
