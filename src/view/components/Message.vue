<template>
  <div class="message" :class=" { 'own' : isOwn } ">
    <div class="message-body">
      {{ msg.text }}
      <span class="hour"> {{ hour }} </span>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

moment.locale('pt-BR')

export default {
  props: ['msg'],
  computed: {
    isOwn () {
      const user = this.$store.state.user
      return this.msg.uidAuthor === user.uid
    },
    hour () {
      return moment(this.msg.dateCreate).format('HH:mm:ss')
    }
  }
}
</script>

<style scoped>
.message-body {
  position: relative;
  padding-bottom: 2em;
}

.message.own {
  text-align: right;
}

.message.own .hour {
  position: absolute;
  bottom: .3em;
  left: .3em;
}

.message:not(.own) .hour {
  position: absolute;
  bottom: .3em;
  right: .3em;
}
</style>
