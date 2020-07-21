import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import axios from 'axios';

class NewsItemDetail extends Component {
    constructor() {
        super();
        this.state = {
            new: null
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/client/news/list/')
        .then(response => {
        this.setState({news:response.data})
            const id = this.props.match.params.id;
            const item = response.data.filter((item) => item._id === id)[0];
            this.setState({
                new: {...item},
            });
            console.log(this.state.new);
        })
      .catch(function (error){
        console.log(error +"loi ne");
      })
    }

    render() {
        return(
            this.state.new ?
            <ul className="banner0">
                <a href>
                    <img src={`http://localhost:5000/${this.state.new.images}`} alt="" />
                    <h3>{this.state.new.title}</h3>
                    <span>{this.state.new.timeUpdate}</span>
                </a>
            </ul>
            : null
        )
    }
}

export default NewsItemDetail;