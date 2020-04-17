import axios from 'axios';

const resource = "http://127.0.0.1:3000/authors";

export default {
    getAll() {
        return axios.get(resource).then(response => response.data);
    },

    getById(id) {
        return axios.get(resource + "/" + id).then((response) => {
            return response.data;
        });
    },

    edit(author) {
        return axios.patch(resource + "/" + author._id, author);
    },

    add(author) {
        return axios.post(resource, author);
    },

    delete(id) {
        return axios.delete(resource + "/" + id);
    }
}
