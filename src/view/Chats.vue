<template>
  <article class="article">
    <p class="subtitle" v-if="chats === undefined"> Não há conversas registradas </p>
  </article>
</template>

<script>
export default {
  name: 'chats',
  computed: {
    chats () {
      return this.$store.state.user.chats
    }
  }
}
</script>

<style scoped>
  .article {
    padding: 1em;
  }
</style>
