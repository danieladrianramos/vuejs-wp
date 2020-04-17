<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">
        <img src="./assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
        Vue.JS 2 Example
      </router-link>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-if="loggedin">
            <router-link to="/authors/list" class="nav-link">Authors</router-link>
          </li>
          <li class="nav-item" v-if="loggedin">
            <router-link to="/posts/list" class="nav-link">Posts</router-link>
          </li>
          <li class="nav-item" v-if="loggedin">
            <router-link to="/logout" class="nav-link">Logout</router-link>
          </li>

          <li class="nav-item" v-if="!loggedin">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
          <li class="nav-item" v-if="!loggedin">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
        </ul>
      </div>
    </nav>
    
    <transition name="fade">
      <div class="gap">
        <router-view/>
      </div>
    </transition>
  </div>
</template>

<script>
import SessionStorageService from "./services/SessionStorage";
import { bus } from './main';

export default {
  data () {
    return {
      loggedin: this.checkIfIsLogged()
    }
  },

  created () {
    bus.$on('user-logged-in', () => {
      this.loggedin = this.checkIfIsLogged();
    })
  },

  methods: {
    checkIfIsLogged () {
      let user = SessionStorageService.get('userLoggedIn', true);

      if (user && user._id) {
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
    .gap {
      margin-top: 50px;
    }
</style>