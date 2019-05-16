
export function ToggleTodo(id){
  return{
    type : "TOGGLE_TODO",
    id
  }
}
export function AddTodo(text){
  return{
    type : "ADD_TODO",
    text
  }
}
export function FilterView(filterType){
  return{
    type : "FILTER_VIEW",
    filterTypee :filterType
  }
}
