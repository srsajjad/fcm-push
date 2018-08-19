// import firebase from 'firebase'

importScripts('https://www.gstatic.com/firebasejs/5.4.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/5.4.0/firebase-messaging.js')

var config = {
  apiKey: 'AIzaSyArZVVeM70eUDt_FMEgjWgiE1FBtWXi-P4',
  authDomain: 'notify-me-97726.firebaseapp.com',
  databaseURL: 'https://notify-me-97726.firebaseio.com',
  projectId: 'notify-me-97726',
  storageBucket: 'notify-me-97726.appspot.com',
  messagingSenderId: '1018271508394'
}
firebase.initializeApp(config)

const messaging = firebase.messaging()
messaging.setBackgroundMessageHandler(payload => {
  const title = 'Hello World'
  const options = {
    body: payload.data.status
  }
  return self.registration.showNotification(title, options)
})
