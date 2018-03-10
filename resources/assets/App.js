import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import router from './Router'
import View from './componets/View'

Vue.use(VueResource)
Vue.use(Router)

var vue = new Vue({
    router,
    components:{
        'view-componet':View
    }
}).$mount('#app')

console.info(vue.$children)