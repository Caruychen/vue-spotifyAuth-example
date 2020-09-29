<template>
  <div class="login">
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
  </div>
</template>

<script>
import store from "@/store/store.js";

export default {
  data() {
    return {
      user: store.user
    };
  }
};
</script>

<style scoped>
h2 {
  padding: 20px;
}
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
</style>