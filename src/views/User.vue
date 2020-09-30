<template>
  <div class="login">
    <div v-if="user">
      <h2>Welcome {{ user.display_name }}</h2>
      <b-row>
        <b-col>
          <img
            class="user-image"
            :src="user.images[0].url"
            :alt="user.display_name"
          />
        </b-col>
        <b-col>
          <dl class="row">
            <dt class="col-sm-4">Display name</dt>
            <dd class="col-sm-8">{{ user.display_name }}</dd>
            <dt class="col-sm-4">ID</dt>
            <dd class="col-sm-8">{{ user.id }}</dd>
            <dt class="col-sm-4">Email</dt>
            <dd class="col-sm-8">{{ user.email }}</dd>
            <dt class="col-sm-4">Spotify URI</dt>
            <dd class="col-sm-8">
              <a :href="user.external_urls.spotify">{{
                user.external_urls.spotify
              }}</a>
            </dd>
            <dt class="col-sm-4">Link</dt>
            <dd class="col-sm-8">
              <a :href="user.href">{{ user.href }}</a>
            </dd>
            <dt class="col-sm-4">Followers</dt>
            <dd class="col-sm-8">{{ user.followers.total }}</dd>
            <dt class="col-sm-4">Country</dt>
            <dd class="col-sm-8">{{ user.country }}</dd>
          </dl>
        </b-col>
      </b-row>
      <button @click="logOut" class="btn btn-secondary">Log out</button>
    </div>
  </div>
</template>

<script>
import store from "@/store/store.js";
import Vue from "vue";

export default {
  data() {
    return {
      user: null,
    }
  },
  methods: {
    logOut() {
      store.access_token = null
      store.refresh_token = null
      this.$router.push('/login')
    }
  },
  created() {
    Vue.axios.get('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': 'Bearer ' + store.access_token
      }
    })
    .then((response) => {
      this.user = response.data
    })
  }
};
</script>

<style scoped>
.user-image {
  max-width: 200px;
  height: auto;
}
dt {
  text-align: end;
}
dd {
  text-align: left;
}
.btn {
  margin: 20px;
}
</style>