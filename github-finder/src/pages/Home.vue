<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">

<!--error-->
        <p class="error" v-if="error">{{ error }}</p>

<!--search-->
        <search
            :value="search"
            placeholder="Type username..."
            @search="search = $event"
        />
<!--buttons-->
        <button v-if="!repos" class="btn btnPrimary" @click="getRepos">Search!</button>
        <button v-else class="btn btnPrimary" @click="getRepos">Search Again!</button>

<!--item-->
        <div class="repos__wrapper" v-if="repos">
          <div class="repo-item" v-for="repo in repos" :key="repo.id">
            <div class="repo-info">
              <a class="link" :href="repo.html_url" target="_blank">{{ repo.name }}</a>
              <span>{{ repo.stargazers_count }}⭐</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import search from '@/components/Search.vue'
import axios from 'axios'

export default {
  components: { search },

  data:() => ({
    search: '',
    repos: null,
    error: null,
  }),

  methods: {
    getRepos() {
      axios
        .get(`https://api.github.com/users/${this.search}/repos`)
        .then(res => {
          this.repos = res.data;
          this.error = null;
        })
        .catch(err => {
          this.repos = null;
          this.error = 'Can`t find this user'
          console.log('error --->', err);
        })
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.error {
  margin-bottom: 30px;
}

button {
  margin-top: 40px;
}

.repos__wrapper {
  width: 600px;
  margin: 30px 0;
}

.repo-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #dbdbdb;
}
</style>
