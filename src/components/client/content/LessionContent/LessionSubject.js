import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import ItemLesion from './ItemLesion'
import axios from 'axios';
import './styleLession.css';
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
        axios.get('https://cititechnodejs.herokuapp.com/admin/lession/list/')
            .then(response => {
                // console.log(response.data);
                this.setState({persons: response.data});
            })
            .catch(function (error) {
            });
    }
    renderItem = () =>{
        let {items,idEdit,nameEdit,levelEdit,persons} = this.state;
        let classId = this.props.match.params.subject;
        let subjectName = this.props.match.params.monhoc;
        let nameInPersons=''
        // console.log("data in lession subject: ",subjectName);
        // console.log(`${classId} and ${subjectName}`)
        let classFilter = "Anh văn 1"
        if (classId === "lop1"){
          classFilter = "Anh văn 1"
          if(subjectName=='toan1'){
            nameInPersons="Toán lớp 1"
          }
          if(subjectName=='anh1'){
            nameInPersons="Anh văn 1"
          }
        }
        if (classId === "lop2"){
          classFilter = "Anh văn 2"
          if(subjectName=='toan2'){
            nameInPersons="Toán lớp 2"
          }
          if(subjectName=='anh2'){
            nameInPersons="Anh văn 2"
          }
        }
        if (classId === "lop3"){
          classFilter = "Anh văn 3"
          if(subjectName=='toan3'){
            nameInPersons="Toán lớp 3"
          }
          if(subjectName=='anh3'){
            nameInPersons="Anh văn 3"
          }
        }
        if (classId === "lop4"){
          classFilter = "Anh văn 4"
          if(subjectName=='toan4'){
            nameInPersons="Toán lớp 4"
          }
          if(subjectName=='anh4'){
            nameInPersons="Anh văn 4"
          }
        }
        if (classId === "lop5"){
          classFilter = "Anh văn 5"
          if(subjectName=='toan5'){
            nameInPersons="Toán lớp 5"
          }
          if(subjectName=='anh5'){
            nameInPersons="Anh văn 5"
          }
        }
        if(classId=="toan")
        {
          nameInPersons="Toán";
          console.log("gia tri persons: ",persons);
          return (
            persons.filter(item => item.lessionContentSubjects!==undefined && item.lessionContentSubjects.includes(nameInPersons)==true).map((item)=>{
               return(
                 <ItemLesion key={item._id}  item={item}  />
               )
             })
           )
        }
        else
        {
          if(classId=="anh")
          {
            nameInPersons="Anh";
            console.log("persons: ",persons);
          return (
            persons.filter(item =>item.lessionContentSubjects!==undefined && item.lessionContentSubjects.includes(nameInPersons)==true).map((item)=>{
               return(
                 <ItemLesion key={item._id}  item={item}  />
               )
             })
           )
          }
          else{
          return (
            persons.filter(item => item.lessionContentSubjects!==undefined && item.lessionContentSubjects==nameInPersons).map((item)=>{
               return(
                 <ItemLesion key={item._id}  item={item}  />
               )
             })
           )
            }
        }        
    }
    render() {
        return (
            <div className="lessonContent">
        <aside className="aside3">
          <div>
            <figure >
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
