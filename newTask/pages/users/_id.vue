<template>
  <div>
    Номер ID {{ $route.params.id }}

    <h2>{{ user.data.first_name }}</h2>

    <span>{{ user.data.last_name }}</span>

    <span>{{ user.data.email }}</span>

    <pre>{{ user }}</pre>
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