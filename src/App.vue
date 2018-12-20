<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light nav-top">
      <a class="navbar-brand" href="#">Realtime Vue Todo App Demo</a>
      <div class="login-button">
        <b-button size="sm" variant="primary" v-if="!authenticated" @click="login()">
          Login
        </b-button>
        <b-button size="sm" variant="primary" v-if="authenticated" @click="logout()">
          Logout
        </b-button>
      </div>
    </nav>
    <br>
    <router-view
      :auth="auth"
      :authenticated="authenticated">
    </router-view>
  </div>
</template>

<script>

import PrivateTodos from './components/PrivateTodos'
import AuthService from './Auth/AuthService'
import router from './router'

const auth = new AuthService()
const { login, logout, authenticated, authNotifier } = auth

export default {
  name: 'app',
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    if (localStorage.getItem('isLoggedIn')) {
      router.replace('dashboard')
    }
    return {
      auth,
      authenticated
    }
  },
  methods: {
    login,
    logout
  },
  components: {
    PrivateTodos
  }
}

</script>

<style>

.login-button {
  float: right;
}
.nav-top {
  background-image: linear-gradient(to bottom right, #f0e6e6, #92a8e6);
}
</style>
