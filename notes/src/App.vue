<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <message v-if="message" :message="message" />
          <newNote
              :note="note"
              :categoryOptions="categoryOptions"
              @addNote="addNote"
          />

          <div class="note-header">
            <h1>{{ title }}</h1>

            <search
              :value="search"
              placeholder="Find your note"
              @search="search = $event"
            />

            <div class="icons">
              <svg
                :class="{ active: grid }"
                @click="grid = true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>

              <svg
                @click="grid = false"
                :class="{ active: !grid }"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3" y2="6"></line>
                <line x1="3" y1="12" x2="3" y2="12"></line>
                <line x1="3" y1="18" x2="3" y2="18"></line>
              </svg>
            </div>
          </div>

          <notes
              :notes="notesFilter"
              :grid="grid"
              @remove="removeNote"
              @edit="editNote"
              @update="updateNote"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import message from "./components/Message.vue";
import notes from "./components/Notes.vue";
import newNote from "./components/NewNote.vue";
import search from "./components/Search.vue";

export default {
  components: {
    message,
    notes,
    newNote,
    search,
  },
  data: () => ({
    title: "Notes App",
    message: null,
    search: "",
    grid: true,
    note: {
      title: "",
      description: "",
      category: "standart",
    },
    options: [],
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
  }),
  computed: {
    notesFilter() {
      let array = this.notes;
      let search = this.search;

      if (!search) return array;

      search = search.trim().toLowerCase();

      array = array.filter(
        (item) => item.title.toLowerCase().indexOf(search) !== -1
      );

      return array;
    },
  },

  methods: {
    addNote() {
      let { title, description, category } = this.note;
      if (title === "") {
        this.message = "Title can`t be blank!";
        return;
      }

      this.notes.push({
        title,
        description,
        category,
        date: new Date(Date.now()).toLocaleString(),
      });

      this.note.title = "";
      this.note.description = "";
      this.message = null;
      this.category = "standart";
    },

    removeNote(idx) {
      this.notes.splice(idx, 1);
    },

    editNote({ idx, evt }) {
      const note = this.notes[idx];
      const target = evt.currentTarget;
      target.classList.add('isVisible');
      target.querySelector('input').focus();
    },

    updateNote({ idx, target, evt }) {
      const note = this.notes[idx];
      const input = evt.target;

      if (target) {
        note.title = input.value;
      } else {
        note.description = input.value;
      }

      note.date = new Date(Date.now()).toLocaleString();
      input.blur();
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
