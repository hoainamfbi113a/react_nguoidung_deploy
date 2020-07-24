import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import '../LessonCl';
export default class VideoLearningItem extends Component {
    render() {
        let {item} = this.props;
        console.log("item lession:",item )
        return (
            <div className="classLession">
                <div className="lessionItem">
                <Link to={"/videolearning/detail/"+item._id}>
               
                <div className="classItem">
                {/* <img src={`http://localhost:5000/${item.lessionContentImg}`} alt="Anh noi dung bai hoc" /> */}
                </div>
                <div className="textLesson">
                    <h3>{item.videoContentTitle}</h3>
                </div>
           
            </Link>
                </div>
                {/* <h1>Xin chao cau</h1> */}
            </div>
           
        )
    }
}
