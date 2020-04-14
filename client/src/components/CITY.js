
import axios from "axios";
const accountId = "ATLA5P09"
const token = "m7g4scv247ukxknlbfaf7kcltpl1srho"
//api call
export default {

    ApiSearch: function (searchTerm) {
        const url = `https://www.triposo.com/api/20200405/location.json?tag_labels=city&annotate=trigram:${searchTerm}&trigram=>=0.3&count=10&fields=id,name,score,country_id,parent_id,snippet&order_by=-trigram&account=${accountId}&token=${token}`
        console.log(url)

        return axios.get(url)
    }
}


