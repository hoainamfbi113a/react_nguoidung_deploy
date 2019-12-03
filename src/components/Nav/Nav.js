import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
import { withRouter } from 'react-router-dom'
class Nav extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
    
  }
  render() {
    const loginRegLink = (
    
      <aside className="menu">
        <div className="menu-home">
          <a href>LỚP</a>
          <a href>KIỂM TRA </a>
          <a href>TÀI LIỆU</a>
          <a href>HỌC QUA VIDEO</a>
          <a href>HỌC &amp; CHƠI</a>
          <a href>DIỄN ĐÀN</a>
          <a href>GIỚI THIỆU</a>
          <Link to="/login">Đăng nhập</Link>
          <Link to="/register">Đăng ký</Link>
         
        </div>
      </aside>
    )

    const userLink = (
    
      <aside className="menu">
      <div className="menu-home">
        <a href>LỚP</a>
        <a href>KIỂM TRA </a>
        <a href>TÀI LIỆU</a>
        <a href>HỌC QUA VIDEO</a>
        <a href>HỌC &amp; CHƠI</a>
        <a href>DIỄN ĐÀN</a>
        <a href>GIỚI THIỆU</a>
      
        <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Đăng xuất
          </a>
       
      </div>
    </aside>
       

     
    )
    return (
      <header>
      <div className="header-content">
       <Link className="logo" to="/">
          <img height="55px" width="180px" src="../images/logo.png" alt="Logo" /> 
        
        </Link>
        <form action className="search-site">
          <input type="text" placeholder="Search..." />
          <button className="btn-search">
            <i className="fa_search" />
          </button>
        </form>
        <nav className="nav-laptop">
          <a href>
            <i className="toan-icon">
              <div>
                <img height="20px" width="20px" src="../images/toan-icon.png" />
                MON TOAN
              </div>
            </i>
          </a>
          <a href>
            <i className="eng-icon">
              <div>
                <img height="20px" width="20px" src="../images/eng-icon.jpg" />
                TIENG ANH
              </div>
            </i>
          </a>
        </nav>
      </div>
      {/* <aside className="menu">
        <div className="menu-home">
          <a href>LỚP</a>
          <a href>KIỂM TRA </a>
          <a href>TÀI LIỆU</a>
          <a href>HỌC QUA VIDEO</a>
          <a href>HỌC &amp; CHƠI</a>
          <a href>DIỄN ĐÀN</a>
          <a href>GIỚI THIỆU</a>
          {localStorage.usertoken ? userLink : loginRegLink}
         
        </div>
      </aside> */}
       {localStorage.usertoken ? userLink : loginRegLink}
    </header>
    )
  }
}

// export default Nav

export default withRouter(Nav)
