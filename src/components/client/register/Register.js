import React, { Component } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom'
class Register extends Component {
  constructor(props) {//khởi tạo giá trị
    super(props)
    this.state = {
      memberLogin: '',
      memberPass: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this)//để nó hiểu this ở đây là Resgister
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })//cập nhật giá trị input
  }
  onSubmit(e) {
    var r = this;
    e.preventDefault();//khong tu dong chuyen trang
    axios.post('https://cititechnodejs.herokuapp.com/users/register', {
      memberLogin: this.state.memberLogin,
      memberPass: this.state.memberPass
    })
    .then(function (response) {
      if(response.data ==='User already exists')
        alert('User already exists');
      else{
      r.props.history.push('/login')
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
  <div  className="parent-box">
              
  
        <form className="box" noValidate onSubmit={this.onSubmit}>
          <div>
            <h1>Register</h1>
            <input  type="text"
                  name="memberLogin"
                  placeholder="Enter memberLogin"
                  value={this.state.memberLogin}
                  onChange={this.onChange} />
            <input  type="password"
                 
                  name="memberPass"
                  placeholder="memberPass"
                  value={this.state.memberPass}
                  onChange={this.onChange} />
           <input type="submit" name="" value="Register"/>
          </div>
        </form>
        </div>
     
    )
  }
}

export default withRouter(Register)