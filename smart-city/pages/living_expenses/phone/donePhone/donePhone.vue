<template>
	<view class="donePhone-container">
		<view class="content" v-for="item in list">
			<view class="content-item">
				<view class="txt">
					充值时间:{{item.rechargeTime}}
				</view>
				<view class="txt">
					充值方式:{{item.paymentType}}
				</view>
				<view class="txt">
					充值号码:{{item.phonenumber}}
				</view>
				<view class="txt">
					充值金额:{{item.rechargeAmount}}元
				</view>
			</view>
		</view>
		<u-button class="btn-more" @tap="getMore">加载更多</u-button>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoneList:[],
				index:0,
				list:[]
			}
		},
		methods: {
			async init(){
				let obj = {
					pageNum:1,
					pageSize:8
				}
				let {rows} =await this.$u.api.getRecordList(obj)
				this.phoneList = rows
				console.log(this.phoneList);
				this.getMore()
			},
			getMore(){
				this.index += 2 ;
				console.log(this.phoneList);
				var result = this.phoneList.slice(0,this.index);
				this.list = result
				if(this.index == this.phoneList.length){
					uni.showToast({
						title:"没有更多了~"
					})
				}
			},
		},
		onLoad() {
			this.init()
		}
	}
</script>

<style scoped lang="less">
.content {
		width: 80%;
		height: 480rpx;
		margin: 20rpx auto;
		border-radius: 25rpx;
		overflow: hidden;
		background-color: #ffffff;
		padding: 20rpx;
		border:2rpx solid #ccc;
		box-shadow: #b5b5b5 1px 2px 10px 1px;
	}
.content-item {
	height: 100rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	.txt {
		width: 100%;
		height: 80rpx;
		font-size: 18px;
		line-height: 80rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
	}
}
.donePhone-container{
	width: 100%;
	height: calc(100vh - 90px);
}
.btn-more{
	background-color: #1282ea;
	color: white;
	font-weight: 800;
	font-size: 18px
}
</style>
