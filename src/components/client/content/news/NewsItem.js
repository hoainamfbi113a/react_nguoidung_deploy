import React, { Component } from 'react';
import { Link} from "react-router-dom";

class NewsItem extends Component {
    render() {
        let {item,index}=this.props;
        return (
            <ul className="banner0">
              <a href>
                <img src="../img/imgs//tintuc1.jpg" alt="" />
                <h3>{item.title}</h3>
                <span>{item.timeUpdate}</span>
              </a>
            </ul>
        );
    }
}

export default NewsItem;