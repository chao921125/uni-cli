<template>
	<re-van-nav-bar title="抽奖"></re-van-nav-bar>
	<view class="container">
		<view v-if="isInput">
			<view class="uni-title">请选择抽奖的方式</view>
			<view class="re-mt-10">
				<van-radio-group :value="data.lottery.type" direction="horizontal" @change="changeType">
					<van-radio name="1">大转盘</van-radio>
					<van-radio name="2">九宫格</van-radio>
					<van-radio name="3">老虎机</van-radio>
				</van-radio-group>
			</view>
			<view class="uni-title re-mt-20">请输入抽奖的内容（请用逗号或者空格分割）</view>
			<textarea
				class="lottery-text re-mt-10"
				placeholder="请输入抽奖的内容"
				auto-focus="true"
				:maxlength="-1"
				v-model="data.lottery.text"
				@input="textToArray()"
				@confirm="textToArray()"
			></textarea>
			<view class="uni-title re-mt-20">您输入的内容是</view>
			<view>{{ data.lottery.array }}</view>
			<view class="re-mt-20"><van-button @click="startLottery" type="info" block>开始抽奖</van-button></view>
		</view>
		<view v-if="!isInput">
			<van-button @click="backLottery">返回</van-button>
			<lottery-wheel v-if="data.lottery.type === '1'" :dataList="data.lottery.array"></lottery-wheel>
			<lottery-grid v-if="data.lottery.type === '2'" :dataList="data.lottery.array"></lottery-grid>
			<lottery-machine v-if="data.lottery.type === '3'" :dataList="data.lottery.array"></lottery-machine>
		</view>
	</view>
</template>

<script setup>
	import { reactive, ref } from "vue";
	import ReVanNavBar from "@/pages/comonents/re-van-nav-bar.vue";
	import LotteryGrid from "./components/lottery-grid.vue";
	import LotteryMachine from "./components/lottery-machine.vue";
	import LotteryWheel from "./components/lottery-wheel.vue";

	// 地球,火星,太阳,木星,金星,水星,火星,土星
	const data = reactive({
		lottery: {
			type: "1",
			text: "",
			array: [],
		},
	});

	const changeType = (event) => {
		data.lottery.type = event.detail;
	};

	const isInput = ref(true);

	const textToArray = () => {
		if (!data.lottery.text) data.lottery.array = [];
		const text = data.lottery.text
			.trim()
			.replace(/[,，\s]+$/, "")
			.replace(/^[,，\s]+/, "")
			.replace(/[,，\s]+/gi, ",");
		data.lottery.array = text.split(",");
	};

	const startLottery = () => {
		if (!data.lottery.text.length) {
			uni.showToast({
				icon: "none",
				title: "不能为空",
			});
			return false;
		}
		if (data.lottery.type === "1" && data.lottery.array.length < 4) {
			uni.showToast({
				icon: "none",
				title: "最少为4个",
			});
			return false;
		}
		if (data.lottery.type === "2" && data.lottery.array.length !== 8) {
			uni.showToast({
				icon: "none",
				title: "只能为8个",
			});
			return false;
		}
		if (data.lottery.type === "1" && data.lottery.array.length !== 9) {
			uni.showToast({
				icon: "none",
				title: "只能为9个",
			});
			return false;
		}
		isInput.value = false;
	};
	const backLottery = () => {
		isInput.value = true;
	};
</script>

<style lang="scss">
	.lottery-text {
		width: calc(100% - 20rpx);
		border: 1rpx solid #999;
		border-radius: 5rpx;
		padding: 10rpx;
	}
</style>
