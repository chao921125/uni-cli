<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
		<uni-card>
			<text class="">这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。</text>
		</uni-card>
		<van-button>wode</van-button>
		<text class="s-btn">wode lalala</text>
	</view>
	<van-grid>
		<van-grid-item icon="photo-o" text="文字" />
		<van-grid-item icon="photo-o" text="文字" />
		<van-grid-item icon="photo-o" text="文字" />
		<van-grid-item icon="photo-o" text="文字" />
	</van-grid>
	<u-link>lalalal</u-link>
</template>

<script setup>
	import { ref } from "vue";
	import ULink from "@/components/u-link/u-link.vue";

	const title = ref("Hello");
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.s-btn {
			font-family: "PingFang Bold";
			font-size: 50rpx;
		}
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
