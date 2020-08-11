import React, { Component } from 'react'
import axios from 'axios';
import parse from 'html-react-parser';
import '../styleLession.css'
export default class LessionDetail extends Component {
    constructor() {//Ham khoi tao
        super()
        this.state = {
              persons:[]
        }
      }
    componentDidMount(){
        const { id } = this.props.match.params;
        axios.get('http://localhost:5000/client/lesson/'+ id)
            .then(response => {
                this.setState({persons: response.data});
                // console.log('LIEN : ' + JSON.stringify(response.data));
                this.setState({
                    persons: response.data
                });
            })
            .catch(function (error) {
            })
      }
    render() {
        return (
            <div className="lessonDetail">
                    <div className="lesson-title">
                        {parse(`${this.state.persons.lessionContentTitle}`)}
                    </div>
                    <div className="lesson-content-detial" style={{width: '60%', margin: '31px auto'}}>
                        {parse(`${this.state.persons.lessionContentDetail}`)}
                    </div>
                    {/* <div style={{width: '60%', margin: '31px auto'}}>
                        {parse(`${this.state.persons.lessionContentDetail}`)}
                       
                    </div> */}
            </div>
          
        )
    }
}

