// import firebase from '

importScripts('https://www.gstatic.com/firebasejs/5.4.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/5.4.0/firebase-messaging.js')

var config = {
}
firebase.initializeApp(config)

const messaging = firebase.messaging()

// console.log('window', window)

messaging.setBackgroundMessageHandler(payload => {
  // console.log('payload', payload)
  let data = JSON.parse(payload.data.notification)
  // console.log('data', data)
  let dataBody = data.body
  const title = 'Hello There!'
  const options = {
    body: dataBody,
    icon: 'logo128.png',
    actions: [
      {
        action: 'Order',
        title: 'New Order',
        icon: 'logo128.png'
      }
    ]
  }

  self.registration.showNotification(title, options)
  // return self.registration.showNotification(title, options)
})

self.addEventListener('notificationclick', function (event) {
  event.notification.close()

  event.waitUntil(
    clients
      .matchAll({
        type: 'window'
      })
      .then(function (clientList) {
        for (var i = 0; i < clientList.length; i++) {
          var client = clientList[i]
          if (client.url == '/' && 'focus' in client) return client.focus()
        }
        if (clients.openWindow) {
          return clients.openWindow('/admin/orders')
        }
      })
  )
})
