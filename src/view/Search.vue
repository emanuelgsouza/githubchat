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
      <ul>
        <li v-for="(object, key) in usersComputed">
          <router-link to="/">
            <Avatar :url="object.photo" />
          </router-link>
          <router-link to="/">
            <p class="subtitle"> {{ object.name }} </p>
          </router-link>
          <button
            class="button"
            @click="addContact(object.uid)"
            v-if="!contacts[object.uid]"> Adicionar ao contato </button>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
import { database, insertContact } from '../services/firebase/database'
import Avatar from './components/Avatar.vue'

export default {
  components: { Avatar },
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
    },
    contacts () {
      const contacts = this.$store.state.user.contacts
      if (contacts === undefined) return {}
      return contacts
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

li {
  display: flex;
  align-items: center;
  margin: 1em;
  cursor: pointer;
}

li .subtitle {
  margin: 0 1em;
}
</style>
