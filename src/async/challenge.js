const fetchData = require('../utils/fetchData')
const API_URL = "https://rickandmortyapi.com/api/character/"

const run = async () => {
    try {
        const data = await fetchData(API_URL)
        const character = await fetchData(`${ API_URL }${ data.results[0].id }`)
        const origin = await fetchData(character.origin.url)

        console.log( data.info.count )
        console.log( character.name )
        console.log( origin.dimension )
        
    } catch (error) {
        console.error(error)
    }
}

run()