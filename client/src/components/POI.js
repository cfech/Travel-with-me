//Imports
import axios from "axios";

const accountId = "ATLA5P09"
const token = "dsuo0sophpik8r9i7s3j2xkn9d4qri14"

//api call for points of interested 
export default {
    ApiSearch: function (lat, long) {
        const url = `https://www.triposo.com/api/20200405/local_highlights.json?latitude=${lat}&longitude=${long}&account=${accountId}&token=${token}`;

        console.log(url)
        return axios.get(url)

    }
}