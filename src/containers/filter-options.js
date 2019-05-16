import React ,{ Component } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {FilterView} from "../actions";

class FilterOptions extends Component{
  // constructor(props){
  //   super(props);
  //   this.handleButtonClick = this.handleButtonClick.bind(this);
  // }
  handleButtonClick(filterType){
    this.props.FilterView(filterType)
  }
  render(){
    return(
      <div className="filter-options">
        <button className='btn m-t-1 m-r-1' onClick={()=>this.handleButtonClick("show_completed")}>
          Show Completed
        </button>
        <button className='btn m-t-1' onClick= {()=>this.handleButtonClick("show_all")}>
          Show All
        </button>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({
    FilterView
  },dispatch)
}
export default connect(null,mapDispatchToProps)(FilterOptions)
