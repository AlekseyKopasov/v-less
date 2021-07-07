<template>
  <section class="contacts">
    <div class="container">
      <h2 class="title">Contact me!</h2>
      <form class="contact-form" action="/" @submit.prevent="onSubmit">
        <label for="">Name:</label>
        <input v-model="user.name" type="text" />

        <label for="">Email:</label>
        <input v-model="user.email" type="text" />

        <label for="">Text:</label>
        <textarea v-model="user.text"></textarea>

        <!-- buttons -->
        <div class="controls">
          <AppButton class="btnWhite"> Submit! </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import AppButton from "@/components/UI/Controls/Button.vue";

export default {
  components: { AppButton },

  data: () => ({
    user: {
      name: "",
      email: "",
      text: "",
    },
  }),

  methods: {
    onSubmit() {
      console.log(this.user);
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
