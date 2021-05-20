<template>
  <div>
    <button class="btn btn-primary"
            @click.prevent="setPage(page)">
        Next
    </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const users = await $axios.$get("https://reqres.in/api/users")
    return { users }
  },
  methods: {
    setPage: function(page) { {
      this.$emit.push(`/users?page=${page + 1}`)
    }
  }
}
}
</script>