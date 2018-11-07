import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import registerServiceWorker from './registerServiceWorker'
import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyArZVVeM70eUDt_FMEgjWgiE1FBtWXi-P4',
  authDomain: 'notify-me-97726.firebaseapp.com',
  databaseURL: 'https://notify-me-97726.firebaseio.com',
  projectId: 'notify-me-97726',
  storageBucket: 'notify-me-97726.appspot.com',
  messagingSenderId: '1018271508394'
}

// var config = {
//   apiKey: "AIzaSyB9JYbMCo8fEeVrFELJ6BP9jIcRnXrr2Qg",
//   authDomain: "shophobetest.firebaseapp.com",
//   databaseURL: "https://shophobetest.firebaseio.com",
//   projectId: "shophobetest",
//   storageBucket: "shophobetest.appspot.com",
//   messagingSenderId: "235304038910"
// }


firebase.initializeApp(config)
;(async function () {
  try {
    let messaging = firebase.messaging()
    await messaging.requestPermission()
    console.log('have permission')
    let token = await messaging.getToken()
    console.log('token', token)
    messaging.onMessage(payload => console.log('payload', payload))
  } catch (e) {
    console.log('error occured', e)
  }
})()

ReactDOM.render(<App firebase={firebase} />, document.getElementById('root'))
// registerServiceWorker()
