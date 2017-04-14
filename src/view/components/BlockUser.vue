<template>
  <div class="block-users">
    <router-link :to="`/dashboard/chats/${user.uid}`">
      <Avatar :url="user.photo" :uid="user.uid"/>
    </router-link>
    <router-link :to="`/dashboard/chats/${user.uid}`">
      <p class="subtitle"> {{ user.name }} </p>
    </router-link>
    <button
      class="button"
      @click="addContact(user.uid)"
      v-if="!contacts[user.uid]"> Adicionar ao contato </button>
  </div>
</template>

<script>
import Avatar from './Avatar'

export default {
  props: ['user'],
  components: { Avatar },
  computed: {
    contacts () {
      const contacts = this.$store.state.user.contacts
      if (contacts === undefined) return {}
      return contacts
    }
  }
}
</script>

<style scoped>
.block-users {
  display: flex;
  align-items: center;
  margin: 1em;
  cursor: pointer;
}

.block-users .subtitle {
  margin: 0 1em;
}
</style>
