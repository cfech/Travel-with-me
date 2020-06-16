//Imports
import axios from "axios";

const accountId = "ATLA5P09"
const token = "dsuo0sophpik8r9i7s3j2xkn9d4qri14"

//api call for cities that match search term
export default {
    ApiSearch: function (searchTerm) {
        const url = `https://www.triposo.com/api/20200405/location.json?tag_labels=city&annotate=trigram:${searchTerm}&trigram=>=0.3&count=10&fields=id,name,score,images,country_id,parent_id,snippet&order_by=-trigram&account=${accountId}&token=${token}`
        console.log(url)
        return axios.get(url)
    }
}


