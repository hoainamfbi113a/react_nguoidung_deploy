import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import FacebookLogin from 'react-facebook-login';
// import ItemLesion from './ItemLesion';
import axios from 'axios';
import "./style.css"
 class HeaderNav extends Component {
  constructor(props) {//khởi tạo giá trị
    super(props)
    this.state = {
      classObject: [],
      keywordSearch:""
    }
  }
  componentDidMount =() =>
      {
        axios.get('http://localhost:5000/admin/classsubject/list/')
          .then(response => {
            this.setState({classObject:response.data})
          })
          .catch(function (error){
            console.log(error +"loi ne");
          })
  }
  renderClass = (url) =>{
    let{classObject}=this.state;
    return ( <div class="Menu-list-item-sub">
                <div class="Menu-list-item-sub-list">
                  <div class="Menu-list-item-sub-item">
                  <Link to={`/${url}/Toán lớp 1`} class="Menu-list-item-sub-item__txt"> Toán Lớp 1</Link>
                  </div>
                  <div class="Menu-list-item-sub-item">
                    <Link to={`/${url}/Anh văn 1`} class="Menu-list-item-sub-item__txt">Anh văn lớp 1</Link>
                  </div>
                  <div class="Menu-list-item-sub-item">
                    <Link to={`/${url}/Toán lớp 2`} class="Menu-list-item-sub-item__txt">Toán Lớp 2</Link>
                  </div>
                  <div class="Menu-list-item-sub-item">
                    <Link to={`/${url}/Anh văn 2`} class="Menu-list-item-sub-item__txt">Anh văn lớp 2</Link>
                  </div>
                  <div class="Menu-list-item-sub-item">
                    <Link to={`/${url}/Toán lớp 3`} class="Menu-list-item-sub-item__txt">Toán Lớp 3 </Link>
                  </div>
                  <div class="Menu-list-item-sub-item">
                    <Link to={`/${url}/Anh văn 3`} class="Menu-list-item-sub-item__txt">Anh văn lớp 3</Link>
                  </div>
                  <div class="Menu-list-item-sub-item">
                    <Link to={`/${url}/Toán lớp 4`} class="Menu-list-item-sub-item__txt">Toán Lớp 4</Link>
                  </div>
                  <div class="Menu-list-item-sub-item">
                    <Link to={`/${url}/Anh văn 4`} class="Menu-list-item-sub-item__txt">Anh văn lớp 4</Link>
                  </div>
                  <div class="Menu-list-item-sub-item">
                    <Link to={`/${url}/Toán lớp 5`} class="Menu-list-item-sub-item__txt">Toán Lớp 5</Link>
                  </div>
                  <div class="Menu-list-item-sub-item">
                    <Link to={`/${url}/Anh văn 5`} class="Menu-list-item-sub-item__txt">Anh văn lớp 5</Link>
                  </div>
                
                </div>
              </div>
    )
  }
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }
   
   responseFacebook = (response) => {
     console.log(response);
    var r = this;
    // e.preventDefault();//khong tu dong chuyen trang
    alert(response.email)
    axios.post('/users/loginfacebook', {
      memberLogin: response.email,
      memberPass: response.id
    })
    .then(function (response) {
      if(response.data ==='User already exists')
        alert('User already exists');
      else{
      localStorage.setItem('usertoken', response.data)
      r.props.history.push('/');
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    // console.log(response);
  }
  onChange = (e) =>{
    this.setState({ [e.target.name]: e.target.value });
  }
  onSearch = (e) =>{
    e.preventDefault();
    this.props.history.push('/lessionsearch/'+this.state.keywordSearch);
    console.log(this.state);
  }
  render() {
    let decoded =""
    if(localStorage.usertoken){
    const token = localStorage.usertoken
    decoded = jwt_decode(token)//giai ma token
    }     
    const loginRegLink = (
      <li style={{display: 'flex'}}>
        <li>
        <Link to="/login"><i className="fa fa-fw fa-power-off"/>ĐĂNG NHẬP</Link>
        </li>
        <li>
        <Link to="/register"><i className="fa fa-fw fa-sign-in"/>ĐĂNG KÝ</Link>
        </li>
        </li>
    )
    const userLink = (   
      <li style={{display: 'flex'}}>
        <li> <a href="" onClick={this.logOut.bind(this)} className="nav-link"><i className="fa fa-fw fa-sign-out" />
            ĐĂNG XUẤT
          </a>
        </li> 
        <li> <Link to="/updateuser" className="nav-link"><i className="fa fa-fw fa-user-circle" />
           Xin chào: {decoded.memberLogin}
          </Link>
        </li> 
         </li>
    )
    return (
      <div>
      <header className="only-pc">
        <div className="header-content">
        
            <Link className="logo" to="/">
          <img height="55px" width="180px" src="../img/images/logo.png" alt="Logo" /> 
        
        </Link>
          <form action className="search-site">
            
            <input type="text" placeholder="Mời bạn nhập tên bài học cần tìm" 
              name ="keywordSearch"
              value={this.state.keywordSearch}
              onChange={this.onChange}
            />
            <button className="btn-search" onClick={this.onSearch}>
              <i className="fa_search" />
            </button>
          </form>
          
          <nav className="nav-laptop">
          <Link to="/lession/toan">
              <i className="phone-icon" />
              <div>
                MÔN TOÁN
              </div>
            </Link>
            <Link to="/lession/anh">
              <i className="table-icon" />
              <div>TIẾNG ANH</div>
            </Link>
            {/* <a href="#" className="fa fa-facebook" style={{fontSize: '20px'}} /> */}
          
               <FacebookLogin
                appId="339113407489283"
                autoLoad={false}
                fields="name,email,picture"
                callback={this.responseFacebook}
                cssClass="my-facebook-button-class"
                icon="fa-facebook"
                textButton=""

              />
            <a href="#" className="fa fa-google" style={{fontSize: '13px',height:'43px',marginTop:'7px'}} />
          </nav>
          <nav className="nav-destop">
            <div className="menu-reponsive">
            </div>
          </nav>
        </div>
      </header>
      <header className="only-sp">
        <div className="js-nav Nav">
          <div className="Nav-content">
            <div className="Nav__logo">
              <img src="../img/images/logo.png" alt="" />
            </div>
            <div className="Nav-search">
              <div className="Nav-search-content">
                <div className="Nav-search__input">
                  <input type="text" placeholder="Tìm kiếm" />
                </div>
                <div className="Nav-search__btn">
                  <i className="fa fa-search" />
                </div>
              </div>
            </div>
            <div className="Nav-hamburger">
              <div className="js-navHamburger Nav-hamburger-content">
                <span className="Nav-hamburger-content__ico" />
                <span className="Nav-hamburger-content__ico" />
                <span className="Nav-hamburger-content__ico" />
              </div>
            </div>
          </div>
          <div className="Nav-menu">
            <div className="Nav-menu-content">
              <div className="Nav-menu-content-list">
                <p className="Nav-menu-content-item">Môn toán</p>
                <p className="Nav-menu-content-item">Môn tiếng anh</p>
                <p className="Nav-menu-content-item">Tài liệu</p>
                <p className="Nav-menu-content-item">Học Online</p>
                <p className="Nav-menu-content-item">Học&amp;chơi</p>
                <p className="Nav-menu-content-item">Diễn Đàn</p>
                <p className="Nav-menu-content-item">Giới thiệu</p>
                <p className="Nav-menu-content-item"> <Link to="/login">Đăng nhập</Link></p>
               
         
                <p className="Nav-menu-content-item"> <Link to="/register">Đăng ký</Link></p>
                <p className="Nav-menu-content-item">Lớp</p>
                <p className="Nav-menu-content-item">Kiểm tra</p>
                <p className="Nav-menu-content-item">Tin tức</p>
              </div>
              <div className="Nav-menu-content-footer">
                <div className="Nav-menu-content-footer-contact">
                  <img src="/common/img/contact_free_ico.png" alt="" />
                  <a href="tel:91919191919">091919191919</a>
                </div>
                <div className="Nav-menu-content-footer-location">
                  <p>Tru so</p>
                  <select>
                    <option value="hanoi">Hà Nội</option>
                    <option value="hanoi">Hồ Chí Minh</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* {localStorage.usertoken ? userLink : loginRegLink} */}
      <aside className="menu only-pc">
      <div className="menu-home">
        <ul className="nav-header">
          <li>
          <Link to="/lession"><i className="fa fa-fw fa-book" />TÀI LIỆU HỌC TẬP</Link>
                     {this.renderClass("lessionclass")}
         
          </li>
        <li>
          <Link to="/exam"><i className="fa fa-fw fa-columns" />KIỂM TRA</Link>
          {this.renderClass("exam")}
        </li>
       
        <li>
        <Link to="/videolearning"><i className="fa fa-fw fa-windows" />HỌC ONLINE</Link>
        {this.renderClass("videolearning")}
       
        </li>
        <li>
        {/* <a href><i className="fa fa-fw fa-home" /></a> */}
        <Link to="/list-game"><i className="fa fa-fw fa-gamepad"/>HỌC &amp; CHƠI</Link>
        </li>
        <li>
        <Link to="/forumquestion"><i className="fa fa-fw fa-list-alt"/>DIỄN ĐÀN</Link>
        </li>
        <li>
        <Link to="/introduce"><i className="fa fa-fw fa-address-book" />GIỚI THIỆU</Link>
        </li>
        <li>
        {/* <Link to="/login"><i className="fa fa-fw fa-home"/>ĐĂNG NHẬP</Link>
        </li>
        <li>
        <Link to="/register"><i className="fa fa-fw fa-home"/>ĐĂNG KÝ</Link> */}
          {localStorage.usertoken ? userLink : loginRegLink}
        </li>
        </ul>
      </div>
    </aside>
   
    </div>
    )
  }
}
export default withRouter(HeaderNav)
