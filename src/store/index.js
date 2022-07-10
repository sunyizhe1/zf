import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    defaultCityInfo: {
      // 名称
      label: '北京',
      // 全拼
      pinyin: 'beijing',
      // 短拼
      short: 'bj',
      // 城市id
      value: 'AREA|88cff55c-aaa4-e2e0'
    }
  },
  getters: {
  },
  mutations: {
    // 修改当前选中城市名称与城市id
    CHANGE_CITY (state, { cityName, cityId }) {
      state.defaultCityInfo.label = cityName
      state.defaultCityInfo.value = cityId
    }
  },
  actions: {
  },
  modules: {
  }

})
