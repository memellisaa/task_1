const axios = require('axios')

axios
  .post('http://10.126.54.97:3000/subscribers', {
    name: 'Abdul',
    subscribedToChannel: 'Preface'
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })



//   http://10.126.54.219:3000