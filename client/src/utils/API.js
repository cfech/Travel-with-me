import axios from "axios";

//for front end routes 


export default {
  // Gets all books
  getUser: function() {
    return axios.get("/api/users/");
  },
  // Gets the book with the given id
  getUsers: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/api/users/", userData);
  },
  // login
  login: function(userData) {
    return axios.post("/api/users/login", userData);
  },
  logout: function(userData) {
    return axios.post("/api/users/logout", userData);
  }
};
