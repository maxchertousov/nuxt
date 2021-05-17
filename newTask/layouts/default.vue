<template lang="pug">
  div.container
    header <Navbar />
    main
    nuxt
    footer Подвал
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Navbar,
  },
}
</script>