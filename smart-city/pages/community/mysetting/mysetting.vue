<template>
	<view>
		<view class="ipt">
			<view class="item">
				<text>姓名:</text>
				<u-input type="text" :border="true" placeholder="请输入姓名"/>
			</view>
			<view class="item">
				<text>性别:</text>
				<u-input type="text" :border="true" placeholder="请输入性别"/>
			</view>
			<view class="item">
				<text>身体基本状况</text>
				<u-rate current="5"></u-rate>
			</view>
			<view class="item" @click="tap1">
				<text>健康状况</text>
				<u-picker v-model="show1" @confirm="change1" :range="option_1" mode="selector"></u-picker>
				<view>{{option1}}</view>
			</view>
			<view class="item" @click="tap2">
				<text>精神状态</text>
				<u-picker v-model="show2" @confirm="change2" :range="option_2" mode="selector"></u-picker>
				<view>{{option2}}</view>
			</view>
			<view class="item" @click="tap3">
				<text>活动能力</text>
				<u-picker v-model="show3" @confirm="change3" :range="option_3" mode="selector"></u-picker>
				<view>{{option3}}</view>
			</view>
			<u-button type="primary" class="save" @tap="goSure">提交</u-button>
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
				option_1:['正常','痴呆','抑郁','暴力'],
				option_2:['正常','拄拐','轮椅','卧床'],
				option_3:['饮食','洗澡','穿衣','修饰'],
				option1:"",
				option2:"",
				option3:"",
			};
		},
		methods:{
			goSure(){
				uni.showToast({
					title:"提交成功"
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
			}
		}
	}
</script>

<style lang="less">
.item{
	height: 180rpx;
}
</style>
