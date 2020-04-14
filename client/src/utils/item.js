import axios from "axios";

//for front end routes 


export default {
    // Gets all books
    getItem: function () {
        return axios.get("/api/users/items");
    },
    // Gets the book with the given id
    getItems: function (id) {
        return axios.get("/api/users/items" + id);
    },
    // Deletes the book with the given id
    deleteItem: function (id) {
        return axios.delete("/api/users/items" + id);
    },
    // Saves a book to the database
    saveItem: function (tripData) {
        return axios.post("/api/users/items", tripData);
    }
};