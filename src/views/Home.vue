<template>
  <div class="home">
    <h1 class="separation">Latest posts</h1>

    <div v-for="(item, pos) in posts" v-bind:key="pos" class="alert alert-light" role="alert">
      <div><b>{{ item.title }}</b></div>
      <div>{{ item.description }}</div>
    </div>

  </div>
</template>

<script>
import PostService from "../services/Post";

export default {
    data: function () {
        return {
            posts: []
        }
    },

    // onload ?
    created: function() {
        this.fetchItems();
    },

    methods: {
        fetchItems() {
            PostService.getAll().then((response) => {
                this.posts = response;
            });
        }
    }
}
</script>

<style scoped>
.alert-light {
    color: #818182;
    background-color: #fefefe;
    border-color: #cccccc;
}
.separation {
  padding-bottom: 20px;
}
</style>