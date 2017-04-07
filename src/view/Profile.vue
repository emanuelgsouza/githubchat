<template>
  <div class="section">
    <figure class="image">
      <img :src="user.photo">
    </figure>
    
    <label for="upload" class="button"> Atualizar foto de perfil </label>
    <input type="file" id="upload" hidden="true">

    <h1 class="title has-text-centered"> {{ user.name }} </h1>
  </div>
</template>

<script>
  export default {
    computed: {
      user () {
        return this.$store.state.user
      }
    }
  }
</script>

<style scoped>
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
