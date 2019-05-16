import React, { Component } from 'react';

import TodoLists from "../containers/todo-lists";
import NewTodo from "../containers/new-todo"
import FilterOptions from "../containers/filter-options"
export default class App extends Component {
  render() {
    return (
      <div>
          <TodoLists />
          <NewTodo />
          <FilterOptions />
      </div>
    );
  }
}
