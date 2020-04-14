import axios from "axios";

//for front end routes 


export default {
    // Gets all books
    getTrip: function () {
        return axios.get("/api/users/trips");
    },
    // Gets the book with the given id
    getTrips: function (id) {
        return axios.get("/api/users/trips" + id);
    },
    // Deletes the book with the given id
    deleteTrip: function (id) {
        return axios.delete("/api/users/trips" + id);
    },
    // Saves a book to the database
    saveTrip: function (tripData) {
        return axios.post("/api/users/trips", tripData);
    }
};