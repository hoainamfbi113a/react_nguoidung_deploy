import React, { Component } from 'react'
import './style.css'
export default class TopUserItem extends Component {
    
    render() {
        let {item,index}=this.props;
        return (
            <div className="d-flex d-flex-topuser">
             {/* <h3 style={{width: '22px'}}>2</h3> */}
            <div className>
              <img alt="Hứa Hoàng Danh" src="https://api.adorable.io/avatars/55/Hứa Hoàng Danh" />
            </div>
            <h4 className="nameusertop">{item}</h4>
            {/* <h4 className="ml-auto">1853</h4> */}
          </div>
        )

    }
}
