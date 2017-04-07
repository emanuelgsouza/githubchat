<template>
  <div class="content">
    <div class="images">
      <figure class="image">
        <img src="../assets/logo.png">
      </figure>
      <figure class="image">
        <img src="http://icon-icons.com/icons2/691/PNG/512/google_firebase_icon-icons.com_61475.png">
      </figure>
    </div>
    <h1 class="title"> GithubChat </h1>
    <hr>
    <p class="subtitle"> Olá. Este site foi feito para a palestra Vue.js e Firebase, apresentada no GDG de Duque de Caxias. Todas as funções são experimentais, sendo o intuito do projeto, demonstrar como se trabalhar com Firebase e Vue.js </p>
    <button class="button is-medium" @click="logar">
      <span class="icon"> <i class="fa fa-github"></i> </span>
      <span> Entre com o Github </span>
    </button>
    <router-link to="/chats" class="button is-medium" v-if="hasLogged">
      <span class="icon"> <i class="fa fa-comments" aria-hidden="true"></i> </span>
      <span> Acesse seus chats </span>
    </router-link>
  </div>
</template>

<script>
import { signinGithub } from '../services/firebase/auth'
import isEmpty from 'lodash.isempty'

export default {
  name: 'home',
  methods: {
    logar () {
      signinGithub()
    }
  },
  computed: {
    hasLogged () {
      return !isEmpty(this.$store.state.user)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  padding: 1em;
}

.images {
  display: flex;
}

.images .image {
  width: 50%;
}

.image img {
  max-width: 200px;
  margin: 0 auto;
}

.button {
  border: 2px solid #333;
  outline: none;
  transition: all .4s ease;
  margin: .2em;
}

.button:hover {
  background-color: #333;
  color: white;
  border-color: #333;
}
</style>
