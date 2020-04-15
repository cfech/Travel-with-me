import React from "react";
import "./style.css";

var apiKeyFlickr = "a55b7a9ab67be43cec0b31508eeb8447"
var galleryID = "66911286-72157647277042064"

var flickrURL1 = "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=APIKEY&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1"

var flickrURL2 = "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=" + apiKeyFlickr + "&gallery_id=" + galleryID + "&format=json&nojsoncallback=1";

function flickrComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means this useEffect will run once similar to componentDidMount()
    useEffect(() => {
      fetch(flickrURL2)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.items);
          },
          // Note: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }


export default flickrComponent;



/*
var apiKeyFlickr = "a55b7a9ab67be43cec0b31508eeb8447"
var galleryID = "66911286-72157647277042064"


flickrFunction {
    var flickrURL = "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=" + apiKeyFlickr + "&gallery_id=" + galleryID + "&format=json&nojsoncallback=1";

    console.log(searchValue);

    //takes that string and sends it as an API call to OMDB
    $.ajax({
        url: flickrURL,
        method: "GET",
    }).then(function (results) {
        console.log(results);
        console.log(flickrURL);
        console.log(results.items[0].snippet.title);
        let songArray = ((results.items[0].snippet.title).split(', '));
})
*/