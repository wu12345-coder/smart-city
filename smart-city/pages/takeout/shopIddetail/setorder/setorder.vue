<template>
	<view>
		<!-- 个人设置 -->
			<view class="setting-containner">
				<view class="item">
					<text class="item_name">收货人</text>
					<input class="item_txt ipt_name" type="text" v-model="userData.name" placeholder="请输入收货人姓名">
				</view>
				<view class="item">
					<text class="item_name">标签</text>
					<input class="item_txt ipt_name" type="text" v-model="userData.label" placeholder="请输入你需要的备注标签">
				</view>
				<view class="item">
					<text class="item_name">收货地址</text>
					<input class="item_txt ipt_name" type="text" v-model="userData.addressDetail" placeholder="请输入收货地址">
				</view>
				<view class="item">
					<text class="item_name">联系电话</text>
					<input class="item_txt ipt_name" type="text" v-model="userData.phone" placeholder="请输入联系电话">
				</view>
				<view class="item">
					<text class="item_name">购买数量</text>
					<view class="box">
						<view class="btn">
						<button size="mini" @click="cut">-</button>
					</view>
					<input class="item_txt ipt_num" type="text" v-model.number="number" placeholder="请输入您要购买的数量">
					<view class="btn">
						<button size="mini" @click="add">+</button>
					</view>
					</view>
					
				</view>
				<view class="item">
					<text class="item_name">总价</text>
					{{amount}}
				</view>
			</view>
			
			<u-button type="primary" style="margin-top: 50rpx;" @tap="setData">确定</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userData:{
					orderItemList:[]
				},
				id:0,
				price:0,
				number:1,
				data:""
			};
		},
		computed:{
		        amount:{
		           
		            get:function(){
		               return this.userData.amount =Number(this.number)  * Number(this.price) 
		            },
					set() {}
		        }
		},
		methods:{
			cut(){
				if(this.number>1){
					this.number--
				}
			},
			add(){
				this.number++
			},
			async setData(){
				this.userData.amount = Number(this.amount) 
				console.log(this.price);
				console.log(this.number);
				let obj = {
					"productId":this.id,
					"quantity": this.number
				}
				console.log(this.number);
				console.log(obj);
				this.userData.orderItemList.push(obj)
				let userData = this.userData
				
				console.log(userData.amount);
				this.data = await this.$u.api.setOrder(userData)
				console.log(this.data);
				uni.showToast({
					title:this.data.msg
				})
				setTimeout(this.tap,3000)
			},
			tap(){
				if(this.data.code==200){
					uni.navigateTo({
						url:"/pages/myself/myOrder"
					})
				}
			}
			
		},
		
		onLoad(option) {
			this.userData.sellerId = Number(option.sellerId)
			this.id =Number(option.id)  
			this.price = Number(option.price)
			console.log(this.price);
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
	.pic {
		width: 80rpx;
		height: 80rpx;
		display: block;
		background-color: #ccc;
		border-radius: 50%;
		image{
			width: 100%;
			height: 100%;
		}
	}

	.txt {
		float: right;
	}

	.item_name {
		flex: 1;
	}

	.item_txt {
		flex: 1;
		display: flex;
	}
	.ipt_name{
		text-align: right;
	}
	.box{
		width: 40%;
		display: flex;
		align-items: center;
		input{
			height: 200%;
			text-align: center;
			font-size: 18px;
		}
	}
</style>
