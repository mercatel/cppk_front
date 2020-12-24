import Vue from 'vue'
import Vuex from 'vuex'
import settings from "@/store/modules/settings";
import menu from "@/store/modules/menu";


Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        settings,
        menu,
    }
})