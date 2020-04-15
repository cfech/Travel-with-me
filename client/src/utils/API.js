//Imports
import axios from "axios";

//front end routes for users 
export default {
  // Gets all users
  getUser: function() {
    return axios.get("/api/users/");
  },
  // Gets the user with the given id
  getUsers: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users/", userData);
  },
  // login user
  login: function(userData) {
    return axios.post("/api/users/login", userData);
  },
  //logout user
  logout: function() {
    return axios.post("/api/users/logout");
  }
};
