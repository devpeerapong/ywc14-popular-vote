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
  methods: {
    setup () {
      // console.log('fb', this.facebook)
      this.fetch({ type: 'boy', facebook: this.facebook }).catch(() => this.$router.push('/girl'))
    },
    onVote (facebook) {
      vote({ type: 'boy', voter: this.facebook, facebook }).then(
        () => this.$router.push('/girl'),
        () => console.log('nothing')
      )
    },
    ...mapActions({ fetch: FETCH })
  },
  computed: {
    members () {
      return this.$store.state.member.members
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
