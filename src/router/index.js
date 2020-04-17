import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Import routing pages
import Home from '../views/Home.vue';

import AuthorForm from '../views/AuthorForm.vue';
import AuthorList from '../views/AuthorList.vue';

import PostForm from '../views/PostForm.vue';
import PostList from '../views/PostList.vue';

import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Logout from '../views/Logout.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },

  { path: '/authors/list', name: 'AuthorsList', component: AuthorList },
  { path: '/authors/form/:id', name: 'AuthorsUpdate', component: AuthorForm },
  { path: '/authors/form', name: 'AuthorsForm', component: AuthorForm },

  { path: '/posts/list', name: 'PostsList', component: PostList },
  { path: '/posts/form/:id', name: 'PostsUpdate', component: PostForm },
  { path: '/posts/form', name: 'PostsForm', component: PostForm },

  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/logout', name: 'Logout', component: Logout }
];

const router = new VueRouter({
  routes
})

export default router
