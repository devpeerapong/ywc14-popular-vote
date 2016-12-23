<template lang="html">
  <div class="container">
    <button class="button" @click="onClick">เข้าสู่ระบบ</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { LOGIN } from '../store/auth'

export default {
  methods: {
    /* global FB */
    onClick () {
      FB.getLoginStatus(response => {
        if (this.isLogin(response.status)) return this.redirect(response.authResponse)

        this.fbLogin()
      })
    },
    fbLogin () {
      FB.login(response => {
        if (this.isLogin(response.status)) return this.redirect(response.authResponse)
      })
    },
    redirect (response) {
      this.login(response.userID)

      this.$router.push('/boy')
    },
    isLogin (status) {
      return status === 'connected'
    },
    ...mapMutations({
      login: LOGIN
    })
  }
}
</script>

<style scoped lang="css">
.container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  min-height: 95vh;
}
.button {
  position: relative;

  outline: 0;
  border: 0;
  border-radius: 6px;
  padding: .8rem 1.2rem;

  color: #4d5d9d;
  font-size: 1.5rem;
  background: #fff;
}
</style>
