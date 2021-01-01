<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <!-- table -->
        <table>
<!--thead-->
          <thead>
           <tr>
             <th @click="sort('name')">Name &#8595;</th>
             <th @click="sort('age')">Age &#8595;</th>
             <th @click="sort('gender')">Gender &#8595;</th>
           </tr>
          </thead>
<!--tbody-->
          <tbody>
            <tr v-for="user in usersSort" :key="user.id">
              <td>
                <img :src="user.img" :alt="user.name">
                <span>{{ user.name }}</span>
              </td>
              <td>{{ user.age }}</td>
              <td>{{ user.gender }}</td>
            </tr>
          </tbody>
        </table>

        <p>
          <span>debug: sort: {{ currentSort }} dir: {{ currentSortDir }}</span>
          <p>page: {{ this.page.current }}</p>
        </p>

      </div>
    </section>

    <section>
      <div class="container">
        <div class="button-list">
          <div class="btn btnPrimary" @click="prevPage">&#8592;</div>
          <div class="btn btnPrimary" @click="nextPage">&#8594;</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>


export default {
  data: () => ({
    users: [
      {
        "name": "Alfa",
        "age": "30",
        "gender": "mail",
        "img": "https://www.fillmurray.com/640/640",
      },
      {
        "name": "Betta",
        "age": "22",
        "gender": "femail",
        "img": "https://www.fillmurray.com/640/640",
      },
         {
        "name": "Gamma",
        "age": "24",
        "gender": "mail",
        "img": "https://www.fillmurray.com/640/640",
      },
         {
        "name": "Delta",
        "age": "25",
        "gender": "femail",
        "img": "https://www.fillmurray.com/640/640",
      },
         {
        "name": "Tetta",
        "age": "29",
        "gender": "femail",
        "img": "https://www.fillmurray.com/640/640",
      },
         {
        "name": "Bret",
        "age": "26",
        "gender": "mail",
        "img": "https://www.fillmurray.com/640/640",
      },
         {
        "name": "Betta",
        "age": "22",
        "gender": "femail",
        "img": "https://www.fillmurray.com/640/640",
      },
         {
        "name": "Ervin",
        "age": "23",
        "gender": "femail",
        "img": "https://www.fillmurray.com/640/640",
      },
         {
        "name": "Howell",
        "age": "32",
        "gender": "femail",
        "img": "https://www.fillmurray.com/640/640",
      },
         {
        "name": "Antonette",
        "age": "18",
        "gender": "femail",
        "img": "https://www.fillmurray.com/640/640",
      },
         {
        "name": "Antonette",
        "age": "35",
        "gender": "femail",
        "img": "https://www.fillmurray.com/640/640",
      },

],
    currentSort: 'name',
    currentSortDir: 'asc',
    page: {
      current: 1,
      length: 3,
    },
  }),

  computed: {
    usersSort() {
      return this.users
        .sort((a, b) => {
          let mod = 1
          if (this.currentSortDir === 'desc') mod = -1
          if (a[this.currentSort] < b[this.currentSort]) return -1 * mod
          if (a[this.currentSort] > b[this.currentSort]) return mod
          return 0
        }).filter((row, index) => {
          let start = (this.page.current -1) * this.page.length
          let end = this.page.current * this.page.length
          if (index >= start && index < end) {
            return true
          }
      });
    },
  },

  methods: {
    sort(e) {
      if (e === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
      }
      this.currentSort = e
    },

    // Pagination
    prevPage() {
      if (this.page.current > 1) {
        this.page.current -= 1;
      }
    },

    nextPage() {
      if ((this.page.current * this.page.length) < this.users.length) {
        this.page.current += 1;
      }
    },
  },
}
</script>


<style lang="scss" scoped>
img {
  width: 60px;
  height: auto;
  border-radius: 50%;
  margin-right: 16px;
}
.button-list {
  width: 100%;
  text-align: center;

  .btn {
    border-radius: 60px;
    margin: 0 20px;
  }
}

</style>
