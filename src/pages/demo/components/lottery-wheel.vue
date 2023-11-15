<template>
	<view class="re-flex-row-center re-mt-20">
		<LuckyWheel
			width="600rpx"
			height="600rpx"
			ref="luckyRef"
			:prizes="luckyOptions.prizes"
			:blocks="luckyOptions.blocks"
			:buttons="luckyOptions.buttons"
			@start="startLucky"
			@end="endLucky"
		></LuckyWheel>
	</view>
</template>

<script setup name="">
	import LuckyWheel from "@lucky-canvas/uni/lucky-wheel";
	import { reactive, ref, watch } from "vue";
	import { onHide } from "@dcloudio/uni-app";

	const props = defineProps({
		dataList: {
			required: true,
			type: Array,
			default: () => {
				return [];
			},
		},
	});

	const luckyRef = ref();
	const luckyOptions = reactive({
		prizes: [
			{ background: "#e9e8fe", fonts: [{ text: "旅游" }] },
			{ background: "#b8c5f2", fonts: [{ text: "游乐场" }] },
			{ background: "#e9e8fe", fonts: [{ text: "商场" }] },
			{ background: "#b8c5f2", fonts: [{ text: "吃吃吃" }] },
			{ background: "#e9e8fe", fonts: [{ text: "爬山" }] },
			{ background: "#b8c5f2", fonts: [{ text: "游泳" }] },
		],
		blocks: [{ padding: "10px", background: "#869cfa" }],
		buttons: [
			{ radius: "40%", background: "#617df2" },
			{ radius: "35%", background: "#afc8ff" },
			{
				radius: "30%",
				background: "#869cfa",
				pointer: true,
				fonts: [{ text: "开始", top: "-10px" }],
			},
		],
	});

	const startLucky = () => {
		luckyRef.value.play();
		setTimeout(() => {
			const index = (Math.random() * 6) >> 0;
			luckyRef.value.stop(index);
		}, 2500);
	};
	const endLucky = (prize) => {
		console.log("抽到奖品为：", prize);
	};

	const setData = () => {
		const colors = ["#e9e8fe", "#b8c5f2"];
		console.log(colors, props.dataList);
		luckyOptions.prizes.push({ background: "#e9e8fe", fonts: [{ text: "1111" }] });
	};

	watch(
		props,
		() => {
			setData();
		},
		{
			deep: true,
		},
	);

	onHide(() => {
		luckyRef.value.stop(0);
	});
</script>

<style scoped lang="scss"></style>
