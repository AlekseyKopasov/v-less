import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		notes: [
			{
				title: "First Note",
				description: "Description for first note",
				category: 'standart',
				date: new Date(Date.now()).toLocaleString(),
			},
			{
				title: "Second Note",
				description: "Description for second note",
				category: 'important',
				date: new Date(Date.now()).toLocaleString(),
			},
			{
				title: "Third Note",
				description: "Description for third note",
				category: 'very-important',
				date: new Date(Date.now()).toLocaleString(),
			},
		],
		categoryOptions: [
			{
				title: 'Стандарный',
				value: 'standart',
			},
			{
				title: 'Важный',
				value: 'important',
			},
			{
				title: 'Очень важный',
				value: 'very-important',
			}
		],
	},

	getters: {
		getNotes: s => s.notes,
		getCategoryOptions: s => s.categoryOptions,
	},

	mutations: {
		addNote(state, note) {
			let { title, description, category } = note;

			state.notes.push({
				title,
				description,
				category,
				date: new Date(Date.now()).toLocaleString(),
			});
		},

		removeNote(state, idx) {
			state.notes.splice(idx, 1);
		},

		editNote(state, note) {
			const newNote = state.notes[note.idx];
			const target = note.evt.currentTarget;
			target.classList.add('isVisible');
			target.querySelector('input').focus();
		},

		updateNote(state, note) {
			const newNote = state.notes[note.idx];
			const input = note.evt.target;

			if (note.target) {
				newNote.title = input.value;
			} else {
				newNote.description = input.value;
			}

			newNote.date = new Date(Date.now()).toLocaleString();
			input.blur();
		},
	},

	actions: {
		addNote({ commit }, payload) {
			commit('addNote', payload);
		},

		removeNote({ commit }, payload) {
			commit('removeNote', payload);
		},

		editNote({ commit }, payload) {
			commit('editNote', payload);
		},

		updateNote({ commit }, payload) {
			commit('updateNote', payload);
		},
	},
});
