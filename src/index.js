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
firebase.initializeApp(config)
;(async function () {
  try {
    let messaging = firebase.messaging()
    let reg = await window.navigator.serviceWorker.register('sw.js')
    // console.log('registration object', reg)
    messaging.useServiceWorker(reg)
    await messaging.requestPermission()
    console.log('Permission Granted')
    let token = await messaging.getToken()
    console.log('generated token', token)
    messaging.onMessage(payload => console.log('got payload', payload))
  } catch (e) {
    console.log('error occured', e)
  }
})()

ReactDOM.render(<App firebase={firebase} />, document.getElementById('root'))
// registerServiceWorker()
