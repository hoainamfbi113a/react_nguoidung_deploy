import React, { Component } from 'react'
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import "./style.css"

export default class UpdateUser extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this)
        this.state = {
          _id:'',
          memberLogin: '',
          memberPass:'',
          memberName : '',
          memberDate : '',
          memberSex : 'NAM',
          memberAddress : '',
          memberClassId : '',
        }
      }
      componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)//giai ma token
        // console.log(decoded)
        axios.get('http://localhost:5000/admin/member/'+decoded._id)
            .then(response => {
                this.setState({
                    _id: decoded._id,
                    memberLogin: response.data.memberLogin,
                    memberPass:response.data.memberPass,
                    memberName : response.data.memberName,
                    memberDate : response.data.memberDate,
                    memberSex : response.data.memberSex,
                    memberAddress : response.data.memberAddress,
                    memberClassId : response.data.memberClassId,
                     });
            })
            .catch(function (error) {
                console.log(error);
            })
      }
      onChange = (e) => {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)//giai ma token
        console.log(decoded)
        switch (e.target.name) {
          case 'avatarContentImg':
            this.setState({ avatarContentImg: e.target.files[0] });
            break;
          default:
            this.setState({ [e.target.name]: e.target.value });
        }
      }
      onSubmit(e) {
        e.preventDefault();
        const {_id, memberLogin, memberPass, avatarContentImg,memberName,memberDate,memberSex,memberAddress } = this.state;
          const formData = new FormData()
          formData.append('_id', _id);
          formData.append('avatarContentImg', avatarContentImg);
          formData.append('memberLogin', memberLogin);
          formData.append('memberPass', memberPass);
          formData.append('memberName', memberName);
          formData.append('memberDate', memberDate);
          formData.append('memberSex', memberSex);
          formData.append('memberAddress', memberAddress);
          axios.post('http://localhost:5000/admin/exam/excel', formData)
          .then(res => console.log(res.data));
          alert("Cập nhật thành công")
        //   this.props.history.push('/');
    }
    render() {
        return (
            <div className="update-user-wrapper">
            <div className="inner">
              <div className="image-holder">
                <img className="update-user-img" src="../img/images/imgnew.png" alt="" />
              </div>
              <form action className="form-update-user" noValidate onSubmit={this.onSubmit}>
                <h3>Cập nhật thông tin</h3>
                {/* <div className="form-holder active">
                  <input type="text" placeholder="Tên đăng nhập" onChange={this.onChange} name="memberLogin" value={this.state.memberLogin} className="form-control" />
                </div> */}
                
                <div className="form-holder">
                 <input type="hidden" className="form-control"  placeholder="text" name="_id" value={this.state._id}/>
                  <input type="text" className="form-control" style={{fontSize: '15px'}} placeholder="Họ và tên" onChange={this.onChange} name="memberName" value={this.state.memberName}/>
                </div>
                {/* <div className="form-holder">
                  <input type="password" placeholder="e-mail" className="form-control" />
                </div> */}
                <div className="form-holder">
                  <input type="date" className="form-control" style={{fontSize: '15px'}} placeholder="Ngày sinh"onChange={this.onChange} name="memberDate" value={this.state.memberDate} />
                </div>
                <div className="form-holder">
                  <input type="text" className="form-control" style={{fontSize: '15px'}} placeholder="Địa chỉ"onChange={this.onChange} name="memberAddress" value={this.state.memberAddress} />
                </div>
                <div className="form-holder">
                  <input type="file" className="form-control" style={{fontSize: '15px'}} type="file"
                  name="avatarContentImg"
                  onChange={this.onChange} />
                </div>
                <div className="form-login">
                  <button className="update-user-button">Cập nhật</button>
                  {/* <p>Already Have account? <a className="updateuser-login" href="#">Login</a></p> */}
                </div>
              </form>
            </div>
          </div>
        )
    }
}
