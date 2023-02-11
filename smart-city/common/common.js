import Vue from 'vue'

Vue.prototype.$header = ()=>{
	return
	 {
		 Authorization:'Bearer ' + uni.getStorageSync('token')
	 }
}