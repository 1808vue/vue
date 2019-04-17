https://www.cnblogs.com/zhoulifeng/p/9228397.html

<template>
	<div class="irregularFlight">
		<Header title="添加服务" />
		<main class="freakMain">
			<div class="top">
				<span>去程</span><span>11月30日</span> <span>AQ1022</span><span>哈尔滨-广州</span>
			</div>
		<table class="table">
                <tr>
                    <th><label><input type="checkbox" @click="check_all" :checked="check_goods.length == cart_list.length"/>全选</label></th>
                    <th>商品名称</th>
                    <th>商品价格</th>
                    <th>数量</th>
                    <th>操作</th>
                </tr>
                <tr v-for="(cart,index) in cart_list" :key="index">
                    <td><input type="checkbox" :value="cart" v-model="check_goods" /></td>
                    <td>{{cart.goods_name}}</td>
                    <td>{{cart.goods_price}}</td>
                    <td class="col-xs-3">
                        <span class="btn btn-default" v-on:click="reduce(cart)">-</span>
                        <input class="btn-group" type="number" v-model="cart.num" />
                        <span class="btn btn-default" v-on:click="add_num(cart)">+</span>
                    </td>
                    <td>
                        <button class="btn btn-danger" v-on:click="delete_num">删除</button>
                    </td>
                </tr>
            </table>
				 <div>
                总计：共 {{cart_list.length    }}件商品，已选择 {{total_num}} 件
                <div class="pull-right">
                    合计：{{total_price}}元
                    <a href="" class="btn btn-success" :disabled="check_goods.length <= 0">去结算</a>
                </div>
            </div>
		</main>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Header from '@/components/Header'
	export default {
		name: "preFood",
		components: {
			Header
		},
		data() {
			return {
			cart_list: [{
        　　goods_name: '小米6',
        　　goods_price: '1699',
        　　num: '2',
        },{
           goods_name: '红米3',
           goods_price: '699',
           num: '1',
        },{
           goods_name: '小米8',
           goods_price: '2899',
           num: '1',
        }],
           check_goods: [] //已选择的商品
				}
		},
		// 计算属性：
// 计算出商品中，总价和数量
			　computed: {
//              总价
                total_price() {
                    let price = 0　　　　　　　　　　　　　　　　　　　　　　　
                    this.check_goods.forEach(item => {
//                      总价 = 价格 * 数量
                        price += Number(item.goods_price) * Number(item.num)
                    })
                    return price
                },
//              数量
                total_num() {
                    let t_num = 0;
                    this.check_goods.forEach(item => {
                        t_num += Number(item.num);
                    })
                    return t_num
                }
            },
			// 实现商品增加减少，删除功能
		methods:{
			  // 商品类减减
                reduce(cart) {
                    if(cart.num <=0) {
                        cart.num = 0
                    } else {
                        cart.num --
                    }
                },
//              商品累加
                add_num(cart) {
                    cart.num++
                },
				 // 删除商品
                delete_num(cart){
                    this.check_goods.splice(this.check_goods.indexOf(cart),1)
                    this.cart_list.splice(this.cart_list.indexOf(cart),1)
                },
             // 全选
                check_all() {
                    if (this.check_goods.length >0) {
                        this.check_goods = []
                    } else {
                        this.cart_list.forEach(item => {
                            this.check_goods.push(item)
                        })
                    }
                }
	}	
	};
</script>

<style lang="scss" scoped>
	@import './addServe.scss';
     .top{height:0.666666rem;font-size: 0.293333rem;color:black;background-color:#ccc;line-height:0.666666rem;}
	 .top span{margin-right:0.133333rem;}
	
</style>