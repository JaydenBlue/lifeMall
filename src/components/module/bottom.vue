<template>
    <div class="bottom">
        <div class="content">
            <div class="left">
                <img class="applog" src="@/assets/img/applogo.png" alt="" srcset="">
                <div class="spdetails">
                    Create a variety of payment methods, digital currency, French currency and other valuable and circulating gold coin virtual trading market. Hold the tenet of fairness, justice and harmony, and serve everyone!
                </div>
            </div>
            <div class="right">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="heads" v-text="$t('bottom.b1')">条款说明</div>
                        <div class="lis" v-text="$t('bottom.b2')" @click="goHelp(0)">用户协议</div>
                        <div class="lis" v-text="$t('bottom.b3')" @click="goHelp(1)">隐私条款</div>
                        <div class="lis" v-text="$t('bottom.b4')" @click="goHelp(2)">免责声明</div>
                    </el-col>
                    <el-col :span="6">
                        <div class="heads" v-text="$t('bottom.b5')">帮助中心</div>
                        <div class="lis" v-text="$t('bottom.b6')" @click="goHelp(3)">商家帮助中心</div>
                        <div class="lis" v-text="$t('bottom.b7')" @click="goHelp(7)">买家帮助中心</div>
                    </el-col>
                    <el-col :span="6">
                        <div class="heads" v-text="$t('bottom.b8')">客服中心</div>
                        <div class="lis" v-text="$t('bottom.b9')">联系客服</div>
                    </el-col>
                    <el-col :span="6">
                        <div class="heads" v-text="$t('bottom.b10')">APP下载</div>
                        <img class="downewm" src="@/assets/img/downurl.png" alt="">
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Bus from '@/components/bus.js'

import { apiPageIndex } from '@/request/api'

export default {
    name: 'bottom',
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
        goHelp(active){
            let newpage = this.$router.resolve({ 
                name: 'clause',
                query:{
                    active:active,
                }   
            }) 
            window.open(newpage.href,'_blank');
            // this.$router.push({name:'clause',query: {active:active}})
        }
    },
}
</script>

<style lang="scss" scoped>
    .bottom{
        background: #333333;
        padding: 40px 0;
    }
    .content{
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .left{
            .applog{
                display: block;
                height: 26px;
            }
            .spdetails{
                padding: 20px 0;
                width:363px;
                height:47px;
                font-size:16px;
                font-family:Microsoft Yi Baiti;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height: 20px;
            }
        }
        .right{
            width: 700px;
            text-align: left;
            text-align: center;
            font-size: 14px;
            .heads{
                color: #F9F9F9;
                padding-bottom: 15px;
            }
            .lis{
                color: rgba(255,255,255,0.5);
                margin-top: 6px;
                cursor: pointer;
            }
            .lis:hover{
                text-decoration: underline;
            }
            .downewm{
                width: 80px;
                display: block;
                margin: 0 auto;
            }
        }
    }
</style>
