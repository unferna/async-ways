const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API_URL = "https://rickandmortyapi.com/api/character/"

function fetchData(apiUrl, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', apiUrl, true);
    xhttp.onreadystatechange = function() { 
        if( xhttp.readyState == 4 ) {
            if( xhttp.status == 200 ) {
                callback(null, JSON.parse(xhttp.responseText));
                
            } else {
                return callback(new Error("An error has occurred!"), null);
            }
        }
    };

    xhttp.send()
}

function responseHandler(err, data) {
    if(err) console.log(err);

    fetchData(API_URL + data.results[0].id, function(err2, data2) {
        if(err2) console.log(err2);

        fetchData(data2.origin.url, function(err3, data3) {
            if(err3) console.log(err3);

            console.log(data.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    });
}

fetchData(API_URL, responseHandler)