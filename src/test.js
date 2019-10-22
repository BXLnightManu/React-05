const { default: axios } = require('axios');

axios("https://randomuser.me/api?nat=fr")
    .then(result => console.log(typeof result.data.results[0].gender))
    .catch(err => console.error(err));