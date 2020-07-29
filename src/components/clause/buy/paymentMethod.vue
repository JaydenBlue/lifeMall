<template>
    <div class="paymentMethod">
        <template v-if="$i18n.locale == 1">
            <div class="bigTitle">
                支付方式
            </div>
            <div class="smallTitle">
                
            </div>
            <div class="smallTitle">註冊並登陸商城，選擇妳需要的商品點擊“立刻購買”進入收銀臺，選擇支付方式，輸入您的支付密碼點擊“確認付款”，如果余額不足請先充值，請及時充值；</div>
        </template>
        <template v-if="$i18n.locale == 0">
            <div class="bigTitle">
                 payment method
             </div>
             <div class="smallTitle">
                
             </div>
             <div class="smallTitle">Register and log in to the mall, select the products you need, click "Buy Now" to enter the cash register, select the payment method, enter your payment password and click "Confirm Payment", if the balance is insufficient, please recharge first, please Recharge in time;</div>
        </template>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'paymentMethod',
    components: {

    },
    data() {
        return {

        }
    },
    created(){
        
    },
    mounted(){
        
    },
    methods:{
        
    },
}
</script>

<style lang="scss" scoped>
    
</style>
