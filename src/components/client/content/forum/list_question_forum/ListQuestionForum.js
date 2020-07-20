import React, { Component } from 'react'
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';
import ListQuestionForumItem from './ListQuestionForumItem';
import  "./style.css";
class ListQuestionForum extends Component {
  constructor(props){
    super(props)
    this.state={
      questionForum:[],
      isShowAns:false,
      active: false,
    }
  }
  componentDidMount =() =>
  {
    axios.get('http://localhost:5000/client/forumquestion/list/')
      .then(response => {
        this.setState({questionForum:response.data})
      })
      .catch(function (error){
        console.log(error +"loi ne");
      })
  }
  renderEditor = () =>{
            let xhtml = null;
            if(this.state.active===true){
              xhtml=(  
                // <h1>Xin chao cau</h1>
                <form className="form-horizontal" noValidate onSubmit={this.onSubmit}>
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
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }
  renderItem=()=>{
    let{questionForum}=this.state;
    console.log(questionForum)
    return(
        questionForum.map((item,index)=>{
        return(
          <ListQuestionForumItem key={item._id} item={item} index={index}></ListQuestionForumItem>
        )
      })
    )
  }
  render() {
    return (
    <div className="hstieubieucuanuoc">
    <aside className="aside2">
      <div>
        <figure style={{background: '#fff', height: '38px'}}>
          <h2>
            <a href>Danh sach cau hoi</a> 
          </h2>
        </figure>
        {/* {this.renderEditor()} */}
        {/* <h1>Xin chao cau</h1> */}
        {/* {this.renderItem()} */}
        <div className="_item_ques" ques_id={40975} uid={155057} stt={5}>
        <div className="_title">
          <a className="_gt-member" href="member/155057">
            <div className="gt-ava">
              <img className="gt-ava-mem" src="https://www.luyenthi123.com/data/ava_member/avatar_fantasy/26.jpg" />
              <span className="vip_user"> </span>
            </div>
            <div className="gt-info">
              <div className="gt_usn">luonggiahuy</div>
            </div>
          </a>
        </div>
        <br /><a title="Xem chi tiết câu hỏi" href="goc-thong-thai/question?ques=40975">
          <p><span style={{color: 'rgb(64, 64, 64)', fontFamily: 'source sans pro,sans-serif', fontSize: '16px'}}>Có 1 nhóm thám hiểm khi đi vào rừng, họ vô tình bị 1 con khỉ giật lấy túi đồ , hỏi muốn con khỉ đó trả lại túi đồ thì phải làm thế nào</span></p>
        </a><br />
        <a href="goc-thong-thai/tag?mon=8001" title="Xem thêm các câu hỏi Toán lớp 1"><div className="_class_ques _class_1_ques">Toán lớp 1</div></a>
        <br />
        <br />
        <div className="box_content_hint">
            <div className="box_content_hint" onClick={()=>{
              this.handleShowAns()
            }} >Trả lời câu hỏi này </div>
            {/* onclick={()=>{this.handleShowAns}} */}
          </div>
        {this.state.active ?this.renderEditor():null}
        <div className="box_content_reply" />
        <div className="box_content_ans">
          <div className="_item_ans" ans_id={618174} uid={143886} ques_id={40975}>
            <div className="_title">
              <a className="_gt-member" href="member/143886">
                <div className="gt-ava">
                  <img className="gt-ava-mem" src="https://www.luyenthi123.com/data/ava_member/avatar_fantasy/av_7.jpg" />
                  <span className="vip_user"> </span>
                </div>
                <div className="gt-info">
                  <div className="gt_usn">ankhang192008
                  </div>
                </div>
              </a>
            </div>
            <div className="gt-ct-ans"><p>dễ mà.rung cây là xong rồi&nbsp;đó</p></div>
            <br />
           
          </div>
          <div className="_item_ans" ans_id={618174} uid={143886} ques_id={40975}>
            <div className="_title">
              <a className="_gt-member" href="member/143886">
                <div className="gt-ava">
                  <img className="gt-ava-mem" src="https://www.luyenthi123.com/data/ava_member/avatar_fantasy/av_7.jpg" />
                  <span className="vip_user"> </span>
                </div>
                <div className="gt-info">
                  <div className="gt_usn">ankhang192008
                  </div>
                </div>
              </a>
            </div>
            <div className="gt-ct-ans"><p>dễ mà.rung cây là xong rồi&nbsp;đó</p></div>
            <br />
          </div>
        </div></div>
        <div className="_item_ques" ques_id={40975} uid={155057} stt={5}>
        <div className="_title">
          <a className="_gt-member" href="member/155057">
            <div className="gt-ava">
              <img className="gt-ava-mem" src="https://www.luyenthi123.com/data/ava_member/avatar_fantasy/26.jpg" />
              <span className="vip_user"> </span>
            </div>
            <div className="gt-info">
              <div className="gt_usn">luonggiahuy</div>
            </div>
          </a>
        </div>
        <br /><a title="Xem chi tiết câu hỏi" href="goc-thong-thai/question?ques=40975">
          <p><span style={{color: 'rgb(64, 64, 64)', fontFamily: 'source sans pro,sans-serif', fontSize: '16px'}}>Có 1 nhóm thám hiểm khi đi vào rừng, họ vô tình bị 1 con khỉ giật lấy túi đồ , hỏi muốn con khỉ đó trả lại túi đồ thì phải làm thế nào</span></p>
        </a><br />
        <a href="goc-thong-thai/tag?mon=8001" title="Xem thêm các câu hỏi Toán lớp 1"><div className="_class_ques _class_1_ques">Toán lớp 1</div></a>
        <br />
        <br />
        <div className="box_content_hint">
            <div className="box_content_hint" onClick={()=>{
              this.handleShowAns()
            }} >Trả lời câu hỏi này </div>
            {/* onclick={()=>{this.handleShowAns}} */}
          </div>
        {this.state.active ?this.renderEditor():null}
        <div className="box_content_reply" />
        <div className="box_content_ans">
          <div className="_item_ans" ans_id={618174} uid={143886} ques_id={40975}>
            <div className="_title">
              <a className="_gt-member" href="member/143886">
                <div className="gt-ava">
                  <img className="gt-ava-mem" src="https://www.luyenthi123.com/data/ava_member/avatar_fantasy/av_7.jpg" />
                  <span className="vip_user"> </span>
                </div>
                <div className="gt-info">
                  <div className="gt_usn">ankhang192008
                  </div>
                </div>
              </a>
            </div>
            <div className="gt-ct-ans"><p>dễ mà.rung cây là xong rồi&nbsp;đó</p></div>
            <br />
           
          </div>
          <div className="_item_ans" ans_id={618174} uid={143886} ques_id={40975}>
            <div className="_title">
              <a className="_gt-member" href="member/143886">
                <div className="gt-ava">
                  <img className="gt-ava-mem" src="https://www.luyenthi123.com/data/ava_member/avatar_fantasy/av_7.jpg" />
                  <span className="vip_user"> </span>
                </div>
                <div className="gt-info">
                  <div className="gt_usn">ankhang192008
                  </div>
                </div>
              </a>
            </div>
            <div className="gt-ct-ans"><p>dễ mà.rung cây là xong rồi&nbsp;đó</p></div>
            <br />
          </div>
        </div></div>
      </div>
    </aside>
  </div>
    )
  }
}
export default ListQuestionForum;
