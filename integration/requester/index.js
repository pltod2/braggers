//FACADE TO ISOLATE THE MECHANISM OF TALKING TO HTTP SERVICE
//COULD BE FETCH / REUQEST / SUPERAGENT 

import 'isomorphic-fetch';
const serverLocation = 'http://localhost:8000/';

module.exports = {
    get: get,
    post: post
}

async function get(resourceLocation) {
    const res = await fetch(serverLocation + resourceLocation); 
    return await res.json();
}

async function post(resourceLocation, body) {
    const res = await fetch(serverLocation + resourceLocation, {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, text/html',
        'Content-Type': 'application/json; charset=utf-8'
      },      
      body: JSON.stringify(body)        
    }); 
    return await res.json();
}
