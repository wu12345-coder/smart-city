<template>
	<view class="containner">
		<view class="IdCard">
			<view class="title">
				{{name}}
			</view>
			<input type="text" v-model="ipt" placeholder="请输入要捐助的金额">
			<button type="primary" @click="init">立即捐助</button>
			<button type="warn" @click="rule">捐助记录</button>
		</view>
		
		<view class="content">
			<view class="card" v-for="item in listRecord">
				<view class="icon">
					<u-icon name="account-fill" size="80"></u-icon>
					<view class="name">
						{{item.userName}}
					</view>
				</view>
				<view>
					<view class="title">
						项目名称:{{item.activityName}}
					</view>
					<view class="item">
						捐助金额:{{item.donateMoney}}
					</view>
					<view class="item">
						捐助时间:{{item.createTime}}
					</view>
				</view>
			</view>
			<button type="primary" @click="goMore">显示更多</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:"",
				ipt:"",
				id:"",
				pageNum:1,
				pageSize:5,
				listRecord:[]
			};
		},
		methods:{
			async init(){
				let obj={
					activityId:this.id,
					donateMoney:this.ipt
				}
				let data = await this.$u.api.getDonate(obj);
				console.log(data);
				if(data.code==200){
					uni.showToast({
						title:data.msg
					})
				}
			},
			async rule(){
				let obj={
					pageNum:this.pageNum,
					pageSize:this.pageSize,
					activityId:this.id
				}
				let {rows} = await this.$u.api.getfareListRecord(obj);
				this.listRecord = rows
				console.log(rows);
				// uni.navigateTo({
				// 	url:"../record/record"
				// })
			},
			goMore(){
				this.pageSize += 5
				this.rule()
			}
		},
		onLoad(option) {
			this.id = option.id
			this.name = option.name
		}
	}
</script>

<style lang="less">
input{
	border-radius: 15rpx;
	border: 2rpx solid #ccc;
	padding: 20rpx;
	margin-top: 20rpx;
}
.containner{
	padding: 20rpx;
}
button{
	margin-top: 20rpx;
}
.card{
	width: 80%;
	margin: 20rpx auto;
	background-color: #f5f5f5;
	border-radius: 12rpx;
	padding: 40rpx;
	display: flex;
	.icon{
		width: 120rpx;
		height: 120rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		background-color: #ccc;
	}
}
</style>
