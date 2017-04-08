<template>
  <div class="section">
    <figure class="image">
      <img :src="user.photo">
    </figure>
    
    <label for="upload" class="button"> Atualizar foto de perfil </label>
    <input type="file" id="upload" hidden="true" @change="captureFile">

    <transition name="fade">
      <progress
        v-if="loading"
        class="progress is-primary is-medium"
        :value="percent"
        max="100"></progress>
    </transition>

    <div class="notification is-success" v-if="message">
      <button class="delete" @click="message = false"></button>
      <p class="subtitle"> Foto atualizado com sucesso </p>
    </div>

    <h1 class="title has-text-centered"> {{ user.name }} </h1>
  </div>
</template>

<script>
import { storageProfilePhoto } from '../services/firebase/storage'
import { firebase } from '../services/firebase'

const calcPercent = (number, tot) => (number / tot) * 100

export default {
  data () {
    return {
      file: '',
      loading: false,
      message: false,
      percent: 0
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    captureFile (e) {
      this.file = e.target.files[0]
      if (this.file) this.updateProfile()
    },
    updateProfile () {
      const uid = this.$store.state.user.uid
      const uploadTask = storageProfilePhoto(uid, this.file)
      uploadTask
      .on(firebase.storage.TaskEvent.STATE_CHANGED, snap => {
        this.loading = true
        this.percent = calcPercent(snap.bytesTransferred, snap.totalBytes)
        console.log('running')
      }, err => {
        console.log('error')
        console.log(err)
      }, _ => {
        console.log('complete')
        this.loading = false
        const downloadURL = uploadTask.snapshot.downloadURL
        firebase.database().ref('users').child(uid).child('photo').set(downloadURL)
        .then(_ => {
          this.loading = false
          this.message = true
        })
        .catch(err => {
          console.log(err)
        })
      })
    }
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }

  .image {
    max-width: 200px;
    margin: 0 auto;
    border-radius: 100%;
    overflow: hidden;
  }

  .image img {
    max-width: 100%;
  }

  .button {
    max-width: 200px;
    margin: .8em auto;
    display: flex;
  }

  .title {
    margin: .5em;
  }
</style>
