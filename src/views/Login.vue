<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Login</h3>
            </div>
            <div class="card-body">
                <div v-if="error" class="alert alert-danger" role="alert">
                    Error: {{ error }}
                </div>

                <form v-on:submit.prevent="login">
                    <div class="form-group">
                        <label>Username: </label>
                        <input type="text" v-model="user.username" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Password: </label>
                        <input type="password" v-model="user.password" class="form-control">
                    </div>
                    <div class="form-group">
                        <input type="submit" value="submit" class="btn btn-primary">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import UserService from "../services/User";
import SessionStorageService from "../services/SessionStorage";
import { bus } from '../main';

export default {
    data: function () {
        return {
            user: {},
            error: null
        }
    },

    methods: {
        login() {
            UserService.login(this.user).then((response) => {
                if (!response) {
                    this.error = "Check the fields!";
                } else {
                    SessionStorageService.set('userLoggedIn', response, true);

                    bus.$emit('user-logged-in', true);

                    this.$router.push({name: "Home"});
                }
            });
        }
    }
}
</script>
