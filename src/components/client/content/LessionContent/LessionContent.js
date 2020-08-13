import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import ItemLesion from './ItemLesion'
import axios from 'axios';
export default class LessionContent extends Component {
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
                console.log(response.data);
                this.setState({persons: response.data});
            })
            .catch(function (error) {
            });
    }
    renderItem = () =>{
        let {items,idEdit,nameEdit,levelEdit,persons} = this.state;
          return (
            persons.map((item,index)=>{
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
            <figure className="lessionItemfigure"  style={{background: '#fff', height: '38px'}}>
              <h2>
                <a href>Các bài học của </a> 

              </h2>
            </figure>
           {this.renderItem()}
          </div>
        </aside>
      </div>
        )
    }
}
