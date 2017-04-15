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
    <button class="button is-danger" v-if="showdelete" @click="deleteChat"> Deletar conversa </button>
  </div>
</template>

<script>
import Avatar from './Avatar'
import { deleteChat } from '../../services/firebase/database'

export default {
  props: ['user', 'showdelete', 'keyChat'],
  components: { Avatar },
  computed: {
    contacts () {
      const contacts = this.$store.state.user.contacts
      if (contacts === undefined) return {}
      return contacts
    }
  },
  methods: {
    deleteChat () {
      deleteChat(this.keyChat, this.$store.state.user.uid)
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

.button.is-danger {
  margin-left: 1em;
}
</style>
