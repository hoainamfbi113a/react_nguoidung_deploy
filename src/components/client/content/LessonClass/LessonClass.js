import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class LessonClass extends Component {
    render() {
        return (
            <div className="inf-class">
            <Link to={"/lession/"+"lop1"}><img src="../img/imgs/lop1.jpg" alt="lop 1" /></Link>
            <Link to={"/lession/"+"lop2"}><img src="../img/imgs/lop2.jpg" alt="lop 2" /></Link>
            <Link to={"/lession/"+"lop3"}><img src="../img/imgs/lop3.jpg" alt="lop 3" /></Link>
            <Link to={"/lession/"+"lop4"}><img src="../img/imgs/lop4.jpg" alt="lop 4" /></Link>
            <Link to={"/lession/"+"lop5"}><img src="../img/imgs/lop5.jpg" alt="lop 5" /></Link>
          </div>
        )
    }
}

