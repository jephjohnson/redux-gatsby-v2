import { combineReducers, createStore as reduxCreateStore } from "redux"
import { routerReducer } from 'react-router-redux';
import { counter } from "./counter"
import { toggle } from "./toggle"

const rootReducer = combineReducers({
      counter,
      toggle,
      routing: routerReducer
  });

const createStore = () => reduxCreateStore(rootReducer)
export default createStore
