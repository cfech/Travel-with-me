//Imports
import axios from "axios";

//front end routes for trip items 
export default {
    // Gets all items
    getItem: function () {
        return axios.get("/api/users/items");
    },
    // Gets the item with the given id
    getItems: function (id) {
        return axios.get("/api/users/items" + id);
    },
    // Deletes the item with the given id
    deleteItem: function (id) {
        return axios.delete("/api/users/items" + id);
    },
    // Saves a item to the database
    saveItem: function (itemData) {
        return axios.post("/api/users/items", itemData);
    },
    getTripItems: function (id) {
        return axios.get("/api/users/trips/" + id);
    },
};