import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { homedir } from 'os';
import jwt_decode from 'jwt-decode'
import Item from './ItemLesion'
import axios from 'axios';
class DSLession extends Component {
  constructor(props){
    super(props)
    this.state = {
      showAlert:false,
      idAlert:"",
      classSubject:[],
      persons:[],
      refresh:true
    }
  }
  componentDidMount(){
    axios.get('http://localhost:5000/admin/classsubject/list/')
        .then(response => {
            // console.log(response.data);
            this.setState({classSubject: response.data});
        })
        .catch(function (error) {

        })
    axios.get('http://localhost:5000/admin/lession/list/')
        .then(response => {
            // console.log(response.data)
            this.setState({persons: response.data});
        })
        .catch(function (error) {

        })
}
renderItem = (classSubject) =>{
      let {persons} = this.state;
           return persons.filter(item => item.lessionContentSubjects==classSubject).map((item,index)=>{
              return(
                <Item key={item._id}  item={item} index={index}/>
              )
            })
}
  render() {
    return (
      <div className="news">
        <aside className="aside3">
          <div>
            <figure style={{background: 'rgb(255, 255, 255)', height: '38px'}}>
              <h2><a>Danh sách bài học</a></h2></figure>
              {this.state.classSubject.map((item,index)=>{
             return (  <div>
                            <h3>môn học: {item.classSubjectName} </h3>
                            {this.renderItem(item.classSubjectName)}
                        </div>
                    )
              })}
          </div>
        </aside>
    </div>
    )
  }
}

export default DSLession;
