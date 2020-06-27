const fetchData = require('../utils/fetchData');
const API_URL = "https://rickandmortyapi.com/api/character/";

fetchData(API_URL)
    .then(response => {
        console.log(response.info.count);

        return fetchData(`${ API_URL }${ response.results[0].id }`)
    })
    .then(data => {
        console.log(data.name);
        
        return fetchData(`${ data.origin.url }`);
    })
    .then(data => console.log(data.dimension))
    .catch(error => console.error(error))
    .finally(() => console.log("Process ended!"));