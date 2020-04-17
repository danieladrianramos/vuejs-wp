<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Author Form</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="saveAuthor">
          <div class="form-group">
            <label>Name: </label>
            <input type="text" v-model="author.name" class="form-control">
          </div>
          <div class="form-group">
            <label>Bio: </label>
            <textarea v-model="author.bio" class="form-control"></textarea>
          </div>
          <div class="form-group">
            <input type="submit" value="submit" class="btn btn-primary">
            <input type="hidden" name="_id" v-model="author._id">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AuthorService from "../services/Author";

export default {
  data: function () {
    return {
      author: {}
    }
  },

  // onload ?
  created: function() {
    if (this.$route.params.id) {
      AuthorService.getById(this.$route.params.id).then((author) => {
        this.author = author;
      });
    }
  },

  methods: {
    saveAuthor() {
      if (this.author._id) {
        AuthorService.edit(this.author).then(() => {
          // Redirect using the "name" of the route
          this.$router.push({name: "AuthorsList"});
        });
      } else {
        AuthorService.add(this.author).then(() => {
          // Redirect using the "path"
          this.$router.push("/authors/list");
        });
      }
    },
  }
}
</script>
