import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { homedir } from 'os';
class Home extends Component {
  render() {
    return (
      <div className="content ">
      <aside className="aside1">
        <div className="js-carousel Carousel">
          <div className="js-carouselCtx Carousel-content">
            <div className="js-carouselList Carousel-content-list">
              <div className="Carousel-content-item" id="carousel1">
                <img src="../img/imgs/slide1.jpg" alt="" />
              </div>
              <div className="Carousel-content-item" id="carousel2">
                <img src="../img/imgs/slide2.jpg" alt="" />
              </div>
              <div className="Carousel-content-item" id="carousel3">
                <img src="../img/imgs/slide3.jpg" alt="" />
              </div>
              <div className="Carousel-content-item" id="carousel4">
                <img src="../img/imgs/slide4.jpg" alt="" />
              </div>
            </div>
            <div className="js-carouselBtn Carousel-content__btn" />
            <div className="js-carouselBtn Carousel-content__btn Carousel-content__btn--right" />
          </div>
        </div>
        <div className="Carousel-nav">
          <div className="js-carouselNavItem Carousel-nav-item Carousel-nav-item--active" data-index={1}>
            {/* <p class="only-pc Carousel-nav-item__txt">1</p> */}
            <p>Cùng gia đình Shin<br /> Đến NLKid học thôi</p>
          </div>
          <div className="js-carouselNavItem Carousel-nav-item" data-index={2}>
            <p>Cùng gia đình Shin<br /> Đến NLKid học thôi</p>
          </div>
          <div className="js-carouselNavItem Carousel-nav-item" data-index={3}>
            <p>Cùng gia đình Shin<br /> Đến NLKid học thôi</p>
          </div>
          <div className="js-carouselNavItem Carousel-nav-item" data-index={4}>
            <p>Cùng gia đình Shin<br /> Đến NLKid học thôi</p>
          </div>
        </div>
      </aside>
      <aside className="aside2">
        <div>
          <figure style={{background: '#fff', height: '38px'}}>
            <h2>
              <a href>Các bài giảng mới</a> 
            </h2>
          </figure>
          <ul className="banner0">
            <a href>
              <img src="../img/imgs/bg1.jpg" alt="" />
              <h3>Unit 4. Caring for those in need. Lesson 3. Reading</h3>
              <span>19 phút trước</span>
            </a>
          </ul>
          <ul className="banner0">
            <a href>
              <img src="../img/imgs/bg2.jpg" alt="" />
              <h3>Unit 4. Caring for those in need. Lesson 3. Reading</h3>
              <span>19 phút trước</span>
            </a>
          </ul>
          <ul className="banner0">
            <a href>
              <img src="../img/imgs/bg3.jpg" alt="" />
              <h3>Unit 4. Caring for those in need. Lesson 3. Reading</h3>
              <span>19 phút trước</span>
            </a>
          </ul>
          <ul className="banner0">
            <a href>
              <img src="../img/imgs/bg4.jpg" alt="" />
              <h3>Unit 4. Caring for those in need. Lesson 3. Reading</h3>
              <span>19 phút trước</span>
            </a>
          </ul>
        </div>
      </aside>
      <div className="promotebanner">
        <a href>
          <img src="../img/imgs/quang.jpg" alt="" />
        </a>
      </div>
      <div className="inf-class">
        <a href><img src="../img/imgs/lop1.jpg" alt="lop 1" /></a>
        <a href><img src="../img/imgs/lop2.jpg" alt="lop 2" /></a>
        <a href><img src="../img/imgs/lop3.jpg" alt="lop 3" /></a>
        <a href><img src="../img/imgs/lop4.jpg" alt="lop 4" /></a>
        <a href><img src="../img/imgs/lop5.jpg" alt="lop 5" /></a>
      </div>
      <div className="top-user">
        <div className="thongbao"><a href="/?TopicId=9525ab2d-5a64-41ae-b53d-d4b9631adb36">TOP CÁC HỌC SINH CÓ THÀNH TÍCH TỐT</a>
          <a className="title" id="article3eb07392-457c-4d29-ac78-d5644a7867c9" style={{color: '#054690'}}>Xếp hạng lần thứ 14</a>
        </div>
        <div className="d-flex">
          <h3 style={{width: '22px'}}>2</h3>
          <div className>
            <img alt="Hứa Hoàng Danh" src="https://api.adorable.io/avatars/55/Hứa Hoàng Danh" />
          </div>
          <h4 className="nameusertop">Hứa Hoàng Danh</h4>
          <h4 className="ml-auto">1853</h4>
        </div>
        <div className="d-flex">
          <h3 style={{width: '22px'}}>2</h3>
          <div className>
            <img alt="Hứa Hoàng Danh" src="https://api.adorable.io/avatars/55/Hứa Hoàng Danh" />
          </div>
          <h4 className="nameusertop">Hứa Hoàng Danh</h4>
          <h4 className="ml-auto">1853</h4>
        </div>
        <div className="d-flex">
          <h3 style={{width: '22px'}}>3</h3>
          <div className>
            <img alt="Hứa Hoàng Danh" src="https://api.adorable.io/avatars/55/Hứa Hoàng Danh" />
          </div>
          <h4 className="nameusertop">Hứa Hoàng Danh</h4>
          <h4 className="ml-auto">1853</h4>
        </div>
        <div className="d-flex">
          <h3 style={{width: '22px'}}>4</h3>
          <div className>
            <img alt="Hứa Hoàng Danh" src="https://api.adorable.io/avatars/55/Hứa Hoàng Danh" />
          </div>
          <h4 className="nameusertop">Hứa Hoàng Danh</h4>
          <h4 className="ml-auto">1853</h4>
        </div>
        <div className="d-flex">
          <h3 style={{width: '22px'}}>5</h3>
          <div className>
            <img alt="Hứa Hoàng Danh" src="https://api.adorable.io/avatars/55/Hứa Hoàng Danh" />
          </div>
          <h4 className="nameusertop">Hứa Hoàng Danh</h4>
          <h4 className="ml-auto">1853</h4>
        </div>
        <div className="d-flex">
          <h3 style={{width: '22px'}}>6</h3>
          <div className>
            <img alt="Hứa Hoàng Danh" src="https://api.adorable.io/avatars/55/Hứa Hoàng Danh" />
          </div>
          <h4 className="nameusertop">Hứa Hoàng Danh</h4>
          <h4 className="ml-auto">1853</h4>
        </div>
        <div className="d-flex">
          <h3 style={{width: '22px'}}>7</h3>
          <div className>
            <img alt="Hứa Hoàng Danh" src="https://api.adorable.io/avatars/55/Hứa Hoàng Danh" />
          </div>
          <h4 className="nameusertop">Hứa Hoàng Danh</h4>
          <h4 className="ml-auto">1853</h4>
        </div>
        <div className="d-flex">
          <h3 style={{width: '22px'}}>7</h3>
          <div className>
            <img alt="Hứa Hoàng Danh" src="https://api.adorable.io/avatars/55/Hứa Hoàng Danh" />
          </div>
          <h4 className="nameusertop">Hứa Hoàng Danh</h4>
          <h4 className="ml-auto">1853</h4>
        </div>
      </div>
      <div className="product">
        <div className="navigat">
          <h2>Các bài học nổi bật</h2>
          <div className="viewwallcart">
            <a href>Toán 1</a>
            <a href>Toán 2</a>
            <a href>Toán 3</a>
            <a href>Toán 4</a>
            <a href>Toán 5</a>
            <a href>Tiếng anh 1</a>
          </div>
        </div>
        <div className="khoi-product-new">
          <div className="productnew active_product">
            <div className="boxProduct">
              <img src="../img/imgs/bg1.jpg" alt="" />
              <h3>Tiêu đề</h3>
              <div className="destation">
                Nội dung của bài học xxxxxxxxxxx
              </div>
            </div>
            <div className="boxProduct">
              <img src="../img/imgs/bg2.jpg" alt="" />
              <h3>Tiêu đề</h3>
              <div className="destation">
                Nội dung của bài học xxxxxxxxxxx
              </div>
            </div>
            <div className="boxProduct">
              <img src="../img/imgs/bg3.jpg" alt="" />
              <h3>Tiêu đề</h3>
              <div className="destation">
                Nội dung của bài học xxxxxxxxxxx
              </div>
            </div>
            <div className="boxProduct">
              <img src="../img/imgs/bg4.jpg" alt="" />
              <h3>Tiêu đề</h3>
              <div className="destation">
                Nội dung của bài học xxxxxxxxxxx
              </div>
            </div>
            <div className="boxProduct">
              <img src="../img/imgs/bg5.jpg" alt="" />
              <h3>Tiêu đề</h3>
              <div className="destation">
                Nội dung của bài học xxxxxxxxxxx
              </div>
            </div>
          </div>
          {/* product-new 2 */}
          <div className="productnew  ">
            <div className="boxProduct">
              <img src="../img/imgs/bg7.jpg" alt="" />
              <h3>Tiêu đề</h3>
              <div className="destation">
                Nội dung của bài học xxxxxxxxxxx
              </div>
            </div>
            <div className="boxProduct">
              <img src="../img/imgs/bg7.jpg" alt="" />
              <h3>Tiêu đề</h3>
              <div className="destation">
                Nội dung của bài học xxxxxxxxxxx
              </div>
            </div>
            <div className="boxProduct">
              <img src="../img/imgs/bg7.jpg" alt="" />
              <h3>Tiêu đề</h3>
              <div className="destation">
                Nội dung của bài học xxxxxxxxxxx
              </div>
            </div>
            <div className="boxProduct">
              <img src="../img/imgs/bg7.jpg" alt="" />
              {/* <h3>Tiêu đề</h3>
                         <p>6.490.000d</p> */}
              <span>5.200.000d</span>
              <div className="destation">
                Nội dung của bài học xxxxxxxxxxx
              </div>
            </div>
            <div className="boxProduct">
              <img src="../img/imgs/bg7.jpg" alt="" />
              <h3>Tiêu đề</h3>
              <div className="destation">
                Nội dung của bài học xxxxxxxxxxx
              </div>
            </div>
          </div>
        </div>
        <div className="nut-slide-productnew">
          <span id="btn-prev-productnew"><i className="fa fa-chevron-left" style={{fontSize: '30px', color: '#666'}} /></span>
          <span id="btn-next-productnew"><i className="fa fa-chevron-right" style={{fontSize: '30px', color: '#666'}} /></span>
        </div>
      </div>
      <div className="news">
        <aside className="aside3">
          <div>
            <figure style={{background: '#fff', height: '38px'}}>
              <h2>
                <a href>Tin tức giáo dục</a> 
              </h2>
            </figure>
            <ul className="banner0">
              <a href>
                <img src="../img/imgs//tintuc1.jpg" alt="" />
                <h3>Unit 4. Caring for those in need. Lesson 3. Reading</h3>
                <span>19 phút trước</span>
              </a>
            </ul>
            <ul className="banner0">
              <a href>
                <img src="../img/imgs//tintuc2.jpg" alt="" />
                <h3>Unit 4. Caring for those in need. Lesson 3. Reading</h3>
                <span>19 phút trước</span>
              </a>
            </ul>
            <ul className="banner0">
              <a href>
                <img src="../img/imgs//tintuc3.jpg" alt="" />
                <h3>Unit 4. Caring for those in need. Lesson 3. Reading</h3>
                <span>19 phút trước</span>
              </a>
            </ul>
            <ul className="banner0">
              <a href>
                <img src="../img/imgs//tintuc4.jpg" alt="" />
                <h3>Unit 4. Caring for those in need. Lesson 3. Reading</h3>
                <span>19 phút trước</span>
              </a>
            </ul>
            <ul className="banner0">
              <a href>
                <img src="../img/images/imgnew.png" alt="" />
                <h3>Unit 4. Caring for those in need. Lesson 3. Reading</h3>
                <span>19 phút trước</span>
              </a>
            </ul>
          </div>
        </aside>
      </div>
      <div className="hstieubieucuanuoc">
        <aside className="aside2">
          <div>
            <figure style={{background: '#fff', height: '38px'}}>
              <h2>
                <a href>Học sinh tiêu biểu</a> 
              </h2>
            </figure>
            <ul className="banner0">
              <a href>
                <img src="../img/imgs/hstb1.jfif" alt="" />
                <h3>Unit 4. Caring for those in need. Lesson 3. Reading</h3>
                <span>19 phút trước</span>
              </a>
            </ul>
            <ul className="banner0">
              <a href>
                <img src="../img/imgs/hstb2.jpg" alt="" />
                <h3>Unit 4. Caring for those in need. Lesson 3. Reading</h3>
                <span>19 phút trước</span>
              </a>
            </ul>
            <ul className="banner0">
              <a href>
                <img src="../img/imgs/hstb3.jpg" alt="" />
                <h3>Unit 4. Caring for those in need. Lesson 3. Reading</h3>
                <span>19 phút trước</span>
              </a>
            </ul>
            <ul className="banner0">
              <a href>
                <img src="../img/imgs/hstb4.jpg" alt="" />
                <h3>Unit 4. Caring for those in need. Lesson 3. Reading</h3>
                <span>19 phút trước</span>
              </a>
            </ul>
            <ul className="banner0">
              <a href>
                <img src="../img/images/imgnew.png" alt="" />
                <h3>Unit 4. Caring for those in need. Lesson 3. Reading</h3>
                <span>19 phút trước</span>
              </a>
            </ul>
            <ul className="banner0">
              <a href>
                <img src="../img/images/imgnew.png" alt="" />
                <h3>Unit 4. Caring for those in need. Lesson 3. Reading</h3>
                <span>19 phút trước</span>
              </a>
            </ul>
            <ul className="banner0">
              <a href>
                <img src="../img/images/imgnew.png" alt="" />
                <h3>Unit 4. Caring for those in need. Lesson 3. Reading</h3>
                <span>19 phút trước</span>
              </a>
            </ul>
          </div>
        </aside>
      </div>
    </div>
   )
  }
}

export default Home;
