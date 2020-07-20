import React, { Component } from 'react'
import LessonFeaturedItem from "./LessonFeaturedItem";
import axios from 'axios';
export default class LesonFeatured extends Component {
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
        return (
            <div className="khoi-product-new">
                <div className="productnew active_product">
                    {this.renderItem()}
                </div>
            </div>
        )
    }
}
