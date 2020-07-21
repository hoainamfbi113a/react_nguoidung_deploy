import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import VideoLearningItem from './VideoLearningItem'
import axios from 'axios';
export default class VideoLearning extends Component {
    constructor(props){
        super(props)
        this.state = {
          showAlert:false,
          idAlert:"",
          persons:[],
          refresh:true
        }
      }
    fetchProfile() {
         // const token = localStorage.usertoken
        let classId = this.props.match.params.subject;
        axios.get('http://localhost:5000/admin/videolearning/list/'+classId)
            .then(response => {
                console.log(response.data);
                this.setState({persons: response.data});
            })
            .catch(function (error) {
            });
    }
    componentDidUpdate(prevProps) {
      if (this.props.match.params.subject !== prevProps.match.params.subject) {
        // fetch or other component tasks necessary for rendering
        this.fetchProfile();
      }
    }
    componentDidMount(){
        this.fetchProfile()
    }
    renderItem = () =>{
      let{persons}=this.state;
      console.log(persons)
      return(
        persons.map((item,index)=>{
          return(
            <VideoLearningItem key={item._id}  item={item}  />
          )
        })
      )
    }
    render() {
        return (
            <div className="news">
        <aside className="aside3">
          <div>
            <figure style={{background: '#fff', height: '38px'}}>
              <h2>
                <a href>Nội dung video</a> 
              </h2>
            </figure>
           {this.renderItem()}
          </div>
        </aside>
      </div>
        )
    }
}
