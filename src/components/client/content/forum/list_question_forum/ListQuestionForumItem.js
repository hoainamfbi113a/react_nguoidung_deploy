import React, { Component } from 'react';
import { Link} from "react-router-dom";

class ListQuestionForumItem extends Component {
    render() {
        let {item,index}=this.props;
        return (
            <ul className="banner0">
            <a href>
              {/* <img src={`http://localhost:5000/${item.images}`} alt="" /> */}
              <h3>{item._id}</h3>
              {/* <span>19 phút trước</span> */}
            </a>
          </ul>
        );
    }
}

export default ListQuestionForumItem;