<template>
  <div>
    <newPostForm @submit="onSubmit" />
  </div>
</template>

<script>

import newPostForm from '@/components/Admin/NewPostForm.vue';

export default {
  components: { newPostForm },
  layout: 'admin',
  methods: {
    onSubmit(post) {
      console.log('Post Add --->', post)
    },
  },
}
</script>

<style scoped>

</style>
