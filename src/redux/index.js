import {combineReducers, applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {TodoReducer} from '../redux/reducers/TodoReducer'

const rootReducer = combineReducers({
    todolist: TodoReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store