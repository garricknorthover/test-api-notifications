require('dotenv').config()
const fetch = require('node-fetch')

fetch('https://www.eventbriteapi.com/v3/users/me?token=' + process.env.MYTOKEN)
  .then(res => res.json())
  .then(data => console.log(data))