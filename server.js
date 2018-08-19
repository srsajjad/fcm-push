let fetch = require('isomorphic-unfetch')
require('dotenv').config()

var key = process.env.SERVER_KEY

var to =
  'fW2qPKDF4DY:APA91bFpA7vvs3BiruyZJXt64VAwJyG5dANJ-C1Jq2YgEPR16DKiNEEJ2NfO1bYo4tAsH3ZNW29NcHxHHjogtKEFZ3VgjMUvg_pxmgfaYzfRalvrFgQl5mm0BmkP-w-N3wnOxPYpPXCY'
var notification = {
  title: 'Testing Push Notification',
  body: 'Fuck Yes'
}

fetch('https://fcm.googleapis.com/fcm/send', {
  method: 'POST',
  headers: {
    Authorization: 'key=' + key,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    notification: notification,
    to: to
  })
})
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.error(error)
  })
