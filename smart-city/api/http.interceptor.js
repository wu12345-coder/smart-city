
const install = (Vue, vm) => {
	Vue.prototype.$u.http.setConfig({
		baseUrl:Vue.prototype.$baseUrl,
	});
	let check_allow = (url) =>{
		let allow_lists = ["/prod-api/api/register","/prod-api/api/login"];//白名单URL
		let isAllow = false;
		allow_lists.forEach(item=>{
			if(url.indexOf(item)>-1){
				isAllow = true;//在白名单
			}
		})
		if(isAllow){
			return true;
		}else{
			return false;
		}
	}

	// 过滤器
	Vue.prototype.$u.http.interceptor.request = (config) => {	
		if(check_allow(config.url)) {
			return config;//检查白名单
		}else{
			config.header.Authorization='Bearer ' + uni.getStorageSync('token')
			return config; 
		}		
	}
	// 响应拦截，判断状态码是否通过
	Vue.prototype.$u.http.interceptor.response = (res) => {
			return res;  
	}
}

export default {
	install
}