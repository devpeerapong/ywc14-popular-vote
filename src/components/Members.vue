<template>
  <div>
    <div class="member-list">
      <member
        v-for="member in members"
        :name="member.nickName"
        :image="member.picture"
        @vote="onVote(member.facebook)">
      </member>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { vote } from '../services/member'
import { FETCH } from '../store/member'

import Member from './Member'

export default {
  components: { Member },
  created () {
    this.setup()
  },
  watch: {
    '$route' () {
      this.setup()
    }
  },
  methods: {
    setup () {
      const { type } = this.$route.params

      this.fetch(type)
    },
    onVote (facebook) {
      const { type } = this.$route.params
      vote(type, this.facebook, facebook).then(
        () => this.$router.push(this.path(type)),
        () => console.log('nothing')
      )
    },
    path (type) {
      if (type === 'boy') return '/girl'
      if (type === 'girl') return '/special'

      return '/finished'
    },
    ...mapActions({ fetch: FETCH })
  },
  computed: {
    members () {
      return this.$store.state
    },
    facebook () {
      return this.$store.state.auth.facebook
    }
  }
}
</script>

<style scoped>
.member-list {
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;

  max-width: 640px;
}
</style>
