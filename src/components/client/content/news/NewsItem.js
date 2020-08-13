import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";

class NewsItem extends Component {
    render() {
        let {item,index}=this.props;
        return (
            <NavLink to={`/news-item/${item._id}`}>
              <ul className="banner0">
                <a href>
                  {/* <img src={item.images}></img> */}
                  <img src={`https://cititechnodejs.herokuapp.com/${item.images}`} alt="not display" />
                  <h3>{item.title}</h3>
                  <span>{item.timeUpdate}</span>
                </a>
              </ul>
            </NavLink>
        );
    }
}

export default NewsItem;