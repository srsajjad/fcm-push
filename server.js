let fetch = require('isomorphic-unfetch')
require('dotenv').config()

var to =
  'fIAp47PgPzw:APA91bHHtvSiKSvwMuXgyvUq_7Pz8DrMPnqwmzNCmNTlwgP8UKHMI19yakbw_Jw06Y3xAIG-mIVXpVr2m53J96SI99vLKst78P1oa6Mmt7UjhXA_gWrOtASl9Pw-W32Hk9e9jzM25rjV'
var key = process.env.SERVER_KEY


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
