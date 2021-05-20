<template lang="pug">
.container
  header <Navbar />
  main
  nuxt
  footer
</template>

<script>
/* eslint-disable */
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>