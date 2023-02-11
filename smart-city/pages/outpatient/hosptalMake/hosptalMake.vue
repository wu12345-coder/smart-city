<template>
	<view class="make-container">
		<view class="IdCard" v-for="item in this.list">
			<view class="pic">
				<u-icon class="icon" name="account-fill" size="60" color="#ccc"></u-icon>
			</view>
			<view class="userData">
				<view class="user-name">
					<view class="user">
						{{item.name}}
					</view>
					<u-icon name="setting"  @click="goMake(item.id)"></u-icon>
				</view>
				<view class="IdBox" @tap="goSearchHosptal(item.name)">
					<view class="IdNum">
						身份证:{{item.cardId}}
					</view>
					<view class="tel">
						手机号:{{item.tel}}
					</view>
				</view>
			</view>
		</view>
		
		<view class="IdCardx" @tap="goAddHosptal">
				<view class="pic">
					<u-icon class="icon" name="plus" size="50" color="#ffffff"></u-icon>
				</view>
				<view class="pic-title">
					添加联系人
				</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				
			};
		},
		methods:{
			goMake(id){
				uni.navigateTo({
					url:'./../editing/editing?id='+id
				})
				console.log("111");
			},
			goAddHosptal(){
				uni.navigateTo({
					url:'./../addHosptal/addHosptal'
				})
			},
			goSearchHosptal(name){
				uni.navigateTo({
					url:"./../searchHosptal/searchHosptal?name="+name
				})
			},
			async init(){
				let {rows} = await this.$u.api.getHospitaIdCard()
				this.list = rows
				console.log(this.list);
			}
		},
		onLoad() {
			this.init()
		},
		
	}
</script>

<style lang="less">
	.make-container{
		padding: 20rpx;
	}
.IdCard{
	display: flex;
	border-radius: 25rpx;
	box-shadow: #c2c2c2 2px 2px 10px;
	padding: 20rpx;
	align-items: center;
	margin-top: 20rpx;
	.pic{
		width: 150rpx;
		height: 120rpx;
		border-radius: 50%;
		background-color: #f3f3f3;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.IdBox{
		height: 120rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.user-name{
		display: flex;
		justify-content: space-between;
	}
	.userData{
		padding-left: 50rpx;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
}
.IdCardx{
		margin-top: 40rpx;
		display: flex;
		border-radius: 15rpx;
		box-shadow: #c2c2c2 2px 2px 10px;
		padding: 20rpx;
		align-items: center;
		justify-content: center;
		height: 200rpx;
		.pic{
			background-color: #6c69c2;
			border-radius: 50%;
		}
	}
	.pic-title{
		padding-left: 20rpx;
		font-size: 18px;
	}
</style>
