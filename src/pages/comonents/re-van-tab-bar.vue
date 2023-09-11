<template>
	<view>
		<van-tabbar :active="active" @change="changePage" :placeholder="true" active-color="#1989fa">
			<van-tabbar-item icon="home-o">首页</van-tabbar-item>
			<van-tabbar-item icon="description">文章</van-tabbar-item>
			<van-tabbar-item icon="coupon-o">API</van-tabbar-item>
			<van-tabbar-item icon="cashier-o">示例</van-tabbar-item>
		</van-tabbar>
	</view>
</template>

<script setup>
	import { onMounted, ref } from "vue";
	const props = defineProps({
		index: {
			required: false,
			type: Number,
			default: 0,
		},
	});
	const emits = defineEmits(["change"]);

	const active = ref(0);
	const changePage = (event) => {
		active.value = event.detail;
		emits("change", event.detail);
	};

	onMounted(() => {
		active.value = props.index;
	});
</script>

<style lang="scss"></style>
