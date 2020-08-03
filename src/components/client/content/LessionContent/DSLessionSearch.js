import React, { Component } from 'react'
import Item from './ItemLesion'
import axios from 'axios';
class DSLession extends Component {
  constructor(props){
    super(props)
    this.state = {
      showAlert:false,
      idAlert:"",
      classSubject:[],
      persons:[],
      refresh:true
    }
  }
  componentDidMount(){
    //alert(this.props.match.params.search);
    axios.get('http://localhost:5000/admin/lession/list/')
        .then(response => {
            // console.log(response.data)
            this.setState({persons: response.data});
        })
        .catch(function (error) {

        })
}
renderItem = () =>{
    let keyword = this.props.match.params.search;
      let {persons} = this.state;
          //  return persons.filter(item => item.lessionContentSubjects==keyword).map((item,index)=>{
          //     return(
          //       <Item key={item._id}  item={item} index={index}/>
          //     )
          //   })
          persons = persons.filter(function(item) {
            return item.lessionContentSubjects && item.lessionContentSubjects.toLowerCase().search(keyword.toLowerCase()) !== -1 ||
            item.lessionContentTitle && item.lessionContentTitle.toLowerCase().search(keyword.toLowerCase()) !== -1;
          });
          return persons.map((todo, index) => {
            return <Item  key={index} item={todo}  />;
          });
}
  render() {
    return (
      <div className="news">
        <aside className="aside3">
          <div>
            <figure style={{background: 'rgb(255, 255, 255)', height: '38px'}}>
              <h2><a>Danh sách bài học</a></h2></figure>
              {this.renderItem()}
          </div>
        </aside>
    </div>
    )
  }
}

export default DSLession;
