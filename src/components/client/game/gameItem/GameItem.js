import React from "react";
// import { persons } from "./persons";
import "./style.css";
import ReactCardFlip from 'react-card-flip';
import axios from 'axios';
class MainQuiz extends React.Component {
  constructor() {
    super();
      this.state = {
        currentQuestion: 0,
        myAnswer: null,
        options: [],
        ans1:"",
        ans2:"",
        ans3:"",
        ans1img:"",
        ans2img:"",
        ans3img:"",
        score: 0,
        disabled: true,
        isEnd: false,
        isFlipped: false,
        persons:[],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  // state = {
    
  // };
  handleClick(e) {
    // e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  loadpersons = () => {

    this.setState(() => {
      return {
        questions: this.state.persons[this.state.currentQuestion].vocabularygame,
        answer: this.state.persons[this.state.currentQuestion].vocabularygame,
        // options: persons[this.state.currentQuestion].options
        ans1:this.state.persons[this.state.currentQuestion].questionResultA.meaningA,
        ans2:this.state.persons[this.state.currentQuestion].questionResultB.meaningB,
        ans3:this.state.persons[this.state.currentQuestion].questionResultC.meaningC,
        ans1img:this.state.persons[this.state.currentQuestion].questionResultA.ImgQuestionA,
        ans2img:this.state.persons[this.state.currentQuestion].questionResultB.ImgQuestionB,
        ans3img:this.state.persons[this.state.currentQuestion].questionResultC.ImgQuestionC,
      };
    });
  };

 async componentDidMount() {
    // alert("xin chao")
   await axios.get('http://localhost:5000/admin/game/list/'+this.props.match.params.subject)
        .then(response => {
            console.log(response.data);
            this.setState({persons: response.data});
        })
        .catch(function (error) {
            // console.log(error);
        })
      this.loadpersons();
  }
  nextQuestionHandler = () => {
    this.handleClick();
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: this.state.persons[this.state.currentQuestion].vocabularygame,
          // options: persons[this.state.currentQuestion].options,
          answer: this.state.persons[this.state.currentQuestion].vocabularygame,
          ans1:this.state.persons[this.state.currentQuestion].questionResultA.meaningA,
          ans2:this.state.persons[this.state.currentQuestion].questionResultB.meaningB,
          ans3:this.state.persons[this.state.currentQuestion].questionResultC.meaningC,
          ans1img:this.state.persons[this.state.currentQuestion].questionResultA.ImgQuestionA,
          ans2img:this.state.persons[this.state.currentQuestion].questionResultB.ImgQuestionB,
          ans3img:this.state.persons[this.state.currentQuestion].questionResultC.ImgQuestionC,
        };
      });
    }
  }
  //check answer
  checkAnswer = answer => {
    // alert(answer)
    this.setState({ myAnswer: answer, disabled: false });
    this.handleClick();
  };
  finishHandler = () => {
    this.handleClick();
    if (this.state.currentQuestion === this.state.persons.length - 1) {
      this.setState({
        isEnd: true
      });
    }
    if (this.state.myAnswer === this.state.answer) {
      this.setState({
        score: this.state.score + 1
      });
    }
  };
  render() {
    const { options, myAnswer, currentQuestion, isEnd,ans1,ans2,ans3,ans1img,ans2img,ans3img } = this.state;
    // alert(ans2)
    if (isEnd) {
      return (
        <div className="game-result">
          <h3>Game Over your Final score is {this.state.score} points </h3>
          <div>
            The correct answer's for the questions was
            <ul className="game-question-right">
              {this.state.persons.map((item, index) => (
                <li className="ui floating message options" key={index}>
                  {item.vocabularygame}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App game-container">
          <h1>{this.state.questions} </h1>
          <span>{`Questions ${currentQuestion}  out of ${this.state.persons.length -
            1} remaining `}</span>
          {/* {options.map(option => (
            <p
              key={option.id}
              className={`ui floating message options
         ${myAnswer === option ? "selected" : null}
         `}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          ))} */}
          <div className="game-list-img">
          <ReactCardFlip isFlipped={this.state.isFlipped} >
          <div>
          <img  onClick={() => this.checkAnswer(ans1)} className="img-game" src={`http://localhost:5000/${ans1img}`}></img>
          {/* <button onClick={this.handleClick}>Click to flip</button> */}
          </div>
          <div>{ans1}</div>
          </ReactCardFlip>
          <ReactCardFlip isFlipped={this.state.isFlipped} >
          <img onClick={() => this.checkAnswer(ans2)} className="img-game" src={`http://localhost:5000/${ans2img}`}></img>
          <div>{ans2}</div>
          </ReactCardFlip>
          <ReactCardFlip isFlipped={this.state.isFlipped} >
          <img onClick={() => this.checkAnswer(ans3)} className="img-game" src={`http://localhost:5000/${ans3img}`}></img>
          <div>{ans3}</div>
          </ReactCardFlip>
          </div>
          {currentQuestion < this.state.persons.length - 1 && (
            <button
              className="ui inverted button btnNext" style={{background: 'red'}}
              disabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
              Next
            </button>
          )}
          {/* //adding a finish button */}
          {currentQuestion === this.state.persons.length - 1 && (
            <button className="ui inverted button btnNext" onClick={this.finishHandler}>
              Finish
            </button>
          )}
        </div>
      );
    }
  }
}

export default MainQuiz;
