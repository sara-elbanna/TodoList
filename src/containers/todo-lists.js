import React ,{ Component } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import { ToggleTodo } from "../actions";

import TodoList from "../components/todo-list"

class TodoLists extends Component{
  render(){
    const type_of_filter = this.props.todoLists.filterType;
    var lists ;
    if(type_of_filter === "show_completed"){
      var filteredLists = this.props.todoLists.todos.filter(todo => todo.isCompleted === true)
      lists = filteredLists.map(todo =>{
        return(
          <TodoList
              key = {todo.id}
              text ={todo.text}
              isCompleted ={todo.isCompleted}
              onClick = {()=>{this.props.ToggleTodo(todo.id)}}
          />
        )
      })
    }
    else if (type_of_filter === "show_all"){
      lists = this.props.todoLists.todos.map(todo =>{
        return(
          <TodoList
              key = {todo.id}
              text ={todo.text}
              isCompleted ={todo.isCompleted}
              onClick = {()=>{this.props.ToggleTodo(todo.id)}}
          />
        )
      })
    }  
    return(
      <ul className="todo-lists" style={{padding:'40px'}}> 
        <h2>TODO List</h2>
        <p>click on task to mark completed</p>
        {lists}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return{
    todoLists : state.TodoLists
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    ToggleTodo :ToggleTodo
  },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoLists)
