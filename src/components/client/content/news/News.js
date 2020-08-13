import React, { Component } from 'react'
import axios from 'axios';
import NewsItem from './NewsItem';

class News extends Component {
  constructor(props){
    super(props)
    this.state={
      news:[]
    }
  }
  componentDidMount =() =>
  {
    axios.get('https://cititechnodejs.herokuapp.com/client/news/listneweducation')
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
          <NewsItem key={item._id} item={item} index={index}></NewsItem>
        )
      })
    )
  }
  render() {
    let {news}=this.state;
    return (
        <div className="news">
        <aside className="aside3">
          <div  style={{display: 'flex',flexDirection: 'column'}}>
            <figure style={{background: '#fff', height: '38px'}}>
              <h2>
                <a href>Tin tức giáo dục</a> 
              </h2>
            </figure>
              {this.renderItem()}
              {/* {this.renderItem()} */}
             
          </div>
        </aside>
      </div>
    )
  }
}

export default News;
