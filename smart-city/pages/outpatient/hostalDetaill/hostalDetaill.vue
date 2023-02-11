<template>
	<view class="hostalDetaill-container">
		<view class="IdCard" v-for="item in list">
			
			<view class="txt">
				<view class="txt-content1">
					预约订单号
				</view>
				<view class="txt-content">
					{{item.orderNo}}
				</view>
			</view>
			
			<view class="txt">
				<view class="txt-content1">
					预约金额
				</view>
				<view class="txt-content">
					{{item.money}}
				</view>
			</view>
			
			<view class="txt">
				<view class="txt-content1">
					就诊人
				</view>
				<view class="txt-content">
					{{item.patientName}}
				</view>
			</view>
			
			<view class="txt">
				<view class="txt-content1">
					预约科室
				</view>
				<view class="txt-content">
					<view v-if="item.type=='0'">专家号</view>
					<view v-if="item.type=='1'">普通号</view>
				</view>
			</view>
			
			<view class="txt">
				<view class="txt-content1">
					门诊类型
				</view>
				<view class="txt-content">
					{{item.categoryName}}
				</view>
			</view>
			
			<view class="txt">
				<view class="txt-content1">
					预约时间
				</view>
				<view class="txt-content">
					{{item.createTime}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			};
		},
		methods:{
			async init(){
				let {rows} = await this.$u.api.getHospitaIdList()
				this.list = rows
			}
		},
		onLoad() {
			this.init();
		}
	}
</script>

<style lang="less">
.hostalDetaill-container{
	padding: 20rpx;
}
.IdCard{
	width: 100%;
	display: flex;
	border-radius: 25rpx;
	box-shadow: #c2c2c2 2px 2px 10px;
	padding: 20rpx;
	align-items: center;
	margin-top: 20rpx;
	flex-direction: column;
	
	.txt{
		width: 100%;
		display: flex;
		justify-content: space-around;
		padding: 10rpx;
	}
	.txt-content1{
		flex: 1;
		text-align: center;
		color: #4a34f3;
	}
	.txt-content{
		flex: 1;
		text-align: left;
	}
}
</style>
