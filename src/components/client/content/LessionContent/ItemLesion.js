import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styleLession.css';
export default class ItemLesion extends Component {
    render() {
        let {item} = this.props;
        console.log("item lession:",item )
        return (
            <div className="classLession">
                <div className="lessionItem">
                <Link to={"/lession/detail/"+item._id}>
               
                <div className="classItem">
                <img src={`http://localhost:5000/${item.lessionContentImg}`} alt="Anh noi dung bai hoc" />
                </div>
                <h3>{item.lessionContentTitle}</h3>
           
            </Link>
                </div>
                {/* <h1>Xin chao cau</h1> */}
            </div>
           
        )
    }
}
