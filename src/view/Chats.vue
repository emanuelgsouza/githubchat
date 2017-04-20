<template>
  <article class="article">
    <p class="subtitle" v-if="chats === undefined"> Não há conversas registradas </p>
    <Block v-for="(chat, key) in chats" :keyChat="key" :chat="chat" />
  </article>
</template>

<script>
import Block from './components/Block'

export default {
  name: 'chats',
  components: { Block },
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
    display: flex;
    flex-wrap: wrap;
  }

  .article .blocks {
    flex-grow: 1;
  }
</style>
