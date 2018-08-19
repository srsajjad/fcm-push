import React, { Component } from 'react'
// import firebase from 'firebase'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    // let messaging = firebase.messaging()
    // messaging.onMessage(msg => console.log('message received', msg))
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Open The Browser Console For More Info</h1>
      </div>
    )
  }
}

export default App
