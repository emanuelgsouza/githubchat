<template>
  <div class="article">
    <header class="header">
      <Avatar :url="user.photo" />
      <h1 class="title"> {{ user.name }} </h1>
    </header>
    <section class="section-messages">
      <vBar wrapper="wrapper">
        <Messages v-if="!isFirstMessage" :chat="chat[0]" />
      </vBar>
      <div class="text">
        <p class="control">
          <textarea
            autofocus="true"
            class="textarea"
            v-model="message"
            placeholder="Escreva uma mensagem"
            @keydown.enter="sendMessage"></textarea>
        </p>
        <button class="button is-success" @click="sendMessage"> ENVIAR </button>
      </div>
    </section>
  </div>
</template>

<script>
import {
  database,
  setFirstMessage,
  setChat,
  setChatInUser,
  setMessage
} from '../services/firebase/database'
import Avatar from './components/Avatar'
import Messages from './components/Messages'
import VBar from 'v-bar'

export default {
  name: 'chat',
  components: { Avatar, Messages, VBar },
  data () {
    return {
      user: {},
      message: ''
    }
  },
  computed: {
    isFirstMessage () {
      const chats = this.$store.state.chats
      if (chats === undefined) return true
      if (chats[this.refChat] === undefined) return true
      return false
    },
    refChat () {
      if (this.chat === undefined) return ''
      if (this.chat[0] === undefined) return ''
      return this.chat[0].chatUid
    },
    chat () {
      return Object.values(this.$store.state.chats).filter(chat => {
        return chat.member1 === this.user.uid || chat.member2 === this.user.uid
      })
    },
    refMessage () {
      if (this.refChat !== '') return this.chat[0].refMessage
    }
  },
  methods: {
    sendMessage () {
      const user1 = this.$store.state.user
      const user2 = this.user
      if (this.isFirstMessage) {
        const firstMessage = setFirstMessage(this.message, user1.uid)
        const keyChat = firstMessage.keyChat
        firstMessage
          .created()
          .then(_ => {
            const chat = setChat(user1.uid, user2.uid, keyChat)
            chat
              .created()
              .then(_ => {
                setChatInUser(user1.uid, user2.uid, chat.refChat, keyChat)
              })
              .catch(console.log)
          })
          .catch(console.log)
        this.message = ''
      }
      setMessage(this.message, user1.uid, this.refMessage)
      this.message = ''
    }
  },
  mounted () {
    database
      .ref('users')
      .child(this.$route.params.id)
      .on('value', snap => {
        this.user = snap.val()
      })
  }
}
</script>

<style scoped>
  .header {
    padding: 1em;
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid black;
  }

  .header .title {
    margin-left: 1em;
  }

  .section-messages {
    position: relative;
    height: calc(100vh - 228px);
  }

  .text {
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
  }

  .text .control {
    min-height: auto;
    flex-grow: 1;
    margin: .5em;
  }

  .text .control .textarea {
    min-height: 42px;
  }

  .text .button {
    margin: .5em .5em .5em 0;
  }

  .wrapper {
    width: 100%;
    height: 55vh;
    padding: .5em 0 .3em .5em;
  }
</style>
