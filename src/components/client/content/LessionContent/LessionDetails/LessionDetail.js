import React, { Component } from 'react'
import axios from 'axios';
import parse from 'html-react-parser';
export default class LessionDetail extends Component {
    constructor() {//Ham khoi tao
        super()
        this.state = {
              persons:[]
        }
      }
    componentDidMount(){
        const { id } = this.props.match.params;
        // this.setState({iddethi:this.props.match.params.id});
        axios.get('http://localhost:5000/client/lesson/'+ id)
            .then(response => {
                this.setState({
                    persons: response.data
                });
            })
            .catch(function (error) {
            })
      }
      
    render() {
        return (
            <div style={{width: '80%', margin: '0 auto'}}>
                {/* <h1>{this.state.persons.lessionContentDetail}</h1> */}
                   {parse(`${this.state.persons.lessionContentDetail}`)}
                   {/* {parse(`<p><audio class="audio-for-speech"></audio></p><div class="translate-tooltip-mtz hidden"><div class="header"><div class="header-controls">&nbsp;</div></div></div><p>I. CẤU TR&Uacute;C</p><p><u>1. C&acirc;u khẳng định</u></p><div class="table-responsive2"><table class="table table-bordered table-striped" border="1" cellspacing="0" cellpadding="0"><tbody><tr><td>&nbsp;</td><td><p align="center">Động từ tobe</p></td><td><p align="center">Động từ thường</p></td></tr><tr><td><p>Cấu tr&uacute;c</p></td><td><p align="center">S + will + &nbsp;be + N/Adj</p></td><td><p align="center">S + will +&nbsp; V(nguy&ecirc;n thể)</p></td></tr><tr><td><p>Lưu &yacute;</p></td><td colspan="2"><p align="center">will = &lsquo;ll</p></td></tr><tr><td><p>V&iacute; dụ</p></td><td><p>-&nbsp;<em>She&lsquo;ll be fine.</em><em>&nbsp;(C&ocirc; ấy sẽ ổn th&ocirc;i.)</em></p><p><em>-&nbsp;You will be mine soon&nbsp;(Anh sẽ sớm thuộc về em th&ocirc;i.)</em></p></td><td><p><em>-&nbsp;I will always love you. (Em sẽ lu&ocirc;n lu&ocirc;n y&ecirc;u anh.)</em></p><p><em>-&nbsp;No worries, I will take care of the children for you. (Đừng lo, em sẽ chăm s&oacute;c bọn trẻ gi&uacute;p chị.)</em></p></td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table></div>`)} */}
                {/* {@html.Raw(htmlString)} */}
                {/* {parseString(this.state.persons.lessionContentDetail)} */}
                {/* {ReactHtmlParser(htmlString)} */}
                {/* <div dangerouslySetInnerHTML={{ __html: this.state.persons.lessionContentDetail }} /> */}
               {/* dangerouslySetInnerHTML={blog.content} {this.state.persons.lessionContentDetail} */}
               {/* <div class="blog_content" dangerouslySetInnerHTML={this.state.persons.lessionContentDetail}  />; */}
            </div>
          
        )
    }
}

