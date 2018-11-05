## Testing Eventbrite API

Once you get Heroku set up on your machine, you can get the token into your .env file with this command
```
heroku config:get -s MYTOKEN >> .env
```

```javascript
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
```

@babel/register package is installed so you can use Quokka