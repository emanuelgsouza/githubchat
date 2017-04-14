<template>
  <article>
    <div class="article">
      <BlockUser v-for="(user, key) in contacts" :key="key" :user="user" />
    </div>
  </article>
</template>

<script>
import { database } from '../services/firebase/database'
import BlockUser from './components/BlockUser'

export default {
  components: { BlockUser },
  name: 'contacts',
  data () {
    return {
      contacts: []
    }
  },
  mounted () {
    const uid = this.$store.state.user.uid
    database
      .ref('users')
      .child(uid)
      .child('contacts')
      .once('value', snap => {
        snap.forEach(childSnapshoot => {
          database
            .ref('users')
            .child(childSnapshoot.val())
            .once('value', snap => {
              this.contacts.push(snap.val())
            })
        })
      })
  }
}
</script>

<style lang="css" scoped>
  .article {
    padding: 1em;
  }
</style>
