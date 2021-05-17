<template>
  <div>
    <h1>Users</h1>

    <ul>
      <li v-for="user in users" :key="user.id">
        <nuxt-link :to="`/users/${user.id}`">
          {{ user.id }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  asyncData({ $axios }) {
    return $axios.get("https://reqres.in/api/users").then((response) => {
      return { users: response.data };
    });
  },
};
</script>