import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
  constructor() {//hàm khởi tạo
    super()
    this.state = {
      first_name: '',
      memberClassId: '',
      memberLogin: '',
      errors: {}
    }
  }

  componentDidMount() {//hoạt đông theo life cycle
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)//giai ma token
    console.log(decoded)
    this.setState({
      // first_name: decoded.first_name,
      memberClassId: decoded.memberClassId,
      memberLogin: decoded.memberLogin
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center" style={{textAlign: 'center'}}>Xin chào user</h1>
          </div>        
                <h1 style={{textAlign: 'center'}} >{this.state.memberLogin}</h1>
        </div>
      </div>
    )
  }
}

 export default Profile
