<template>
	<view class="container">
		<view v-for="(item, index) in listData" :key="item.key" class="re-mb-20">
			<uni-link color="#00ffff" :href="item.url" copyTips="" @click="toWeb(item.url)" @tap="toWeb(item.url)">{{ index + 1 }}、 {{ item.title }}</uni-link>
		</view>
	</view>
</template>

<script setup>
	import utils from "@/plugins/utils";

	const listData = [
		{
			key: "Windows",
			url: "https://mp.weixin.qq.com/s?__biz=MzU2MjY3MjQyMw==&mid=2247483684&idx=1&sn=3a4715ac1b673a1d2adb81a6bbd49988&chksm=fc64a76ccb132e7a1c02352852c622dedf818d9a34d6e973e7d1b7fad1f95adf586445a736b4#rd",
			title: "Windows 数字激活 HWID2",
		},
		{
			key: "office",
			url: "https://mp.weixin.qq.com/s?__biz=MzU2MjY3MjQyMw==&mid=2247483748&idx=1&sn=d18c5033017c421165473c7786e1213c&chksm=fc64a72ccb132e3a5732828263b2dac7fce2e875411f31ec5708f3e02ead12f9a116effaf742#rd",
			title: "白嫖 Office 正版，官网激活码",
		},
		{
			key: "JetBranins",
			url: "https://mp.weixin.qq.com/s?__biz=MzU2MjY3MjQyMw==&mid=2247483722&idx=1&sn=068c8f0d92ea5ec0539d183d2f732041&chksm=fc64a702cb132e1489243e5e25eb50781e467f2f3e6967c7dce4a30e09f7755d89f3bda9c56f#rd",
			title: "JetBranins 2023 全家桶激活",
		},
		{
			key: "Navicat",
			url: "https://mp.weixin.qq.com/s?__biz=MzU2MjY3MjQyMw==&mid=2247483715&idx=1&sn=3d6fa4979572ba3ab2854a10909ea0b7&chksm=fc64a70bcb132e1d6d52c74a15330940f1f3d08be1a4299843fa5ba9996bd154f3e968559c80#rd",
			title: "Navicat Premium 2023 Windows 激活",
		},
		{
			key: "WeiXinFriend",
			url: "https://mp.weixin.qq.com/s?__biz=MzU2MjY3MjQyMw==&mid=2247483684&idx=1&sn=3a4715ac1b673a1d2adb81a6bbd49988&chksm=fc64a76ccb132e7a1c02352852c622dedf818d9a34d6e973e7d1b7fad1f95adf586445a736b4#rd",
			title: "微信单向好友自动筛选",
		},
	];
	const toWeb = (url) => {
		utils.gotoPage("/pages/common/web?url=" + encodeURIComponent(url), false);
	};
</script>

<style lang="scss"></style>
