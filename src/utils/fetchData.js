const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = apiUrl => new Promise((resolve, reject) => {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', apiUrl, true);
    xhttp.onreadystatechange = function() { 
        if( xhttp.readyState == 4 ) {
            if( xhttp.status == 200 ) {
                resolve( JSON.parse(xhttp.responseText) );
                
            } else {
                reject( new Error(`An error has occurred!\nURL: ${ apiUrl }`) );
            }
        }
    };

    xhttp.send();
});

module.exports = fetchData;