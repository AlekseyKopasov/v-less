import axios from 'axios';

export default ({
	state: {
		loading: false,
	},

	getters: {
		getLoading: s => s.loading,
	},

	mutations: {
		setLoading(state, payload) {
			
		}
	},

	actions: {
		setLoadingLazy({ commit }, payload) {
			commit('setLoadingLazy', payload);
		},

		setLoading({ commit }, payload) {
			commit('setLoading', payload);
		}
	},
});
