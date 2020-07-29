<template>
    <div class="forgetPassword">
        <template v-if="$i18n.locale == 1">
            <div class="bigTitle">
                忘記密碼怎麽辦
            </div>
            <div class="smallTitle">
                
            </div>
            <div class="smallTitle">如果不小心忘記密碼了，解決辦法如下：</div>
            <p class="smDetails">
                一、點擊“忘記密碼”字樣，會進入到密碼找回界面;
            </p>
            <p class="smDetails">
                二、有兩種方式：手機找回和郵箱找回；
            </p>
            <p class="smDetails">
                三、根據提示操作找回即可完成，郵箱和手機號都不記得的可以聯系我們平臺客服處理。
            </p>
        </template>
        <template v-if="$i18n.locale == 0">
            <div class="bigTitle">
                 What if I forget my password
             </div>
             <div class="smallTitle">
                
             </div>
             <div class="smallTitle">If you accidentally forget your password, the solution is as follows:</div>
             <p class="smDetails">
                 1. Click on the word "Forgot Password" to enter the password retrieval interface;
             </p>
             <p class="smDetails">
                 2. There are two ways: mobile phone retrieval and email retrieval;
             </p>
             <p class="smDetails">
                 3. Follow the prompts to get it back and complete it. If you don’t remember your email address and mobile phone number, you can contact our platform customer service for processing.
             </p>
        </template>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'forgetPassword',
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
