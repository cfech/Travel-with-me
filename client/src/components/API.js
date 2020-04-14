// api calls 

import axios from "axios";
const accountId = "ATLA5P09"
const token = "m7g4scv247ukxknlbfaf7kcltpl1srho"
//api call
export default {

    ApiSearch: function (searchTerm) {

        const url = `https://www.triposo.com/api/20200405/location.json?id=${searchTerm}&account=${accountId}&token=${token}`;
        return axios.get(url)
    }
}


