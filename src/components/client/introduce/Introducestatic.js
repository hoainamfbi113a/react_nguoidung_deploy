import React, { Component } from 'react'
import './style.css'
export default class Introducestatic extends Component {
    render() {
        return (
            <div className="center-introduce">
        <div className="card">
          <div className="additional">
            <div className="user-card">
              
              <img src="../img/nam.jpg" alt="Avatar" />
            </div>
            <div className="more-info">
              <h1>NGUYEN HOAI NAM</h1>
              <div className="coords">
                <span>Software Engineer</span>
                <span>Joined: 2020</span>
              </div>
              <div className="coords">
                <span>Full stack Developer</span>
                <span>Planet Earth</span>
              </div>
              
            </div>
          </div>
          <div className="general">
            <h1>NGUYEN HOAI NAM</h1>
            <p>About him.</p>
            <span className="more">Hover over the card for other infor
            </span></div>
        </div>
        <div className="card black">
          <div className="additional">
            <div className="user-card">
             
              <img src="../img/lien.jpg" alt="Avatar" />
            </div>
            <div className="more-info">
              <h1>TRAN THI LIEN</h1>
              <div className="coords">
                <span>Software Engineer</span>
                <span>Joined: 2020</span>
              </div>
              <div className="coords">
                <span>JavaScript Developer</span>
                <span>Planet Earth</span>
              </div>
              
            </div>
          </div>
          <div className="general">
            <h1>TRAN THI LIEN</h1>
            <p>About her.</p>
            <span className="more">Hover over the card for other info.</span>
          </div>
        </div>
      </div>
        )
    }
}
