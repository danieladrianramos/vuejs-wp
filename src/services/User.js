import axios from 'axios';

const resource = "http://127.0.0.1:3000/users";

export default {
    login(user) {
        return axios.post(resource + "/login", user).then((response) => {
            return response.data;
        }).catch(() => {
            return false;
        });
    },

    register(user) {
        return axios.post(resource, user);
    }
}
