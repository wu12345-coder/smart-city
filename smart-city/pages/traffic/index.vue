<template>
	<view class="traffic-container">
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item style="width:100%;height:100%;" v-for="(item,index) in list" :key="index">
					<view class="swiper-item" style="width:100%;height:100%;">
						<image style="width:100%;height:100%;" :src="item.advImg"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<view class="content">
			<view class="content-item">
				<text>号牌种类</text>
					<u-input placeholder="请输入车牌号码" v-model="value" @tap="change"></u-input>
					<u-picker mode="selector" v-model="show" :range="selector" @confirm="confirm" ></u-picker>
			</view>
			
			<u-line color="#ccc"></u-line>
			<view class="content-item">
				<text>车牌号码</text>
				<u-input placeholder="请输入车牌号码" v-model="plateNo"></u-input>
				<button @click="flag = true" size="mini">请选择</button>
				<u-keyboard mode="car" v-model="flag" @confirm="change01" @change="valChange"@backspace="backspace"></u-keyboard>
			</view>
			<u-line color="#ccc"></u-line>

			<view class="content-item">
				<text>发动机号</text>
				<u-input placeholder="请输入发动机号(非必填)"></u-input>
			</view>
			<u-line color="#ccc"></u-line>
			<u-button class="btn" @tap="search">车辆违章查询</u-button>
			<view class="txt">本服务器由"违章查询"版权所有</view>
		</view>
		<view class="content" v-if="queryList != ''">
			<view class="">
				<view class="content-item">
				</view>
				<u-line color="#ccc"></u-line>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				show: false,
				selector: ["新型能源车", "汽油车", "燃油车","大型汽车"],
				value:"新型能源车",
				plateNo:'',
				flag:false,
				queryList:[]
			}
		},
		methods: {
			async init() {
				let {rows} = await this.$u.api.getManageList();
				rows.forEach((item) => {
					item.advImg = this.$baseUrl + item.advImg
					this.list.push(item)
				})
			},
			change() {
				if (this.show == true) {
					this.show = false
				} else {
					this.show = true
				}
			},
			change01(e){
				 console.log(this.plateNo);
			},
			confirm(e){
				console.log(e);
				this.value = this.selector[e]
			},
			async search(){
				// uni.showToast({
				// 	title:"功能还未开发"
				// })
				let obj={
					licencePlate:this.plateNo,
					catType:this.value
				}
				console.log(obj);
				let data = await this.$u.api.getOrderNoIllegalList(obj);
				console.log(data);
			},
			 valChange(val) {
			                // 将每次按键的值拼接到value变量中，注意+=写法
				this.plateNo += val;
				console.log(this.plateNo);
			},
			backspace() {
				// 删除value的最后一个字符
				if(this.value.length) this.value = this.value.substr(0, this.value.length - 1);
				console.log(this.value);
			}
			
		},
		onLoad() {
			this.init();
		}
	}
</script>

<style lang="less">
	.traffic-container {
		height: calc(100vh - 44px);
		background-color: #f4f4f4;
		padding-top: 20rpx;
	}

	.banner {
		width: 80%;
		height: 300rpx;
		margin: 0 auto;
		border-radius: 25rpx;
		overflow: hidden;
	}

	.content {
		width: 80%;
		// height: 680rpx;
		margin: 20rpx auto;
		border-radius: 25rpx;
		overflow: hidden;
		background-color: #ffffff;
		padding: 20rpx;
	}

	.content-item {
		height: 80rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		
		text {
			padding-left: 20rpx;
			padding-right: 20rpx;
		}
	}

	.btn {
		margin-top: 40rpx;
		background-color: #3884cc;
		color: white;
		font-weight: 600;
	}

	.txt {
		width: 100%;
		height: 100rpx;
		line-height: 150rpx;
		text-align: center;
		color: #b5b5b5;
	}
</style>
