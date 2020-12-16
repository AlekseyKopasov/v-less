<template>
  <form @submit.prevent="addNote" class="new-note">
    <label>Заголовок</label>
    <label>
      <input v-model="note.title" placeholder="Название заметки" type="text" />
    </label>

    <label for="standard-select">Приоритет</label>
    <div class="select">
      <select
          ref="select"
          v-model="note.category"
          id="standard-select"
          :class="note.category"
      >

        <option v-for="(opt, idx) in categoryOptions" :key="idx"
            :value="opt.value"
            :class="opt.value"
        >
          {{ opt.title }}
        </option>
      </select>
    </div>

    <label>Описание</label>
    <label>
      <textarea v-model="note.description"></textarea>
    </label>
    <button type="submit" class="btn btnPrimary" >Добавить заметку</button>
  </form>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      requered: true,
    },
    categoryOptions: {
      type: Array,
      requered: true,
    },
  },

  methods: {
    addNote() {
      this.$emit("addNote", this.note);
      this.note.category = "standart";
    },
  },
};
</script>

<style lang="scss" scoped>
.new-note {
  margin: 40px;
  text-align: center;
}

textarea {
  margin-bottom: 30px;
}

:root {
  --select-border: #777;
  --select-focus: blue;
  --select-arrow: var(--select-border);
}

select {
  // A reset of styles, including removing the default dropdown arrow
  appearance: none;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;

  outline: none;
}

.select {
  option.standart {
    color: #000000;
  }

  option.important {
    color: #1cacf5;
  }

  option.very-important {
    color: #f95959;
  }
}

  select {
    border: 1px solid #DCDFE6;
    border-radius: 20px;
    padding: 16px 26px;

    cursor: pointer;

    &.standart {
      color: #000000;
    }

    &.important {
      color: #1cacf5;
    }

    &.very-important {
      color: #f95959;
    }
  }
</style>
