// var fullUrl = 'http://10.126.54.219:3000/60ee8bcf2658c55d332e38f1' + encodeURI(options.nodeId);
// var body = JSON.stringify(options.body);
// request.patch({ 'http://10.126.54.219:3000/60ee8bcf2658c55d332e38f1', body: body }, function (err, res, body) {
//   // do your thing
// })

const axios = require('axios')

const res =  axios
                .patch('http://10.126.54.97:3000/subscribers/60ff81447b55ede69c0e96fe', { 
                    name: 'Henry',
                    subscribedToChannel: 'LGBT+'
                })
                .then(res => {
                    console.log(`statusCode: ${res.statusCode}`)
                    console.log(res)
                })
                .catch(error => {
                    console.error(error)
                })

// axios
//   .post('http://10.126.54.219:3000', {
//     name: 'Abdul',
//     age: '19',
//     gender: 'unknown'
//   })
//   .then(res => {
//     console.log(`statusCode: ${res.statusCode}`)
//     console.log(res)
//   })
//   .catch(error => {
//     console.error(error)
//   })
  

// res.data.headers['Content-Type'];