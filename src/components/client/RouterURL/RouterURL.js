import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom'
import Home from '../content/Home';
import Login from '../login/Login';
import Register from '../register/Register';
import Profile from '../profile/Profile';
import Dsdethi from '../Dsdethi/Dsdethi';
import Dsdethisubject from '../Dsdethi/DsdethiSubject';
import Question from '../question/Question'
import LessionContent from '../content/LessionContent/LessionContent'
import LessionSubject from '../content/LessionContent/LessionSubject'
import LessionSubjects from '../content/LessionContent/LessionSubjects'
import LessionClass from '../content/LessonClass/LessonClass'
import LessionDetail from '../content/LessionContent/LessionDetails/LessionDetail'
import ListQuestionForum from '../content/forum/list_question_forum/ListQuestionForum';
import VideoLearning from '../content/video-learning/VideoLearning';
import AddQuestionForum from '../content/forum/add_question_forum/AddQuestionForum';

import NewsItemDetail from '../content/NewsItemDetail/NewsItemDetail';
// import ListQuestionForum from '../content/video-learning/ListQuestionForum';
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
             <Route exact path="/lession/:subject/:monhoc" component = {LessionSubject}></Route>
             <Route exact path="/lession/:subject" component = {LessionSubject}></Route>
             <Route exact path="/lessionclass/:subjects" component = {LessionSubjects}></Route>
             <Route exact path="/lessions" component = {LessionContent}></Route>
             <Route exact path="/lession/detail/:id" component = {LessionDetail}></Route>
             <Route exact path="/forumquestion" component = {ListQuestionForum}></Route>
             <PrivateRoute exact path="/profile" component = {Profile}/>
             <Route exact path="/exam" component = {Dsdethi}/>
             <Route exact path="/exam/:subject" component = {Dsdethisubject}/>
             <Route exact path="/news-item/:id" component = {NewsItemDetail}/>
             {/* <Route exact path="/examquestion" component = {Question}></Route> */}
             <PrivateRoute exact path="/examquestion/:id" component = {Question}/>

             <Route exact path="/videolearning/:subject" component = {VideoLearning}/>
             <PrivateRoute exact path="/ForumQuestion/add" component = {AddQuestionForum}/>
             {/* <PrivateRoute exact path="/ForumQuestion/ans/:id_question" component = {AddQuestionForum}/> */}
         </div>
    )
  }
}

export default RouterURL;
