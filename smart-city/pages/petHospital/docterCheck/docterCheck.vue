<template>
	<view>
		<textarea v-model="question" cols="30" rows="10"></textarea>
		<view class="upload">
			<u-upload action="xxxx"></u-upload>
		</view>
		<view class="btn">
			<button type="primary" @click="getData">提交</button>
			<button type="warn" @click="getData">查询问诊记录</button>
		</view>
		<view class="content">
			<view class="IdCard" v-for="item in list">
				<view class="pic">
					<image src="item.imageUrls" mode=""></image>
				</view>
				<view class="txt">
					<view class="time">
						时间:{{item.createTime}}
					</view>
					<view class="question">
						问题:{{item.question}}
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				question:"",
				id:"",
				list:[]
			};
		},
		methods:{
			async init(){
				let obj={
					pageNum:1,
					pageSize:5,
				}
				let data = await this.$u.api.getPetDocterRecord(obj)
				console.log(data);
			},
			async getData(){
				let obj={
					"doctorId": this.id,
					"question": this.question,
					"imageUrls":"/dev-api/profile/upload/image/2022/03/08/21322108-5f54-4356-b1da-27291a7a0bbb.jpg"
				}
				let data = await this.$u.api.getPetDocterDetail(obj)
				console.log(data);
				if(data.code==200){
					uni.showToast({
						title:"提交成功"
					})
				}
			},
			async getPetDocterDemo(){
				let obj={
					pageNum:1,
					pageSize:5,
				}
				let {rows} = await this.$u.api.getPetDocterDemo(obj)
				rows.forEach(item=>{
					item.imageUrls = this.$baseUrl + item.imageUrls
				})
				this.list = rows
				console.log(rows);
			}
		},
		onLoad(option) {
			this.id = option.id
			this.init()
			this.getPetDocterDemo()
		}
	}
</script>

<style lang="less">
textarea{
	border-radius: 15rpx;
	border: 2rpx solid #333;
	margin: 50rpx auto;
}
.upload{
	display: flex;
	justify-content: center;
	align-items: center;
}
.IdCard{
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20rpx;
	.pic{
		width: 30%;
		image{
			width: 100%;
			height: 120rpx;
		}
	}
	.txt{
		width: 60%;
	}
}
</style>
