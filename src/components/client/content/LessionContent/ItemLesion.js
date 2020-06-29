import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class ItemLesion extends Component {
    render() {
        let {item,index} = this.props;
        return (
           
            <div>
                 <Link to={"/lession/"+item._id}>
                 <ul className="banner0">
              <a href>
                <img src={item.lessionContentImg} alt="Anh noi dung bai hoc" />
                <h3>{item.lessionContentTitle}aaaaaa</h3>
                {/* <span>19 phút trước</span> */}
              </a>
            </ul>
            </Link>
            </div>
           
        )
    }
}
