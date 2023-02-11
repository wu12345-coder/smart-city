<template>
	<view>
		<view class="ipt"><view class="txt">姓名</view><u-input v-model="name" input-align="right" placeholder="姓名">{{name}}</u-input></view>
		<u-line color="#ccc"></u-line>
		<view class="ipt"><view class="txt">性别</view>
			<view class="ipt-sex">
				<radio-group v-model="sex" class="check item_txt" @change="sexData">
					<label class="radio" >
						<radio value="1" :checked="sex=='1' ? true:false"/><text>男</text>
					</label>
					<label class="radio">
						<radio value="0" :checked="sex=='0' ? true:false"/><text>女</text>
					</label>
				</radio-group>
			</view>
		</view>
		<u-line color="#ccc"></u-line>
		<view class="ipt"><view class="txt">身份证</view><u-input v-model="cardId" @change="change" input-align="right"  placeholder="身份证">{{cardId}}</u-input></view>
		<u-line color="#ccc"></u-line>
		<view class="ipt"><view class="txt">出生年月</view><u-input v-model="birthday" input-align="right"  placeholder="出生年月" >{{birthday}}</u-input></view>
		<u-line color="#ccc"></u-line>
		<view class="ipt"><view class="txt">手机号</view><u-input v-model="tel" input-align="right"  placeholder="手机号">{{tel}}</u-input></view>
		<u-line color="#ccc"></u-line>
		<view class="ipt"><view class="txt">住址</view><u-input v-model="address" input-align="right"  placeholder="住址">{{address}}</u-input></view>
		<u-line color="#ccc"></u-line>
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
				list:[],
				name:"",
				sex:"",
				cardId:"",
				birthday:"",
				tel:"",
				address:""
				
			};
		},
		methods:{
			async init(){
				let {rows} = await this.$u.api.getHospitaIdCard()
				this.list = rows
				this.list = this.list.filter((item)=>{return item.id == this.id})
				console.log(this.list);
				this.name=this.list[0].name 
				this.sex=this.list[0].sex 
				this.cardId=this.list[0].cardId 
				this.birthday=this.list[0].birthday 
				this.tel=this.list[0].tel 
				this.address=this.list[0].address 
			},
			sexData(e){
				// console.log(e);
				this.sex = e.detail.value
				// console.log(e.detail.value);
			},
			goReturn(){
				uni.navigateTo({
					url:"../hosptalMake/hosptalMake"
				})
			},
			change(){
				console.log("11111");
			},
			async goSure(){
				let obj = {
					id:this.id,
					address:this.address,
					birthday:this.birthday,
					cardId:this.cardId,
					name: this.name,
					sex: this.sex,
					tel: this.tel
				}
				console.log(obj);
				let data = await this.$u.api.getPatient(obj)
				console.log(data);
				uni.navigateTo({
					url:"../hosptalMake/hosptalMake",
					success(){
						let page = getCurrentPages().pop(); //跳转页面成功之后
						if (!page) return; 
							page.onLoad(); //如果页面存在，则重新刷新页面
						}
			})
			}
		},
		onLoad(option) {
			this.id = option.id
			console.log(this.id);
			this.init()
		}
	}
</script>

<style lang="less">
.ipt{
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding:10rpx 40rpx;
}
.txt{
	width: 120rpx;
}
.ipt-sex{
	display: flex;
	justify-content: space-around;
}
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
	.btn_return{
		background-color: white;
		color: #1b71cc;
		border: #1b71cc 2rpx solid;
	}
}
</style>
