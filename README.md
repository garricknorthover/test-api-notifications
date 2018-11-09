## Testing Ticketing APIs

after cloning repo and having setup Heroku, you can add the Heroku remote
```
heroku git:remote -a fierce-wave-30199
```

Here's the Heroku setup docs for node apps
https://devcenter.heroku.com/articles/getting-started-with-nodejs

Once you get Heroku set up on your machine, you can get the token into your .env file with this command
```
heroku config:get -s MYTOKEN >> .env
```
If you console log requests using  ```node ---filename--.js```, 
it will need to know where the .env file is located or have the .env in the same folder

remember to add .env to your gitignore

The Heroku app is linked to the github repo
Which means updating the repo pushes changes to the Heroku app


This is a basic request

```javascript
const axios = require('axios')

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
```

And as I just learned 5 minutes ago, you can configure you requests with defaults.
```javascript
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
```

and with node-fetch
```javascript
require('dotenv').config()
const fetch = require('node-fetch')

fetch('https://www.eventbriteapi.com/v3/users/me?token=' + process.env.MYTOKEN)
  .then(res => res.json())
  .then(data => console.log(data))

```
