<template>
  <div id="app">
    <b-navbar fluid toggleable="md" class="removeMarBottom">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-nav class="navheader">
        <b-navbar-brand class="navBrand">
          Vue Apollo Todo App
        </b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-button
              size="sm"
              id="qsLoginBtn"
              bsStyle="primary"
              class="btn-margin logoutBtn"
              v-if="authenticated == null" @click="login()"
            >
              Log In
            </b-button>
            <b-button
            size="sm"
              id="qsLogoutBtn"
              bsStyle="primary"
              class="btn-margin logoutBtn"
              v-if="authenticated" @click="logout()"
            >
              Log Out
            </b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-navbar>
    <br>
    <router-view
      :auth="auth"
      :authenticated="authenticated">
    </router-view>
  </div>

</template>

<script>

import AuthService from './Auth/AuthService'
import router from './router'

const auth = new AuthService()
const { login, logout, authNotifier } = auth

const authenticated = localStorage.getItem('isLoggedIn')
console.log(authenticated)
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
