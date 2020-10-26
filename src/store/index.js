import Vuex from '@wepy/x';

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    list(state, list) {
      state.list = list
    }
  },
  actions: {
    getList({ commit }) {
      return new Promise((resolve, reject) => {
        return wx.request({
          url: 'http://rap2api.taobao.org/app/mock/177686/list',
          success (res) {
            commit('list', res.data.list)
            resolve(res)
          }
        })
      })
    }
  }
});
