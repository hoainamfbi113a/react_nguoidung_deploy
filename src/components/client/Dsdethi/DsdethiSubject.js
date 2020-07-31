import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
  fetchProfile() {
    axios.get('http://localhost:5000/admin/exam/list/'+this.props.match.params.subject)
        .then(response => {
            console.log(response.data);
            this.setState({persons: response.data});
        })
        .catch(function (error) {
            // console.log(error);
        })
  }
  componentDidUpdate(prevProps) {
  if (this.props.match.params.subject !== prevProps.match.params.subject) {
  // fetch or other component tasks necessary for rendering
    this.fetchProfile();
  }
  }
  componentDidMount(){
    this.fetchProfile()
  }
renderItem = () =>{
      
  let {items,idEdit,nameEdit,levelEdit,persons} = this.state; 
   console.log(persons);
   return (
    persons.map((item,index)=>{
       return(
         <Item key={item._id}  item={item} index={index}/>
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
