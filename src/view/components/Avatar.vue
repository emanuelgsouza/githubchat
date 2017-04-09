<template>
  <figure class="image is-64x64">
    <img :src="url" />
  </figure>
</template>

<script>
export default {
  props: ['url']
}
</script>

<style scoped>
  img {
    border-radius: 100%;
  }
</style>
