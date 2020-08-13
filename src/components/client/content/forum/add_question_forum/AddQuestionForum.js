import React, { Component } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import "./style.css"
export default class AddQuestionForum extends Component {
    constructor(props) {//khởi tạo giá trị
        super(props)
        this.state = {
          _id:'',
          classForumQuestion:"Anh văn 1",
          titleForumQuestion:"",
          memberForumQuestionAvatarContentImg:"",
          memberForumQuestionMemberName:"",
          files:[],
          errors: {}
        }
        this.onChange = this.onChange.bind(this)//để nó hiểu this ở đây là Resgister
        this.onSubmit = this.onSubmit.bind(this)
      }
      onChange = (e) => {
        switch (e.target.name) {
          case 'lessionContentImg':
            this.setState({ lessionContentImg: e.target.files[0] });
            break;
          default:
            this.setState({ [e.target.name]: e.target.value });
        }
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)//giai ma token
        console.log(decoded)
      }
      handleEditorChange = (content, editor) => {
        // console.log('Content was updated:', content);
        this.setState({
          titleForumQuestion:content
        })
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)//giai ma token
        console.log(decoded);
      }
      async onSubmit(e)  {
        var r = this;
        e.preventDefault();
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)//giai ma token
        // console.log(decoded)
        await this.setState({
          memberForumQuestionAvatarContentImg:decoded.avatarContentImg,
          memberForumQuestionMemberName: decoded.memberLogin
        })
        const { classForumQuestion, titleForumQuestion, memberForumQuestionMemberName,memberForumQuestionAvatarContentImg} = this.state;
        let formData = {
          
        }
        formData.memberForumQuestionMemberName= memberForumQuestionMemberName;
        formData.memberForumQuestionAvatarContentImg= memberForumQuestionAvatarContentImg;
        formData.classForumQuestion= classForumQuestion;
        formData.titleForumQuestion= titleForumQuestion;
        // alert(memberForumQuestionMemberName);
        axios.post('https://cititechnodejs.herokuapp.com/client/forumquestion', formData
          )
          .then(function (response) {
            if(response.data ==='User already exists')
              alert('User already exists');
            else{
            r.props.history.push('/forumquestion')
            }
          })
          .catch(function (error) {
            console.log(error);
          });
          setTimeout(()=>{
            r.props.history.push('/forumquestion')
          },400)
       
      }
    render() {
        return (
          // <h1>xin chao</h1>
            <div className="ListQuestionForum-content content" >
                <div className="ListQuestionForum-inf" style={{marginLeft: '15%'}}>
                    <div className="ListQuestionForum-inf">
                        <img className>

                        </img>
                        <h2 className="addquestion-title">
                            Xin chào
                        </h2>
                        <h4 className="addquestion-title">
                            Để đăng câu hỏi mới hãy nhập nội dung câu hỏi vào khung soạn thảo dưới đây:
                        </h4>
                        
                    </div>
                                <form className="form-horizontal" noValidate onSubmit={this.onSubmit}>
                                <div className="box-body">
                                    <div className="form-group">
                                    <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Môn học</label>
                                    <div className="col-sm-10"  >
                                        <input type="hidden" className="form-control"  placeholder="text" onChange={this.onChange} name="_id" value={this.state._id}/>
                                        <select className="form-control"  onChange={this.onChange}  name="classForumQuestion" >
                                        <option value="Anh văn 1">Anh văn lớp 1</option>
                                        <option value="Anh văn 2">Anh văn lớp 2</option>
                                        <option value="Anh văn 3">Anh văn lớp 3</option>
                                        <option value="Anh văn 4">Anh văn lớp 4</option>
                                        <option value="Anh văn 5">Anh văn lớp 5</option>
                                        <option value="Toán lớp 1">Toán lớp 1</option>
                                        <option value="Toán lớp 2">Toán lớp 2</option>
                                        <option value="Toán lớp 3">Toán lớp 3</option>
                                        <option value="Toán lớp 4">Toán lớp 4</option>
                                        <option value="Toán lớp 5">Toán lớp 5</option>
                                    </select>
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <label style={{textAlign: 'left'}} htmlFor="inputPassword3" className="col-sm-2 control-label">Nội dung câu hỏi</label>
                                    <div className="col-sm-10" >
                                    
                                    <Editor
                                        name="titleForumQuestion"
                                            init={{
                                            height: 500,
                                            menubar: false,
                                            plugins: [
                                            'advlist autolink lists link image charmap print preview anchor',
                                            'searchreplace visualblocks code fullscreen',
                                            'insertdatetime media table paste code help wordcount'
                                                ],
                                            toolbar:
                                            'undo redo | formatselect | bold italic backcolor | \
                                                alignleft aligncenter alignright alignjustify | \
                                                bullist numlist outdent indent | removeformat | help'
                                    }}
                                                onEditorChange={this.handleEditorChange}
                                        />
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="box-footer" style={{paddingRight: '69px'}}>
                                    
                                    <button type="submit" className="btn btn-info pull-right">Thêm</button>
                                </div>
                    </form>
                </div>
            </div>
        )
    }
}
