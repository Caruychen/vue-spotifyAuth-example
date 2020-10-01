# Spotify Accounts Authentication Example with VueJS

This project showcases a basic VueJS app demo of the Authorization Code flow for authenticating against the [Spotify Web API](https://developer.spotify.com/web-api/authorization-guide/).

## Project setup
### Using your credentials
You will first need to register your app with your credentials on the [Spotify for Developers Dashboard](https://beta.developer.spotify.com/dashboard) and create your application. 

For my example, use the redirect URIs:
* http://localhost:8081
* http://localhost:8081/callback

This is used for the server side URI which holds your client id and secrets, and where most of the authentication API calls happen. It is different to the VueJS server address. Once the app is created, replace the following in server.js to match your credentials and server setup:
* CLIENT_ID
* CLIENT_SECRET
* REDIRECT_URI
* VUE_SERVER_ADDRESS
* SERVER_PORT

Then in store.js and Login.vue, replace SERVER_PORT_ADDRESS with the server port address you are using.

### Install dependencies
Once the repository is cloned, install dependencies using
```
npm install
```

### Compiles and hot-reloads VueJS for development
```
npm run serve
```

### Run Express server
```
npm start
```
or
```
node src/server/server.js
```

Then open http://localhost:8080 in a browser