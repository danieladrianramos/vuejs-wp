import axios from 'axios';

const resource = "http://127.0.0.1:3000/posts";

export default {
    getAll() {
        return axios.get(resource).then(response => response.data);
    },

    getById(id) {
        return axios.get(resource + "/" + id).then((response) => {
            return response.data;
        });
    },

    edit(postData) {
        return axios.patch(resource + "/" + postData._id, postData);
    },

    add(postData) {
        return axios.post(resource, postData);
    },

    delete(id) {
        return axios.delete(resource + "/" + id);
    }
}
