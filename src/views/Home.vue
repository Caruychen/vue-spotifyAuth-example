<template>
  <div class="home">
    <h1>Spotify Authorization example</h1>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
h1 {
  text-decoration: underline;
}
</style>
