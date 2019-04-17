<template>
	<div class="irregularFlight">
		<Header title="收件信息" />
		<main class="freakMain">
			<div class="messages">
				<div class="message">
					<div class="left">收件人</div>
					<input type="text" v-model.trim="addressee" ref="addressee" maxlength="30" />
				</div>
				<div class="message">
					<div class="left">手机号码</div>
					<input type="text" v-model.trim="telephone" ref="telephone" maxlength="20" />
				</div>
				<div class="message">
					<div class="left">配送地址</div>
				</div>
				<transition name="fade">
					<linkage @getLinkage='_showChildMsg' v-show="showLinkage"></linkage>
				</transition>
				<div class="getCity" @click="_showLinkage" style="margin-bottom: 0.133333rem;background-color:#FFF;">{{result}}</div>
				<input type="text" v-model.trim="results" class="right" ref="results" />
				<input type="text" v-model.trim="detailAddress" maxlength="50" placeholder="请输入详细街道地址" ref="detailAddress" style="width:7rem;margin-top:0.4rem;" />
			</div>
			<div class="remarks">
				<span class="left">备注</span>
				<textarea name="" rows="8" cols="36" ref="remarks" v-model.trim="remarks" placeholder="增值服务提供手撕发票，如需请提供格式如:保险手撕发票" style="border:1px solid #ccc; "></textarea>
			</div>
			<button class="irregularQuery" @click="query">下一步</button>

		</main>

	</div>
</template>

<script>
	// @ is an alias to /src
	import Header from '@/components/Header'
	import Linkage from './linkage' //引入子组件
	import Vue from "vue";
	import { MessageBox } from 'mint-ui';
	export default {
		name: "irregularFlight",
		components: {
			Header,
			Linkage //注册子组件
		},
		data() {
			return {
				addressee: "",
				telephone: "",
				showLinkage: false, //控制子组件的显示隐藏
				result: '点击此处选择地址:',
				msg: '',
				results: "",
				detailAddress: "",
				remarks: ""
			}

		},
		methods: {
			_showChildMsg(msg) { //接收子组件数据
				if(msg == '') {
					this.showLinkage = false;
				} else {
					this.results = "";
					let area, city, province;
					area = msg.address.area.name;
					city = msg.address.city.name;
					province = msg.address.province.name;
					this.results += province + city + area;
					this.showLinkage = false;
					console.log(province, city, area)
				}
			},
			_showLinkage() {
				this.showLinkage = true
			},
			query() {
				var that = this;
				var addressee = that.addressee.toUpperCase();
				var reg = /\b1[3-9]\d{9}\b/g;
				//姓名正则验证
				if(that.isSpeci(addressee)) {
					MessageBox('提示', '请输入收件人姓名').then(() => {
						that.$refs.addressee.focus()
					})
					return;
				} else if(that.telephone == "") {
					MessageBox('提示', '手机号不能为空').then(() => {
						that.$refs.telephone.focus()
					})
					return;
				} else if(!that.telephone.match(reg)) {
					MessageBox('提示', '请输入正确的手机号码').then(() => {
						that.$refs.telephone.focus()
					})
					return;
				} else if(that.results == "") {
					MessageBox('提示', '请选择收货地址').then(() => {
						that.$refs.results.focus()
					})
					return;
				} else if(that.detailAddress == "") {
					MessageBox('提示', '请填写详细收件地址').then(() => {
						that.$refs.detailAddress.focus()
					})
					return;
				} else if(that.remarks.length > 50) {
					MessageBox('提示', '最多只能输入50个字符').then(() => {
						that.$refs.remarks.focus()
					})
					return;
				}
			},
			/**
			 * 判断是否存在特殊字符
			 * @param str
			 * @returns boolean
			 */
			isSpeci(str) {
				//特殊符号正则
				var regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
				var regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
				//数字正则
				var regNum = /^(?=.*\d.*\b)/;
				if(regEn.test(str) || regCn.test(str)) {
					return true;
				} else if(str.replace(/\s+/g, "") == "") {
					return true;
				} else if(regNum.test(str)) {
					return true;
				}
				return false;
			},
			/*
				英文判断函数，返回true表示是全部英文，返回false表示不全部是英文
				*/
			isLetter(str) {
				if("" == str) {
					return false;
				}
				for(var i = 0; i < str.length; i++) {
					var c = str.charAt(i);
					if(c != " " && (c < "a" || c > "z") && (c < "A" || c > "Z") && c != ".") {
						return false;
					}
				}
				return true;
			},
			/**
			 * 判断是否存在中文并且有
			 * @param str
			 * @returns boolean
			 */
			haveChinese(str) {
				var reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
				if(reg.test(str)) {
					return true
				}
				return false;
			},
			/**
			 * 判断是否存在英文
			 */
			haveEnglish(str) {
				var reg = /[A-Za-z]+/;
				if(reg.test(str)) {
					return true;
				} else {
					return false;
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import './email.scss';
	.message {
		height: 0.666666rem;
		margin-bottom: 0.266666rem;
	}
	
	.left {
		width: 1.5rem;
		height: 0.666666rem;
		margin-right: 0.066666rem;
	}
	
	input {
		border: 0.013333rem solid #CCCCCC;
		border-radius: 0.066666rem;
		width: 5.2rem;
		height: 0.666666rem;
	}
	
	.getCity {
		font-size: 20px;
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s;
	}
	
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
	
	.messages {
		border-bottom: 1px solid #CCCCCC;
		height: 6rem;
	}
	
	.remarks {
		margin-top: 0.666666rem;
	}
</style>