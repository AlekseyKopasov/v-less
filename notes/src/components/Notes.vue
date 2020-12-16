<template>
  <div class="notes">
    <div
      class="note"
      :class="[{ full: !grid }, note.category]"
      v-for="(note, idx) in notes"
      :key="idx"
    >
      <div class="note-header">
        <p class="note-text-wrap" @click="edit(idx)">
          <span class="note__text">
            {{ note.title }}
          </span>
          <input
              type="text"
              :value="note.title"
              @blur="inputHide($event)"
              @keyup.esc="inputHide($event)"
              @keyup.enter="update(idx, isTitle = true, $event)"
          >

          <span class="note-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02
              0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#000"/>
            </svg>
        </span>
        </p>
        <p @click="removeNote(idx)">X</p>
      </div>
      <div class="note-body">
        <p class="note-text-wrap" @click="edit(idx)">
          <span class="note__text">
            {{ note.description }}
          </span>

          <input
              type="text"
              :value="note.description"
              @blur="inputHide($event)"
              @keyup.esc="inputHide($event)"
              @keyup.enter="update(idx, isTitle = false, $event)"
          >

          <span class="note-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02
              0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#000"/>
            </svg>
        </span>
        </p>
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notes: {
      type: Array,
      requred: true,
    },
    grid: {
      type: Boolean,
      requred: true,
    },
  },

  methods: {
    removeNote(idx) {
      this.$emit("remove", idx);
    },

    edit(idx) {
      const evt = event;
      this.$emit("edit", {
        idx,
        evt
      });
    },

    inputHide(evt) {
      evt.target.parentElement.classList.remove('isVisible');
    },

    update(idx, target, evt) {
      this.$emit('update', {
        idx,
        target,
        evt
      });
    },
  },
};
</script>


<style lang="scss">
.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}

.note {
  width: 48%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);

  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }

  &.full {
    width: 100%;
    text-align: center;
  }

  &.important {
    background-color: #1cacf5;
  }

  &.very-important {
    background-color: #f95959;
  }
}

.note-icon {
  opacity: 0;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
}

.note-text-wrap {
  position: relative;

  input {
    display: none;
  }

  &:hover {
    .note-icon {
      opacity: 1;
    }
  }
}

.note-text-wrap.isVisible {
  width: 90%;

  .note__text {
    z-index: -1;
    opacity: 0;
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    opacity: 1;

    display: block;
    z-index: 2;

  }

  .note-icon {
    opacity: 0;
  }
}

.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 32px;
  }

  p {
    font-size: 22px;
    color: #0c0630;
    cursor: pointer;
  }

  svg {
    margin-right: 12px;
    color: #999999;
    cursor: pointer;
    &.active {
      color: #402caf;
    }
    &:last-child {
      margin-right: 0;
    }
  }

  &.full {
    justify-content: center;
    p {
      margin-right: 16px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.note-body {
  p {
    margin: 20px 0;
    cursor: pointer;
  }

  span {
    font-size: 14px;
    color: #532c2c;
  }
}
</style>
