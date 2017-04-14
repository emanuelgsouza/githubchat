<template>
  <figure class="image is-64x64" :class=" { 'is-online' : online } ">
    <img :src="url" />
    <span class="icon"> <i class="fa fa-power-off" aria-hidden="true"></i> </span>
  </figure>
</template>

<script>
import { database } from '../../services/firebase/database'

export default {
  props: ['url', 'uid'],
  data () {
    return {
      online: false
    }
  },
  mounted () {
    setTimeout(_ => {
      database
        .ref('users')
        .child(this.uid)
        .child('online')
        .on('value', snap => {
          this.online = snap.val()
        })
    }, 2000)
  }
}
</script>

<style scoped>
  img {
    border-radius: 100%;
  }

  .image .icon {
    position: absolute;
    bottom: -10px;
    right: -10px;
  }

  .image.is-online {
    position: relative;
  }

  .image.is-online .icon {
    color: #23d160;
  }

  .image.is-online img{
    border: 2px solid #23d160;
  }

  .image:not(.is-online) img {
    border: 2px solid #ff3860;
  }

  .image:not(.is-online) .icon {
    color: #ff3860;
  }
</style>
