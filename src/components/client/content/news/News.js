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
    axios.get('http://localhost:5000/news/list/')
      .then(response => {
        this.setState({news:response.data})
        // console.log(response.data);
      })
      .catch(function (error){
        console.log(error +"loi ne");
      })
      //  const script = document.createElement("script");
      //  script.style="text/jsx"
      //  script.src='js/content.js';
      //  script.async=true;
      //  document.body.appendChild(script);
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
    //console.log(news+"aaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    return (
        <div className="news">
        <aside className="aside3">
          <div>
            <figure style={{background: '#fff', height: '38px'}}>
              <h2>
                <a href>Tin tức giáo dục</a> 
              </h2>
            </figure>
              {this.renderItem()}
            
          </div>
        </aside>
      </div>
    )
  }
}

export default News;
