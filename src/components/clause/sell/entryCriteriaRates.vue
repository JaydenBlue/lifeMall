<template>
    <div class="entryCriteriaRates">
        <template v-if="$i18n.locale == 1">
            <div class="bigTitle">
                入駐標準及費率
            </div>
            <div class="smallTitle">
                
            </div>
            <div class="smallTitle">1、入駐標準</div>
            <p class="smDetails">
                商城對入駐商家實行低門檻準入制，歡迎任何願意依法、誠信經營的企業或個人申請入駐。同時為保障消費者合法權益不受侵害，平臺對每份入駐申請實行嚴格審核標準，必須在完成相關資料，並提交開店申請，才可以成功在線開店。
            </p>
            <div class="smallTitle">2、收益分成</div>
            <p class="smDetails">
                為維持平臺正常運營，平臺會對賣家交易抽取10%分成，以支付各項人工及場地、軟、硬件開銷。
            </p>
            <div class="smallTitle">3、推廣分成</div>
            <p class="smDetails">
                為鼓勵普通用戶推廣商品，平臺會對成功推廣並成功成單，交易額抽取5%分成，獎勵給推廣者。
            </p>
        </template>
        <template v-if="$i18n.locale == 0">
            <div class="bigTitle">
                Entry criteria and rates
            </div>
            <div class="smallTitle">
                
            </div>
            <div class="smallTitle">1, entry criteria</div>
            <p class="smDetails">
                The mall implements a low-threshold entry system for merchants who settle in, and any enterprise or individual willing to operate in accordance with the law and with integrity is welcome to apply for settlement. At the same time, in order to protect the legitimate rights and interests of consumers from infringement, the platform implements strict review standards for each application for settlement, and must complete relevant materials and submit an application to open a store before it can successfully open a store online.
            </p>
            <div class="smallTitle">2. Revenue sharing</div>
            <p class="smDetails">
                In order to maintain the normal operation of the platform, the platform will draw 10% of the seller's transaction to pay for the labor, venue, software and hardware expenses.
            </p>
            <div class="smallTitle">3. Promotion sharing</div>
            <p class="smDetails">
                In order to encourage ordinary users to promote products, the platform will successfully promote and successfully complete a single order, withdraw 5% of the transaction amount and reward the promoters.
            </p>
        </template>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'entryCriteriaRates',
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
