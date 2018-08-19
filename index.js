let fetch = require('isomorphic-unfetch');

var key = 'AAAA7RW2J6o:APA91bEe8Ulj6Qxc26tlBwZmfn8k9y_erS2KfzWmygeyp2aTAdUXLGsxvEZ0ZoOcCBXtOhXOVgsq3RrdwjtvOwo8TvU5wbvZcUnaDmo1Kml9syAqZDiCu6L_6a2sJCkFv3enpZBGlAfNYCgsP1DBBh_OgetMDUhigw';
var to = 'fMGNs1587wA:APA91bGzbUUn4rf7jymnjb63n2WH8yO1vyilK_eNsZtphhIphWrofZcQnjYkzD38yOMIhYVDMmwf2r_C7H4mNHpfvKbvus8e_wOUoMxxPQXB8sgRyuAe9EDUQLSIjqDFSAshsL8oCrn4';
var notification = {
  title: 'Testing Push Notification',
  body: 'Fuck Yes'
};
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
}).then(function (response) {
  console.log(response);
}).catch(function (error) {
  console.error(error);
});
