<template>
	<view>
		<view class="ipt_btn">
			<button @tap="init(1)" class="btn">专家号</button>
			<button @tap="init(2)" class="btn">普通号</button>
		</view>
		<view class="IdCard">
			<ul v-for="item in list">
				<li class="list-item" @tap="goBooking(item.id,name)">
					<view class="txt">{{item.categoryName}}</view>
					<view class="icon"><u-icon name="arrow-right"></u-icon></view>
				</li>
			</ul>
		</view>
		
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				name:""
			};
		},
		methods:{
			async init(num){
				let {rows} = await this.$u.api.getNum(num)
				this.list = rows
				// console.log(this.list);
			},
			goBooking(id,name){
				uni.navigateTo({
					url:"../booking/booking?id="+id+"&name="+name
				})
			}
		},
		onLoad(option) {
			this.init(1)
			this.name = option.name
		}
	}
</script>

<style lang="less">
.ipt_btn{
	display: flex;
	justify-content: space-around;
	.btn{
		border-radius: 40rpx;
		background-color: #1b71cc;
		overflow: hidden;
		color: white;
		width: 250rpx;
		margin-top: 40rpx;
	}
}
ul{
	margin: 0;
	padding: 0;
}
.list-item{
	width: 100%;
	height: 70rpx;
	line-height: 40rpx;
	border: 2rpx #eaeaea solid;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.IdCard{
	padding-top: 50rpx;
	border-radius: 15rpx;
	overflow: hidden;
	margin-top: 50rpx;
	
}
.txt{
	padding-left: 70rpx;
}
.icon{
	padding-right: 70rpx;
	color: #ccc;
}
</style>
