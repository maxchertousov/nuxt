<template>
  <div>
    <h1>Userы</h1>
    <ul
    >
      <li v-for=" (item, index) in users.data"
          :key="item.index"
      >
        <nuxt-link
          :to="`/users/${ item.id }`"
        >
          <img :src="item.avatar" alt=""> {{ item.first_name }} {{ item.last_name }} {{ item.email }}
        </nuxt-link>
        <button type="button"
                class="btn btn-danger"
                @click="removeString(index)"
          >&times;
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  async asyncData({ $axios }) {
    const users = await $axios.$get("https://reqres.in/api/users")
    return { users }
  },
  methods: {
    removeString: function(index) {
      this.users.data.splice(index, 1)
    },
    onSubmit(formData) {
      this.users.data.item.push(formData)
    }
  }
}
</script>

<style scoped>
 ul {
  list-style: none;  
  }
</style>