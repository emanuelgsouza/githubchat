<template>
  <article class="article">
    <p class="control">
      <input
        type="text"
        class="input"
        v-model="search"
        placeholder="Digite um nome de usuário para pesquisa">
    </p>
    <div class="article">
      <BlockUser v-for="(user, key) in usersComputed" :key="key" :user="user" />
    </div>
  </article>
</template>

<script>
import { database, insertContact } from '../services/firebase/database'
import BlockUser from './components/BlockUser'

export default {
  components: { BlockUser },
  data () {
    return {
      search: ''
    }
  },
  firebase () {
    return {
      users: database.ref('users')
    }
  },
  computed: {
    usersComputed () {
      if (this.search === '') return {}
      return this.users.filter(user => user.name.indexOf(this.search) !== -1)
    }
  },
  methods: {
    addContact (uidContact) {
      insertContact(uidContact)
    }
  }
}
</script>

<style scoped>
.article {
  padding: 1em;
}
</style>
