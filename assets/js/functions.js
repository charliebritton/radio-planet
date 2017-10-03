// Allows you to decode URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Puts decoded URL queries into query object
var query = {}
query.Station = getParameterByName("Station");
query.Type = getParameterByName("Type");
query.Collapsible = getParameterByName("Collapsible");
query.Theme = getParameterByName("Theme");
query.Color = getParameterByName("Color");
query.Autoplay = getParameterByName("Autoplay");
query.Volume = getParameterByName("Volume");
query.Social = getParameterByName("Social");

//console.log("Decoded URL Queries:");
//console.log(query);

// To request the Data API
function requestDataAPI(url) {

    var xhr = new XMLHttpRequest()
    xhr.open("GET", "http://localhost:5000/tracks/" + url, true);
    xhr.send();
    
    xhr.onReadyStateChange(() => {
      
      apiResponse = JSON.parse(this.responseText);
      
    });
    
  }
}

// WIP
