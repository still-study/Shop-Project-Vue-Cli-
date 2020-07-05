import Vue from 'vue';
import Vuex from 'vuex';
import fetchMod from './modules/fetchMod';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    fetchMod,
  },
});
