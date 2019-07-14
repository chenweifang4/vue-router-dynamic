<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <transition name="fade">
        <p v-if="!store.hadInitRoutes">正在加载路由，请稍后</p>
      </transition>
      <router-view></router-view>
      <router-link to="/login">back to login</router-link> |
      <router-link to="/">back to Home</router-link> |
      <router-link to="/404">back to 404</router-link> |
      <router-link to="/aaaa">back to not exist path -- aaaa</router-link>
    </div>
  </div>
</template>

<script>
import Store from './store'

export default {
  name: 'app',
  computed: {
    store () {
      return Store
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
