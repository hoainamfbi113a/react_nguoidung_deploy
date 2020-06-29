import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { homedir } from 'os';
import jwt_decode from 'jwt-decode'
import Item from './DsdethiItem'
import axios from 'axios';
class Dsdethi extends Component {
  constructor(props){
    super(props)
    this.state = {
      showAlert:false,
      idAlert:"",
      persons:[],
      refresh:true
    }
  }
  componentDidMount(){
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)//giai ma token
    // console.log(decoded)
    // alert(decoded.memberClassId)
    // memberid: decoded.memberLogin
    axios.get('http://localhost:5000/admin/exam/list/'+decoded.memberClassId)
        .then(response => {
            // console.log(response.data);
            this.setState({persons: response.data});
        })
        .catch(function (error) {
            // console.log(error);
        })
        const script = document.createElement("script");
        script.style="text/jsx"
        script.src='js/content.js';
        script.async = true;
        document.body.appendChild(script);
}
renderItem = () =>{
      
  let {items,idEdit,nameEdit,levelEdit,persons} = this.state; 
   console.log(persons);
   return (
    persons.map((item,index)=>{
       return(
         <Item key={item._id}  item={item} index={index}  handleShowAlert={this.handleShowAlert}  handleEditItem = {this.handleEditItem}/>
       )
     })
   )
}
  render() {
    return (
      <div className="news">
      <aside className="aside3">
        <div>
          <figure style={{background: 'rgb(255, 255, 255)', height: '38px'}}>
            <h2><a>Danh sách đề thi</a></h2></figure>
            {this.renderItem()}
        </div>
      </aside>
    </div>
    )
  }
}

export default Dsdethi;
