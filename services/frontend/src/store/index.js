import Vue from 'vue'
import Vuex from 'vuex'
import users from './users'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    users,
    // posts,
  },
  plugins: [createPersistedState()]
})
