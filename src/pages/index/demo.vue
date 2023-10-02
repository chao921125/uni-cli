<template>
	<view class="container">
		<van-row gutter="20" class="re-mt-20">
			<van-col span="8">
				<view class="re-mb-10"><van-button class="re-mb-20" @click="toPage(router.DemoLottery)">抽奖</van-button></view>
			</van-col>
			<van-col span="12" class="re-mb-20">
				<view class="re-mb-10"><van-button class="re-mb-20" @click="toPage(router.DemoLuckyWheel)">抽奖（大转盘）</van-button></view>
			</van-col>
			<van-col span="12" class="re-mb-20">
				<view class="re-mb-10"><van-button class="re-mb-20" @click="toPage(router.DemoLuckyGrid)">抽奖（九宫格）</van-button></view>
			</van-col>
			<van-col span="12" class="re-mb-20">
				<view class="re-mb-10"><van-button class="re-mb-20" @click="toPage(router.DemoLuckyMachine)">抽奖（老虎机）</van-button></view>
			</van-col>
			<van-col span="8" class="re-mb-20">
				<view class="re-mb-10"><van-button class="re-mb-20" @click="toPage(router.DemoLanguage)">国际化</van-button></view>
			</van-col>
		</van-row>
	</view>
</template>

<script setup>
	import router from "@/config/router.js";

	const toPage = (url) => {
		uni.navigateTo({
			url: url,
		});
	};
</script>

<style lang="scss"></style>
