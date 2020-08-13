import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import axios from 'axios';
import './styleItemNews.css'

class LessonFeaturedItemDetail extends Component {
    constructor() {
        super();
        this.state = {
            new: null
        }
    }

    componentDidMount() {
        axios.get('https://cititechnodejs.herokuapp.com/client/lesson/list5/')
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
            <div className="newsDetail">
                {/* <a href> */}
                    <div className="newsTitle">
                        <h3>{this.state.new.title}</h3>
                    </div>
                    <div className="newsTimeUpdate">
                        <span>{this.state.new.timeUpdate}</span>
                    </div>
                    <div className="newsImg">
                        <img src="https://cititechnodejs.herokuapp.com/${this.state.new.images" alt="" />
                    </div>
                    <div className="newsContents">
                        <p>{this.state.new.lessonContent}</p>
                    </div>
                {/* </a> */}
            </div>
            : null
        )
    }
}

export default LessonFeaturedItemDetail;