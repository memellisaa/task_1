const axios = require('axios')

axios
  .post('http://10.126.62.58:3000/users', {
    name: 'Abdul',
    age: 50,
    gender: 'non-binary'
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })



//   http://10.126.54.219:3000