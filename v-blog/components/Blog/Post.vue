<template>
  <section class="post">
    <div class="container">
      <!-- header -->
      <div class="post-header">
        <img :src="post.img" :alt="post.title" />
        <h1 class="title">{{ post.title }}</h1>
        <p>{{ post.descr }}</p>
      </div>

      <!-- body -->
      <div class="post-body">
        <p>{{ post.content }}</p>
      </div>
    </div>
  </section>
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
.post {
  max-width: 900px;
  margin: 0 auto;
}

.post-header {
  text-align: center;
  margin-bottom: 30px;

  img {
    max-width: 400px;
    margin-bottom: 16px;
  }

  p {
    color: #999999;
  }
}

.post-body {
  text-align: left;
}
</style>
