const axios = require('axios')

require('dotenv').config()

axios.defaults.baseURL = 'https://www.eventbriteapi.com/v3/'
axios.defaults.params = { token: process.env.MYTOKEN }

axios
  .get('users/me')
  .then(res => console.log(res.data))
  .catch(error => console.log(error))
  
axios
  .get('users/me')
  .then(res => console.log(res.data.name))
  .catch(error => console.log(error))
