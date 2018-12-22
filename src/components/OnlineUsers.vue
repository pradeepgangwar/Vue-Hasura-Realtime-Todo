<template>
  <div class="sliderMenu grayBgColor">
    <div class="sliderHeader">
      Online users - {{users.length}}
    </div>
    <!--For users-->
    <div v-for="user in users" :key="user.id" v-bind:user=user class="userInfo">
      <div class="userImg">
        <i class="far fa-user" />
      </div>
      <div
        class="userName"
      >
        {{user.name}}
      </div>
    </div>
  </div>
</template>

<script>

import { SUBSCRIPTION_ONLINE_USERS } from '@/graphql'

export default {
  name: 'OnlineUsers',
  data () {
    return {
      users: []
    }
  },
  apollo: {
    $subscribe: {
      onlineUsersQuery: {
        query: SUBSCRIPTION_ONLINE_USERS,
        result (data) {
          this.users = data.data.online_users
        }
      }
    }
  }
}

</script>
