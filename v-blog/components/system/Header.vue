<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <div class="logo"><nuxt-link to="/">Blog</nuxt-link></div>
          <ul class="navbar-list">
            <li class="navbar-item" v-for="link in links" :key="link.title">
              <nuxt-link :to="link.url" class="navbar-link" exact>
                {{ link.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: "About", url: "/about" },
      { title: "Blog", url: "/blog" },
    ],
  }),
};
</script>

<style lang="scss">
.logo a {
  color: #333333;
}

.navbar-link {
  &.nuxt-link-exact-active {
    color: #4156de;
  }
}
</style>
