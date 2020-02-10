import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom'
import Home from '../content/Home';
import Login from '../login/Login';
import Register from '../register/Register';
import Profile from '../profile/Profile';
import Dsdethi from '../Dsdethi/Dsdethi';
import Question from '../question/Question'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
     localStorage.usertoken
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)
class RouterURL extends Component {
  render() {
    return (
         <div>
             <Route exact path="/" component = {Home}></Route>
             <Route exact path="/login" component = {Login}></Route>
             <Route exact path="/register" component = {Register}></Route>
             <PrivateRoute exact path="/profile" component = {Profile}/>
             <PrivateRoute exact path="/exam" component = {Dsdethi}/>
             {/* <Route exact path="/examquestion" component = {Question}></Route> */}
             <PrivateRoute exact path="/examquestion/:id" component = {Question}/>
         </div>
    )
  }
}

export default RouterURL;
