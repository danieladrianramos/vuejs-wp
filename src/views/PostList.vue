<template>
    <div>
        <h1>Posts</h1>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Title</td>
                <td>Date</td>
                <td>Author</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody v-if="posts.length > 0">
                <tr v-for="(item, pos) in posts" v-bind:key="pos">
                    <td>{{ item._id }}</td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.author.name }}</td>
                    <td>
                        <router-link :to="{name: 'PostsUpdate', params: { id: item._id }}" class="btn btn-primary">Edit</router-link>
                        <button class="btn btn-danger" v-on:click="deletePost(item._id)">Delete</button>
                    </td>
                </tr>
            </tbody>

            <tbody v-else>
                No posts found
            </tbody>

            <tfooter>
                <router-link to="/posts/form" class="btn btn-primary">Add Post</router-link>
            </tfooter>
        </table>
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
        },

        deletePost(id) {
            if (confirm("Delete post?")) {
                PostService.delete(id).then(() => {
                    this.fetchItems();
                });
            }
        }
    }
}
</script>
