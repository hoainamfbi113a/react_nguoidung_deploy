import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import parse from 'html-react-parser';
import { useHistory } from "react-router-dom";
class ListQuestionForumItem extends Component {
          constructor(props){
            super(props)
            this.state={
              isShowAns:false,
              active: false,
            }
          }
          handleEditorChange = (content, editor) => {
            this.setState({
              answer:content
            })
            this.onSubmit = this.onSubmit.bind(this)
          }
          async onSubmit(e)  {
            var r = this;
            e.preventDefault();
            const token = localStorage.usertoken
            const decoded = jwt_decode(token)//giai ma token
            await this.setState({
              // first_name: decoded.first_name,
              avatarContentImg:decoded.avatarContentImg,
              memberName: decoded.memberLogin
            })
            const { memberName,answer, avatarContentImg} = this.state;
            let formData = {
              
            }
            formData.memberName= memberName;
            formData.answer= answer;
            formData.avatarContentImg = avatarContentImg
            // alert(this.props.id_question);
            axios.post('http://localhost:5000/client/forumquestion/ans/'+this.props.id_question,formData
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
              this.setState({
                active:false,
              })
              window.location.reload(); 
          }
          renderEditor = () =>{
            let xhtml = null;
            if(this.state.active===true){
              xhtml=(  
                <form className="form-horizontal" noValidate onSubmit={this.onSubmit} style={{marginBottom: '60px'}}>
                <div className="box-body">
                    
                    <div className="form-group">
                    <div className="col-sm-10">
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
              )
            }
            return (
              xhtml
            )
          
        }
        
        handleShowAns =() =>{
        if(!localStorage.usertoken)
        {
          this.props.history.push('/login')
        }
          const currentState = this.state.active;
          this.setState({ active: !currentState });
        }
        renderAns = (questionAns) =>{
          console.log(questionAns);
         return questionAns.map((item,index)=>{
            return(
              <div className="_item_ans" ans_id={618174} uid={143886} ques_id={40975}>
              <div className="_title">
                <a className="_gt-member" href="member/143886">
                  <div className="gt-ava">
                    <img className="gt-ava-mem" src={`http://localhost:5000/${item.avatarContentImg}`} />
                    <span className="vip_user"> </span>
                  </div>
                  <div className="gt-info">
                    <div className="gt_usn">{item.length>0?item.memberName:item.memberName}
                    </div>
                  </div>
                </a>
              </div>
              {/* <div className="gt-ct-ans"><p>{item.length>0?item.answer:item.answer}</p></div> */}
              <div className="gt-ct-ans"><p>{item.length>0?parse(item.answer):parse(item.answer)}</p></div>
              <br />
            </div>
            )
          })
        }
    render() {
        let {item,index}=this.props;
        
        return (
          <div className="_item_ques" ques_id={40975} uid={155057} stt={5}>
          <div className="_title">
            <a className="_gt-member" href="member/155057">
              <div className="gt-ava">
                <img className="gt-ava-mem" src={`http://localhost:5000/${item.memberForumQuestion.avatarContentImg}`} />
                <span className="vip_user"> </span>
              </div>
              <div className="gt-info">
                 <div className="gt_usn">{item.memberForumQuestion.memberName}</div>
              </div>
            </a>
          </div>
          <br /><a title="Xem chi tiết câu hỏi" href="goc-thong-thai/question?ques=40975">
            <p><span style={{color: 'rgb(64, 64, 64)', fontFamily: 'source sans pro,sans-serif', fontSize: '16px'}}>{parse(item.titleForumQuestion?item.titleForumQuestion:"")}</span></p>
          </a><br />
          <a href="goc-thong-thai/tag?mon=8001" ><div className="_class_ques _class_1_ques">{item.classForumQuestion}</div></a>
          <br />
          <br />
          <div className="box_content_hint">
              <div className="box_content_hint" onClick={()=>{
                this.handleShowAns()
              }} >Trả lời câu hỏi này </div>
            </div>
          {this.state.active ?this.renderEditor():null}
          <div className="box_content_reply" />
          <div className="box_content_ans">
           {this.renderAns(item.memberForumReply)}
          </div>
          </div>
        );
    }
}
export default withRouter (ListQuestionForumItem);
