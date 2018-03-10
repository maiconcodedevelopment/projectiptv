import Router from 'vue-router'
import Home from './componets/Home'

export default new Router({
    routes:[
        {
            path:'/',
            name:'Login',
            component: Home
        }
    ],

})
