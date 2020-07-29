<template>
    <div class="disclaimer">
        <template v-if="$i18n.locale == 1">
            <div class="bigTitle">
                免責聲明
            </div>
            <div class="smallTitle">
                
            </div>
            <p class="smDetails">
                本平臺在國家相關法律法規規定的範圍內，只按現有狀況提供虛擬物品在線交易第三方網絡平臺服務，本平臺及其所有者非交易壹方，也非交易任何壹方之代理人或代表；同時，本平臺及其所有者也未授權任何人代表或代理本平臺及其所有者從事任何網絡交易行為或做出任何承諾、保證或其他類似行為，除非有明確的書面授權。
            </p>
            <p class="smDetails">
                鑒於互聯網及網絡交易的特殊性，本平臺無法鑒別和判斷相關交易各主體之民事權利和行為能力、資質、信用等狀況，也無法鑒別和判斷虛擬交易或正在交易或已交易之虛擬物品來源、權屬、真偽、性能、規格、質量、數量等權利屬性、自然屬性及其他各種狀況。因此，交易各方在交易前應加以仔細辨明，並慎重考慮和評估交易可能產生的各項風險。
            </p>
            <p class="smDetails">
                本平臺不希望出現任何因虛擬物品交易而在用戶之間及用戶與源碼開發商之間產生糾紛，但並不保證不發生該類糾紛。對於因前述各類情形而產生的任何糾紛，將由交易各方依據中華人民共和國現行的有關法律通過適當的方式直接加以解決，本平臺及其所有者不參與其中；對於因此類交易而產生的各類糾紛之任何責任和後果，由交易各方承擔，本平臺及其所有者不承擔任何責任及後果。
            </p>
            <p class="smDetails">
                本平臺不希望出現任何人利用本平臺或因使用本平臺而侵犯他人合法權益的行為，但並不保證不會發生此類行為或類似行為。本平臺將依據中國法律采取必要的措施防止發生前述各類行為或降低發生這類行為的可能性或者降低由此造成的損失及其後果。對於因前述各類情形而產生的任何糾紛，將由權利受到侵害之人和侵權方依據中華人民共和國現行的有關法律通過適當的方式直接加以解決，本平臺及其所有者不參與其中；對於因此類行為產生的各類糾紛之任何責任和後果，由相關責任方承擔，本平臺及其所有者不承擔任何責任及後果。
            </p>
            <p class="smDetails">
                任何非本平臺責任而產生的任何其他糾紛，概由糾紛各方依據中國相關法律以適當的方式直接加以解決，本平臺不參與其中；對於因該類行為產生的各類糾紛之任何責任和後果，由相關各方承擔，本平臺及其所有者不承擔任何責任及後果。
            </p>
        </template>
        <template v-else-if="$i18n.locale == 0">
            <div class="bigTitle">
                Disclaimer
            </div>
            <div class="smallTitle">
                
            </div>
            <p class="smDetails">
                Within the scope of the relevant national laws and regulations, this platform only provides third-party online platform services for online transactions of virtual goods according to the current situation. This platform and its owner are not a party to the transaction, nor are they agents or representatives of any party to the transaction; At the same time, the platform and its owner have not authorized anyone to represent or represent the platform and its owner to engage in any online trading behavior or make any promises, guarantees or other similar behavior, unless there is a clear written authorization.
            </p>
            <p class="smDetails">
                In view of the particularity of Internet and online transactions, this platform cannot identify and judge the civil rights and behavioral capabilities, qualifications, credit, etc. of the subjects of the relevant transactions, nor can it identify and judge the virtual transaction or the source and right of virtual items that are being traded or already traded Rights, authenticity, performance, specifications, quality, quantity and other rights attributes, natural attributes and other various conditions. Therefore, all parties to the transaction should carefully identify the transaction, and carefully consider and evaluate the risks that may arise from the transaction.
            </p>
            <p class="smDetails">
                This platform does not want any disputes between users and between users and source code developers due to virtual item transactions, but there is no guarantee that such disputes will not occur. Any disputes arising from the aforementioned various situations will be directly resolved by the parties to the transaction in an appropriate manner in accordance with the relevant laws of the People’s Republic of China, and the platform and its owners will not participate in it; for each transaction arising from this type of transaction Any liability and consequences of such disputes are borne by the parties to the transaction, and the platform and its owners do not bear any responsibility and consequences.
            </p>
            <p class="smDetails">
                This platform does not want any behavior that anyone uses the platform or violates the legitimate rights and interests of others because of the use of the platform, but there is no guarantee that such behavior or similar behavior will not occur. This platform will take necessary measures in accordance with Chinese law to prevent the occurrence of the aforementioned types of actions or reduce the likelihood of such actions or reduce the resulting losses and their consequences. Any disputes arising from the aforementioned various situations will be directly resolved by the person whose rights have been infringed and the infringing party in accordance with the relevant laws of the People’s Republic of China in an appropriate way. The platform and its owner will not participate in this; Any liability and consequences of various disputes arising from the actions shall be borne by the relevant responsible parties, and the platform and its owners shall not bear any responsibility and consequences.
            </p>
            <p class="smDetails">
                Any other disputes arising out of the responsibility of this platform will be resolved directly by the parties to the dispute in an appropriate manner in accordance with relevant Chinese laws. This platform will not participate in this; any responsibility and consequences for various disputes arising from such actions , Borne by the relevant parties, the platform and its owners do not bear any responsibility and consequences.
            </p>
        </template>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'disclaimer',
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
