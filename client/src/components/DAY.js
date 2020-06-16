//Imports
import axios from "axios";
const accountId = "ATLA5P09"
const token = "dsuo0sophpik8r9i7s3j2xkn9d4qri14"

//api call for day trip
export default {
    ApiSearch: function (daySearch) {
        const url = `https://www.triposo.com/api/20200405/day_planner.json?location_id=${daySearch}&max_distance=500&items_per_day=5&departure_time=12:00&account=${accountId}&token=${token}`
        console.log(url)
        return axios.get(url)

    }
}

