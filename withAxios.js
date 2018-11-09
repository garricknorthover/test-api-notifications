const axios = require('axios')

require('dotenv').config()
const MYTOKEN = process.env.MYTOKEN

axios.defaults.baseURL = 'https://www.eventbriteapi.com/v3'
axios.defaults.params = {
  token: MYTOKEN
}

axios
  .get('/users/me')
  .then(res => res.data)
  .then(data => console.log(data))
  .catch(err => console.error(err))
