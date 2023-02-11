<template>
	<view class="setting-containner">
		<view class="ipt">
			<u-input v-model="value" :type="type" :border="border" placeholder="格式:127.0.0.1:8080"/>
			<u-button type="primary" class="save" @tap='setData'>保存</u-button>
		</view>
	
	</view>
</template>

<script>
	import {mapState} from 'vuex';
	export default {
		data() {
			return {
				value: '',
				type: 'text',
				border: true
			}
		},
		computed: {
		    ...mapState(['location', 'checkout']), //展开storage里的数据属性
		},
		methods:{
			setData(){
				this.$u.vuex('IP', this.value);
				this.IP=this.location.IP
				console.log(IP);
			}
		}
	}
</script>
<style>
	.setting-containner{
		width: 80%;
		margin: 80rpx auto;
	}
	.save{
		margin-top: 20rpx;
	}
</style>