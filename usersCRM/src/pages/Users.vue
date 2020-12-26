<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <!-- table -->
        <table>
<!--thead-->
          <thead>
           <tr>
             <th>Name</th>
             <th>Age</th>
             <th>Gender</th>
           </tr>
          </thead>
<!--tbody-->
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.name }}</td>
              <td>{{ user.age }}</td>
              <td>{{ user.gender }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  data: () => ({
    users: [],
  }),

  created() {
    this.users = [
      { id: 1, name: 'Jack', age: 23, gender: 'male' },
      { id: 2, name: 'Jasmine', age: 18, gender: 'female' },
    ]
  }
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
