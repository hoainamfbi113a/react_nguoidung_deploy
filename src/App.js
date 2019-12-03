import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import RouterURL from './components/RouterURL/RouterURL'
import Nav1 from './components/Nav/Nav1'
import Foot from './components/Foot/Foot'
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <div className="web_content">
          <Nav1></Nav1>
          <RouterURL></RouterURL>

        
          <Foot></Foot>
        </div>
      </div>
      </Router>
    )
  }
}

export default App
