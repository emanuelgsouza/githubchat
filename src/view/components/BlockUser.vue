<template>
  <div class="block-users">
    <div class="link-group">
      <router-link :to="`/dashboard/chats/${user.uid}`">
        <Avatar :url="user.photo" :uid="user.uid"/>
      </router-link>
      <router-link :to="`/dashboard/chats/${user.uid}`">
        <p class="subtitle"> {{ user.name }} </p>
      </router-link>
    </div>
    <div class="button-group">
      <button
        class="button"
        @click="addContact(user.uid)"
        v-if="showButtonAddContact"> Adicionar ao contato </button>
      <button
        class="button is-danger"
        v-if="showdelete"
        @click="deleteChat"> Deletar conversa </button>
    </div>
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
    },
    own () {
      if (this.user.uid === this.$store.state.user.uid) return true
      return false
    },
    showButtonAddContact () {
      if (this.own) return false
      if (this.contacts[this.user.uid]) return false
      return true
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
  margin: 1em 0;
  cursor: pointer;
}

.block-users .subtitle {
  margin: 1em 0;
}

.button {
  display: block;
  width: 100%;
  margin: 0.5em;
}
</style>
