<template>
    <div class="requirementsPlatform">
        <template v-if="$i18n.locale == 1">
            <div class="bigTitle">
                入駐平臺要求
            </div>
            <div class="smallTitle">
                
            </div>
            <div class="smallTitle">入駐商城、虛擬商品交易平臺的賣家，需要遵守以下條例：</div>
            <p class="smDetails">
                壹、不得發布國家禁止、違法違規（如黃、賭、毒）類產品；
            </p>
            <p class="smDetails">
                二、不得發布有攻擊性、牽涉國家政治、以及損壞國家形象類產品；
            </p>
            <p class="smDetails">
                三、全程交易不得通過特殊手段誘導買家到線下交易；
            </p>
            <p class="smDetails">
                四、不得發布廣告產品（包括標題、描述、店鋪說明、圖片）都不得帶QQ、外鏈廣告；
            </p>
            <p class="smDetails">
                五、開店的朋友務必設置手機號，保證買家能順利聯系到妳；避免聯系不到或者長期不在線。
            </p>
            <div class="smallTitle">若有違法以上條例的，情節嚴重的將會封店鋪處理。請各位賣家知曉！</div>
        </template>
        <template v-if="$i18n.locale == 0">
            <div class="bigTitle">
                Requirements for entering the platform
            </div>
            <div class="smallTitle">
                
            </div>
            <div class="smallTitle">Sellers who settle in malls and virtual commodity trading platforms must comply with the following regulations:</div>
            <p class="smDetails">
                1. Do not publish products that are prohibited by the state and violate laws and regulations (such as pornography, gambling, and drugs);
            </p>
            <p class="smDetails">
                2. Do not publish products that are offensive, involve national politics, or damage national image;
            </p>
            <p class="smDetails">
                3. The whole transaction shall not induce buyers to go offline through special means;
            </p>
            <p class="smDetails">
                4. No advertising products (including titles, descriptions, store descriptions, pictures) are allowed to bring QQ or external advertisements;
            </p>
            <p class="smDetails">
                5. Friends who set up shop must set up a mobile phone number to ensure that the buyer can contact you smoothly; avoid being unable to contact or long-term offline.
            </p>
            <div class="smallTitle">If there are violations of the above regulations, the shop will be closed if the circumstances are serious. Please let the seller know! </div>
        </template>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'requirementsPlatform',
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
