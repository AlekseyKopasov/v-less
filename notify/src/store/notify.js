import loadMore from '../assets/js/loadMore.js';

export default ({
	state: {
		messages: [],
		messagesMain: [],
	},

	getters: {
		getMessage: s => s.messages,
		getMessageFilter: s => s.messages.filter(mes => mes.main === false),
		getMessageMain: s => s.messagesMain,
	},

	mutations: {
		setMessage(state, payload) {
			state.messages = payload;
		},

		setMessageMain(state, payload) {
			state.messagesMain = payload;
		},

		loadMessages(state, payload) {
			state.messagesMain = [...state.messagesMain, ...payload];
		},
	},

	actions: {
		setMessage({ commit }, payload) {
			commit('setMessage', payload);
		},

		setMessageMain({ commit }, payload) {
			commit('setMessageMain', payload);
		},

		loadMessages({ commit, getters }) {
			const res = getters.getMessageFilter;

			commit('loadMessages', loadMore(res));
		},
	}
});
