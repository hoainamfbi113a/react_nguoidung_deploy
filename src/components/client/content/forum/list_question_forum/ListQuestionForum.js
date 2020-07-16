import React, { Component } from 'react'
import axios from 'axios';
import ListQuestionForumItem from './ListQuestionForumItem';

class ListQuestionForum extends Component {
  constructor(props){
    super(props)
    this.state={
      questionForum:[]
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
    console.log(questionForum)
    return(
        questionForum.map((item,index)=>{
        return(
          <ListQuestionForumItem key={item._id} item={item} index={index}></ListQuestionForumItem>
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
            <a href>Học sinh tiêu biểu</a> 
          </h2>
        </figure>
        {this.renderItem()}
      </div>
    </aside>
  </div>

    )
  }
}
export default ListQuestionForum;
