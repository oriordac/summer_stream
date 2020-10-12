require('isomorphic-fetch');
const config = require('../config');

async function myFetch(data) {

    let response;
    api_root = config.API_POST_ROOT;

    response = await fetch(api_root, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    .catch(error => {
        console.log("found error:", error);
    })

    console.log(`${response.status}`);
}

module.exports = {
    myFetch
}