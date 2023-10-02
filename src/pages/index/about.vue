<template>
	<view class="container">
		<view>
			<van-image :src="Icon" fit="contain" round width="100" height="100"></van-image>
		</view>
		<view>公众号：【CC NET】</view>
		<view class="re-flex">赞助我：<van-image :src="Pay" fit="contain" width="200" height="300"></van-image></view>
	</view>
</template>

<script setup>
	import Icon from "@/static/logo.png";
	import Pay from "@/static/pay.jpg";
	const toContact = () => {};
</script>

<style lang="scss"></style>
