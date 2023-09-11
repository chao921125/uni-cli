<template>
	<view v-if="!isLoading" class="re-wh-full re-wh-fill re-text-center welcome-box">
		<van-loading type="spinner" color="#1989fa">加载中...</van-loading>
	</view>
	<view v-else>
		<re-van-nav-bar title="首页" :isShowLeft="false"></re-van-nav-bar>
		<article v-if="tabBarIndex === 1"></article>
		<api v-else-if="tabBarIndex === 2"></api>
		<demo v-else-if="tabBarIndex === 3"></demo>
		<home v-else></home>
		<re-van-tab-bar :index="tabBarIndex" @change="changeIndex"></re-van-tab-bar>
	</view>
</template>

<script setup>
	import { onLoad } from "@dcloudio/uni-app";
	import { onMounted, ref } from "vue";
	import ReVanTabBar from "@/pages/comonents/re-van-tab-bar.vue";
	import ReVanNavBar from "@/pages/comonents/re-van-nav-bar.vue";
	import Home from "./home.vue";
	import Article from "./article.vue";
	import Api from "./api.vue";
	import Demo from "./demo.vue";

	const urlParams = ref();
	onLoad((option) => {
		urlParams.value = option.index || "";
	});

	const timer = ref(null);
	const isLoading = ref(false);
	onMounted(() => {
		timer.value = setTimeout(() => {
			isLoading.value = true;
			clearTimeout(timer.value);
			timer.value = null;
		}, 1500);
	});

	const tabBarIndex = ref(0);
	const changeIndex = (index) => {
		tabBarIndex.value = index;
	};

	const title = ref("Hello");
</script>

<style scoped lang="scss"></style>
