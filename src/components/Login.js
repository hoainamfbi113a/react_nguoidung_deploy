import React, { Component } from 'react'
import { login } from './UserFunctions'

class Login extends Component {
  constructor() {//Ham khoi tao
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this)//để nó hiểu this ở đay là login
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(e) {//mỗi khi thay đổi giá trị input
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()//không làm refesh trang khi click

    const user = {
      email: this.state.email,
      password: this.state.password
    }
    login(user).then(res => {//gọi hàm bên userfunction
      if (res) {//tồn tại giá trị 
        this.props.history.push('/profile')
      }
    })
  }
  render() {
    return (
      <div>
 
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
        <style dangerouslySetInnerHTML={{__html: "\n\n form.login {\n    box-sizing: border-box;\n    width: 350px;\n    margin: 100px auto ;\n    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);\n    padding-bottom: 40px;\n    border-radius: 3px;\n  }\n  form.login div{\n      margin-left: 50px;\n  }\n  form.login div h1 {\n    box-sizing: border-box;\n    padding: 20px;\n  }\n  \n  input.login {\n    margin: 40px 25px;\n    width: 200px;\n    display: block;\n    border: none;\n    padding: 10px 0;\n    border-bottom: solid 1px #1abc9c;\n    transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, #1abc9c 4%);\n    background-position: -200px 0;\n    background-size: 200px 100%;\n    background-repeat: no-repeat;\n    color: #0e6252;\n  }\n  input.login:focus, input:valid {\n    box-shadow: none;\n    outline: none;\n    background-position: 0 0;\n  }\n  \n  \n  button.login {\n    border: none;\n    background: #1abc9c;\n    cursor: pointer;\n    border-radius: 3px;\n    padding: 6px;\n    width: 200px;\n    color: white;\n    margin-left: 25px;\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);\n  }\n  button.login:hover {\n    transform: translateY(-3px);\n    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.2);\n    cursor:pointer;\n  }\n\n \n\t" }} />
      <form className="login" noValidate onSubmit={this.onSubmit}>
        <div>
          <h1>Login</h1>
          <input className="login" type="email"   
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange} />
          <input className="login" type="password"
                  
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange} />
          <button className="login" type="submit">Submit</button>
        </div>
      </form>
      <img style={{marginLeft: '130px'}} height="200px" width="1250px" src="../images/quangcao.jpg" />
      </div>
    )
  }
}

export default Login
