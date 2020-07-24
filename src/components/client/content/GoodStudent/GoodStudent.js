import React, { Component } from 'react'
import axios from 'axios';
import GoodStudentItem from './GoodStudentItem';
import "./style.css";
class GoodStudent extends Component {
  constructor(props){
    super(props)
    this.state={
      goodStudent:[]
    }
  }
  componentDidMount =() =>
  {
    axios.get('http://localhost:5000/client/news/listgoodstudent/')
      .then(response => {
        this.setState({goodStudent:response.data})
        // console.log(response.data);
      })
      .catch(function (error){
        console.log(error +"loi ne");
      })
  }
  renderItem=()=>{
    let{goodStudent}=this.state;
    console.log(goodStudent)
    return(
        goodStudent.map((item,index)=>{
        return(
          <GoodStudentItem key={item._id} item={item} index={index}></GoodStudentItem>
        )
      })
    )
  }
  render() {
    // let {goodStudent}=this.state;
    return (
    //     <div className="news">
    //     <aside className="aside3">
    //       <div>
    //         <figure style={{background: '#fff', height: '38px'}}>
    //           <h2>
    //             <a href>Học sinh tiêu biểu</a> 
    //           </h2>
    //         </figure>
    //          
    //       </div>
    //     </aside>
    //   </div>
    <div className="hstieubieucuanuoc">
    <aside className="aside2">
      <div className="goodstudent-container">
        <figure style={{background: '#fff', height: '38px'}}>
          <h2>
            <a href>Học sinh tiêu biểu</a> 
          </h2>
        </figure>
        {this.renderItem()}
      </div>
    </aside>
  </div>

    )
  }
}

export default GoodStudent;
