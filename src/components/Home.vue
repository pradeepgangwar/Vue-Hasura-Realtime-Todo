<template>
  <div class="container-fluid gradientBgColor minHeight">
    <div>
      <div class="headerWrapper">
        <div class="headerDescription">
          <span>Realtime Vue Todo App Demo</span>
        </div>
        <div class="loginBtn">
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
        </div>
      </div>
      <div class="mainWrapper">
        <div class="col-md-5 col-sm-6 col-xs-12 noPadd">
          <div class="appstackWrapper">
            <div class="appStack">
              <div class="col-md-1 col-sm-1 col-xs-2 removePaddLeft flexWidth">
                <i class="em em---1" />
              </div>
              <div class="col-md-11 col-sm-11 col-xs-10 noPadd">
                <div class="description">
                  Try out a realtime app that uses
                </div>
                <div class="appStackIconWrapper">
                  <div class="col-md-4 col-sm-4 col-xs-4 noPadd">
                    <div class="appStackIcon">
                      <img
                        class="img-responsive"
                        src="@/assets/logo.png"
                        alt="React logo"
                      />
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4 noPadd">
                    <div class="appStackIcon">
                      <img
                        class="img-responsive"
                        src="@/assets/auth.png"
                        alt="Auth0 logo"
                      />
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4 noPadd">
                    <div class="appStackIcon">
                      <img
                        class="img-responsive"
                        src="@/assets/graphql.png"
                        alt="GraphQL logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="appStack">
              <div class="col-md-1 col-sm-1 col-xs-2 removePaddLeft flexWidth">
                <i class="em em-rocket" />
              </div>
              <div class="col-md-11 col-sm-11 col-xs-10 noPadd">
                <div class="description">Powered by</div>
                <div class="appStackIconWrapper">
                  <div class="col-md-4 col-sm-4 col-xs-4 noPadd">
                    <div class="appStackIcon">
                      <img
                        class="img-responsive"
                        src="@/assets/apollo.png"
                        alt="apollo logo"
                      />
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4 col-xs-4 noPadd">
                    <div class="appStackIcon">
                      <img
                        class="img-responsive"
                        src="@/assets/green-logo-white.svg"
                        alt="Hasura logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="appStack">
              <div class="col-md-1 col-sm-1 col-xs-2 removePaddLeft flexWidth">
                <i class="em em-sunglasses" />
              </div>
              <div class="col-md-11 col-sm-11 col-xs-10 noPadd">
                <div class="description removePaddBottom">
                  Explore the Hasura console and try out some queries &
                  mutations
                </div>
              </div>
            </div>
            <div class="appStack removePaddBottom">
              <div class="col-md-1 col-sm-1 col-xs-2 removePaddLeft flexWidth">
                <i class="em em-zap" />
              </div>
              <div class="col-md-11 col-sm-11 col-xs-10 noPadd">
                <div class="description removePaddBottom">
                  Full tutorial coming soon!
                </div>
              </div>
            </div>
          </div>
          <div class="footer">
            Built with
            <i class="fas fa-heart" />
            by
            <a
              href="https://hasura.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hasura
            </a>
          </div>
        </div>
        <div class="tutorialImg col-md-6 col-sm-6 col-xs-12 hidden-xs noPadd">
          <img class="img-responsive" src="@/assets/right-img.png" alt="View" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import AuthService from '@/Auth/AuthService'
import router from '@/router'

const auth = new AuthService()
const { login, logout, authNotifier } = auth

const authenticated = localStorage.getItem('isLoggedIn')

export default {
  name: 'home',
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
