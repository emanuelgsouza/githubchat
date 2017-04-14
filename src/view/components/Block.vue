<template>
  <div class="blocks">
    <BlockUser :user="user" />
  </div>
</template>

<script>
import { database } from '../../services/firebase/database'
import BlockUser from './BlockUser'

export default {
  props: ['chat'],
  components: { BlockUser },
  data () {
    return {
      user: {}
    }
  },
  computed: {
    chatUser () {
      const uid = this.$store.state.user.uid
      const chat = this.chat
      return (chat.member1 !== uid) ? chat.member1 : chat.member2
    }
  },
  mounted () {
    database
      .ref('users')
      .child(this.chatUser)
      .once('value', snap => {
        this.user = snap.val()
      })
  }
}
</script>

<style scoped>
  .article {
    padding: 1em;
  }
</style>
