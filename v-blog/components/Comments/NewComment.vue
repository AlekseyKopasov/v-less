<template>
  <section class="new-comment">
    <div class="container">
      <h2 class="title">New Comment:</h2>
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
import AppButton from "@/components/UI/Controls/Button.vue";
import AppInput from "@/components/UI/Controls/Input.vue";
import AppTextArea from "@/components/UI/Controls/TextArea.vue";

export default {
  components: { AppButton, AppInput, AppTextArea },

  data: () => ({
    comment: {
      name: "",
      text: "",
    },
  }),

  methods: {
    onSubmit() {
      console.log(this.comment);
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
