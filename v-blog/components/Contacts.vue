<template>
  <section class="contacts">
    <div class="container">
      <h2 class="title">Contact me!</h2>

      <Message v-if="message" :message="message" />

      <form class="contact-form" action="/" @submit.prevent="onSubmit">
        <AppInput v-model="user.name">Name:</AppInput>
        <AppInput v-model="user.email" type="email">Email:</AppInput>
        <AppTextArea v-model="user.text">Text:</AppTextArea>

        <!-- buttons -->
        <div class="controls">
          <AppButton class="btnWhite"> Submit! </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    message: null,

    user: {
      name: "",
      email: "",
      text: "",
    },
  }),

  methods: {
    onSubmit() {
      this.user = "";
      this.email = "";
      this.text = "";
      this.message = "Submited!";
    },
  },
};
</script>

<style lang="scss">
.contacts {
  text-align: center;
  background-color: #4f68f4;
  color: #ffffff;

  .title {
    color: #ffffff;
  }

  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }

  .controls {
    margin: 30px 0;
  }
}
</style>
