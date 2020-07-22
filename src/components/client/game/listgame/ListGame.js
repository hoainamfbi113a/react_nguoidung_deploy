import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { homedir } from 'os';
import jwt_decode from 'jwt-decode'
import Item from './DsdeNewsItem'
import axios from 'axios';
class DsNews extends Component {
  constructor(props){
    super(props)
    this.state = {
      showAlert:false,
      idAlert:"",
      listquestionGame:[],
      refresh:true
    }
  }
  componentDidMount(){
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)//giai ma token
    axios.get('http://localhost:5000/admin/game/list/')
        .then(response => {
            this.setState({listquestionGame: response.data});
        })
        .catch(function (error) {
        })
}
renderItem = () =>{
  let questionGameCategory = [];
  let {listquestionGame} = this.state;
    for(var i=0 ;i< listquestionGame.length;i++)  {
        if(listquestionGame.categoryvocabulary) {
        }
    }  
//    console.log(listquestionGame);
//    return (
//     listquestion.map((item,index)=>{
//        return(
//          <Item key={item._id}  item={item} index={index}  handleShowAlert={this.handleShowAlert}  handleEditItem = {this.handleEditItem}/>
//        )
//      })
//    )
}
  render() {
    return (
      <div className="news">
      <aside className="aside3">
        <div>
          <figure style={{background: 'rgb(255, 255, 255)', height: '38px'}}>
            <h2><a>Danh sách tin tức</a></h2></figure>
            {this.renderItem()}
        </div>
      </aside>
    </div>
    )
  }
}

export default DsNews;
