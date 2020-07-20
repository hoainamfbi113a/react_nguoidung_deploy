import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";

class NewsItem extends Component {
    render() {
        let {item,index}=this.props;
        return (
            <NavLink to={`/news-item/${item._id}`}>
              <ul className="banner0">
                <a href>
                  <img src="../img/imgs//tintuc1.jpg" alt="" />
                  <h3>{item.title}</h3>
                  <span>{item.timeUpdate}</span>
                </a>
              </ul>
            </NavLink>
        );
    }
}

export default NewsItem;