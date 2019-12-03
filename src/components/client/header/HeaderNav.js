import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { homedir } from 'os';
class Home extends Component {
  render() {
    return (
      <div className="web_content">
    
      <div className="content">
        <aside className="aside-show">
          <div className="slideshow">
            <div className="slide"><img src="../images/slide2.jpg" alt="" /></div>
            <div className="slide"><img src="../images/slide1.jpg" style={{display: 'none'}} alt="" /></div>
            <div className="slide"><img src="../images/slide3.jpg" style={{display: 'none'}} alt="" /></div>
          </div>
          <div className="nut-slide">
            <span id="btn-prev"><i className="fas fa-chevron-left" /></span>
            <span id="btn-next"><i className="fas fa-chevron-right" /></span>
          </div>
        </aside>
        <aside className="aside-banner">
          <div>
            <ul className="banner1">
              <figure style={{background: 'rgb(144, 144, 245)'}}>
                <h4>
                  <a href> BÀI GIẢNG MỚI
                  </a>
                </h4>
              </figure>    
              <a href> Hướng dẫn giải toán lớp 5</a>
              <br />
              <a href> Hướng dẫn phát âm tiếng anh như người bản địa</a>
              <br />
              <a href> Hướng dẫn giải bài tập toán lớp 3</a>
            </ul>
          </div>
          <div className="banner1">
            <img height={100} width={400} src="../images/banner2.jpg" alt="banner1" />
          </div>
          <div className="banner1">
            <img height={100} width={400} src="../images/banner1.jpg" alt="banner1" />
          </div>
        </aside>
        <aside className="aside-main">
          <div className="inf-class">
            <a href><img src="../images/lop1.jpg" alt="lop 1" /></a>
            <a href><img src="../images/lop2.jpg" alt="lop 2" /></a>
            <a href><img src="../images/lop3.jpg" alt="lop 3" /></a>
            <a href><img src="../images/lop4.jpg" alt="lop 4" /></a>
            <a href><img src="../images/lop5.jpg" alt="lop 5" /></a>
          </div>
        </aside>
        <aside className="aside-topdiem">
        </aside>
        <aside className="aside-carousel">
          <div className="carousel active_carousel">
            <div className="boxcarousel">
              <img height="146px" width="240px" src="../images/carousel1.jpg" />
              <h3>....</h3>
              <div className="destation">
                ..................................
              </div>
            </div>
            <div className="boxcarousel">
              <img height="146px" width="240px" src="../images/carousel2.jpg" />
              <h3>....</h3>
              <div className="destation">
                ..................................
              </div>
            </div>
            <div className="boxcarousel">
              <img height="146px" width="240px" src="../images/carousel3.jpg" />
              <h3>....</h3>
              <div className="destation">
                ..................................
              </div>
            </div>
            <div className="boxcarousel">
              <img height="146px" width="240px" src="../images/carousel4.jpg" />
              <h3>....</h3>
              <div className="destation">
                ..................................
              </div>
            </div>
            <div className="boxcarousel">
              <img height="146px" width="240px" src="../images/carousel5.jpg" />
              <h3>....</h3>
              <div className="destation">
                ..................................
              </div>
            </div>
          </div>
          <div className="nut-slide-carousel">
            <span id="btn-prev-carousel"><i className="fa fa-chevron-left" style={{fontSize: '30px', color: '#666'}} /></span>
            <span id="btn-next-carousel"><i className="fa fa-chevron-right" style={{fontSize: '30px', color: '#666'}} /></span>
          </div>
        </aside>
        <aside className="aside-quangcao">
          <img height="200px" width="1250px" src="../images/quangcao.jpg" />
        </aside>
        <aside className="aside-topquestion">
          <figure style={{background: 'rgb(144, 144, 245)'}}>
            <h4>
              <a href> TOP CÂU HỎI!!!</a>
            </h4>
          </figure>    
        </aside>
        <aside className="aside-tintuc">
          <div className="carousel active_carousel">
            <div className="boxcarousel">
              <img height="146px" width="240px" src="../images/banner.png" />
              <h3>....</h3>
              <div className="destation">
                ..................................
              </div>
            </div>
            <div className="boxcarousel">
              <img height="146px" width="240px" src="../images/banner.png" />
              <h3>....</h3>
              <div className="destation">
                ..................................
              </div>
            </div>
            <div className="boxcarousel">
              <img height="146px" width="240px" src="../images/banner.png" />
              <h3>....</h3>
              <div className="destation">
                ..................................
              </div>
            </div>
            <div className="boxcarousel">
              <img height="146px" width="240px" src="../images/banner.png" />
              <h3>....</h3>
              <div className="destation">
                ..................................
              </div>
            </div>
            <div className="boxcarousel">
              <img height="146px" width="240px" src="../images/banner.png" />
              <h3>....</h3>
              <div className="destation">
                ..................................
              </div>
            </div>
          </div>
          <div className="nut-slide-carousel">
            <span id="btn-prev-carousel"><i className="fa fa-chevron-left" style={{fontSize: '30px', color: '#666'}} /></span>
            <span id="btn-next-carousel"><i className="fa fa-chevron-right" style={{fontSize: '30px', color: '#666'}} /></span>
          </div>
        </aside>
        <aside className="aside-fb">
          <div className="fb">
            <img height="30px" width="30px" src="../images/fb.jpg" alt="" />
            <a href style={{textAlign: 'center'}}>www.facebook.nlkids.com</a>
          </div>
        </aside>
        <aside className="aside-youtube">
          <div className="yt">
            <img height="30px" width="30px" src="../images/youtube.png" alt="" />
            <a href>https://www.youtube.com/channel/UCPeHKeg8RVHOBZWyZijoqow</a>
          </div>
        </aside>
      </div>
     
    </div>
        
    )
  }
}

export default Home;
