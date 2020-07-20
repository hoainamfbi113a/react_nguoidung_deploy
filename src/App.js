import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import RouterURL from './components/client/RouterURL/RouterURL';
import HeaderNav from './components/client/header/HeaderNav';
import Foot from './components/client/footer/Foot';
class App extends Component {
  
  render() {
    return (
      <Router>
      <div>
        <div className="web_content">
          <HeaderNav></HeaderNav>
          <RouterURL></RouterURL>
          <Foot></Foot>
        </div>
      </div>
      </Router>
    )
  }
}

export default App
