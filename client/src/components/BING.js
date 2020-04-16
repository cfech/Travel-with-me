// bing api info = https://azure.microsoft.com/en-us/try/cognitive-services/my-apis/?api=search-api-v7

// https://docs.microsoft.com/en-us/azure/cognitive-services/bing-custom-search/call-endpoint-nodejs

//Imports
import request from "request";

const cors = "https://cors-anywhere.herokuapp.com/"
// const accountId = process.env.BINGKEY
const accountId = "a9e8ad7e4ef64d6395ffb41a6d1a24a5"
// const accountId = "644ab2d015d14d19a6d4a01c9b4d426f"
//api call for state 3 picture 

// return new Promise(resolve => {
//     request({
//         url: "",
//         method: "",
//         headers: {},
//         json: true
//     }, function (error, response, body) {
//         if(!error)
//             resolve(body);
//     })
// }).then(value => {
//     // process value here
// })

export default {
    ApiSearch: function (searchTerm) {
        const url = cors + "https://api.cognitive.microsoft.com/bing/v7.0/images/search";

        const info = {
            method: 'GET',
            uri: url,
            headers: {
                'Ocp-Apim-Subscription-Key' : accountId
            },
            qs: {
                q: searchTerm,
                mkt: "en-US"
            },
            json: true
        }       
        console.log("==== CORS ====")
        console.log(info)
        return new Promise(resolve => {
            request(info, function(err, res, body) {
                if(!err) {
                    resolve(body);
                }
            });
        });

    }
}



// let request_params = {
//     method: 'GET',
//     uri: endpoint,
//     headers: {
//         'Ocp-Apim-Subscription-Key': subscriptionKey
//     },
//     qs: {
//         q: query,
//         mkt: mkt
//     },
//     json: true
// }








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
