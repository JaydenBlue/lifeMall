<template>
    <div class="headers">
        <div class="fixed">
            <div class="content">
                <div class="left">
                    <div class="tls" @click="addfavorite" v-text="$t('header.h1')">收藏</div>
                    <div class="tls" v-text="$t('header.h2')">入驻商家</div>
                    <div class="langC">
                        <el-dropdown>
                            <span>
                                <img v-if="$i18n.locale == 1" style="width:20px;vertical-align: -6px;" src="@/assets/img/cn.png" alt="">
                                <img v-if="$i18n.locale == 0" style="width:20px;vertical-align: -6px;" src="@/assets/img/us.png" alt="">
                                {{$t('lang.lang')}}<i class="el-icon-arrow-down"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item >
                                    <span @click="langChange(1)"><img class="flagImg" src="@/assets/img/cn.png" alt="" srcset="">繁體中文</span>
                                </el-dropdown-item>
                                <el-dropdown-item >
                                    <span @click="langChange(0)"><img class="flagImg" src="@/assets/img/us.png" alt="" srcset="">English</span></el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
                <div class="right">
                    <div class="tls" v-text="$t('header.h3')">登录</div>
                    <div class="tls" v-text="$t('header.h4')">注册</div>
                    <div class="tls hiddens">
                        {{$t('header.h5')}}
                        <div class="hover">
                            <img src="@/assets/img/downurl.png" alt="" srcset="">
                            <div class="downjs">
                                <h5>MERRILY LIFE</h5>
                                <h5 v-text="$t('header.h6')">手机商城</h5>
                                <h5 v-text="$t('header.h7')">手机扫码下载</h5>
                            </div>
                        </div>
                    </div>
                    <div class="tls hiddens">
                        <i class="el-icon-goods"></i>
                        <div class="hover shopcat">
                            <div class="noshop" v-text="$t('header.h8')">
                                您的购物车还没有商品，赶紧去选购吧！
                            </div>
                        </div>
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
    name: 'headers',
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
        addfavorite(){ 
            var ctrl = (navigator.userAgent.toLowerCase()).indexOf('mac') != -1 ? 'Command/Cmd': 'CTRL';
            try{
                if (document.all) { //IE类浏览器
                    try {
                        window.external.toString(); //360浏览器不支持window.external，无法收藏
                        this.$message('国内开发的360浏览器等不支持主动加入收藏。\n您可以尝试通过浏览器菜单栏 或快捷键 ctrl+D 试试。');
                    }
                    catch (e){
                        try{
                            window.external.addFavorite(window.location, document.title);
                        }
                        catch (e){
                            window.external.addToFavoritesBar(window.location, document.title);  //IE8
                        }
                    }
                }
                else if (window.sidebar) { //firfox等浏览器
                    window.sidebar.addPanel(document.title, window.location, "");
                }
                else {
                    this.$message('您可以尝试通过快捷键' + ctrl + ' + D 加入到收藏夹~');
                }
            }
            catch (e){
                this.$message('因为IE浏览器存在bug，添加收藏失败！\n解决办法：在注册表中查找\n HKEY_CLASSES_ROOT\\TypeLib\\{EAB22AC0-30C1-11CF-A7EB-0000C05BAE0B}\\1.1\\0\\win32 \n将 C:\\WINDOWS\\system32\\shdocvw.dll 改为 C:\\WINDOWS\\system32\\ieframe.dll ');
            }
        },
        langChange(type){
            this.$i18n.locale = type + '';
            this.$cookies.set('lang_type',type);
        },
    },
}
</script>

<style lang="scss" scoped>
    .headers{
        width: 100%;
        height: 40px;
        z-index: 15;
        position: relative;
    }
    .fixed{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: #333333;
    }
    .content{
        width: 1220px;
        margin: 0 auto;
        height: 40px;
        display: flex;
        justify-content: space-between;
        .left,.right{
            color: #fff;
            display: flex;
            font-size: 12px;
            line-height: 40px;
            .tls{
                margin-left: 30px;
                cursor: pointer;
                padding: 0 5px;
                i{
                    font-size: 25px;
                    vertical-align: -5px;
                }
            }
            .tls:nth-child(1){
                margin-left: 0;
            }
            .hiddens{
                position: relative;
                height: 35px;
                margin-top: 5px;
                line-height: 30px;
                border-radius: 5px 5px 0 0;
                .hover{
                    display: flex;
                    position: absolute;
                    width: 230px;
                    min-height: 120px;
                    background: #fff;
                    top: 35px;
                    right: 0;
                    padding: 10px;
                    box-sizing: border-box;
                    display: none;
                    box-shadow: 1px 3px 5px #dbd7d7;
                    img{
                        display: block;
                        width: 100px;
                        height: 100px;
                        margin-right: 10px;
                    }
                    .downjs{
                        h5{
                            height: 33px;
                            margin: 0;
                            line-height: 33px;
                            color: #333333;
                        }
                    }
                }
                .shopcat{
                    width: 300px;
                    .noshop{
                        width: 100%;
                        padding-top: 32px;
                        font-size: 12px;
                        text-align: center;
                    }
                }
            }
            .hiddens:hover{
                background: #fff;
                color: #333333;
                .hover{
                    display: flex;
                }
            }
        }
    }
    
</style>
<style lang="scss">
    
    .langC{
        padding: 0 25px;
        height: 40px;
        font-size: 14px;
        display: flex;
        align-items: center;
        span{
            height: 20px;
            line-height: 20px;
            color: rgba(255, 255, 255, 0.7);
            display: block;
            width: 108px;
        }
        i{
            padding: 0 5px;
            transition: all 0.3s;
        }
        img{
            
        }
    }
    .langC span:hover{
        color: #fff;
        cursor: pointer;
        i{
            transform: rotate(-180deg)
        }
    }
    
    .flagImg{
        width: 20px;
        vertical-align: -5px;
        margin-right: 5px;
    }
</style>
