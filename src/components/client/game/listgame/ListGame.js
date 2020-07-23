import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { homedir } from 'os';
import jwt_decode from 'jwt-decode'
import axios from 'axios';
class DsNews extends Component {
  constructor(props){
    super(props)
    this.state = {
      showAlert:false,
      idAlert:"",
      listquestionGame:[],
      refresh:true
    }
  }
  componentDidMount(){
    // const token = localStorage.usertoken
    // const decoded = jwt_decode(token)//giai ma token
    axios.get('http://localhost:5000/admin/game/list/')
        .then(response => {
            this.setState({listquestionGame: response.data});
        })
        .catch(function (error) {
        })
}
renderItem = () =>{
  // let questionGameCategory = [];
  let {listquestionGame} = this.state;
    for(var i=0 ;i< listquestionGame.length;i++)  {
        if(listquestionGame.categoryvocabulary) {
        }
    }  
}
  render() {
    return (
      <div className="news">
      <aside className="aside3">
        <div>
          <figure style={{background: 'rgb(255, 255, 255)', height: '38px'}}>
            <h2><a>Danh sách trò chơi</a></h2></figure>
                    <div style={{marginRight: '50px'}} className="news">
              <aside style={{marginRight: '50px'}} className="aside3">
                <div>
                  <ul className="banner0">
                  <Link to={"/gamequestion/"+"con nguoi"} style={{marginLeft: '200px'}}><img src="../img/images/imgnew.png" alt="" />
                      <h3>con người</h3><span></span></Link>
                  </ul>
                </div>
              </aside>
            </div>
                    <div style={{marginRight: '50px'}} className="news">
              <aside style={{marginRight: '50px'}} className="aside3">
                <div>
                  <ul className="banner0">
                  <Link to={"/gamequestion/"+"thien nhien"} style={{marginLeft: '200px'}}><img src="../img/images/imgnew.png" alt="" />
                      <h3>thiên nhiên</h3><span></span></Link>
                  </ul>
                </div>
              </aside>
            </div>
                    <div style={{marginRight: '50px'}} className="news">
              <aside style={{marginRight: '50px'}} className="aside3">
                <div>
                  <ul className="banner0">
                  <Link to={"/gamequestion/"+"hoa qua"} style={{marginLeft: '200px'}}><img src="../img/images/imgnew.png" alt="" />
                      <h3>hoa quả</h3><span></span></Link>
                  </ul>
                </div>
              </aside>
            </div>
        </div>
      </aside>
    </div>
    )
  }
}

export default DsNews;
