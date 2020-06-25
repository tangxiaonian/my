import Vue from "vue";
import Vuex from "vuex";
import users from "./modules/user";
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        users
    },
    plugins: [vuexLocal.plugin]
});
