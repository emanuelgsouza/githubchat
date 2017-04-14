<template>
  <div class="messages">
    <message v-for="(msg, key) in messages" :msg="msg" :key="key" />
  </div>
</template>

<script>
import { database } from '../../services/firebase/database'
import Message from './Message'

export default {
  components: { Message },
  props: ['chat'],
  data () {
    return {
      conversa: {}
    }
  },
  computed: {
    messages () {
      return this.conversa.msgs
    }
  },
  mounted () {
    database
      .ref('chats')
      .child(this.chat.chatUid)
      .on('value', snap => {
        database
          .ref('messages')
          .child(snap.val().chat)
          .on('value', snap => {
            this.conversa = snap.val()
          })
      })
  }
}
</script>

<style scoped>
.messages {
  width: 100%;
}
</style>
