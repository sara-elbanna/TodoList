import { combineReducers } from 'redux';

import TodoLists from "./Todos-Reducer";

const rootReducer = combineReducers({
  TodoLists : TodoLists
});

export default rootReducer;
