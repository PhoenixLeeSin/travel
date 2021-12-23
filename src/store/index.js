import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  alphabet: '', // 字母索引表 默认为空
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {},
})
