<template>
	<view>
		
		<view class="IdCard">
			<view class="ipt">
				<text>订单单号:</text>
				<input type="text" v-model="infoNo" placeholder="请输入单号">
			</view>
			<textarea cols="30" rows="10" v-model="description" placeholder="请输入投诉信息"></textarea>
			<view class="btn">
				<button type="primary" @click="goSure">物流投诉</button>
				<button type="warn" @click="getComplaint">获得所有投诉记录</button>
			</view>
			
			<view class="content" v-for="item in list">
				<view>
					物流单号:{{item.infoNo}}
				</view>
				<view>
					投诉内容:{{item.description}}
				</view>
				<view>
					时间:{{item.createTime}}
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				infoNo:"",
				description:"",
				questionType:"1",
				companyId:"",
				list:[],
			};
		},
		methods:{
			async goSure(id){
				let obj={
					companyId:this.companyId,
					infoNo:this.infoNo,
					questionType: "1",
					description:this.description
				}
				let data = await this.$u.api.setInquiry(obj);
				console.log(data);
				uni.showToast({
					title:data.msg
				})
			},
			async getComplaint(){
				let {rows} = await this.$u.api.getComplaint();
				this.list = rows
			},
		
			
			
		},
		onLoad(option) {
			this.companyId = option.id
		},
	}
</script>

<style lang="less">
input{
	width: 80%;
	border: 2rpx solid #ccc;
	padding: 20rpx;
	border-radius: 15rpx;
}
.ipt{
	width: 80%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	padding: 20rpx;
	text{
		width: 25%;
	}
}
textarea{
	width: 70%;
	margin: 0 auto;
	border: 2rpx solid #ccc;
	border-radius: 15rpx;
	padding: 20rpx;
}
.btn{
	margin-top: 40rpx;
	display: flex;
}
.content{
	width: 80%;
	margin: 0 auto;
	background-color: #f5f5f5;
	padding: 20rpx;
	margin-top: 20rpx;
	view{
		line-height: 60rpx;
	}
}
</style>
