import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../Home'
import Login from '../Login'
import Register from '../Register'
import Profile from '../Profile'
import Question from '../Question'
class RouterURL extends Component {
  render() {
    return (
         <div>
             <Route exact path="/" component = {Home}></Route>
             <Route exact path="/login" component = {Login}></Route>
             <Route exact path="/register" component = {Register}></Route>
             <Route exact path="/profile" component = {Profile}></Route>
             <Route exact path="/exam" component = {Question}></Route>
         </div>
    )
  }
}

export default RouterURL;
