<template>
    <div class="clause">
        <Header></Header>
        <HeaderSearch></HeaderSearch>
        <div class="clauseLine"></div>
        <div class="content">
            <div class="left">
                <div class="group">
                    <div class="groupName" v-text="$t('clause.c1')">
                        条款说明
                    </div>
                    <ul>
                        <li :class="cActive == 0 ? 'active' : ''" @click="changeCActive(0)" v-text="$t('clause.c2')">免責聲明</li>
                        <li :class="cActive == 1 ? 'active' : ''" @click="changeCActive(1)" v-text="$t('clause.c3')">隱私條款</li>
                        <li :class="cActive == 2 ? 'active' : ''" @click="changeCActive(2)" v-text="$t('clause.c4')">用戶協議</li>
                    </ul>
                </div>
                <div class="group">
                    <div class="groupName" v-text="$t('clause.c5')">
                        買家幫助中心
                    </div>
                    <ul>
                        <li :class="cActive == 3 ? 'active' : ''" @click="changeCActive(3)" v-text="$t('clause.c6')">如何購買</li>
                        <li :class="cActive == 4 ? 'active' : ''" @click="changeCActive(4)" v-text="$t('clause.c7')">如何註冊</li>
                        <li :class="cActive == 5 ? 'active' : ''" @click="changeCActive(5)" v-text="$t('clause.c8')">忘記密碼怎麽辦</li>
                        <li :class="cActive == 6 ? 'active' : ''" @click="changeCActive(6)" v-text="$t('clause.c9')">支付方式</li>
                    </ul>
                </div>
                <div class="group">
                    <div class="groupName" v-text="$t('clause.c10')">
                        商家幫助中心
                    </div>
                    <ul>
                        <li :class="cActive == 7 ? 'active' : ''" @click="changeCActive(7)" v-text="$t('clause.c11')">入駐標準及費率</li>
                        <li :class="cActive == 8 ? 'active' : ''" @click="changeCActive(8)" v-text="$t('clause.c12')">入駐平臺要求</li>
                        <li :class="cActive == 9 ? 'active' : ''" @click="changeCActive(9)" v-text="$t('clause.c13')">商品發布管理條例</li>
                    </ul>
                </div>
            </div>
            <div class="rightCnt">
                <div class="rcName">
                    <template v-if="cActive == 0">{{$t('clause.c2')}}</template>
                    <template v-else-if="cActive == 1">{{$t('clause.c3')}}</template>
                    <template v-else-if="cActive == 2">{{$t('clause.c4')}}</template>
                    <template v-else-if="cActive == 3">{{$t('clause.c6')}}</template>
                    <template v-else-if="cActive == 4">{{$t('clause.c7')}}</template>
                    <template v-else-if="cActive == 5">{{$t('clause.c8')}}</template>
                    <template v-else-if="cActive == 6">{{$t('clause.c9')}}</template>
                    <template v-else-if="cActive == 7">{{$t('clause.c11')}}</template>
                    <template v-else-if="cActive == 8">{{$t('clause.c12')}}</template>
                    <template v-else>{{$t('clause.c13')}}</template>
                </div>
                <Disclaimer v-if="cActive == 0"></Disclaimer>
                <privacyPolicy v-if="cActive == 1"></privacyPolicy>
                <userAgreement v-if="cActive == 2"></userAgreement>
                <howToBuy v-if="cActive == 3"></howToBuy>
                <howToRegister v-if="cActive == 4"></howToRegister>
                <forgetPassword v-if="cActive == 5"></forgetPassword>
                <paymentMethod v-if="cActive == 6"></paymentMethod>
                <entryCriteriaRates v-if="cActive == 7"></entryCriteriaRates>
                <requirementsPlatform v-if="cActive == 8"></requirementsPlatform>
                <comManageRegul v-if="cActive == 9"></comManageRegul>
            </div>
        </div>
        <Bottom></Bottom>
    </div>
</template>

