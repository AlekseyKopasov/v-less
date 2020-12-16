import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		message: 'I`m message',
	},
	getters: {
		getMessage: s => s.message,
	},
	mutations: {
		setMessage(state, msg) {
			state.message = msg;
		},
	},
	actions: {
		setMessage({ commit }, payload) {
			commit('setMessage', payload);
		},
	},
});
