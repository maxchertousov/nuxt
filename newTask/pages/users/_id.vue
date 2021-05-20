<template>
  <div>
    <!-- Номер ID {{ $route.params.id }} -->

    <img :src="user.data.avatar" alt="">

    <h2>{{ user.data.first_name }} {{ user.data.last_name }}</h2>

    <p>{{ user.data.email }}</p>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  asyncData({ $axios, route }) {
    return $axios
      .get(`https://reqres.in/api/users/${route.params.id}`)
      .then((response) => {
        return { user: response.data };
      });
  },
};
</script>