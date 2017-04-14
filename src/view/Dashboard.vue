<template>
  <section>
    <div class="tabs is-toggle is-fullwidth">
      <ul>
        <li :class="{ 'is-active' : current === 'chats' } ">
          <router-link to="/dashboard/chats" @click="current = 'chats'">
            <span class="icon"> <i class="fa fa-comments" aria-hidden="true"></i> </span>
            <span>Conversas</span>
          </router-link>
        </li>
        <li :class="{ 'is-active' : current === 'contacts' } ">
          <router-link to="/dashboard/contacts" @click="current = 'contacts'">
            <span class="icon is-small"> <i class="fa fa-users" aria-hidden="true"></i> </span>
            <span>Contatos</span>
          </router-link>
        </li>
        <li :class="{ 'is-active' : current === 'search' } ">
          <router-link to="/dashboard/search" @click="current = 'search'">
            <span class="icon is-small"> <i class="fa fa-search"></i> </span>
            <span>Procurar</span>
          </router-link>
        </li>
      </ul>
    </div>

    <router-view></router-view>
  </section>
</template>

<script>
import { database } from '../services/firebase/database'

export default {
  computed: {
    current () {
      return this.$route.path.substring(11)
    }
  },
  created () {
    database
      .ref('users')
      .child(this.$store.state.user.uid)
      .child('online')
      .set(true)
  }
}
</script>
