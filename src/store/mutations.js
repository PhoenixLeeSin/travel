const INITIALIZE_DATA = 'INITIALIZE_DATA'
const CHANGE_ALPHABET = 'CHANGE_ALPHABET'

export default {
  // 修改字母索引
  [CHANGE_ALPHABET](state, alphabet) {
    state.alphabet = alphabet
  },

  // 初始化信息
  [INITIALIZE_DATA](state) {
    state.alphabet = ''
  },
}
