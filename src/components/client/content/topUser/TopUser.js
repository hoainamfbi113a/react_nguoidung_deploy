import React, { Component } from 'react'
import TopUserItem from "./TopUserItem"
import axios from 'axios';
export default class TopUser extends Component {
    constructor(props){
        super(props)
        this.state={
          TopUser:[]
        }
      }
      componentDidMount =() =>
      {
        axios.get('https://cititechnodejs.herokuapp.com/admin/result/listtop/')
          .then(response => {
            this.setState({TopUser:response.data})
            // console.log(response.data);
          })
          .catch(function (error){
            console.log(error +"loi ne");
          })
      }
      renderItem=()=>{
        let{TopUser}=this.state;
        console.log(TopUser)
        return(
            TopUser.map((item,index)=>{
            return(
              <TopUserItem key={item._id} item={item} index={index}></TopUserItem>
            )
          })
        )
      }
    render() {
        return (
            <div className="top-user">
        <div className="thongbao"><a href="/?TopicId=9525ab2d-5a64-41ae-b53d-d4b9631adb36">TOP CÁC HỌC SINH CÓ THÀNH TÍCH TỐT</a>
          {/* <a className="title" id="article3eb07392-457c-4d29-ac78-d5644a7867c9" style={{color: '#054690'}}>Xếp hạng lần thứ 14</a> */}
        </div>
        {this.renderItem()}
        
      </div>
        )
    }
}
