export default {
    set(key, value, toJson = false) {
        if (toJson) {
            value = JSON.stringify(value);
        }

        sessionStorage.setItem(key, value);
    },

    get(key, fromJson = false) {
        let value = sessionStorage.getItem(key);

        if (fromJson) {
            return JSON.parse(value);
        }

        return value;
    },

    remove(key) {
        return sessionStorage.removeItem(key);
    }
}