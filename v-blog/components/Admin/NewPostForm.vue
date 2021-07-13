<template>
  <section class="new-post">
    <div class="container">
      <form action="">
        <AppInput v-model="post.title"> Title: </AppInput>
        <AppInput v-model="post.descr"> Descr: </AppInput>
        <AppInput v-model="post.img"> Img Link: </AppInput>
        <AppTextArea v-model="post.content"> Content: </AppTextArea>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    post: {
      title: '',
      descr: '',
      img: '',
      content: '',
    },
  }),
}
</script>

<style scoped>

</style>
