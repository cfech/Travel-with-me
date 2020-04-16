//Imports
// import axios from "axios";

//Ajax call for getting car picture with bing api
// $(".carmakeimage");
//     picture = term
//     const cors_anywhere = "https://cors-anywhere.herokuapp.com/"
//     let otherKey = "9760a4c7d4d94a39b2ff9055fbe79c30";
//     $.ajax({
//         url: cors_anywhere + "https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=" + picture,
//         method: "GET",
//         beforeSend: function (xhr) { xhr.setRequestHeader("Ocp-Apim-Subscription-Key", otherKey); }
//     }).then((response) => {
//         var imgSrc = response.value[0].thumbnailUrl
//         let img = document.querySelector("img")
//         img.setAttribute("src", imgSrc)
//     })
    
//Imports
import axios from "axios";

const accountId = process.env.BINGKEY

const headers = {
    'Ocp-Apim-Subscription-Key' : accountId,
}

const cors = "https://cors-anywhere.herokuapp.com/"

//api call for state 3 picture 

export default {
    ApiSearch: function (searchTerm) {
        const url = cors + "https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=" + searchTerm
        console.log(url)
        return axios.get(url, { headers })

    }
}