<script>
	const collection = "hello";
	export default {
		data() {
			return {
				name: "",
			};
		},

		methods: {
			add() {
				uni.showLoading();
				const db = uniCloud.database();
				db.collection(collection)
					.add({
						name: this.name,
					})
					.then((res) => {
						uni.showToast({
							title: this.$t("schema.add-success"),
						});
					})
					.catch((err) => {
						uni.showModal({
							content: err.message,
							showCancel: false,
						});
					})
					.finally(() => {
						uni.hideLoading();
					});
			},
		},
	};
</script>

<template>
	<view class="container">
		<view>{{ $t("schema.name") }}</view>
		<input
			v-model="name"
			class="input" />
		<button
			type="primary"
			@tap="add"
			>{{ $t("schema.add") }}</button
		>
	</view>
</template>

<style lang="scss">
	.input {
		border: 1px solid #ebebeb;
		border-radius: 3px;
		margin-top: 15px;
		margin-bottom: 15px;
		padding: 8px;
	}
</style>
