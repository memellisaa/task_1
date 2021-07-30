const axios = require('axios');
  
axios.delete('http://10.126.54.97:3000/subscribers/60ff81447b55ede69c0e96fe')
    .then((res) => {
        console.log(`Status: ${res.status}`);
    }).catch((err) => {
        console.error(err);
    });


// const request = require('request');
  
// const options = {
//     url: 'https://10.126.54.219:3000/60ee8be62658c55d332e38f3',
//     json: true
// };
  
// request.delete(options, (err, res, body) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(`Status: ${res.statusCode}`);
// });