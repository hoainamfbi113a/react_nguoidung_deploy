import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import ItemLesion from './ItemLesion'
import axios from 'axios';
import { withRouter } from 'react-router-dom'
export default class LessionSubject extends Component {
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
        let classId = this.props.match.params.subjects;
        axios.get('http://localhost:5000/admin/lession/list/'+classId)
            .then(response => {
                console.log(response.data);
                this.setState({persons: response.data});
            })
            .catch(function (error) {
            });
    }
    componentDidUpdate(prevProps) {
      // const {pathname} = this.props.location;
      // let url= "" ;
      // if (url !== pathname) {
      //    url =pathname;
      //   // fetch or other component tasks necessary for rendering
      //   this.fetchProfile();
      // }
      if (this.props.match.params.subjects !== prevProps.match.params.subjects) {
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
            <ItemLesion key={item._id}  item={item}  />
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
                <a href>Nội dung bài học</a> 
              </h2>

            </figure>
           {this.renderItem()}
          </div>
        </aside>
      </div>
        )
    }
}
