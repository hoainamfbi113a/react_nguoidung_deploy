import React, { Component } from 'react';
import { Link} from "react-router-dom";

class NewsItem extends Component {
    render() {
        let {item,index}=this.props;
        return (
            <ul className="banner0">
            <a href>
              <img src={`http://localhost:5000/${item.images}`} alt="" />
              <h3>{item.title}</h3>
              {/* <span>19 phút trước</span> */}
            </a>
          </ul>
        );
    }
}

export default NewsItem;