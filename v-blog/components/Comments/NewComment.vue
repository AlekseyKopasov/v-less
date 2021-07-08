<template>
  <section class="new-comment">
    <div class="container">
      <h2 class="title">New Comment:</h2>

      <Message v-if="message" :message="message" />

      <form class="contact-form" action="/" @submit.prevent="onSubmit">
        <AppInput v-model="comment.name">Name:</AppInput>

        <AppTextArea v-model="comment.text">Text:</AppTextArea>

        <!-- buttons -->
        <div class="controls">
          <AppButton> Submit! </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    message: null,
    comment: {
      name: "",
      text: "",
    },
  }),

  methods: {
    onSubmit() {
      this.comment = "";
      this.comment = "";
      this.comment = "";
      this.message = "Submited!";
    },
  },
};
</script>

<style lang="scss">
.new-comment {
  text-align: center;

  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }

  .controls {
    margin: 30px 0;
  }
}
</style>
