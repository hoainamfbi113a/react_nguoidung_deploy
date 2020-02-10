import React, { Component } from 'react'
import  { Redirect } from 'react-router-dom'
import axios from 'axios';
import QuestionItem from './QuestionItem'
import jwt_decode from 'jwt-decode'
import Countdown from 'react-countdown-now';
import Swal from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';


// Renderer callback with condition

class Question extends Component {
  constructor() {//Ham khoi tao
    super()
    this.state = {
          date: Date.now() + 600000,
          showAlert:false,
          ans0: '',
          ans1:'',
          ans2 : '',
          ans3 : '',
          ans4: '',
          ans5:'',
          ans6 : '',
          ans7 : '',
          ans8: '',
          ans9:'',
          memberid:'',
          iddethi:'',
          diem:'',
          dapan:[],
          persons:[]
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })//cập nhật giá trị input
   
  }
  onSubmit(e) {
    var r = this;
    e.preventDefault();
    axios.post('http://localhost:5000/client/dethi', {
        _id:this.state._id,
        ans0: this.state.ans0,
        ans1: this.state.ans1,
        ans2: this.state.ans2,
        ans3: this.state.ans3,
        ans4: this.state.ans4,
        ans5: this.state.ans5,
        ans6: this.state.ans6,
        ans7: this.state.ans7,
        ans8: this.state.ans8,
        ans9: this.state.ans9,
        iddethi:this.state.iddethi,
        memberid:this.state.memberid
      })
      .then(function (response) {
        if(response.data ==='User already exists')
          alert('User already exists');
        else{
          alert(response.data+' điểm');
          <Redirect to='/'  />
          r.props.history.push('/')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
      r.props.history.push('/')
  }
  componentDidMount(){
    // this.setState({iddethi:window.location.href.slice(35)});
    this.setState({iddethi:this.props.match.params.id});
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)//giai ma token
    console.log(decoded)
    this.setState({
      // first_name: decoded.first_name,
      memberid: decoded.memberLogin
    })
    axios.get('http://localhost:5000/admin/question/list/'+this.props.match.params.id)
        .then(response => {
            this.setState({persons: response.data});
            // console.log(response.data['questionResultD']);
        })
        .catch(function (error) {
            // console.log(error);
        })
}
      renderItem = () =>{   
        
        let {items,idEdit,nameEdit,levelEdit,persons} = this.state; 
        return (
          persons.map((item,index)=>{
            return(   
                 
              <div className="test">
                
                  <div className="socau">
                    <span className="num">Câu {index+1}:</span>
                  </div>
                  <div className="question">
                    <div className="question-text">
                      <h5>{item.questionName}</h5>
                    </div>
                    <div className="question-images">
                      <img src="../img/images/banner1.jpg" />
                      <input type="hidden" className="form-control" id="inputPassword3" 
                      placeholder="Số câu dễ"  name="dapan2" value="aaaaaaaaaaaaaaaa"/>
                    </div>
                    
                  </div>
                  <div className="answer">
                    <div className="answer-item">
                      <input type="radio" name={"ans"+index} onChange={this.onChange} value="A" /><span>{item.questionResultA}</span>
                      
                    </div>
                    <div className="answer-item">
                      <input type="radio" name={"ans"+index} onChange={this.onChange} value="B" /><span>{item.questionResultB}</span> 
                    </div>
                    <div className="answer-item">
                      <input type="radio" name={"ans"+index} onChange={this.onChange} value="C" /><span>{item.questionResultC}</span>
                    </div>
                    <div className="answer-item">
                      <input type="radio" name={"ans"+index} onChange={this.onChange} value="D" /><span>{item.questionResultD}</span>
                    </div>
                  </div>
                    <Swal
                            show={this.state.showAlert}
                            title="Điểm của bạn là"
                            text= {this.state.diem}
                            onOutsideClick={()  => this.setState({ showAlert: false })}
                            onEscapeKey={()     => this.setState({ showAlert: false })}
                            onConfirm={() => this.setState({ showAlert: false })}
                />
                </div>
             )
          })
        )
      }
  render() {
    const renderer = ({hours, minutes, seconds, completed }) => {
      if (completed) {
        this.inputElement.click();
      } else {
        // Render a countdown
        return <span>{hours}:{minutes}:{seconds}</span>;
      }
    };
    return (
    
            <div>
              <meta charSet="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
              <title>Document</title>
              <style dangerouslySetInnerHTML={{__html: "\n\n*{\n    margin: 0;\n    padding:0;\n    box-sizing: border-box;\n}\nbutton,form,input{\n    box-sizing: border-box;\n}\nbody{\n    background: #f0f0f0;\n    font-family:Helvetica, sans-serif\n}\na{\n    text-decoration: none;\n}\n.web-content{\n    display: grid;\n    grid-gap: 10px;\n}\nheader{\n    height:55px;\n    background: rgb(218, 216, 216);\n    display: grid;\n}\n.header-content{\n    width: 90%;\n    margin: auto;\n    display: grid;\n    grid-template-columns: 20% 60% 20%;\n}\n.content{\n    z-index: 1;\n    background: #f0f0f0;\n    width: 90%;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: 60px 60px 1540px 50px;\n    grid-template-areas:'menu menu menu'\n                        'aside-tree aside-tree aside-tree'\n                        'aside-main aside-main aside-main'\n                        'aside-fb aside-youtube aside-youtube';\n    grid-gap:10px;\n    overflow: hidden;\n}\n.menu{\n    grid-area: menu;\n    background: rgb(144, 144, 245);\n}\n.aside-tree{\n    grid-area: aside-tree;\n    background: rgb(136, 188, 248);\n}\n.aside-main{\n    grid-area: aside-main;\n    background: rgb(191, 226, 247);\n    display: grid;\n    grid-auto-rows: repeat(5,1fr);\n    z-index: 2;\n    grid-gap: 10px;\n}\n.socau{\n    background: turquoise;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40px;\n    width: 90px;\n    padding: 5px 10px;\n}\n.socau.num{\n    font-size: 20px;\n    width: 90;\n    vertical-align: top;\n}\n.test{\n    \n    margin-bottom: 15px;\n    padding: 20px 0 0;\n}\n.test .question{\n    \n    display: flex;\n    /* justify-content: center; */\n    align-items: center;\n    flex-direction: column;\n    margin-bottom: 15px;\n    padding: 20px 0 0;\n}\n.question.question-text{\n    height: 200px;\n    margin: 10px 10px 10px 10px;\n    text-align: center;\n    \n}\n.question.question-images{\n    height: 600px;\n    margin: 10px 10px 10px 10px;\n}\n.test .answer{\n    height: 60px;\n    display: flex;\n    margin: 10px 10px 10px 10px;\n}\n.answer .answer-item{\n    height: 60px;\n    margin: 0 auto;\n    text-align: center;\n}\n\n \n\t" }} />
             
      <aside className="aside-main">
      <Countdown
              date={this.state.date} 
              renderer={renderer}
               />   
      <form  onSubmit={this.onSubmit}>
      {this.renderItem()}
      {/* <input type="submit" class="btn btn-primary" value="Nộp bài"/> */}
      <input ref={input => this.inputElement = input} style={{background: '#999', padding: '5px 5px', marginLeft: '650px'}} type="submit" name="" value="Nộp bài" ref={input => this.inputElement = input}/>
      </form>
      </aside>
      </div>
    )
  }
}

export default Question
