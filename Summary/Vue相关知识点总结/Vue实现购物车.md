https://www.cnblogs.com/zhoulifeng/p/9228397.html

<template>
	<div class="irregularFlight">
		<Header title="��ӷ���" />
		<main class="freakMain">
			<div class="top">
				<span>ȥ��</span><span>11��30��</span> <span>AQ1022</span><span>������-����</span>
			</div>
		<table class="table">
                <tr>
                    <th><label><input type="checkbox" @click="check_all" :checked="check_goods.length == cart_list.length"/>ȫѡ</label></th>
                    <th>��Ʒ����</th>
                    <th>��Ʒ�۸�</th>
                    <th>����</th>
                    <th>����</th>
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
                        <button class="btn btn-danger" v-on:click="delete_num">ɾ��</button>
                    </td>
                </tr>
            </table>
				 <div>
                �ܼƣ��� {{cart_list.length    }}����Ʒ����ѡ�� {{total_num}} ��
                <div class="pull-right">
                    �ϼƣ�{{total_price}}Ԫ
                    <a href="" class="btn btn-success" :disabled="check_goods.length <= 0">ȥ����</a>
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
        ����goods_name: 'С��6',
        ����goods_price: '1699',
        ����num: '2',
        },{
           goods_name: '����3',
           goods_price: '699',
           num: '1',
        },{
           goods_name: 'С��8',
           goods_price: '2899',
           num: '1',
        }],
           check_goods: [] //��ѡ�����Ʒ
				}
		},
		// �������ԣ�
// �������Ʒ�У��ܼۺ�����
			��computed: {
//              �ܼ�
                total_price() {
                    let price = 0����������������������������������������������
                    this.check_goods.forEach(item => {
//                      �ܼ� = �۸� * ����
                        price += Number(item.goods_price) * Number(item.num)
                    })
                    return price
                },
//              ����
                total_num() {
                    let t_num = 0;
                    this.check_goods.forEach(item => {
                        t_num += Number(item.num);
                    })
                    return t_num
                }
            },
			// ʵ����Ʒ���Ӽ��٣�ɾ������
		methods:{
			  // ��Ʒ�����
                reduce(cart) {
                    if(cart.num <=0) {
                        cart.num = 0
                    } else {
                        cart.num --
                    }
                },
//              ��Ʒ�ۼ�
                add_num(cart) {
                    cart.num++
                },
				 // ɾ����Ʒ
                delete_num(cart){
                    this.check_goods.splice(this.check_goods.indexOf(cart),1)
                    this.cart_list.splice(this.cart_list.indexOf(cart),1)
                },
             // ȫѡ
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