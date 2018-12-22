<template>
  <div>
    <div class="col-xs-12 col-md-12 col-lg-9 col-sm-12 noPadd">
      <div>
        <div class="col-md-6 col-sm-12 personalTodo">
          <div class="wd95 addPaddTopBottom">
            <div class="sectionHeader">Personal todos</div>
            <todo-private-wrapper></todo-private-wrapper>
          </div>
        </div>
        <div class="col-xs-12 col-md-6 col-sm-12 grayBgColor todoMainWrapper commonBorRight publicTodo">
          <div class="wd95 addPaddTopBottom">
            <div class="sectionHeader">Public todos</div>
            <todo-public-wrapper></todo-public-wrapper>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-lg-3 col-md-12 col-sm-12 noPadd onlineUsers">
      <online-users></online-users>
    </div>
    <div class="footerWrapper">
      <span>
        <a
          href="https://react-apollo-todo-demo.hasura.app/console"
          target="_blank"
          rel="noopener noreferrer"
        >
          Backend
          <i class="fa fa-angle-double-right" />
        </a>
      </span>
      <span class="footerLinkPadd accessKey">
        <button>
          Access Key: hasurademoapp
        </button>
      </span>
      <span class="footerLinkPadd">
        <a
          href="https://github.com/hasura/graphql-engine/tree/master/community/tutorials/react-apollo-todo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
          <i class="fa fa-angle-double-right" />
        </a>
      </span>
    </div>
  </div>
</template>

<script>

import TodoPrivateWrapper from './TodoPrivateWrapper'
import TodoPublicWrapper from './TodoPublicWrapper'
import OnlineUsers from './OnlineUsers'

export default {
  name: 'Dashboard',
  props: ['auth', 'authenticated'],
  data () {
    return {}
  },
  components: {
    TodoPublicWrapper,
    TodoPrivateWrapper,
    OnlineUsers
  }
}

</script>

<style>
  .spinner {
    position: absolute;
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: white;
    top: 0;
    bottom: 0

;
    left: 0;
    right: 0;
  }
</style>
