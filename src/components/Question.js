import React, { Component } from 'react'
import { login } from './UserFunctions'

class Question extends Component {
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
              <style dangerouslySetInnerHTML={{__html: "\n\n*{\n    margin: 0;\n    padding:0;\n    box-sizing: border-box;\n}\nbutton,form,input{\n    box-sizing: border-box;\n}\nbody{\n    background: #f0f0f0;\n    font-family:Helvetica, sans-serif\n}\na{\n    text-decoration: none;\n}\n.web-content{\n    display: grid;\n    grid-gap: 10px;\n}\nheader{\n    height:55px;\n    background: rgb(218, 216, 216);\n    display: grid;\n}\n.header-content{\n    width: 90%;\n    margin: auto;\n    display: grid;\n    grid-template-columns: 20% 60% 20%;\n}\n.content{\n    z-index: 1;\n    background: #f0f0f0;\n    width: 90%;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: 60px 60px 1540px 50px;\n    grid-template-areas:'menu menu menu'\n                        'aside-tree aside-tree aside-tree'\n                        'aside-main aside-main aside-main'\n                        'aside-fb aside-youtube aside-youtube';\n    grid-gap:10px;\n    overflow: hidden;\n}\n.menu{\n    grid-area: menu;\n    background: rgb(144, 144, 245);\n}\n.aside-tree{\n    grid-area: aside-tree;\n    background: rgb(136, 188, 248);\n}\n.aside-main{\n    grid-area: aside-main;\n    background: rgb(191, 226, 247);\n    display: grid;\n    grid-auto-rows: repeat(5,1fr);\n    z-index: 2;\n    grid-gap: 10px;\n}\n.socau{\n    background: turquoise;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40px;\n    width: 90px;\n    padding: 5px 10px;\n}\n.socau.num{\n    font-size: 20px;\n    width: 90;\n    vertical-align: top;\n}\n.test{\n    \n    margin-bottom: 15px;\n    padding: 20px 0 0;\n}\n.test .question{\n    \n    display: flex;\n    /* justify-content: center; */\n    align-items: center;\n    flex-direction: column;\n    margin-bottom: 15px;\n    padding: 20px 0 0;\n}\n.question.question-text{\n    height: 200px;\n    margin: 10px 10px 10px 10px;\n    text-align: center;\n    \n}\n.question.question-images{\n    height: 600px;\n    margin: 10px 10px 10px 10px;\n}\n.test .answer{\n    height: 60px;\n    display: flex;\n    margin: 10px 10px 10px 10px;\n}\n.answer .answer-item{\n    height: 60px;\n    margin: 0 auto;\n    text-align: center;\n}\n\n \n\t" }} />
              <h1>ht</h1>
    
      <aside className="aside-main">
        <div className="test">
          <div className="socau">
            <span className="num">Cau 1:</span>
          </div>
          <div className="question">
            <div className="question-text">
              <h5>How are you today?</h5>
            </div>
            <div className="question-images">
              <img src="../img/images/banner1.jpg" />
            </div>
          </div>
          <div className="answer">
            <div className="answer-item">
              <input type="radio" name="gender" defaultValue="A" /><span>A. Good</span>
            </div>
            <div className="answer-item">
              <input type="radio" name="gender" defaultValue="B" /><span>B. I going to school by bike</span> 
            </div>
            <div className="answer-item">
              <input type="radio" name="gender" defaultValue="C" /><span>C. Minh is a cute boy</span>
            </div>
            <div className="answer-item">
              <input type="radio" name="gender" defaultValue="D" /><span>D. Good idea</span>
            </div>
          </div>
        </div>
        <div className="test">
          <div className="socau">
            <span className="num">Cau 1:</span>
          </div>
          <div className="question">
            <div className="question-text">
              <h5>How are you today?</h5>
            </div>
            <div className="question-images">
              <img src="../img/images/banner1.jpg" />
            </div>
          </div>
          <div className="answer">
            <div className="answer-item">
              <input type="radio" name="gender" defaultValue="A" /><span>A. Good</span>
            </div>
            <div className="answer-item">
              <input type="radio" name="gender" defaultValue="B" /><span>B. I going to school by bike</span> 
            </div>
            <div className="answer-item">
              <input type="radio" name="gender" defaultValue="C" /><span>C. Minh is a cute boy</span>
            </div>
            <div className="answer-item">
              <input type="radio" name="gender" defaultValue="D" /><span>D. Good idea</span>
            </div>
          </div>
        </div>
        <div className="test">
          <div className="socau">
            <span className="num">Cau 1:</span>
          </div>
          <div className="question">
            <div className="question-text">
              <h5>How are you today?</h5>
            </div>
            <div className="question-images">
              <img src="../img/images/banner1.jpg" />
            </div>
          </div>
          <div className="answer">
            <div className="answer-item">
              <input type="radio" name="gender" defaultValue="A" /><span>A. Good</span>
            </div>
            <div className="answer-item">
              <input type="radio" name="gender" defaultValue="B" /><span>B. I going to school by bike</span> 
            </div>
            <div className="answer-item">
              <input type="radio" name="gender" defaultValue="C" /><span>C. Minh is a cute boy</span>
            </div>
            <div className="answer-item">
              <input type="radio" name="gender" defaultValue="D" /><span>D. Good idea</span>
            </div>
          </div>
        </div>
        <div className="test">
          <div className="socau">
            <span className="num">Cau 1:</span>
          </div>
          <div className="question">
            <div className="question-text">
              <h5>How are you today?</h5>
            </div>
            <div className="question-images">
              <img src="../img/images/banner1.jpg" />
            </div>
          </div>
          <div className="answer">
            <div className="answer-item">
              <input type="radio" name="gender" defaultValue="A" /><span>A. Good</span>
            </div>
            <div className="answer-item">
              <input type="radio" name="gender" defaultValue="B" /><span>B. I going to school by bike</span> 
            </div>
            <div className="answer-item">
              <input type="radio" name="gender" defaultValue="C" /><span>C. Minh is a cute boy</span>
            </div>
            <div className="answer-item">
              <input type="radio" name="gender" defaultValue="D" /><span>D. Good idea</span>
            </div>
          </div>
        </div>
      </aside>
      </div>
    )
  }
}

export default Question
