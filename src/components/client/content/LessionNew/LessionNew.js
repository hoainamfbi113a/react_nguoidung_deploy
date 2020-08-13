import React, { Component } from 'react'
import LessonNewItem from "./LessonNewItem";
import axios from 'axios';
export default class LessionNew extends Component {
    constructor(props){
        super(props)
        this.state={
          news:[]
        }
      }
      componentDidMount =() =>
      {
        axios.get('https://cititechnodejs.herokuapp.com/client/lesson/list3/')
          .then(response => {
            this.setState({news:response.data})
          })
          .catch(function (error){
            console.log(error +"loi ne");
          })
      }
      renderItem=()=>{
        let{news}=this.state;
        return(
          news.map((item,index)=>{
            return(
              <LessonNewItem key={item._id} item={item} index={index}></LessonNewItem>
            )
          })
        )
      }
    render() {
        return (
            <aside className="aside2">
            <div>
              <figure style={{background: '#fff', height: '38px'}}>
                <h2>
                  <a href>Các bài giảng mới</a> 
                </h2>
              </figure>
             {this.renderItem()}
            </div>
          </aside>
        )
    }
}
