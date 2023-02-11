<template>
	<view>
		<image src="../../../static/logo.png" mode=""></image>
		<view>
			养老院，是一些社区服务的机构，是为老人提供住宿和日常起居照顾的地方，工作人员分为社工、护士、医生、义工及助理员等，提供的是老人服务。
			养老院有些是非营利组织、慈善机构，也有不少是商业经营。
		</view>
		<u-divider>请选择设施配置</u-divider>
		<view class="content">
			<view class="item" @click="tap1">
				<text>厨房设施</text>
				<u-picker v-model="show1" @confirm="change1" :range="option_1" mode="selector"></u-picker>
				<view>{{option1}}</view>
			</view>
			<view class="item" @click="tap2">
				<text>卧室设施</text>
				<u-picker v-model="show2" @confirm="change2" :range="option_2" mode="selector"></u-picker>
				<view>{{option2}}</view>
			</view>
			<view class="item" @click="tap3">
				<text>卫生间设施</text>
				<u-picker v-model="show3" @confirm="change3" :range="option_3" mode="selector"></u-picker>
				<view>{{option3}}</view>
			</view>
		</view>
		
		<view class="btn">
			<button type="primary" @click="yuYue">立即预约</button>
			<button type="primary" @click="goRzhu">查看环境</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show1:false,
				show2:false,
				show3:false,
				option_1:['一字型厨房','L型厨房','U型厨房','1+1型厨房'],
				option_2:['中性色调','暖色调','冷色调'],
				option_3:['一字型','U型','L型'],
				option1:"",
				option2:"",
				option3:"",
			};
		},
		methods:{
			yuYue(){
				uni.showToast({
					title:"预约成功"
				})
			},
			change1(i){
				this.option1 =this.option_1[i]
			},
			change2(i){
				this.option2 = this.option_2[i]
			},
			change3(i){
				this.option3 = this.option_3[i]
			},
			tap1(){
				this.show1=true
			},
			tap2(){
				this.show2=true
			},
			tap3(){
				this.show3=true
			},
			goRzhu(){
				uni.navigateTo({
					url:"../room/room"
				})
			}
		}
	}
</script>

<style lang="less">
.content{
	display: flex;
	justify-content: space-between;
	padding: 30rpx;
	.item{
		width: 30%;
		display: flex;
		flex-direction: column;
		font-weight: 800;
		text-align: center;
	}
	
}
</style>
