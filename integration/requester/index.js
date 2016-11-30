//FACADE TO ISOLATE THE MECHANISM OF TALKING TO HTTP SERVICE
//COULD BE FETCH / REUQEST / SUPERAGENT 

import 'isomorphic-fetch';

module.exports = {
    get: get
}

const serverLocation = 'http://localhost:8000/';

async function get(resourceLocation) {
    const res = await fetch(serverLocation + resourceLocation); 
    return await res.json();
}
