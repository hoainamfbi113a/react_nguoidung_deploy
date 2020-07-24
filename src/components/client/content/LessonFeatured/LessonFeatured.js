import React, { Component } from 'react'
import LessonFeaturedItem from "./LessonFeaturedItem";
import axios from 'axios';
import Slider from "react-slick";
export default class LessonFeatured extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: []
        }
    }
    componentDidMount = () => {
        axios.get('http://localhost:5000/client/lesson/list5/')
            .then(response => {
                this.setState({ news: response.data })
            })
            .catch(function (error) {
                console.log(error + "loi ne");
            })
    }
    renderItem = () => {
        let { news } = this.state;
        return (
            news.map((item, index) => {
                return (
                    <LessonFeaturedItem key={item._id} item={item} index={index}></LessonFeaturedItem>
                )
            })
        )
    }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "40px",
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,

          };   
        return (
            
            <div className="khoi-product-new">
                    <div className="productnew active_product">
                        <Slider style={{width: '90%'}} {...settings}>
                                {this.renderItem()}
                        </Slider>
                    </div>
            </div>
        )
    }
}

