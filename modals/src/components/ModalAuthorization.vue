<template>
  <modal
      title="Modal Authorization"
      @close="$emit('close')"
  >

    <div slot="body">
      <form @submit.prevent="formSubmit">
        <div class="form-item" :class="{ errorInput: $v.name.$error }">
          <label>Name:</label>
          <p class="errorText" v-if="!$v.name.required">Fill is required!</p>
          <p class="errorText" v-if="!$v.name.minLength">Name must have at least {{ $v.name.$params.minLength.min }}!</p>
          <input
              v-model="name"
              :class="{ error: $v.name.$error }"
              @change="$v.name.$touch() "
          >
        </div>

        <div class="form-item" :class="{ errorInput: $v.email.$error }">
          <label>Email:</label>
          <p class="errorText" v-if="!$v.email.required">Fill is required!</p>
          <p class="errorText" v-if="!$v.email.email">Email is not corrected!</p>
          <input
              v-model="email"
              :class="{ error: $v.email.$error }"
              @change="$v.email.$touch()"
          >
        </div>

        <div class="form-item" :class="{ errorInput: $v.pass.$error }">
          <label>Password:</label>
          <p class="errorText" v-if="!$v.pass.required">Fill is required!</p>
          <p class="errorText" v-if="!$v.pass.minLength">Password must have at least {{ $v.pass.$params.minLength.min }} letters.</p>
          <input
              v-model="pass"
              :class="{ error: $v.pass.$error }"
              @change="$v.pass.$touch()"
          >
        </div>

        <a class="form-link" href="#">I need an account</a>

        <button type="submit" class="btn btnPrimary">Submit!</button>
      </form>
    </div>

  </modal>
</template>

<script>
import modal from '@/components/UI/Modal';
import { email, minLength, required } from 'vuelidate/lib/validators';

export default {
  data: () => ({
    name: '',
    email: '',
    pass: '',
  }),
  components: {
    modal
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    email: {
      required,
      email
    },
    pass: {
      required,
      minLength: minLength(6)
    },
  },
  methods: {
    formSubmit() {
      this.$v.$touch()
      let isEmptyField =
          this.name.length === 0 ||
          this.email.length === 0 ||
          this.pass.length === 0;


      if (!this.$v.invalid && !isEmptyField) {
        const user = {
          name: this.name,
          email: this.email,
          pass: this.pass,
        };

        console.log(user);

        // IF done
        this.name = '';
        this.email = '';
        this.pass = '';
        this.$v.$reset();
        this.$emit('close');
      }
    },
  },
};
</script>
