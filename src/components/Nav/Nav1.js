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
    
      <aside className="menu only-pc">
      <div className="menu-home">
        <a href><i className="fa fa-fw fa-home" />LỚP</a>
        <Link to="/exam"><i className="fa fa-fw fa-home" />KIỂM TRA</Link>
        <a href><i className="fa fa-fw fa-home" />TÀI LIỆU</a>
        <a href><i className="fa fa-fw fa-home" />HỌC ONLINE</a>
        <a href><i className="fa fa-fw fa-home" />HỌC &amp; CHƠI</a>
        <a href><i className="fa fa-fw fa-home" />DIỄN ĐÀN</a>
        <a href><i className="fa fa-fw fa-home" />GIỚI THIỆU</a>
        {/* <a href><i className="fa fa-fw fa-home" />ĐĂNG NHẬP</a>
        <a href><i className="fa fa-fw fa-home" />ĐĂNG KÝ</a> */}
        <Link to="/login"><i className="fa fa-fw fa-home" />ĐĂNG NHẬP</Link>
        <Link to="/register"><i className="fa fa-fw fa-home" />ĐĂNG KÝ</Link>
      </div>
    </aside>
    )

    const userLink = (
    
    //   <aside className="menu">
    //   <div className="menu-home">
    //     <a href>LỚP</a>
    //     <a href>KIỂM TRA </a>
    //     <a href>TÀI LIỆU</a>
    //     <a href>HỌC QUA VIDEO</a>
    //     <a href>HỌC &amp; CHƠI</a>
    //     <a href>DIỄN ĐÀN</a>
    //     <a href>GIỚI THIỆU</a>
      
    //     <a href="" onClick={this.logOut.bind(this)} className="nav-link">
    //         Đăng xuất
    //       </a>
       
    //   </div>
    // </aside>
       
       <aside className="menu only-pc">
       <div className="menu-home">
         <a href><i className="fa fa-fw fa-home" />LỚP</a>
         <a href><i className="fa fa-fw fa-home" />KIỂM TRA </a>
         <a href><i className="fa fa-fw fa-home" />TÀI LIỆU</a>
         <a href><i className="fa fa-fw fa-home" />HỌC ONLINE</a>
         <a href><i className="fa fa-fw fa-home" />HỌC &amp; CHƠI</a>
         <a href><i className="fa fa-fw fa-home" />DIỄN ĐÀN</a>
         <a href><i className="fa fa-fw fa-home" />GIỚI THIỆU</a>
         <a href="" onClick={this.logOut.bind(this)} className="nav-link"><i className="fa fa-fw fa-home" />
            Đăng xuất
          </a>
       </div>
     </aside>
     
    )
    return (
      <div>
      <header className="only-pc">
        <div className="header-content">
        
            <Link className="logo" to="/">
          <img height="55px" width="180px" src="../img/images/logo.png" alt="Logo" /> 
        
        </Link>
          <form action className="search-site">
            
            <input type="text" placeholder="Bạn tìm gì..." />
            <button className="btn-search">
              <i className="fa_search" />
            </button>
          </form>
          <nav className="nav-laptop">
            <a href>
              <i className="phone-icon" />
              <div>
                MÔN TOÁN
              </div>
            </a>
            <a href>
              <i className="table-icon" />
              <div>TIẾNG ANH</div>
            </a>
            <a href="#" className="fa fa-facebook" style={{fontSize: '20px'}} />
            <a href="#" className="fa fa-google" style={{fontSize: '20px'}} />
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
      {localStorage.usertoken ? userLink : loginRegLink}
    </div>
   
      
    )
  }
}

// export default Nav

export default withRouter(Nav)
