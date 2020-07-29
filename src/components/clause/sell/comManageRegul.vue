<template>
    <div class="comManageRegul">
        <template v-if="$i18n.locale == 1">
            <div class="bigTitle">
                商品發布管理條例
            </div>
            <div class="smallTitle">
                
            </div>
            <div class="smallTitle">1.1 商品發布管理的目的</div>
            <p class="smDetails">
                為了給所有類目商品提供壹個高效、公平和安全的交易環境，同時給買家展示更多更高質量的商品；商城制定本網站商品發布管理條例。對於違反“商品發布管理條例”的行為，本站將根據用戶違規的情節和程度對違規用戶做出：撤銷所有發布單，限制交易權限甚至凍結用戶帳號的處理。如由於用戶違規行為導致本網站遭受損失，本網站保留追究該用戶法律責任的權利。管理條例具體內容如下：
            </p>
            <div class="smallTitle">1.2 商品重復鋪貨管理規則</div>
            <p class="smDetails">
                1、同壹賣家不得出售相同商品（即：壹個用戶名可發布多個商品，但不能壹個用戶名發布多個重復的商品）。
            </p>
            <p class="smDetails">
                2、不得使用多個用戶名發布相同商品。
            </p>
            <div class="smallTitle">如用戶違反以上任何壹條規則，即可判定為重復鋪貨，壹律進行撤銷商品處理，並視情節輕重，施以相關處理。</div>
            <div class="smallTitle">違規類別：</div>
            <p class="smDetails">
                A、壹級違規：
            </p>
            <p class="smDetails indentTwo">
                1）、判斷依據：用戶第壹次違反以上任意壹條發布規則；
            </p>
            <p class="smDetails indentTwo">
                2）、違規類型：重復鋪貨；
            </p>
            <p class="smDetails indentTwo">
                3）、管理措施：給予該用戶警告，並撤銷其所有發布單。
            </p>
            <p class="smDetails">
                B、二級違規：
            </p>
            <p class="smDetails indentTwo">
                1）、判斷依據：用戶第二次違反以上任意壹條發布規則；
            </p>
            <p class="smDetails indentTwo">
                2）、違規類型：重復鋪貨；
            </p>
            <p class="smDetails indentTwo">
                3）、管理措施：鎖定該用戶的商城用戶名1-3天，並撤銷其所有發布單。
            </p>
            <p class="smDetails">
                C、三級違規：
            </p>
            <p class="smDetails indentTwo">
                1）、判斷依據：用戶第三次違反以上任意壹條發布規則；
            </p>
            <p class="smDetails indentTwo">
                2）、違規類型：重復鋪貨；
            </p>
            <p class="smDetails indentTwo">
                3）、管理措施：鎖定該用戶的商城用戶名7天，並撤銷其所有發布單。
            </p>
            <p class="smDetails">
                D、四級違規：
            </p>
            <p class="smDetails indentTwo">
                1）、判斷依據：用戶第四次違反以上任意壹條發布規則；
            </p>
            <p class="smDetails indentTwo">
                2）、違規類型：重復鋪貨；
            </p>
            <p class="smDetails indentTwo">
                3）、管理措施：鎖定該用戶的商城用戶名1個月，並撤銷其所有發布單。
            </p>
            <p class="smDetails">
                E、五級違規：
            </p>
            <p class="smDetails indentTwo">
                1）、判斷依據：用戶第五次違反以上任意壹條發布規則；
            </p>
            <p class="smDetails indentTwo">
                2）、違規類型：重復鋪貨；
            </p>
            <p class="smDetails indentTwo">
                3）、管理措施：鎖定該用戶的商城用戶名365天，並撤銷其所有發布單。
            </p>
            <div class="smallTitle">鎖定帳號後將不得提現。</div>
            <div class="smallTitle">1.3 發布正確的商品類型規則</div>
            <p class="smDetails">
                1）、發布出售的商品必須發布在相對應的欄目中。
            </p>
            <p class="smDetails">
                2）、發布出售的商品必須發布在相對應的子類項中，未開通的子類項統壹發布至“其它”子類項。
            </p>
            <div class="smallTitle">1.4 發布內容符合規定規則</div>
            <p class="smDetails">
                所發布的商品標題、圖片、描述等信息缺乏或者多種信息相互不壹致的情況，商城不允許發布。其中具體形式包括但不僅限於以下情況：
            </p>
            <p class="smDetails indentTwo">
                1）、發布出售的商品種類屬性與商品實際屬性不壹致。
            </p>
            <p class="smDetails indentTwo">
                2）、發布商品的定價不符合市場規律或所屬行業標準。
            </p>
            <p class="smDetails indentTwo">
                3）、發布商品信息中包含誹謗、謾罵、色情、暴力威脅等攻擊性言語以及其它非商品信息內容（包含但不僅限於如下情況：在商品標題或描述中私自公布聯系方式、他人ID、聊天記錄、交易糾紛、使用不文明語言等）。
            </p>
            <div class="smallTitle">違反以上任壹規則，即可判定為惡意發布，壹律進行撤銷處理，並視情節輕重，施以相關處理。</div>
            <div class="smallTitle">違規類別：分成五個等級進行（處理）（違反判斷依據中任意壹條都判定為違規發布）。</div>
            <p class="smDetails">
                A、壹級違規：
            </p>
            <p class="smDetails indentTwo">
                1）、判斷依據：用戶第壹次違反以上任意壹條發布規則；
            </p>
            <p class="smDetails indentTwo">
                2）、違規類型：惡意發布；
            </p>
            <p class="smDetails indentTwo">
                3）、管理措施：給予該用戶警告，並撤銷其所有發布單。
            </p>
            <p class="smDetails">
                B、二級違規：
            </p>
            <p class="smDetails indentTwo">
                1）、判斷依據：用戶第二次違反以上任意壹條發布規則；
            </p>
            <p class="smDetails indentTwo">
                2）、違規類型：惡意發布；
            </p>
            <p class="smDetails indentTwo">
                3）、管理措施：鎖定該用戶的商城用戶名1-3天，並撤銷其所有發布單。
            </p>
            <p class="smDetails">
                C、三級違規：
            </p>
            <p class="smDetails indentTwo">
                1）、判斷依據：用戶第二次違反以上任意壹條發布規則；
            </p>
            <p class="smDetails indentTwo">
                2）、違規類型：惡意發布；
            </p>
            <p class="smDetails indentTwo">
                3）、管理措施：鎖定該用戶的商城用戶名7天，並撤銷其所有發布單。
            </p>
            <p class="smDetails">
                D、四級違規：
            </p>
            <p class="smDetails indentTwo">
                1）、判斷依據：用戶第四次違反以上任意壹條發布規則；
            </p>
            <p class="smDetails indentTwo">
                2）、違規類型：惡意發布；
            </p>
            <p class="smDetails indentTwo">
                3）、管理措施：鎖定該用戶的商城用戶名壹個月，並撤銷其所有發布單。
            </p>
            <p class="smDetails">
                E、五級違規：
            </p>
            <p class="smDetails indentTwo">
                1）、判斷依據：用戶第四次違反以上任意壹條發布規則；
            </p>
            <p class="smDetails indentTwo">
                2）、違規類型：惡意發布；
            </p>
            <p class="smDetails indentTwo">
                3）、管理措施：鎖定該用戶的商城用戶名365天，並撤銷其所有發布單。
            </p>
            <div class="smallTitle">鎖定帳號後將不得提現。</div>
            <div class="smallTitle">附錄</div>
            <p class="smDetails">
                1、不得使用任何不正當方式使自身發布單排名靠前（平臺刷新功能除外）。
            </p>
            <p class="smDetails">
                2、不得影響商城網站正常運營秩序。
            </p>
            <div class="smallTitle">以上管理條例視情節嚴重性加重處理，最終解釋權歸商城所有。</div>
            <div class="smallTitle">請各用戶自覺遵守，相互監督，謝謝配合！</div>
        </template>
        <template v-if="$i18n.locale == 0">
            <div class="bigTitle">
                Commodity release management regulations
            </div>
            <div class="smallTitle">
                
            </div>
            <div class="smallTitle">1.1 Purpose of product release management</div>
            <p class="smDetails">
                In order to provide an efficient, fair and safe trading environment for all categories of products, and at the same time show more high-quality products to buyers; the mall formulates regulations for the release of products on this website. For violations of the "Commodity Release Management Regulations", this site will make violations according to the user's violations and the degree of violations: to cancel all release notes, restrict trading rights and even freeze the user account processing. If the website suffers losses due to user violations, this website reserves the right to pursue the user's legal responsibility. The specific contents of the management regulations are as follows:
            </p>
            <div class="smallTitle">1.2 Management Rules for Duplicate Goods</div>
            <p class="smDetails">
                1. The same seller cannot sell the same product (that is, one user name can post multiple products, but one user name cannot post multiple duplicate products).
            </p>
            <p class="smDetails">
                2. Do not use multiple user names to post the same product.
            </p>
            <div class="smallTitle">If the user violates any of the above rules, it can be determined as a duplicate store, and all goods will be cancelled, and the relevant treatment will be applied depending on the seriousness of the plot. </div>
            <div class="smallTitle">Category of violation:</div>
            <p class="smDetails">
                A. First-level violations:
            </p>
            <p class="smDetails indentTwo">
                1). Judgment basis: The user violates any one of the above release rules for the first time;
            </p>
            <p class="smDetails indentTwo">
                2). Type of violation: repeat shop;
            </p>
            <p class="smDetails indentTwo">
                3). Management measures: give the user a warning and cancel all their release notes.
            </p>
            <p class="smDetails">
                B. Secondary violations:
            </p>
            <p class="smDetails indentTwo">
                1). Judgment basis: The user violates any of the above release rules for the second time;
            </p>
            <p class="smDetails indentTwo">
                2). Type of violation: repeat shop;
            </p>
            <p class="smDetails indentTwo">
                3). Management measures: lock the user's user name in the mall for 1-3 days, and cancel all its release notes.
            </p>
            <p class="smDetails">
                C. Three-level violations:
            </p>
            <p class="smDetails indentTwo">
                1). Judgment basis: The user violates any of the above release rules for the third time;
            </p>
            <p class="smDetails indentTwo">
                2). Type of violation: repeat shop;
            </p>
            <p class="smDetails indentTwo">
                3). Management measures: lock the user's user name in the mall for 7 days, and cancel all its release notes.
            </p>
            <p class="smDetails">
                D. Four levels of violations:
            </p>
            <p class="smDetails indentTwo">
                1). Judgment basis: The user violates any of the above release rules for the fourth time;
            </p>
            <p class="smDetails indentTwo">
                2). Type of violation: repeat shop;
            </p>
            <p class="smDetails indentTwo">
                3). Management measures: lock the user’s user name of the mall for 1 month, and cancel all its release notes.
            </p>
            <p class="smDetails">
                E. Five-level violation:
            </p>
            <p class="smDetails indentTwo">
                1). Judgment basis: The user violated any of the above release rules for the fifth time;
            </p>
            <p class="smDetails indentTwo">
                2). Type of violation: repeat shop;
            </p>
            <p class="smDetails indentTwo">
                3). Management measures: lock the user's user name in the mall for 365 days, and cancel all its release notes.
            </p>
            <div class="smallTitle">Withdrawal after the account is locked. </div>
            <div class="smallTitle">1.3 Publish the correct product type rules</div>
            <p class="smDetails">
                1). Commodities released for sale must be published in the corresponding columns.
            </p>
            <p class="smDetails">
                2). The commodities released for sale must be published in the corresponding sub-category items, and the unopened sub-category items are all released to the "other" sub-category items.
            </p>
            <div class="smallTitle">1.4 The published content complies with the prescribed rules</div>
            <p class="smDetails">
                In the case of the lack of information such as the title, picture, description, etc. of the released products or the inconsistency of various information, the mall does not allow the publication. The specific forms include but are not limited to the following situations:
            </p>
            <p class="smDetails indentTwo">
                1) The attributes of the types of commodities released for sale do not match the actual attributes of the commodities
            </p>
            <p class="smDetails indentTwo">
                2). The pricing of the released products does not comply with market laws or industry standards.
            </p>
            <p class="smDetails indentTwo">
                3). The published product information contains offensive language such as defamation, verbal abuse, pornography, threats of violence, and other non-commodity information content (including but not limited to the following: privately published contact information, other person ID, chat history in the product title or description , Transaction disputes, use of uncivilized language, etc.).
            </p>
            <div class="smallTitle">By violating any of the above rules, it can be determined as a malicious release, and all will be cancelled, and the relevant treatment will be applied depending on the seriousness of the plot. </div>
            <div class="smallTitle">Violation category: Divided into five levels (processing) (any of the violation judgment basis is determined as a violation release). </div>
            <p class="smDetails">
                A. First-level violations:
            </p>
            <p class="smDetails indentTwo">
                1). Judgment basis: The user violates any one of the above release rules for the first time;
            </p>
            <p class="smDetails indentTwo">
                2). Type of violation: malicious release;
            </p>
            <p class="smDetails indentTwo">
                3). Management measures: give the user a warning and cancel all their release notes.
            </p>
            <p class="smDetails">
                B. Secondary violations:
            </p>
            <p class="smDetails indentTwo">
                1). Judgment basis: The user violates any of the above release rules for the second time;
            </p>
            <p class="smDetails indentTwo">
                2). Type of violation: malicious release;
            </p>
            <p class="smDetails indentTwo">
                3). Management measures: lock the user's user name in the mall for 1-3 days, and cancel all its release notes.
            </p>
            <p class="smDetails">
                C. Three-level violations:
            </p>
            <p class="smDetails indentTwo">
                1). Judgment basis: The user violates any of the above release rules for the second time;
            </p>
            <p class="smDetails indentTwo">
                2). Type of violation: malicious release;
            </p>
            <p class="smDetails indentTwo">
                3). Management measures: lock the user's user name in the mall for 7 days, and cancel all its release notes.
            </p>
            <p class="smDetails">
                D. Four levels of violations:
            </p>
            <p class="smDetails indentTwo">
                1). Judgment basis: The user violates any of the above release rules for the fourth time;
            </p>
            <p class="smDetails indentTwo">
                2). Type of violation: malicious release;
            </p>
            <p class="smDetails indentTwo">
                3). Management measures: lock the user's user name of the mall for one month, and cancel all its release notes.
            </p>
            <p class="smDetails">
                E. Five-level violation:
            </p>
            <p class="smDetails indentTwo">
                1). Judgment basis: The user violates any of the above release rules for the fourth time;
            </p>
            <p class="smDetails indentTwo">
                2). Type of violation: malicious release;
            </p>
            <p class="smDetails indentTwo">
                3). Management measures: lock the user's user name in the mall for 365 days, and cancel all its release notes.
            </p>
            <div class="smallTitle">Withdrawal after the account is locked. </div>
            <div class="smallTitle">Appendix</div>
            <p class="smDetails">
                1. Do not use any improper methods to make your release list higher (except for the platform refresh function).
            </p>
            <p class="smDetails">
                2. Do not affect the normal operation order of the mall website.
            </p>
            <div class="smallTitle">The above management regulations are aggravated according to the seriousness of the plot, and the final interpretation right belongs to the mall. </div>
            <div class="smallTitle">Please consciously observe and supervise each other, thank you for your cooperation! </div>
        </template>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'comManageRegul',
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
