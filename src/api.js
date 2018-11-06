const axios = require('axios')

require('dotenv').config()
const MYTOKEN = process.env.MYTOKEN

// axios
//   .get('https://www.eventbriteapi.com/v3/users/me/', {
//     params: {
//       token: MYTOKEN
//     }
//   })
//   .then(res => console.log(res.data))
//   .catch(error => console.log(error))


  axios
  .get('https://www.eventbriteapi.com/v3/users/me/owned_events', {
    params: {
      token: MYTOKEN
    }
  })
  .then(res => console.log(res.data))
  .catch(error => console.log(error))
