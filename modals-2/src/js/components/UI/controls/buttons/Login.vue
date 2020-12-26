<template>
  <div>
    <button class="btn btnPrimary" @click="setModalView('login')">Login button</button>
  </div>
</template>

<script>
export default {
  methods: {
    setModalView(veiw) {
      this.$store.dispatch('setModalView', veiw);
    }
  }
};
</script>

<style>

</style>
