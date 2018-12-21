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
      <!-- <OnlineUsers /> -->
    </div>
  </div>
</template>

<script>

import TodoPrivateWrapper from './TodoPrivateWrapper'
import TodoPublicWrapper from './TodoPublicWrapper'

export default {
  name: 'Dashboard',
  props: ['auth', 'authenticated'],
  data () {
    return {}
  },
  components: {
    TodoPublicWrapper,
    TodoPrivateWrapper
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
