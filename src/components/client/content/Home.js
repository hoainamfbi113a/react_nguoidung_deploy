import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Slider from "react-slick";
import { homedir } from 'os';
import  LessonClass  from "./LessonClass/LessonClass";
import News from './news/News';
import LessionNew from './LessionNew/LessionNew';
import GoodStudent from "./GoodStudent/GoodStudent"
class Home extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className="content ">
      <aside className="aside1">
        <div className="js-carousel Carousel">
          <div className="js-carouselCtx Carousel-content">
            <div className="js-carouselList Carousel-content-list">
            <Slider style={{width: '785px'}} {...settings}>
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
              </Slider>
            </div>
            {/* <div className="js-carouselBtn Carousel-content__btn" /> */}
            {/* <div className="js-carouselBtn Carousel-content__btn Carousel-content__btn--right" /> */}
          </div>
        </div>
        {/* <div className="Carousel-nav">
          <div className="js-carouselNavItem Carousel-nav-item Carousel-nav-item--active" data-index={1}>
            <p class="only-pc Carousel-nav-item__txt">1</p>
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
        </div> */}
      </aside>
      <LessionNew/>
     <div className="promotebanner">
        <a href>
          <img src="../img/imgs/quang.jpg" alt="" />
        </a>
      </div>
      <div className="home-main">
      <LessonClass/>
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
     
      </div>
 
    <div className="product">
        <div className="navigat">
          <h2>Các bài học nổi bật</h2>
          <div className="viewwallcart">
             <Link to="/lessionclass/Toán lớp 1" class="Menu-list-item-sub-item__txt">Toán 1</Link>
             <Link to="/lessionclass/Toán lớp 2" class="Menu-list-item-sub-item__txt">Toán 2</Link>
             <Link to="/lessionclass/Toán lớp 3" class="Menu-list-item-sub-item__txt">Toán 3</Link>
             <Link to="/lessionclass/Toán lớp 4" class="Menu-list-item-sub-item__txt">Toán 4</Link>
             <Link to="/lessionclass/Toán lớp 5" class="Menu-list-item-sub-item__txt">Toán 5</Link>
             <Link to="/lessionclass/Anh văn 1" class="Menu-list-item-sub-item__txt">Tiếng anh 1</Link>
             <Link to="/lessionclass/Anh văn 2" class="Menu-list-item-sub-item__txt">Tiếng anh 2</Link>
             <Link to="/lessionclass/Anh văn 3" class="Menu-list-item-sub-item__txt">Tiếng anh 3</Link>
             <Link to="/lessionclass/Anh văn 4" class="Menu-list-item-sub-item__txt">Tiếng anh 4</Link>
             <Link to="/lessionclass/Anh văn 5" class="Menu-list-item-sub-item__txt">Tiếng anh 5</Link>
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
        {/* <div className="nut-slide-productnew">
          <span id="btn-prev-productnew"><i className="fa fa-chevron-left" style={{fontSize: '30px', color: '#666'}} /></span>
          <span id="btn-next-productnew"><i className="fa fa-chevron-right" style={{fontSize: '30px', color: '#666'}} /></span>
        </div> */}
      </div>
      <News/>
      <GoodStudent/>
     </div>
   )
  }
}

export default Home;