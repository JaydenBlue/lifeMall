<template>
    <div class="howToBuy">
        <template v-if="$i18n.locale == 1">
            <div class="bigTitle">
                如何購買商品
            </div>
            <div class="smallTitle">
                
            </div>
            <div class="smallTitle">1. 打開網站首頁，免費註冊賬號，通過手機號或者郵箱註冊。</div>
            <div class="smallTitle">2. 找到我們想要的商品。點擊查看。</div>
            <div class="smallTitle">3.</div>
            <p class="smDetails">
                （1）查看商品價格是否物有所值
            </p>
            <p class="smDetails">
                （2）查看商品介紹和用戶評論是否良好
            </p>
            <p class="smDetails">
                （3）點擊立即購買或加入購物車結算
            </p>
            <div class="smallTitle">4. 購買前最好與商城客服及時聯系，反饋各種優惠活動。然後點擊立即付款。</div>
            <div class="smallTitle">5.完成付款後會自動跳轉會員中心。</div>
            <div class="smallTitle">點擊“我的訂單”，查看訂單詳情，如是是自動發貨，無需等待就能獲得商品。</div>
        </template>
        <template v-if="$i18n.locale == 0">
            <div class="bigTitle">
                How to buy goods
            </div>
            <div class="smallTitle">
                
            </div>
            <div class="smallTitle"> 1. Open the homepage of the website, register an account for free, and register by mobile phone number or email. </div>
            <div class="smallTitle"> 2. Find the product we want. Click to view. </div>
            <div class="smallTitle">3.</div>
            <p class="smDetails">
                (1) Check if the product price is worth the money
            </p>
            <p class="smDetails">
                (2) Check whether the product introduction and user reviews are good
            </p>
            <p class="smDetails">
                (3) Click to buy now or add to cart to settle
            </p>
            <div class="smallTitle">4. It is best to contact the customer service of the mall in time before buying to feedback various preferential activities. Then click Pay Now. </div>
            <div class="smallTitle">5. After completing the payment, it will automatically jump to the member center. </div>
            <div class="smallTitle">Click "My Order" to view the order details, if it is automatic delivery, you can get the goods without waiting. </div>
        </template>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'howToBuy',
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
