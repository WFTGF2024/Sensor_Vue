<template>
  <HeaderNav />
  <div class="main-content">
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'

export default {
  components: {
    HeaderNav
  }
}
</script>

<style>
body, html {
  margin: 0;
}

.main-content {
  padding-top: 60px;
}
</style>
