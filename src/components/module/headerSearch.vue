<template>
    <div class="headerSearch">
        <div class="headerBox">
            <div class="left">
                <img class="applogo" @click="goIndex" src="@/assets/img/applogo.png" alt="">
                <div class="leftLink">
                <span v-text="$t('home.h1')">领券中心</span>
                </div>
            </div>
            <div class="right">
                <div class="serachBox">
                <input class="serach" type="text" placeholder="iPhone 11 Pro Max">
                <img class="serchImg" src="@/assets/img/serach.png" alt="">
                <div class="searchSuggest">
                    <span class="lis" v-text="$t('home.h2')">笔记本</span>
                    <span class="lis" v-text="$t('home.h3')">摄像机</span>
                    <span class="lis" v-text="$t('home.h4')">路由器</span>
                    <span class="lis" v-text="$t('home.h5')">记录仪</span>
                    <span class="lis" v-text="$t('home.h6')">手机</span>
                    <span class="lis" v-text="$t('home.h7')">扫地机</span>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Bus from '@/components/bus.js'

import { apiPageIndex } from '@/request/api'

export default {
    name: 'headerSearch',
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
        goIndex(){
            this.$router.push("/");
        }
    },
}
</script>

<style lang="scss" scoped>
    .headerBox{
        width: 1200px;
        height: 120px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .left{
            display: flex;
            align-items: center;
            img{
                width: 270px;
                height: auto;
                cursor: pointer;
            }
            .leftLink{
                color: #333;
                margin-left: 50px;
                font-size: 18px;
                span{
                    cursor: pointer;
                }
            }
        }
        .right{
            display: flex;
            align-items: center;
            .serachBox{
                position: relative;
                .serach{
                    outline:none;
                    width: 400px;
                    height: 35px;
                    border: 1px solid rgb(192, 190, 190);
                    border-radius: 50px;
                    text-indent: 20px;
                }
                .serach:focus {
                    outline:none;
                    border: 1px solid #DCBC82;
                }
                .serchImg{
                    width: 26px;
                    position: absolute;
                    right: 15px;
                    top: 7px;
                    cursor: pointer;
                }
                .searchSuggest{
                    font-size: 12px;
                    color: #999;
                    position: absolute;
                    bottom: -32px;
                    .lis{
                        margin-left: 20px;
                        cursor: pointer;
                    }
                    .lis:hover{
                        color: #333;
                    }
                }
            }
        }
    }
</style>
