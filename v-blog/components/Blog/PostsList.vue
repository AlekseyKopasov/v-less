<template>
  <section class="post-list">
    <div class="container">
      <div class="posts__wrapper">
        <postsPreview v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
  </section>
</template>

<script>
import postsPreview from "@/components/Blog/PostPreview.vue";

export default {
  components: { postsPreview },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.posts__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
