<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
import store from './store.js'

export default {
    name: 'App',
    components: {

    },
    data () {
        return {
        }
    },
    computed: {
    },
    created(){
        document.body.removeChild(document.getElementById('Loading'));
        //读取cookie
        let auth = this.$cookies.get('auth');
        if(auth){
            this.$store.commit('isLoginChange',true);
            this.$store.commit('tokenChange',auth);
        }
        let lang_type = this.$cookies.get('lang_type');
        if(lang_type){
            this.$i18n.locale = lang_type + '';
        }

    },
    watch : {

    }
    
}
</script>


<style lang="scss">
    body,html,#app{
        padding: 0;
        margin: 0 auto;
        height: 100%;
        background: #fff;
        position: relative;
        overflow-x: hidden
    }
    .el-loading-mask{
        background-color: rgba(0,0,0,.1);
    }
</style>
