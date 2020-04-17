<template>
  <div>
    You were logged out!
  </div>
</template>

<script>
import SessionStorageService from "../services/SessionStorage";
import { bus } from '../main';

export default {
  // onload ?
  created: function() {
    SessionStorageService.remove('userLoggedIn');

    bus.$emit('user-logged-in', false);

    setTimeout(() => {
      this.$router.push({name: "Home"});
    }, 1000);
  },
}
</script>
