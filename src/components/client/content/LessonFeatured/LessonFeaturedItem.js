import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class LessonNewItem extends Component {
    render() {
        let {item,index} = this.props;
        return (
            <div className="boxProduct">
                <img src={`http://localhost:5000/${item.lessionContentImg}`} alt="not display" />
                <h3>Tiêu đề</h3>
                <div className="destation">
                    {item.lessionContentTitle}
                </div>
            </div>
           
        )
    }
}
