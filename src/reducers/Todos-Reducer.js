

var List_of_todos =[
  {text:"first task" , id :"0" , isCompleted : false},
  {text:"Second task" , id :"1" , isCompleted : false},
  {text:"Third task" , id :"2" , isCompleted : false}
]
var initialState = {
  todos : List_of_todos,
  filterType : "show_all"
}

function Todos (state = initialState , action){
  switch (action.type) {
    case "TOGGLE_TODO":
      var newState = {...state};
       newState.todos[action.id].isCompleted = !newState.todos[action.id].isCompleted;
      return newState

    case "ADD_TODO":
      var newState ={...state};
      newState.todos.push({text:action.text , id :newState.todos.length , isCompleted : false})
      return newState

    case "FILTER_VIEW":
      var newState = {...state};
      newState.filterType = action.filterTypee
      return newState
    default:
      return state
  }
}

export default Todos;
