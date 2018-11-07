let fetch = require('isomorphic-unfetch')
require('dotenv').config()

let key = process.env.SERVER_KEY
let to =  browserGeneratedToken || ''


fetch('https://fcm.googleapis.com/fcm/send', {
  method: 'POST',
  headers: {
    Authorization: 'key=' + key,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    to: to,
    data: {
      notification: {
        title: 'Hello',
        body: 'World'
      }
    }
  })
})
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.error(error)
  })
