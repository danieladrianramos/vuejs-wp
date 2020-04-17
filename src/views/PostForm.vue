<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Post Form</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="savePost">
          <div class="form-group">
            <label>Title: </label>
            <input type="text" v-model="post.title" class="form-control">
          </div>
          <div class="form-group">
            <label>Author: </label>
            <select v-model="post.authorId" class="form-control">
              <option v-for="(item, pos) in authors" v-bind:key="pos" v-bind:value="item._id">{{ item.name }}</option>
            </select>
          </div>
          <div class="form-group">
            <label>Description: </label>
            <textarea v-model="post.description" class="form-control"></textarea>
          </div>
          <div class="form-group">
            <label>Date: </label>
            <input type="text" v-model="post.date" class="form-control">
          </div>
          <div class="form-group">
            <input type="submit" value="submit" class="btn btn-primary">
            <input type="hidden" name="_id" v-model="post._id">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from "../services/Post";
import AuthorService from "../services/Author";

export default {
    data: function () {
        return {
            post: {},
            authors: []
        }
    },

    // onload ?
    created: function() {
        if (this.$route.params.id) {
            PostService.getById(this.$route.params.id).then((post) => {
                // I received an Author object > use only the id
                post.authorId = post.author._id;

                this.post = post;
            });
        }

        AuthorService.getAll().then((data) => {
            this.authors = data;
        });
    },

    methods: {
        savePost() {
            // Send the AuthorId not the object
            this.post.author = this.post.authorId;
            
            if (this.post._id) {
                PostService.edit(this.post).then(() => {
                    // Redirect using the "name" of the route
                    this.$router.push({name: "PostsList"});
                });
            } else {
                PostService.add(this.post).then(() => {
                    // Redirect using the "path"
                    this.$router.push("/posts/list");
                });
            }
        },
    }
}
</script>
