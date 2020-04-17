//Imports
import axios from "axios";

const accountId = "ATLA5P09"
const token = "m7g4scv247ukxknlbfaf7kcltpl1srho"

//api call for points of interested 
export default {
    ApiSearch: function (lat, long) {
        const url = `https://www.triposo.com/api/20200405/local_highlights.json?latitude=${lat}&longitude=${long}&account=${accountId}&token=${token}`;

        console.log(url)
        return axios.get(url)

    }
}