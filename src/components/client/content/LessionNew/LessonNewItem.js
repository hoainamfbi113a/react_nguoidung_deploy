import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class LessonNewItem extends Component {
    render() {
        let {item,index} = this.props;
        return (
           
            // <div>
            //      <Link to={"/lession/detail/"+item._id}>
            //      <ul className="banner0">
            //   <a href>
            //     <img src={`http://localhost:5000/${item.lessionContentImg}`} alt="Anh noi dung bai hoc" />
            //     <h3>{item.lessionContentTitle}</h3>
            //   </a>
            // </ul>
            // </Link>
            // </div>
            <ul className="banner0">
            <a href>
              <img src={`http://localhost:5000/${item.lessionContentImg}`} alt="" />
              <h3>{item.lessionContentTitle}</h3>
              {/* <span>19 phút trước</span> */}
            </a>
          </ul>
           
        )
    }
}