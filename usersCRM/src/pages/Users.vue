<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <!-- table -->
        <table>
<!--thead-->
          <thead>
           <tr>
             <th @click="sort('name')">Name</th>
             <th @click="sort('age')">Age</th>
             <th @click="sort('gender')">Gender</th>
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

        <p>debug: sort: {{ currentSort }} dir: {{ currentSortDir }}</p>

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
