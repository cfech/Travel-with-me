//Imports
import axios from "axios";

//front end routes for trips 


export default {
    // Gets all tripss
    getTrip: function () {
        return axios.get("/api/users/trips");
    },
    // Gets the trips with the given id
    getTrips: function (id) {
        return axios.get("/api/users/trips" + id);
    },
    // Deletes the trips with the given id
    deleteTrip: function (id) {
        return axios.delete("/api/users/trips" + id);
    },
    // Saves a trips to the database
    saveTrip: function (tripData) {
        return axios.post("/api/users/trips", tripData);
    }
};