<template>
	<view class="busData">
		<view class="setting-containner">
			<view class="item">
				<text class="item_name">日期选择</text>
				<u-input v-model="time1" @tap="change1"></u-input>
				<u-picker mode="time" v-model="show1" @confirm="confirm" ></u-picker>
			</view>
			<view class="item">
				<text class="item_name">时间选择</text>
				<u-input v-model="time2" @tap="change2"></u-input>
				<u-picker mode="time" v-model="show2" @confirm="confirmTimer" :params="params"></u-picker>
			</view>
			<view class="item">
				<text class="item_name">姓名</text>
				<input class="item_txt ipt_name" type="text">
			</view>
			<view class="item">
				<text class="item_name">手机号码</text>
				<input class="item_txt ipt_name" type="text">
			</view>
			<view class="item">
				<text class="item_name">上车地点</text>
				<input class="item_txt ipt_name" type="text" v-model="where"  @tap="change3">
				<u-picker mode="selector" v-model="show3" :range="list1" @confirm="confirmTop" ></u-picker>
			</view>
			<view class="item">
				<text class="item_name">下车地点</text>
				<input class="item_txt ipt_name" type="text" v-model="where1"@tap="change4">
				<u-picker mode="selector" v-model="show4" :range="list1" @confirm="confirmButton" ></u-picker>
			</view>
			
			<button class="btn" @tap="goSure">下一步</button>
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
				show4:false,
				time1:"2022-09-24",
				time2:"12:00",
				timestamp: '',
				timestamp1:"",
				params:{
					hour: true,
					minute: true,
					second: true,
					timestamp: true
				},
				obj:{},
				userObj:{
				},
				selector:[],
				list1:[],
				where:'',
				where1:''
			};
		},
		methods:{
			confirm(e){
				console.log(e);
				this.timestamp = e.timestamp
				this.time1 = this.$u.timeFormat(this.timestamp, 'yyyy-mm-dd');
			},
			confirmTimer(e){
				this.timestamp1 = e.timestamp
				this.time2 = this.$u.timeFormat(this.timestamp1, 'hh:MM:ss');
			},
			change1(){
				this.show1=true
			},
			change2(){
				this.show2=true
			},
			change3(){
				this.show3=true
			},
			change4(){
				this.show4=true
			},
			confirmTop(e){
				this.where=this.list1[0]
				console.log(e);
			},
			confirmButton(e){
				this.where1=this.list1[e]
				console.log(e);
			},
			goSure(){
				let data ={
					start:this.where,
					end:this.where1,
				}
			}
		},
		onLoad(option) {
			this.obj = JSON.parse(option.obj)
			console.log(this.obj);
			this.selector = this.obj.metroStepList
			this.selector.forEach(item=>{
				this.list1.push(item.name) 
			})
		}
		}
</script>

<style lang="less">
.item {
		width: 100%;
		height: 100rpx;
		border-bottom: 2rpx solid #ccc;
		display: flex;
		padding-left: 40rpx;
		padding-right: 40rpx;
		justify-content: space-evenly;
		align-items: center;
	}

	.txt {
		float: right;
	}

	.item_name {
		flex: 1;
		display: flex;
		justify-content: space-between;
	}

	.item_txt {
		flex: 4;
		display: flex;
		justify-content: flex-end;
	}
	.ipt_name{
		text-align: center;
	}
</style>
