import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class LessonClass extends Component {
    render() {
        return (
            <div className="inf-class">
                <div className="class">
                <div className="toan1">
                    <Link to={"/lession/"+"lop1/"+"toan1"}><img src="../img/imgs/toan1.png" alt="lop 1" /></Link>
                </div>
                <div className="anh1">
                    <Link to={"/lession/"+"lop1/"+"anh1"}><img src="../img/imgs/anh1.png" alt="lop 1" /></Link>
                </div>
                <div className="toan1">
                    <Link to={"/lession/"+"lop2/"+"toan2"}><img src="../img/imgs/toan2.png" alt="lop 2" /></Link>
                </div>
                <div className="anh1">
                    <Link to={"/lession/"+"lop2/"+"anh2"}><img src="../img/imgs/anh2.png" alt="lop 2" /></Link>
                </div>
                <div className="toan1">
                    <Link to={"/lession/"+"lop3/"+"toan3"}><img src="../img/imgs/toan3.png" alt="lop 3" /></Link>
                </div>
                <div className="anh1">
                    <Link to={"/lession/"+"lop3/"+"anh3"}><img src="../img/imgs/anh3.png" alt="lop 3" /></Link>
                </div>
                <div className="toan1">
                    <Link to={"/lession/"+"lop4/"+"toan4"}><img src="../img/imgs/toan4.png" alt="lop 4" /></Link>
                </div>
                <div className="anh1">
                    <Link to={"/lession/"+"lop4/"+"anh4"}><img src="../img/imgs/anh4.png" alt="lop 4" /></Link>
                </div>
                <div className="toan1">
                    <Link to={"/lession/"+"lop5/"+"toan5"}><img src="../img/imgs/toan5.png" alt="lop 5" /></Link>
                </div>
                <div className="anh1">
                    <Link to={"/lession/"+"lop5/"+"anh5"}><img src="../img/imgs/anh5.png" alt="lop 5" /></Link>
                </div>
                </div>
          </div>
        )
    }
}

