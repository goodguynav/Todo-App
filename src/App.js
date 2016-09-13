import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem.js'
class App extends Component {
  
  state = {
    input:"",
    lists:[
      
    ]
  }
  
  onChange = (e)=>{
    this.setState({
      input:e.target.value
    })
  };
  
  onKeyUp=(e)=>{
if(e.key==='Enter')
{
let tmp = this.state.lists;
tmp.unshift(this.state.input);
this.setState({
lists:tmp,
input:""
}); 
}
};
  
  deleteTask = (index) => {
    return()=>{
      var tmp = this.state.lists;
      tmp.splice(index,1);
      this.setState({
        lists:tmp
      })
    };
  }
  
  render() {
    
    const formStyle={
      textAlign:"center",
      marginTop:"30px",
      
    }
    
    const inputStyle={
      width:"400px",
      height:"100px",
      fontSize:'xx-large',
      borderColor:"lightblue",
      fontFamily:"Century Gothic",
      color:"darkslategray",
      textAlign: "center",
      outline: "none",
      opacity: "0.8",
    }
    
    var items = this.state.lists.map((item,i)=>{
      return(
        
        <TodoItem item = {item}
                  key = {i}
                  onDeleteTask = {this.deleteTask(i)}
                  />
        
      )
    })
    
    return (
      <div className="App">
            <div className="todoAppHeader">/tasks</div>
        <div style={formStyle}>
          <input style={inputStyle} 
                 type="text"
                 placeholder="Add Task"
                 onChange = {this.onChange}
                 value = {this.state.input}
                 onKeyUp = {this.onKeyUp}
                 />
        </div>
        {items}
      </div>
    );
  }
}

export default App;
