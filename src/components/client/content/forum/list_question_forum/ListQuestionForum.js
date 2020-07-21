import React, { Component } from 'react'
import axios from 'axios';

import ListQuestionForumItem from './ListQuestionForumItem';
import  "./style.css";
import { Link } from 'react-router-dom'
class ListQuestionForum extends Component {
  constructor(props){
    super(props)
    this.state={
      questionForum:[],
      isShowAns:false,
      active: false,
    }
  }
  componentDidMount =() =>
  {
    axios.get('http://localhost:5000/client/forumquestion/list/')
      .then(response => {
        this.setState({questionForum:response.data})
      })
      .catch(function (error){
        console.log(error +"loi ne");
      })
  }
  
  renderItem=()=>{
    let{questionForum}=this.state;
    // console.log(questionForum)
    return(
        questionForum.map((item,index)=>{
        return(
          <ListQuestionForumItem id_question={item._id} key={item._id} item={item} index={index}></ListQuestionForumItem>
        )
      })
    )
  }
  render() {
    return (
    <div className="hstieubieucuanuoc">
    <aside className="aside2">
      <div>
        <figure style={{background: '#fff', height: '38px'}}>
          <h2>
            <a href>Danh sach cau hoi</a> 
          </h2>
          <div className="box-header">
                  <Link to="ForumQuestion/add"><button className="btn btn-primary"><i className="fa fa-fw fa-home" />Thêm câu hỏi diễn đàn</button></Link>
          </div>
        </figure>
        {/* {this.renderEditor()} */}
        {/* <h1>Xin chao cau</h1> */}
        {this.renderItem()}
        
       
      </div>
    </aside>
  </div>
    )
  }
}
export default ListQuestionForum;
