<template>
	<div class="luggageAdd">
		<Header title="餐食预定" />
		<main class="luggageAddMain">
			<div>
				<div class="form">
					<input placeholder="姓 （Family Name）" ref="familyName" v-model="add.familyName">
					<input placeholder="名 （Given Name）" ref="givenName" v-model="add.givenName">
					<input placeholder="证件号" ref="identityNumber" v-model="add.identityNumber">
					<input placeholder="手机号码" ref="phone" v-model="add.phone">
					<input placeholder="短信验证码" ref="note" v-model="add.note">
					<button class="acquire" @click="acquire">获取</button>
				</div>
				<button class="apply" @click="apply">提交</button>
				<div class="tips">
					<p>温馨提示：</p><br>
					<p>1.登机后请勿随意变换座位，方便空乘为您准确送上您所预定的美食。</p>
					<p>2.旅客必须在航班起飞前12小时以前完成餐食预订，在航班起飞前12小时将停止网上订餐购买服务。</p>
					<p>3.网上订餐只在航班实际起飞后再机上提供。</p>
					<p>4.客票变更时，所选订餐可免费随客票一同变更到新的航班上；客票变更后订餐费不单独退款。</p>
					<p>5.因客票变更导致订餐变更的，变更手续只依据机票价格，按照客规计算，订餐变更无需收取手续费。</p>
					<p>6.产品范围可能因航班而各有不同，具体根据页面显示而定。</p>
				</div>
			</div>

		</main>
	</div>
</template>
<script>
	// @ is an alias to /src
	import Header from '@/components/Header'
	import {
		verificationName,
		verifyIdentity,
		ticketNumber,
		telephoneCode
	} from '@/utils/verificationName.js'
	import {
		MessageBox
	} from 'mint-ui'
	import {
		Toast
	} from 'mint-ui'
	export default {
		name: "luggageAdd",
		components: {
			Header
		},
		data() {
			return {
				mes: '',
				add: {
					familyName: '',
					givenName: '',
					identityNumber: '',
					phone: '',
					graph: '',
					note: '',
					local: '',
					

				},
			TOKEN: sessionStorage.getItem('TOKEN')
				// verificationImg: '/aq/GetRandomImage'
			}
		},
		created() {
			this.init()
		},
		methods: {
			init() {

			},
			//获取手机验证码
			acquire() {
				this.add.familyName = this.add.familyName.toUpperCase()
				this.add.givenName = this.add.givenName.toUpperCase()
				if (!telephoneCode(this.add.phone)) {
					Toast({
						message: "请输入正确的手机号码!",
						duration: 2000
					})
					this.$refs.phone.focus()
				} else {
					this.$axios.get('/wechat/aq/SendCheckCode?TOKEN=' + this.TOKEN + "&mono=" + this.add.phone).then((res) => {
						console.log(res.data)
						if (res.data.errorcode) {
							Toast({
								message: res.data.errordesc,
								duration: 2000
							});
							return
						}
					}).catch((res) => {
						Toast({
							message: "请求服务器失败！",
							duration: 2000
						});
						return;
					})
				}
			},
			// 验证输入信息
			apply() {
				this.add.familyName = this.add.familyName.toUpperCase()
				this.add.givenName = this.add.givenName.toUpperCase()
				let tName = verificationName(this.add.familyName, this.add.givenName);
				if (tName == "firstName") {
					this.$refs.familyName.focus()
					return
				} else if (tName == "lastName") {
					this.$refs.givenName.focus()
					return
				} else if (!this.add.identityNumber) {
					Toast({
						message: "请输入正确的证件号码或票号!",
						duration: 2000
					})
					this.$refs.identityNumber.focus()
					return false
				} else if (!telephoneCode(this.add.phone)) {
					Toast({
						message: "请输入正确的手机号码!",
						duration: 2000
					})
					this.$refs.phone.focus()
				} else if (!this.add.note) {
					Toast({
						message: "短信验证码不能为空!",
						duration: 2000
					})
					this.$refs.note.focus()
				} else {
					// 发送请求
					this.$axios.get('/wechat/aq/AdoptFlightQuery?TOKEN=' + this.TOKEN + "&psgname=" + tName + "&idno=" + this.add.identityNumber +
						"&tel=" + this.add.phone + "&telcode=" + this.add.note).then((res) => {
						if (res.data.errorcode) {
							Toast({
								message: res.data.errordesc,
								duration: 2000
							});
							return
						} 
						 if (!res.data.orders) {
							Toast({
								message: '暂无可追加服务的航程',
								duration: 2000
							});
							return
						} 
						else {
							console.log(res)
							// 输入信息存入sessionStorage
							this.mes = res.data
							var message = JSON.stringify({
								familyName: this.add.familyName,
								givenName: this.add.givenName,
								identityNumber: this.add.identityNumber,
								phone: this.add.phone,
								note: this.add.note,
								mes: this.mes
							})
							sessionStorage.setItem('message', message)
							this.$router.push({
								name: 'chooseFlight',
								params: {
									mes: this.mes
								}
							});
							return;
						}
					}).catch((res) => {
						if (res.data.errorcode) {
							Toast({
								message: res.data.errordesc,
								duration: 2000
							});
							return
						}
						Toast({message: "请求服务器失败！",duration: 2000});
						return;
					})
				}


			}

		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';

	.tips p {
		color: #ccc;
	}
</style>
