import React ,{ Component } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import { AddTodo } from "../actions";

class NewTodo extends Component{
  constructor(props){
    super(props);
    this.state = {newTodo :""}
  }
  handleInputChange(e){
    this.setState({newTodo : e.target.value })
  }
  render(){
    return(
      <div className="new-todo">
        <input className='form-control-sm' onChange={this.handleInputChange.bind(this)}/>
        <button className='btn-primary m-l-1' onClick={()=>this.props.AddTodo(this.state.newTodo)} >Add</button>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({
    AddTodo
  },dispatch)
}
export default connect(null,mapDispatchToProps)(NewTodo)
