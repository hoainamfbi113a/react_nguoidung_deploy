import React, { Component } from 'react'
import axios from 'axios';
import "./style.css"
export default class VideoLearningDetail extends Component {
    constructor() {
        super();
        this.state = {
            new: []
        }
    }

    componentDidMount() {
        axios.get('https://cititechnodejs.herokuapp.com/admin/videolearning/'+this.props.match.params.id)
        .then(response => {
        this.setState({new:response.data})
        console.log(response.data);
        })
      .catch(function (error){
        console.log(error +"loi ne");
      })
    }
    render() {
        // var {new} = this.state;
        return (
            <div className="video-youtube">
                {/* <video controls="true">
                    <source src={this.state.new.videoContentVideo} type="video/mp4" />
                </video> */}
                <iframe width="920" height="545" src={this.state.new.videoContentVideo}>
</iframe>
                {/* <iframe width="420" height="345" src={this.state.new.videoContentVideo}>
</iframe> */}
            {/* <iframe width="560" height="315" src={this.state.new.videoContentDetail} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>     */}
            </div>
        )
    }
}
