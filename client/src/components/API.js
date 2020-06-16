// Imports
import axios from "axios";
const accountId = "ATLA5P09"
const token = "dsuo0sophpik8r9i7s3j2xkn9d4qri14"

//api call cities with city specific id
export default {
    ApiSearch: function (searchTerm) {
        const url = `https://www.triposo.com/api/20200405/location.json?id=${searchTerm}&account=${accountId}&token=${token}`;
        return axios.get(url)
    }
}


