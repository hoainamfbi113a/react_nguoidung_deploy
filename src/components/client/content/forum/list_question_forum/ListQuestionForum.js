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
      currentPage: 1,
      newsPerPage: 4,
      filterlist:"",
    }
  }
  componentDidMount =() =>
  {
    axios.get('https://cititechnodejs.herokuapp.com/client/forumquestion/list/')
      .then(response => {
        this.setState({questionForum:response.data})
      })
      .catch(function (error){
        console.log(error +"loi ne");
      })
  }
  chosePage = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  select = (event) => {
    this.setState({
      newsPerPage: event.target.value
    })
  }
  filterList = (event) => {
    this.setState({
      filterlist: event.target.value
    })
  }
  render() {
    let{questionForum}=this.state;
    let filterList = this.state.filterlist;
    questionForum = questionForum.filter(function(item) {
        return item.titleForumQuestion && item.titleForumQuestion.toLowerCase().search(filterList.toLowerCase()) !== -1;
      });
    const currentPage = this.state.currentPage;
    const newsPerPage = this.state.newsPerPage;
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentTodos = questionForum.slice(indexOfFirstNews, indexOfLastNews);
    const renderTodos = currentTodos.map((todo, index) => {
      return <ListQuestionForumItem stt={index + 1 + (currentPage - 1)*newsPerPage} key={index} item={todo} id_question={todo._id} />;
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(questionForum.length / newsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
    <div className="hstieubieucuanuoc">
    <aside className="aside2">
      <div>
        <figure className="list-forum-list-add" style={{background: '#fff', height: '38px'}}>
          <h2>
            <a href>DANH SÁCH CÂU HỎI</a> 
          </h2>
          <div className="wrap">
                  <Link to="ForumQuestion/add"><button className="button"><i />Thêm câu hỏi diễn đàn</button></Link>
          </div>
        </figure>
        {renderTodos}
        
       
      </div>
      <div className="pagination-custom">
                  <ul id="page-numbers">
                    {
                      pageNumbers.map(number => {
                        if (this.state.currentPage === number) {
                          return (
                            <li key={number} id={number} className="active">
                              {number}
                            </li>
                          )
                        }
                        else {
                          return (
                            <li key={number} id={number} onClick={this.chosePage} >
                              {number}
                            </li>
                          )
                        }
                      })
                    }
                  </ul>
                </div>
    </aside>
  </div>
    )
  }
}
export default ListQuestionForum;
