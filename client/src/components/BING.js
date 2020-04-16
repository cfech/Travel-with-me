// bing api info = https://azure.microsoft.com/en-us/try/cognitive-services/my-apis/?api=search-api-v7

// https://docs.microsoft.com/en-us/azure/cognitive-services/bing-custom-search/call-endpoint-nodejs

//Imports
import request from "request";

const cors = "https://cors-anywhere.herokuapp.com/"
// const accountId = process.env.BINGKEY
const accountId = "a9e8ad7e4ef64d6395ffb41a6d1a24a5"

//api call for state 3 picture 

export default {
    ApiSearch: function (searchTerm) {
        const url = cors + "https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=" + searchTerm
const info = {
    headers: {'Ocp-Apim-Subscription-Key' : accountId}, url: url
}       
        console.log("==== CORS ====")
        console.log(info)
        return request(info)

    }
}

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
