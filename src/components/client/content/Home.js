import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Slider from "react-slick";
import { homedir } from 'os';
import  LessonClass  from "./LessonClass/LessonClass";
import News from './news/News';
import LessionNew from './LessionNew/LessionNew';
import GoodStudent from "./GoodStudent/GoodStudent"
import LesonFeatured from "./LessonFeatured/LessonFeatured"
import TopUser from "./topUser/TopUser"

function NullArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div/>
  );
}

class Home extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      nextArrow: <NullArrow/>,
      prevArrow: <NullArrow />
    };
    return (
      <div className="content ">
      <aside className="aside1">
        <div className="js-carousel Carousel">
          <div className="js-carouselCtx Carousel-content">
            <div className="js-carouselList Carousel-content-list">
              <Slider style={{width: '786px'}} {...settings}>
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
      
     <TopUser/>
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
        <LesonFeatured/>
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