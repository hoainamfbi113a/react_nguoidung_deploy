import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import QuestionItem from './QuestionItem'
import jwt_decode from 'jwt-decode'
import Countdown from 'react-countdown-now';
import Swal from 'sweetalert-react';
//import 'sweetalert/dist/sweetalert.css';
import './styleQuestion.css';
class Question extends Component {
  constructor() {//Ham khoi tao
    super()
    this.state = {
      date: Date.now()+6000,
      showAlert: false,
      ans0: '',
      ans1: '',
      ans2: '',
      ans3: '',
      ans4: '',
      ans5: '',
      ans6: '',
      ans7: '',
      ans8: '',
      ans9: '',
      memberid: '',
      iddethi: '',
      diem: '',
      timeEnd:'',
      dapan: [],
      persons: []
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
      _id: this.state._id,
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
      iddethi: this.state.iddethi,
      memberid: this.state.memberid
    })
      .then(function (response) {
        if (response.data === 'User already exists')
          alert('User already exists');
        else {
          alert(response.data + ' điểm');
          r.props.history.push('/')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    r.props.history.push('/')
  }
  componentDidMount() {
    this.setState({ iddethi: this.props.match.params.id });
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)//giai ma token
    console.log(decoded)
    this.setState({
      // first_name: decoded.first_name,
      memberid: decoded.memberLogin
    })
    axios.get('http://localhost:5000/admin/question/list/' + this.props.match.params.id)
      .then(response => {
        this.setState({ persons: response.data.question,
          timeEnd: response.data.timeEnd});
        // console.log(response.data);
      })
      .catch(function (error) {
        
      })
  }
  renderItem = () => {
    let { items, idEdit, nameEdit, levelEdit, persons } = this.state;
    return (
      persons.map((item, index) => {
        return (

          <div className="test">

            <div className="socau">
              <span className="num">Câu {index + 1}:</span>
            </div>
            <div className="question">
              <div className="question-text">
                <h5>{item.questionName}</h5>
              </div>
            </div>
            <div className="answer">
              <div className="answer-item">
                <input type="radio" name={"ans" + index} onChange={this.onChange} value="A" /><span>{item.questionResultA}</span>

              </div>
              <div className="answer-item">
                <input type="radio" name={"ans" + index} onChange={this.onChange} value="B" /><span>{item.questionResultB}</span>
              </div>
              <div className="answer-item">
                <input type="radio" name={"ans" + index} onChange={this.onChange} value="C" /><span>{item.questionResultC}</span>
              </div>
              <div className="answer-item">
                <input type="radio" name={"ans" + index} onChange={this.onChange} value="D" /><span>{item.questionResultD}</span>
              </div>
            </div>
            <Swal
              show={this.state.showAlert}
              title="Điểm của bạn là"
              text={this.state.diem}
              onOutsideClick={() => this.setState({ showAlert: false })}
              onEscapeKey={() => this.setState({ showAlert: false })}
              onConfirm={() => this.setState({ showAlert: false })}
            />
          </div>
        )
      })
    )
  }
  render() {
    const renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
        this.inputElement.click();
      } else {
        return <span>{hours}:{minutes}:{seconds}</span>;
      }
    };
    let time = (+this.state.timeEnd.slice(0,2)*60000) -5000;
    let timeEnd = this.state.date + time
    // alert(+this.state.timeEnd.slice(0,2)*1000);
    // alert(timeEnd);
    return (

      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
        <aside className="aside-main">
          <div className="count">
            <Countdown
              date={timeEnd}
              renderer={renderer}
            />
          </div>
          <form onSubmit={this.onSubmit}>
            {this.renderItem()}
            {/* <input type="submit" class="btn btn-primary" value="Nộp bài"/> */}
            <input ref={input => this.inputElement = input} style={{ background: '#999', padding: '5px 5px', marginLeft: '50%' }} type="submit" name="" value="Nộp bài" ref={input => this.inputElement = input} />
          </form>
        </aside>
      </div>
    )
  }
}

export default Question
