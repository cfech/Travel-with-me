//Imports
import axios from "axios";

//front end routes for trips 


export default {
    // Gets all tripss
    getTrip: function () {
        return axios.get("/api/trips");
    },
    // Gets the trips with the given id
    getTrips: function (id) {
        return axios.get("/api/trips/" + id);
    },
    // Deletes the trips with the given id
    deleteTrip: function (id) {
        return axios.delete("/api/trips/" + id);
    },
    // Saves a trips to the database
    saveTrip: function (tripData) {
        return axios.post("/api/trips", tripData);
    },
    getUserTrips: function (id) {
        return axios.get("/api/users/trips/" + id);
    },
};