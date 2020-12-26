<template>
  <div>
    <loginModal f-show="setModalView === 'login" @close="closeModalView" />
  </div>
</template>

<script>

import loginModal from '@/components/UI/modals/Login.vue'

export default {
  components: {
    loginModal,
  },

  computed: {
    setModalView() {
      return this.$store.getters.getModalView;
    }
  },

  methods: {
    closeModalView() {
      this.$store.dispatch('setModalView', null);
    }
  },
};
</script>

<style>

</style>
