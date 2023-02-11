<template>
		<view class="content">
			<view class="content-item">
				<u-search placeholder="输入身份证进行查询" height="80" v-model="idcard" bg-color="#fff" :clearadble="true" :show-action="true" action-text="查询" :animation="true" @custom="getData"></u-search>
			</view>
			<view class="content1" v-if="flag">
				<view class="content-item" v-for="item in list">
					<view class="txt">
						<view class="txt-l">户主名:</view><view class="txt-f">{{item.ownerName}}</view>
					</view>
					<view class="txt">
						<view class="txt-l">家庭地址:</view><view class="txt-f">{{item.address}}</view>
					</view>
					<view class="txt">
						<view class="txt-l">缴费编号:</view><view class="txt-f">{{item.paymentNo}}</view>
					</view>
				</view>
			</view>
		</view>
		
</template>

<script>
	export default {
		data() {
			return {
				categoryId:"",
				idcard:"",
				list:[],
				flag:false
			};
		},
		methods: {
			async getData() {
				let obj = {
					categoryId:this.categoryId,
					idCard:this.idcard
				}
				let {data} = await this.$u.api.getIdData(obj)
				this.list = data
				if(this.list == ""){
					this.flag = false
					uni.showToast({
						title:"数据为空!"
					})
				}else{
					this.flag = true
				}
			}
		},
		onLoad(option) {
			this.categoryId = option.id;
		}
	}
</script>

<style lang="less">
	.content{
		width: 100%;
		height: calc(100vh - 90rpx);
		background-color: #e7e7e7;
		padding: 20rpx;
	}
	.content1 {
		width: 80%;
		height: 580rpx;
		margin: 20rpx auto;
		border-radius: 25rpx;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		
		overflow: hidden;
		background-color: #ffffff;
		padding: 20rpx;
		border:2rpx solid #ccc;
		box-shadow: #b5b5b5 1px 2px 10px 1px;
		.content-item {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			font-size: 18px;
			font-weight: 700;
			.txt {
				padding-left: 20rpx;
				padding-right: 20rpx;
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
			}
		}
		.txt-f{
			width: 100%;
			font-size: 15px;
			font-weight: 500;
		}
		.txt-l{
			width: 240rpx;
			display: flex;
			flex-direction: ;
			justify-content: space-between;
		}
	}
	
</style>
