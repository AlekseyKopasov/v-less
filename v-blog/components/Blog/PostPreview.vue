<template>
  <nuxt-link :to="/blog/ + post.id" class="post-preview">
    <img :src="post.img" :alt="post.title" />
    <div class="post-content">
      <h3 class="title">{{ post.title }}</h3>
      <p>{{ post.descr }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.post-preview {
  max-width: calc(100% / 3);
  width: 100%;
  padding: 16px;
  margin-bottom: 20px;
  text-align: center;

  img {
    width: 100%;
    min-height: 250px;
    height: 100%;
    margin-bottom: 16px;
    object-fit: cover;
  }

  .post-content p {
    color: #999999;
  }
}
</style>
