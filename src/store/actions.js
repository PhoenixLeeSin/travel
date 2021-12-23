export default {
  // 初始化信息
  initializeData({ commit }) {
    commit('INITIALIZE_DATA')
  },

  //修改字母索引
  changeAlphabet({ commit }, alphabet) {
    commit('CHANGE_ALPHABET', alphabet)
  },
}
