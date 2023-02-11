<template>
	<view>
		<view class="IdCard">
			<view class="txt">
				<view class="name">
					就诊人
				</view>
				<view class="name-content">
					{{name}}
				</view>
			</view>
			<view class="txt">
				<view class="name">
					预约科室
				</view>
				<view class="name-content">
					{{list.categoryName}}
				</view>
			</view>
			<view class="txt">
				<view class="name">
					门诊类型
				</view>
				<view class="name-content" v-if="list.type == '1'">
					专家号
				</view>
				<view class="name-content" v-if="list.type == '2'">
					普通号
				</view>
			</view>
			<view class="txt">
				<view class="name">
					金额
				</view>
				<view class="name-content">
					{{list.money}}
				</view>
			</view>
		</view>
		
		<view class="IdCard">
			<view class="txt">
				<view class="name">
					选择日期
				</view>
				<view class="txt_content">
					{{dataObj.year}}-{{dataObj.month}}-{{dataObj.day}}
				</view>
					<u-picker mode="time" v-model="show" :params="params" @confirm="confirm"></u-picker>
					<u-icon name="arrow-right" @click="show = true">打开</u-icon>
			</view>
			<view class="txt">
				<view class="name">
					选择时间
				</view>
				<view class="txt_content">
					{{dataObj.hour}}:{{dataObj.minute}}
				</view>
					<u-picker mode="time" v-model="show" :params="params" @confirm="confirm"></u-picker>
					<u-icon name="arrow-right" @click="show = true">打开</u-icon>
			</view>
		</view>
		<view class="ipt_btn">
			<button @tap="goReturn" class="btn btn_return">取消</button>
			<button @tap="goSure" class="btn">确定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:"",
				list:{},
				show:false,
				name:"",
				params:{
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true,
				},
				dataObj:{}
			};
		},
		methods:{
			async init(){
				let {data} = await this.$u.api.getHospitaId(this.id)
				 this.list = data
				console.log(data);
			},
			confirm(e){
				console.log(e);
				this.dataObj=e
			},
			goReturn(){
				uni.navigateTo({
					url:"../hospitalList"
				})
			},
			async goSure(){
				let obj = {
					categoryId: this.list.categoryId,
					money: this.list.money,
					patientName: this.name,
					reserveTime: this.list.reserveTime,
					type: this.list.type
				}
				console.log(obj);
				let data = await this.$u.api.setHospital(obj)
				console.log(data);
				uni.navigateTo({
					url:"../hostalDetaill/hostalDetaill"
				})
			}
		},
		onLoad(option) {
			this.id = option.id
			this.name = option.name
			console.log(this.id);
			this.init();
		}
	}
</script>

<style lang="less">
.IdCard{
	width: 80%;
	margin: 20rpx auto;
	box-shadow: #ccc 2px 2px 10px;
	border-radius: 25rpx;
	padding: 40rpx;
	.txt{
		width: 100%;
		display: flex;
		justify-content: space-between;
		font-size: 18px;
		display: flex;
		align-items: center;
		.name{
			width: 40%;
			text-decoration: 2rem;
			letter-spacing: 0.5rem;
			color: #8624cc;
			line-height: 50px;
			
		}
		.name-content{
			flex: 1;
			text-align: left;
			display: flex;
			justify-content: space-around;
			padding-left: 40rpx;
			width: 60%;
			letter-spacing: 0.2rem;
		}
		.txt_content{
			font-size: 18px;
			text-align: center;
		}
	}
}
.ipt_btn{
		display: flex;
		justify-content: space-around;
		.btn{
			border-radius: 40rpx;
			background-color: #2578f4;
			overflow: hidden;
			color: white;
			width: 250rpx;
			margin-top: 40rpx;
		}
		.btn_return{
			background-color: white;
			color: #2578f4;
			border: #2578f4 2rpx solid;
		}
	}
</style>
