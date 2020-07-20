import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { homedir } from 'os';
class Home extends Component {
  render() {
    let {item,index} = this.props;
    return (
      <div style={{marginRight: '50px'}} className="news">
      <aside style={{marginRight: '50px'}} className="aside3">
        <div>
          <ul className="banner0">
          <Link to={"/examquestion/"+item.examName} style={{marginLeft: '200px'}}><img src="../img/images/imgnew.png" alt="" />
              <h3>{item.examName}</h3><span></span></Link>
          </ul>
        </div>
      </aside>
    </div>
    )
  }
}

export default Home;
