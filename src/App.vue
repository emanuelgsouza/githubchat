<template>
  <div id="app">
    <header class="hero is-medium">
      <p class="title has-text-centered">
        <router-link to="/">
          GithubChat
        </router-link>
      </p>
    </header>
    <router-view></router-view>
    <footer>
      <p class="subtitle has-text-centered">
        <a href="https://github.com/emanuelgsouza/githubchat">
          Confira o código no
          <span class="icon"> <i class="fa fa-github"></i>
          </span>
        </a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
@import "./assets/sass/app.sass"

.hero,
footer
  background-color: #333
  padding: 1em

.hero .title a:hover,
footer .subtitle a:hover
  color: #FFF
</style>
