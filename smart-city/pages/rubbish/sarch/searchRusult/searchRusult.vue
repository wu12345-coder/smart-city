<template>
	<view>
		<view class="search">
			<uni-search-bar placeholder="请输入关键词" v-model="ipt" @confirm="search"></uni-search-bar>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ipt:""
			}
		},
		methods: {
			async search(){
				let data = await this.$u.api.getSearchHotBish()
				console.log(data);
			}
		},
		onLoad(option) {
			this.ipt = option.ipt
		}
	}
</script>

<style>

</style>
