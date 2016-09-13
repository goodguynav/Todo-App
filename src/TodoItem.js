import React, { Component } from 'react';
import './App.css';

export default class TodoItem extends Component {
    
    
    static propTypes = {
        item:React.PropTypes.string,
        onDeleteTask:React.PropTypes.func
    };
    
    render(){
        return(
            <div className = "todoItemWrapper">
            <div className = "todoItem" >
        {this.props.item}
        <button type = "button"
                onClick = {this.props.onDeleteTask}
                className = "todoItemButton"
                title = "Finish"
                >✔</button>
        </div>
        </div>
        );
    }
}