<script>
import Vue from 'vue'
import Bus from '@/components/bus.js'
import Header from '@/components/module/header.vue'
import Bottom from '@/components/module/bottom.vue'
import HeaderSearch from '@/components/module/headerSearch.vue'
import Disclaimer from '@/components/clause/disclaimer.vue'
import privacyPolicy from '@/components/clause/privacyPolicy.vue'
import userAgreement from '@/components/clause/userAgreement.vue'
import howToBuy from '@/components/clause/buy/howToBuy.vue'
import howToRegister from '@/components/clause/buy/howToRegister.vue'
import forgetPassword from '@/components/clause/buy/forgetPassword.vue'
import paymentMethod from '@/components/clause/buy/paymentMethod.vue'
import entryCriteriaRates from '@/components/clause/sell/entryCriteriaRates.vue'
import requirementsPlatform from '@/components/clause/sell/requirementsPlatform.vue'
import comManageRegul from '@/components/clause/sell/comManageRegul.vue'
import merge from 'webpack-merge'
import { apiPageIndex } from '@/request/api'

export default {
    name: 'clause',
    components: {
        Header,Bottom,HeaderSearch,
        Disclaimer,
        privacyPolicy,
        userAgreement,
        howToBuy,
        howToRegister,
        forgetPassword,
        paymentMethod,
        entryCriteriaRates,
        requirementsPlatform,
        comManageRegul
    },
    data() {
        return {
            cActive : 0
        }
    },
    created(){
        let mark = this.$route.query.active;
        if(mark){
            this.cActive = mark
        }
    },
    mounted(){
    },
    methods:{
        changeCActive(active){
            this.cActive = active;
            this.$router.push({
                query:merge(this.$route.query,{'active':active})
            })
        }
    },
}
</script>

<style lang="scss" scoped>
    .clauseLine{
        width: 100%;
        border-top: 1px solid #333;
        background: #F2F2F2;
    }
    .content{
        padding-top: 50px;
        width: 1200px;
        margin: 0 auto;
        display: flex;
    }
    .left{
        width: 200px;
        padding-bottom: 50px;
        padding: 20px;
        .group{
            text-align: center;
            border-bottom: 1px solid #ddd;
            padding: 15px 0;
            .groupName{
                font-size: 15px;
                font-weight: 700;
                height: 30px;
                line-height: 30px;
                color: #333;
            }
            ul,li{
                list-style: none;
                margin: 0;
                padding: 0;
            }
            li{
                display: block;
                font-size: 12px;
                min-height: 30px;
                line-height: 30px;
                margin: 5px 0;
                color: #666;
                cursor: pointer;
            }
            li:hover{
                border-left: 2px solid #999;
                border-radius: 2px;
            }
            .active{
                border-left: 2px solid #999;
                border-radius: 2px;
                background: url('../assets/img/right.png') 98% 5px no-repeat #f4f4f4;
            }
        }
        .group:last-child{
            border: none;
        }
    }
    .rightCnt{
        width: calc(100% - 180px);
        padding-bottom: 200px;
        .rcName{
            width: 100%;
            color: #333;
            float: left;
            font-size: 18px;
            font-weight: 400;
            border-bottom: 1px #e1e1e1 solid;
            height: 49px;
            line-height: 49px;
        }
    }
</style>
<style lang="scss">
    .rightCnt{
        .bigTitle{
            text-align: center;
            line-height: 21px;
            font-size: 24px;
            color: #333;
            font-weight: 700;
            margin-top: 100px;
            padding-bottom: 30px;
            box-sizing: border-box;
        }
        .smallTitle{
            line-height: 28px;
            padding: 20px 0;
            color: #333;
            font-size: 14px;
            font-weight: 700;
        }
        .smDetails{
            text-indent: 20px;
            text-align: left;
            line-height: 20px;
            background: rgb(255,255,255);
            font-size: 12px;
            color: #666;
        }
        .indentTwo{
            text-indent: 40px;
            line-height: 10px;
        }
    }
</style>