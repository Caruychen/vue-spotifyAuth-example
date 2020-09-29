<template>
  <div class="login">
    <button @click="login" class="btn btn-primary">
      Sign in with Spotify
    </button>
  </div>
</template>

<script>
import store from "@/store/store.js"

export default {
  data () {
    return {
      username: "login"
    }
  },
  methods: {
    login() {
      store.auth = this.username
      this.$router.push('/user')
    }
  }
}
</script>

<style scoped>
.btn {
  margin: 20px;
  padding: 15px 40px;
  border-radius: 50px;
  font-size: 1.25em;
  font-weight: bold;
}
</style>