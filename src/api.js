import axios from 'axios'
require('dotenv').config()
const MYTOKEN = process.env.MYTOKEN

axios
  .get('https://www.eventbriteapi.com/v3/users/me/', {
    params: {
      token: MYTOKEN
    }
  })
  .then(res => console.log(res.data))
  .catch(error => console.log(error))
