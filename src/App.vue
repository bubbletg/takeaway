<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <!-- 底部导航 -->
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  mounted () {
    // this.$store.dispatch('getAddress')
    this.$store.dispatch('getAddress')
    // this.getAddress()
    this.getUserInfo()
  },

  methods: {
    ...mapActions(['getAddress', 'getUserInfo'])
  },

  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './common/stylus/mixins.styl'

  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
