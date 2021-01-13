export default ({
	state: {
		error: null,
	},

	getters: {
		getError: s => s.error,
	},

	mutations: {
		setError(state, payload) {
			state.error = payload;
		}
	},

	actions: {
		setError({ commit }, payload) {
			commit('setError', payload);
		}
	},
});
