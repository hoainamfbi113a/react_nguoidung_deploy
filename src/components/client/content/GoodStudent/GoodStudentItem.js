import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import { Route } from 'react-router-dom';
import  "./style.css";
class NewsItem extends Component {
    render() {
        let {item,index}=this.props;
        return (
          // <ul className="banner0">
              <NavLink onClick={() => {}} to="/">
            {/* <a href> */}
              <img className="img-good-student" src={`http://localhost:5000/${item.images}`} alt="" />
              {/* <span>19 phút trước</span> */}
            {/* </a> */}
            <h3>{item.title}</h3>
            </NavLink>
          // </ul>
        );
    }
}

export default NewsItem;