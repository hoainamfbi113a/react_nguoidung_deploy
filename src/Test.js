import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip';
export default class Test extends Component {
    constructor() {
        super();
          this.state = {
          isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
      }
     
      handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }
     
      render() {
        return (
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
             {/* <YOUR_FRONT_CCOMPONENT> */}
             <h1>
             This is the front of the card.
              <button onClick={this.handleClick}>Click to flip</button>
             </h1>
              
            {/* </YOUR_FRONT_CCOMPONENT> */}
     
            {/* <YOUR_BACK_COMPONENT> */}
            <h2>
            This is the back of the card.
              <button onClick={this.handleClick}>Click to flip</button>
            </h2>
              
            {/* </YOUR_BACK_COMPONENT> */}
          </ReactCardFlip>
        )
      }
    }