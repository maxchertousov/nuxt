<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">First name</label>
        <input
          id="name"
          v-model.trim="first_name"
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
        >
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Last name</label>
        <input
          id="lastname"
          v-model.trim="last_name"
          type="text"
          class="form-control"
        >
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Email</label>
        <input
          id="email"
          v-model.trim="email"
          type="email"
          class="form-control"
        >
      </div>
      <button
        type="submit"
        class="btn btn-primary"
      >
        Добавить
      </button>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data: () => ({
      first_name: '',
      last_name: '',
      email: '',    
  }),
  methods: {
    onSubmit() {
      const formData = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
      }
      this.$emit('onSubmit', formData)
    }     
  }
}
</script>
