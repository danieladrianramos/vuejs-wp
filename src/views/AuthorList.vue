<template>
    <div>
        <h1>Authors</h1>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody v-if="authors.length > 0">
                <tr v-for="(item, pos) in authors" v-bind:key="pos">
                    <td>{{ item._id }}</td>
                    <td>{{ item.name }}</td>
                    <td>
                        <router-link :to="{name: 'AuthorsUpdate', params: { id: item._id }}" class="btn btn-primary">Edit</router-link>
                        <button class="btn btn-danger" v-on:click="deleteAuthor(item._id)">Delete</button>
                    </td>
                </tr>
            </tbody>

            <tbody v-else>
                No authors found
            </tbody>

            <tfooter>
                <router-link to="/authors/form" class="btn btn-primary">Add Author</router-link>
            </tfooter>
        </table>
    </div>
</template>

<script>
import AuthorService from "../services/Author";

export default {
    data: function () {
        return {
            authors: []
        }
    },

    // onload ?
    created: function() {
        this.fetchItems();
    },

    methods: {
        fetchItems() {
            AuthorService.getAll().then((response) => {
                this.authors = response;
            });
        },

        deleteAuthor(id) {
            if (confirm("Delete the author?")) {
                AuthorService.delete(id).then(() => {
                    this.fetchItems();
                });
            }
        }
    }
}
</script>
