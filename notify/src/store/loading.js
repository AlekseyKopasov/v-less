import axios from 'axios';

export default ({
	state: {
		loading: false,
		res: [],
		messages: [],
		messagesMain: [],
	},

	getters: {
		getLoading: s => s.loading,
	},

	mutations: {
		setLoading(state) {
			state.loading = true;

			axios
			.get('http://q911703i.beget.tech/v-notify-api/notifyApi 123.php')
			.then(response => {
				state.res = response.data.notify;
				state.messages = [];
				state.messagesMain = [];

				for (let i = 0; i < state.res.length; i += 1) {
					if (state.res[i].main) {
						state.messagesMain.push(state.res[i]);
					} else {
						state.messages.push(state.res[i]);
					}
				}
				this.dispatch('setMessage', state.messages);
				this.dispatch('setMessageMain', state.messagesMain);
			})
			.catch(error => {
				console.log("error ---->",error);
				this.dispatch('setError', 'Error: Network Error');
			})
			.finally(() => {
				state.loading = false;
			})
		}
	},

	actions: {
		setLoading({ commit }) {
			commit('setLoading');
		}
	},
});
