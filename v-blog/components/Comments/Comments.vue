<template>
  <section v-if="comments" class="comments">
    <div class="container">
      <h2 class="title">Comments:</h2>
      <div class="comment" v-for="comment in comments" :key="comment.name">
        <p class="name">{{ comment.name }}</p>
        <p class="text">{{ comment.text }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style lang="scss">
.comments {
  max-width: 600px;
  width: 100%;
  margin: 30px auto;
  text-align: center;
}

.comment {
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  background-color: #ffffff;

  .name {
    margin-bottom: 24px;
    font-size: 24px;
    color: #5c4de7;
  }
}
</style>
