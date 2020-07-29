<template>
    <div class="howToRegister">
        <template v-if="$i18n.locale == 1">
            <div class="bigTitle">
                登錄註冊
            </div>
            <div class="smallTitle">
                
            </div>
            <div class="smallTitle">一、賬戶註冊</div>
            <p class="smDetails">
                第壹步：打開商城網站，點擊“註冊”。
            </p>
            <p class="smDetails">
                第二步：進入註冊頁面後，填寫註冊信息，正確填寫登錄密碼、手機號或郵箱。
            </p>
            <p class="smDetails">
                第三步：設置支付密碼，確定完成註冊。
            </p>
            <div class="smallTitle">二、如何安全登錄</div>
            <p class="smDetails">
                如果您已成功註冊，就可以登錄到您的商城帳號。為了保護您的利益，請您在登錄時務必確認輸入的網址是：https://merrilylife.com/登錄時，壹般用戶需輸入手機號（或者郵箱）和密碼。
            </p>
        </template>
        <template v-if="$i18n.locale == 0">
            <div class="bigTitle">
                 log in Register
             </div>
             <div class="smallTitle">
                
             </div>
             <div class="smallTitle">First, account registration</div>
             <p class="smDetails">
                 Step one: Open the mall website and click "Register".
             </p>
             <p class="smDetails">
                 Step 2: After entering the registration page, fill in the registration information, and correctly fill in the login password, mobile phone number or email.
             </p>
             <p class="smDetails">
                 The third step: set the payment password and confirm to complete the registration.
             </p>
             <div class="smallTitle">Second, how to log in safely</div>
             <p class="smDetails">
                 If you have successfully registered, you can log in to your store account. In order to protect your interests, please make sure that the URL entered is: https://merrilylife.com/ When logging in, the average user needs to enter the mobile phone number (or email) and password.
             </p>
        </template>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'howToRegister',
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
