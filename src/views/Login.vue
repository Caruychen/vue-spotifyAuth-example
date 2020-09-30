<template>
  <div class="login">
    <a href="http://localhost:8081/login" class="btn btn-primary">
      Sign in with Spotify
    </a>
  </div>
</template>

<script>
import store from "@/store/store.js";

export default {
  data() {
    return {
      username: "login"
    };
  },
  beforeCreate() {
    if (store.access_token) {
      this.$router.push('/');
    }
  }
};
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