import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import ItemLesion from './ItemLesion'
import axios from 'axios';
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
    componentDidMount(){
        const token = localStorage.usertoken
        axios.get('http://localhost:5000/admin/lession/list/')
            .then(response => {
                console.log(response.data);
                this.setState({persons: response.data});
            })
            .catch(function (error) {
            });
    }
    renderItem = () =>{
        let {items,idEdit,nameEdit,levelEdit,persons} = this.state;
        let classId = this.props.match.params.subject;
        let classFilter = "Anh văn 1"
        if (classId === "lop1"){
          classFilter === "Anh văn 1"
        }
        if (classId === "lop2"){
          classFilter = "Anh văn 2"
        }
        if (classId === "lop3"){
          classFilter = "Anh văn 3"
        }
        if (classId === "lop4"){
          classFilter = "Anh văn 4"
        }
        if (classId === "lop5"){
          classFilter = "Anh văn 5"
        }
        console.log(classId)
        return (
         persons.filter(item => item.lessionContentSubjects == classFilter ).map((item,index)=>{
            return(
              <ItemLesion key={item._id}  item={item} index={index}  handleShowAlert={this.handleShowAlert}  handleEditItem = {this.handleEditItem}/>
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
                <a href>Tin tức giáo dục</a> 
              </h2>
            </figure>
           {this.renderItem()}
          </div>
        </aside>
      </div>
        )
    }
}
