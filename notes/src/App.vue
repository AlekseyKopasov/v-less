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
    notes: [],
    categoryOptions: [],
  }),
  created() {
    this.notes = this.$store.getters.getNotes;
    this.categoryOptions = this.$store.getters.getCategoryOptions;
  },
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
      this.$store.dispatch('addNote', this.note);
      let { title } = this.note;
      if (title === "") {
        this.message = "Title can`t be blank!";
        return;
      }

      this.note.title = "";
      this.note.description = "";
      this.message = null;
      this.category = "standart";
    },

    removeNote(idx) {
      this.$store.dispatch('removeNote', idx);
    },

    editNote({ idx, evt }) {
      this.$store.dispatch('editNote', { idx, evt });
    },

    updateNote({ idx, target, evt }) {
      this.$store.dispatch('updateNote', { idx, target, evt });
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
