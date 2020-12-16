<template>
  <div class="wrapper">
    <!-- <header></header> -->

    <div class="wrapper-content">
      <section>
        <div class="container">

          <!--modal first-->
          <button class="btn btnPrimary" @click="modalFirst = !modalFirst">Show first modal</button>
          <modals
              v-show="modalFirst"
              title="Modal 1"
              @close="modalFirst = false"
          >

            <div slot="body">
              <p> Some text </p>
              <button class="btn btnPrimary" @click="modalFirst = !modalFirst">Well Done!</button>
            </div>

          </modals>

          <!--modal second-->
          <button class="btn btnPrimary" @click="modalSecond.show = !modalSecond.show">Show modal with form</button>
          <modals
              v-show="modalSecond.show"
              title="Modal with form"
              @close="modalSecond.show = false"
          >

            <div slot="body">
              <form @submit.prevent="submitForm">
                <label>Name:</label>
                <input type="text" v-model="modalSecond.name" required>
                <label>Email:</label>
                <input type="email" v-model="modalSecond.email" required>
                <button type="submit" class="btn btnPrimary">Submit!</button>
              </form>
            </div>

          </modals>

          <!--modal with validate-->
          <button class="btn btnPrimary" @click="modalValidate = !modalValidate">Show modal with validate</button>
          <modalValidate v-show="modalValidate" @close="modalValidate = false" />

          <!--modal with authorization-->
          <button class="btn btnPrimary" @click="modalAuthorization = !modalAuthorization">Show modal Authorization</button>
          <modalAuthorization v-show="modalAuthorization" @close="modalAuthorization = false" />

        <!--modal with register-->
        <button class="btn btnPrimary" @click="modalRegister = !modalRegister">Show modal Register</button>
        <modalRegister v-show="modalRegister" @close="modalRegister = false" />

        </div>
      </section>
    </div>

    <!-- <footer></footer> -->
  </div>
</template>

<script>

import modals from './components/UI/Modal.vue';
import modalValidate from './components/ModalValidate.vue';
import modalAuthorization from './components/ModalAuthorization.vue';
import modalRegister from './components/ModalRegister.vue';

export default {
  components: {
    modals,
    modalValidate,
    modalAuthorization,
    modalRegister,
  },
  data: () => ({
    modalFirst: false,
    modalSecond: {
      show: false,
      name: '',
      email: '',
    },
    modalValidate: false,
    modalAuthorization: false,
    modalRegister: false,
  }),
  methods: {
    submitForm() {
      console.log({
        name: this.modalSecond.name,
        email: this.modalSecond.email,
      });

      this.modalSecond.name = '';
      this.modalSecond.email = '';
      this.modalSecond.show = false;
    },
  },
};
</script>

<style>
</style>
