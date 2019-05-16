import React , { Component } from "react";

class TodoList extends Component{

  render(){
    const Class_name = this.props.isCompleted ? "completed" : "notCompleted"
    return(
      <li
        className = {Class_name}
        onClick ={this.props.onClick}
      >
        {this.props.text}
      </li>
    )
  }
}

export default TodoList;
