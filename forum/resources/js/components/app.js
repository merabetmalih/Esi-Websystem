import React, { Component } from 'react';
import ReactDOM from 'react-dom' ;
import './app.css';
import { Login } from './components/index' ;
import { Panel } from './components/index' ;


export default class Appli extends Component {

  

  constructor(props){
    super(props);
    this.state = {value: true , rate: ""}
  }

 
  handelclick(){
    //handle the registration here
    if(document.getElementById('radio-one').checked){
      this.setState({ rate: document.getElementById('radio-one').value});
    }else if (document.getElementById('radio-two').checked){
      this.setState({ rate: document.getElementById('radio-two').value});
    }
    this.setState({
      value : !this.state.value
    });
    
  }
  
  render() {
    if(this.state.value){
      return (
        <div className="App">
          <div>
            <Login clickmethode={this.handelclick.bind(this)}/>
          </div>
        </div>
      );
    }else{
      return (
        <div className="App2">
          <div>
            <Panel rater={this.state.rate} clickMeth={this.handelclick.bind(this)}/>
          </div>
        </div>
      );
    }
    
  }
}

ReactDOM.render(<Appli />, document.getElementById('app'));
