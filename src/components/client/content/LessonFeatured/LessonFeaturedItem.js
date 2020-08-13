import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class LessonNewItem extends Component {
    render() {
 
        let {item,index} = this.props;
        return (
            <div className="boxProduct">
            <Link to={"/lession/detail/"+item._id}>
                 <img src={`https://cititechnodejs.herokuapp.com/${item.lessionContentImg}`} alt="not display" />
                {/* <h3>Tiêu đề</h3> */}
                <div className="destation">
                    {item.lessionContentTitle}
                </div>
            </Link>
            </div>
            

           
        )
    }
}
